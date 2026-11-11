import React, { useEffect, useRef, useState } from 'react';
import HomepageConcept, { type ConceptType } from './HomepageConcept';
const choices: {name:ConceptType;image:string;summary:string}[] = [
 {name:'Restaurant',image:'restaurant',summary:'Warm hospitality, a signature menu and reservations.'},
 {name:'Business / Services',image:'services',summary:'Clear services, personal expertise and consultation.'},
 {name:'Portfolio',image:'portfolio',summary:'Bold typography and a curated project gallery.'},
 {name:'E-commerce / Online Store',image:'store',summary:'Editorial collections and featured products.'}
];
const cardHeadlines: Record<ConceptType, string> = {
 'Restaurant': 'A place to gather',
 'Business / Services': 'Good work. Done with care.',
 'Portfolio': 'Work with a point of view.',
 'E-commerce / Online Store': 'Find something worth keeping.',
};
const directionStyles: Record<string, string> = {
 'Gen Z Brutalist': 'brutalist',
 'Hypercolor Modern': 'hypercolor',
 'Clean Modern': 'clean',
};
const forestPalette = ['#163c36', '#f4efe5', '#17231f'];
const servicesPalette = ['#741d32', '#f5f0e9', '#201b1b'];
const storePalette = ['#93aa58', '#f5d8e2', '#22221f'];
const portfolioPalette = ['#39483d', '#ccd1c1', '#181e19'];
const palettes: [string, string[]][] = [
 ['Collective Forest', forestPalette],
 ['Burgundy & Paper', servicesPalette],
 ['Sage & Charcoal', portfolioPalette],
 ['Nectarine Pink & Green', storePalette],
 ['Editorial Champagne', ['#171717','#f7f1e5','#211c18']],
 ['Orchid Authority', ['#4e2943','#fcf3f5','#2e1b29']],
 ['Digital Blueprint', ['#12263a','#f4f8fd','#17202a']],
 ['Organic Terra', ['#9c553f','#f3e7d7','#382d27']],
 ['Electric Momentum', ['#1848d8','#fff5e1','#11172a']],
];
function defaultPalette(template: ConceptType) {
 if (template === 'Business / Services') return servicesPalette;
 if (template === 'Portfolio') return portfolioPalette;
 if (template === 'E-commerce / Online Store') return storePalette;
 return forestPalette;
}
const initial = {template:'Restaurant' as ConceptType, businessName:'',industry:'',tagline:'',description:'',services:'',fullName:'',email:'',phone:'',logo:'',image:'',theme:'Luxury Editorial',colors:forestPalette,requestType:'quote',launchTimeline:'',projectRequirements:'',contactConsent:false,marketingConsent:false,botField:''};
export default function StylePreviewSection({onScheduleCall}:{onScheduleCall:()=>void}) {
 const [form,setForm]=useState(initial), [saved,setSaved]=useState<typeof initial|null>(null),[busy,setBusy]=useState(false),[error,setError]=useState(''),[notice,setNotice]=useState(''),[width,setWidth]=useState('100%');
 const key=useRef(crypto.randomUUID());
 const editedPalettes=useRef<Partial<Record<ConceptType, string[]>>>({});
 const previewScroll=useRef<HTMLDivElement>(null);
 const update=(name:string,value:unknown)=>{
  if (name === 'colors') editedPalettes.current[form.template] = value as string[];
  setForm(previous=>({...previous,[name]:value}));
  setSaved(null);
  setNotice('');
  key.current=crypto.randomUUID();
 };
 function selectTemplate(template: ConceptType) {
  if (template === form.template) return;
  if (template === 'E-commerce / Online Store') setWidth('375px');
  const colors = editedPalettes.current[template] ?? defaultPalette(template);
  setForm(previous=>({...previous,template,colors}));
  setSaved(null);
  setNotice('');
  key.current=crypto.randomUUID();
 }
 useEffect(()=>{
  if (previewScroll.current) previewScroll.current.scrollTop = 0;
 },[form.template]);
 const paletteIndex = palettes.findIndex(([, colors])=>colors.every((color,index)=>color===form.colors[index]));
 useEffect(()=>{
  const params=new URLSearchParams(location.search), id=params.get('preview') || sessionStorage.getItem('website-preview');
  if (!id) return;
  const startingKey=key.current;
  fetch(`/api/preview-submit?id=${encodeURIComponent(id)}&access=${encodeURIComponent(params.get('access') || '')}`).then(async r=>{if(!r.ok) throw Error('Saved preview access is unavailable or expired.');return r.json();}).then(data=>{if(key.current!==startingKey)return;editedPalettes.current[data.config.template as ConceptType]=data.config.colors;if(data.config.template==='E-commerce / Online Store')setWidth('375px');setSaved(data.config);setForm({...initial,...data.config,requestType:'quote'});}).catch(e=>{if(key.current===startingKey)setError(e.message);});
  if(params.has('access')) {params.delete('access');history.replaceState(null,'',`${location.pathname}?${params}#interactive-preview`);}
 },[]);
 async function upload(file:File|undefined,field:string) {
  if(!file)return;
  if(!['image/png','image/jpeg','image/webp'].includes(file.type)||file.size>350000){setError('Choose a PNG, JPEG or WebP image under 350 KB.');return;}
  const reader=new FileReader();reader.onload=()=>update(field,String(reader.result));reader.readAsDataURL(file);
 }
 async function submit(e:React.FormEvent){
  e.preventDefault();if(busy)return;setBusy(true);setError('');setNotice('');
  const submittedKey=key.current;
  try {const response=await fetch('/api/preview-submit',{method:'POST',headers:{'Content-Type':'application/json','Idempotency-Key':submittedKey},body:JSON.stringify(form)});const data=response.headers.get('content-type')?.includes('application/json')?await response.json():{error:'The preview service is temporarily unavailable. Please try again shortly.'};if(!response.ok)throw Error(data.error || 'Unable to save. Please retry.');
   sessionStorage.setItem('website-preview',data.id);
   if (key.current === submittedKey) setSaved(data.config);
   setNotice(key.current === submittedKey
    ? 'Your quote request is submitted and your design is saved.'
    : 'Your quote request was submitted with the earlier design. Submit another request to include your latest edits.');
  } catch(e){setError(e instanceof Error?e.message:'Unable to save. Please retry.');}finally{setBusy(false);}
 }
 const input='min-w-0 w-full rounded-lg border border-white/20 bg-[#0d2623] p-3 text-base text-white focus:outline-2 focus:outline-[#b9d8ce]';
 const textField=(name:keyof typeof initial,label:string,required=false,multiline=false)=><label className="block space-y-2" key={name}><span>{label}{required?' *':''}</span>{multiline?<textarea className={input} required={required} maxLength={3000} value={String(form[name])} onChange={e=>update(name,e.target.value)}/>:<input className={input} required={required} maxLength={200} type={name==='email'?'email':'text'} value={String(form[name])} onChange={e=>update(name,e.target.value)}/>}</label>;
 const preview=form;
 return <section id="interactive-preview" className="scroll-mt-20 bg-[#061c1a] text-[#f4f5f1] px-5 py-20"><div className="max-w-7xl mx-auto space-y-10">
  <header className="max-w-2xl space-y-4"><h2 className="text-4xl md:text-5xl">Imagine your website.</h2><p>Choose a template and watch it change as you add your business details. Request a quote when you’re ready.</p></header>
  <fieldset><legend className="text-xl mb-5">1. Choose your template</legend><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{choices.map(c=><label key={c.name} className={`cursor-pointer rounded-xl overflow-hidden border-2 ${form.template===c.name?'border-[#b9d8ce]':'border-white/15'}`}><div aria-hidden="true" className={`template-card-art template-card-art-${c.image}`}>
  <span>{cardHeadlines[c.name]}</span>
  <img src={`/images/concept-${c.image}.webp`} alt="" />
 </div><div className="p-4 space-y-3"><h3 className="text-lg">{c.name}</h3><p className="text-sm text-white/70">{c.summary}</p><span className="flex gap-2 items-center"><input type="radio" name="template" checked={form.template===c.name} onChange={()=>selectTemplate(c.name)}/>{form.template===c.name?'Selected':'Choose template'}</span></div></label>)}</div></fieldset>
  <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-8">
  <form id="website-editor" onSubmit={submit} className="min-w-0 scroll-mt-28 space-y-8 rounded-2xl border border-white/15 bg-[#0d2623] p-5 text-sm sm:p-7">
   <div className="flex flex-wrap items-center justify-between gap-3"><h3 className="text-2xl">Create your site</h3><a className="underline lg:hidden" href="#saved-website-preview">View live preview</a></div>
   <fieldset className="min-w-0 space-y-5"><legend className="text-xl mb-5">2. Customize your website</legend><div className="grid md:grid-cols-2 gap-5">{textField('businessName','Business name',true)}{textField('industry','Business category / industry',true)}{textField('tagline','Headline / tagline')}{textField('phone','Business phone')}{textField('description','Describe your business',true,true)}{textField('services','Services or products — one per line',true,true)}</div>
   <div className="grid md:grid-cols-2 gap-5">{form.template !== 'Portfolio' && form.template !== 'Business / Services' && form.template !== 'E-commerce / Online Store' && <label className="space-y-2">Design direction<select className={input} value={form.theme} onChange={e=>update('theme',e.target.value)}>{['Luxury Editorial','Clean Modern','Hypercolor Modern','Gen Z Brutalist'].map(t=><option key={t}>{t}</option>)}</select></label>}<label className="space-y-2">Curated palette<select className={input} value={paletteIndex} onChange={e=>update('colors',palettes[Number(e.target.value)][1])}><option value={-1} disabled>Custom colors</option>{palettes.map(([name],index)=><option key={name} value={index}>{name}</option>)}</select></label></div>
   <div className="flex flex-wrap gap-6">{['Brand color','Background color','Text color'].map((label,i)=><label key={label} className="flex items-center gap-2">{label}<input aria-label={label} type="color" value={form.colors[i]} onChange={e=>update('colors',form.colors.map((c,j)=>i===j?e.target.value:c))}/></label>)}</div>
   <div className="grid md:grid-cols-2 gap-5">{['logo','image'].map(field=><label key={field} className="space-y-2 block">Optional {field==='logo'?'logo':'hero image'}<input type="file" className={input} accept="image/png,image/jpeg,image/webp" onChange={e=>upload(e.target.files?.[0],field)}/><span className="text-xs text-white/60">PNG, JPEG or WebP, under 350 KB. Use images you have permission to share.</span></label>)}</div></fieldset>
   <fieldset id="save-website-design" className="min-w-0 scroll-mt-28 space-y-5 border-t border-white/15 pt-8"><legend className="text-xl">3. Get a quote for this design</legend><p>Tell me what you need and when you’d like to launch. I’ll review your design and follow up about pricing.</p><div className="grid md:grid-cols-2 gap-5">{textField('fullName','Full name',true)}{textField('email','Email address',true)}</div>
    <label className="block space-y-2"><span>When would you like to launch? *</span><select required className={input} value={form.launchTimeline} onChange={e=>update('launchTimeline',e.target.value)}><option value="">Choose a timeline</option>{['Within a month','In 1–3 months','In 3+ months','Just exploring'].map(timeline=><option key={timeline}>{timeline}</option>)}</select></label>
    {textField('projectRequirements','Must-have features',true,true)}
    <label className="flex gap-3 items-start"><input type="checkbox" required checked={form.contactConsent} onChange={e=>update('contactConsent',e.target.checked)}/><span>I agree that The Ivana Collective may save my information and design selections and contact me about this website request. *</span></label>
    <label className="flex gap-3 items-start"><input type="checkbox" checked={form.marketingConsent} onChange={e=>update('marketingConsent',e.target.checked)}/><span>Optional: send me marketing emails. I can unsubscribe at any time.</span></label>
    <label className="hidden" aria-hidden="true">Leave blank<input tabIndex={-1} autoComplete="off" value={form.botField} onChange={e=>update('botField',e.target.value)}/></label>
    <p className="text-white/60 text-xs">We use these details to review and respond to your request. Your preview is accessible in this browser for 24 hours. For questions or deletion requests, contact info@theivanacollective.com.</p>
    {error&&<p role="alert" className="text-red-300">{error}</p>}{notice&&<p role="status">{notice}</p>}
    <button disabled={busy} className="rounded-lg bg-[#b9d8ce] text-[#061c1a] px-6 py-4 font-semibold disabled:opacity-60">{busy?'Sending your request…':'Request my quote'}</button>
   </fieldset>
  </form>
  <aside id="saved-website-preview" aria-label="Website preview" className="min-w-0 scroll-mt-28 space-y-3 lg:sticky lg:top-24">
   <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/15 bg-[#0d2623] px-4 py-3">
    <h3 className="text-sm font-semibold uppercase tracking-wider">Live website preview</h3>
    <select aria-label="Preview template" className="max-w-full rounded-md border border-white/20 bg-[#0d2623] px-2 py-2 text-xs" value={form.template} onChange={e=>selectTemplate(e.target.value as ConceptType)}>
     {choices.map(choice=><option key={choice.name}>{choice.name}</option>)}
    </select>
    <div className="flex flex-wrap gap-1" role="group" aria-label="Preview width">
     {[['Desktop','100%'],['Tablet','768px'],['Mobile','375px']].map(([label,value])=>(
      <button key={label} type="button" aria-pressed={width===value} className={`rounded-md px-2 py-2 text-xs ${width===value?'bg-[#b9d8ce] text-[#061c1a]':'hover:bg-white/10'}`} onClick={()=>setWidth(value)}>{label}</button>
     ))}
    </div>
   </div>
   <div className="overflow-hidden rounded-xl border border-white/15 bg-[#0d2623]">
    <div className="flex items-center gap-3 border-b border-white/15 px-4 py-3">
     <span className="flex gap-1.5" aria-hidden="true"><span className="size-2 rounded-full bg-[#92545a]" /><span className="size-2 rounded-full bg-[#a78c56]" /><span className="size-2 rounded-full bg-[#648977]" /></span>
     <span className="min-w-0 truncate rounded bg-[#061c1a] px-3 py-1 text-xs text-[#b9d8ce]">{preview.businessName.trim() || 'Your business'}</span>
    </div>
    <div ref={previewScroll} tabIndex={0} aria-label="Scrollable homepage preview" className="max-h-[65vh] min-h-0 overflow-auto p-2 focus-visible:outline-2 focus-visible:outline-[#b9d8ce] sm:p-3 lg:max-h-[calc(100dvh-17rem)]">
     <div className="mx-auto max-w-full overflow-hidden" data-design-direction={preview.template==='Restaurant' ? directionStyles[preview.theme] : undefined} style={{width,'--preview-primary':preview.colors[0],'--preview-background':preview.colors[1],'--preview-text':preview.colors[2],'--preview-surface':preview.colors[1],'--preview-font-heading':preview.template==='E-commerce / Online Store'?'Bebas Neue, Impact, sans-serif':preview.theme==='Luxury Editorial'?'Georgia, serif':'Arial, sans-serif','--preview-font-body':preview.template==='E-commerce / Online Store'?'DM Sans, Arial, sans-serif':'Arial, sans-serif'} as React.CSSProperties}>
      <HomepageConcept type={preview.template} name={preview.businessName} tagline={preview.tagline} industry={preview.industry} email={saved?.email || ''} phone={preview.phone} logo={preview.logo} compact={width==='375px'} description={preview.description} services={preview.services} image={preview.image}/>
     </div>
    </div>
   </div>
   <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
    <a className="underline lg:hidden" href="#website-editor">Back to editing</a>
    <div className="flex flex-wrap gap-3">
     <a className="underline" href="#save-website-design">Get a quote for this design</a>
     <button type="button" onClick={onScheduleCall} className="underline">Schedule a consultation</button>
    </div>
   </div>
  </aside>
  </div>
 </div></section>;
}
