import React, { useEffect, useRef, useState } from 'react';
import HomepageConcept, { type ConceptType } from './HomepageConcept';
const choices: {name:ConceptType;image:string;summary:string}[] = [
 {name:'Restaurant',image:'restaurant',summary:'Warm hospitality, a signature menu and reservations.'},
 {name:'Business / Services',image:'services',summary:'Clear services, personal expertise and consultation.'},
 {name:'Portfolio',image:'portfolio',summary:'Bold typography and a curated project gallery.'},
 {name:'E-commerce / Online Store',image:'store',summary:'Editorial collections and featured products.'}
];
const initial = {template:'Restaurant' as ConceptType, businessName:'',industry:'',tagline:'',description:'',services:'',fullName:'',email:'',phone:'',logo:'',image:'',theme:'Luxury Editorial',colors:['#163c36','#f4efe5','#17231f'],contactConsent:false,marketingConsent:false,botField:''};
export default function StylePreviewSection({onScheduleCall}:{onScheduleCall:()=>void}) {
 const [form,setForm]=useState(initial), [saved,setSaved]=useState<typeof initial|null>(null),[busy,setBusy]=useState(false),[error,setError]=useState(''),[notice,setNotice]=useState(''),[width,setWidth]=useState('100%');
 const key=useRef(crypto.randomUUID());
 const update=(name:string,value:unknown)=>{setForm(f=>({...f,[name]:value}));setSaved(null);key.current=crypto.randomUUID();};
 useEffect(()=>{
  const params=new URLSearchParams(location.search), id=params.get('preview') || sessionStorage.getItem('website-preview');
  if (!id) return;
  fetch(`/api/preview-submit?id=${encodeURIComponent(id)}&access=${encodeURIComponent(params.get('access') || '')}`).then(async r=>{if(!r.ok) throw Error('Saved preview access is unavailable or expired.');return r.json();}).then(data=>{setSaved(data.config);setForm(data.config);}).catch(e=>setError(e.message));
  if(params.has('access')) {params.delete('access');history.replaceState(null,'',`${location.pathname}?${params}#interactive-preview`);}
 },[]);
 async function upload(file:File|undefined,field:string) {
  if(!file)return;
  if(!['image/png','image/jpeg','image/webp'].includes(file.type)||file.size>350000){setError('Choose a PNG, JPEG or WebP image under 350 KB.');return;}
  const reader=new FileReader();reader.onload=()=>update(field,String(reader.result));reader.readAsDataURL(file);
 }
 async function submit(e:React.FormEvent){
  e.preventDefault();if(busy)return;setBusy(true);setError('');setNotice('');
  try {const response=await fetch('/api/preview-submit',{method:'POST',headers:{'Content-Type':'application/json','Idempotency-Key':key.current},body:JSON.stringify(form)});const data=await response.json();if(!response.ok)throw Error(data.error || 'Unable to save. Please retry.');
   setSaved(data.config);sessionStorage.setItem('website-preview',data.id);setNotice(data.emailStatus==='accepted'?'Your design is saved. Confirmation emails were accepted for processing.':'Your design is saved. Email confirmation is pending.');
   document.getElementById('saved-website-preview')?.scrollIntoView({behavior:'smooth'});
  } catch(e){setError(e instanceof Error?e.message:'Unable to save. Please retry.');}finally{setBusy(false);}
 }
 const input='w-full rounded-lg border border-white/20 bg-[#0d2623] p-3 text-white focus:outline-2 focus:outline-[#b9d8ce]';
 const textField=(name:keyof typeof initial,label:string,required=false,multiline=false)=><label className="block space-y-2" key={name}><span>{label}{required?' *':''}</span>{multiline?<textarea className={input} required={required} maxLength={3000} value={String(form[name])} onChange={e=>update(name,e.target.value)}/>:<input className={input} required={required} maxLength={200} type={name==='email'?'email':'text'} value={String(form[name])} onChange={e=>update(name,e.target.value)}/>}</label>;
 const preview=saved;
 return <section id="interactive-preview" className="bg-[#061c1a] text-[#f4f5f1] px-5 py-20"><div className="max-w-7xl mx-auto space-y-10">
  <header className="max-w-2xl space-y-4"><p className="uppercase tracking-widest text-[#b9d8ce] text-sm">Your next chapter</p><h2 className="text-4xl md:text-5xl">Imagine your website.</h2><p>Choose a starting point, make it yours, then save your request to reveal your personalized homepage.</p></header>
  <fieldset><legend className="text-xl mb-5">1. Choose your template</legend><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{choices.map(c=><label key={c.name} className={`cursor-pointer rounded-xl overflow-hidden border-2 ${form.template===c.name?'border-[#b9d8ce]':'border-white/15'}`}><img src={`/images/concept-${c.image}.webp`} alt={`${c.name} template visual example`} className="w-full aspect-[4/3] object-cover"/><div className="p-4 space-y-3"><h3 className="text-lg">{c.name}</h3><p className="text-sm text-white/70">{c.summary}</p><span className="flex gap-2 items-center"><input type="radio" name="template" checked={form.template===c.name} onChange={()=>update('template',c.name)}/>{form.template===c.name?'Selected':'Choose template'}</span></div></label>)}</div></fieldset>
  <form onSubmit={submit} className="space-y-8 text-sm">
   <fieldset className="space-y-5"><legend className="text-xl mb-5">2. Customize your website</legend><div className="grid md:grid-cols-2 gap-5">{textField('businessName','Business name',true)}{textField('industry','Business category / industry',true)}{textField('tagline','Headline / tagline')}{textField('phone','Business phone')}{textField('description','Describe your business',true,true)}{textField('services','Services or products — one per line',true,true)}</div>
   <div className="grid md:grid-cols-2 gap-5"><label className="space-y-2">Design direction<select className={input} value={form.theme} onChange={e=>update('theme',e.target.value)}>{['Luxury Editorial','Clean Modern','Hypercolor Modern','Gen Z Brutalist'].map(t=><option key={t}>{t}</option>)}</select></label><label className="space-y-2">Curated palette<select className={input} defaultValue="Collective Forest" onChange={e=>update('colors',JSON.parse(e.target.value))}>{[['Collective Forest',['#163c36','#f4efe5','#17231f']],['Editorial Champagne',['#171717','#f7f1e5','#211c18']],['Orchid Authority',['#4e2943','#fcf3f5','#2e1b29']],['Digital Blueprint',['#12263a','#f4f8fd','#17202a']],['Organic Terra',['#9c553f','#f3e7d7','#382d27']],['Electric Momentum',['#1848d8','#fff5e1','#11172a']]].map(([name,colors])=><option key={String(name)} value={JSON.stringify(colors)}>{name}</option>)}</select></label></div>
   <div className="flex flex-wrap gap-6">{['Brand color','Background color','Text color'].map((label,i)=><label key={label} className="flex items-center gap-2">{label}<input aria-label={label} type="color" value={form.colors[i]} onChange={e=>update('colors',form.colors.map((c,j)=>i===j?e.target.value:c))}/></label>)}</div>
   <div className="grid md:grid-cols-2 gap-5">{['logo','image'].map(field=><label key={field} className="space-y-2 block">Optional {field==='logo'?'logo':'hero image'}<input type="file" className={input} accept="image/png,image/jpeg,image/webp" onChange={e=>upload(e.target.files?.[0],field)}/><span className="text-xs text-white/60">PNG, JPEG or WebP, under 350 KB. Use images you have permission to share.</span></label>)}</div></fieldset>
   <fieldset className="space-y-5 border-t border-white/15 pt-8"><legend className="text-xl">3. Save and reveal your website</legend><div className="grid md:grid-cols-2 gap-5">{textField('fullName','Full name',true)}{textField('email','Email address',true)}</div>
    <label className="flex gap-3 items-start"><input type="checkbox" required checked={form.contactConsent} onChange={e=>update('contactConsent',e.target.checked)}/><span>I agree that The Ivana Collective may save my information and design selections and contact me about this website request. *</span></label>
    <label className="flex gap-3 items-start"><input type="checkbox" checked={form.marketingConsent} onChange={e=>update('marketingConsent',e.target.checked)}/><span>Optional: send me marketing emails. I can unsubscribe at any time.</span></label>
    <label className="hidden" aria-hidden="true">Leave blank<input tabIndex={-1} autoComplete="off" value={form.botField} onChange={e=>update('botField',e.target.value)}/></label>
    <p className="text-white/60 text-xs">We use these details to review and respond to your request. Your preview is accessible in this browser for 24 hours. For questions or deletion requests, contact info@theivanacollective.com.</p>
    {error&&<p role="alert" className="text-red-300">{error}</p>}{notice&&<p role="status">{notice}</p>}
    <button disabled={busy} className="rounded-lg bg-[#b9d8ce] text-[#061c1a] px-6 py-4 font-semibold disabled:opacity-60">{busy?'Saving your design…':'Save & reveal my website'}</button>
   </fieldset>
  </form>
  <div id="saved-website-preview" className="space-y-4"><div className="flex flex-wrap gap-3 items-center justify-between"><h3 className="text-xl">Your saved homepage</h3><div className="flex gap-3">{[['Desktop','100%'],['Tablet','768px'],['Mobile','375px']].map(([label,value])=><button key={label} className="border border-white/30 rounded px-3 py-2" onClick={()=>setWidth(value)}>{label}</button>)}</div></div>
   {preview?<div className="mx-auto max-w-full overflow-hidden rounded-xl" style={{width,'--preview-primary':preview.colors[0],'--preview-background':preview.colors[1],'--preview-text':preview.colors[2],'--preview-surface':preview.colors[1],'--preview-font-heading':preview.theme==='Luxury Editorial'?'Georgia, serif':'Arial, sans-serif','--preview-font-body':'Arial, sans-serif'} as React.CSSProperties}><HomepageConcept type={preview.template} name={preview.businessName} tagline={preview.tagline} industry={preview.industry} email={preview.email} phone={preview.phone} logo={preview.logo} compact={width==='375px'} description={preview.description} services={preview.services} image={preview.image}/></div>:<div className="border border-white/20 rounded-xl p-12 text-center">Your complete personalized preview unlocks after your request is securely saved.</div>}
   {preview&&<><p className="text-xs text-white/60">Website concept only. Example navigation and shopping controls are visual demonstrations.</p><button onClick={onScheduleCall} className="underline">Schedule a consultation</button></>}
  </div>
 </div></section>;
}
