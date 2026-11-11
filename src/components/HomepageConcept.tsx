import React from 'react';
import './HomepageConcept.css';
export type ConceptType = 'Restaurant' | 'Business / Services' | 'Portfolio' | 'E-commerce / Online Store';
type Props = { type: ConceptType; name: string; tagline: string; industry: string; email: string; phone: string; logo: string | null; compact: boolean; description?: string; services?: string; image?: string };
const data: Record<ConceptType, {hero:string; intro:string; action:string; section:string; cards:string[]; about:string; img:string}> = {
 'Restaurant': {hero:'A place to gather and enjoy.',intro:'Good food, shared moments, and a warm welcome.',action:'View Menu',section:'Explore our menu',cards:['A taste of the menu','Something to share','A favorite to discover'],about:'Our story',img:'/images/concept-restaurant.webp'},
 'Business / Services': {hero:'Thoughtful services, made for you.',intro:'Discover a more personal approach to your next project.',action:'Explore Services',section:'How we can help',cards:['Service one','Service two','Service three'],about:'Meet the business',img:'/images/concept-services.webp'},
 'Portfolio': {hero:'Creative work. Personal perspective.',intro:'A space to explore the work, the process, and the person behind it.',action:'Explore the Work',section:'Selected work',cards:['Project one','Project two','Project three'],about:'Behind the work',img:'/images/concept-portfolio.webp'},
 'E-commerce / Online Store': {hero:'Find something worth keeping.',intro:'Discover a collection thoughtfully brought together for you.',action:'Shop the Collection',section:'Featured collections',cards:['Collection one','Collection two','Collection three'],about:'Our brand story',img:'/images/concept-store.webp'}
};

function StoreConcept({d,displayName,tagline,industry,email,phone,logo,description,cards,photo}:{d:typeof data[ConceptType];displayName:string;tagline:string;industry:string;email:string;phone:string;logo:string|null;description?:string;cards:string[];photo:string}) {
 return <>
  <div className="concept-store-promo">A little treat for you <span>·</span> Free shipping over $60</div>
  <header className="concept-nav concept-store-nav"><a className="concept-store-brand" href="#store-top" aria-label={displayName}>{logo?<img className="concept-logo" src={logo} alt={displayName+' logo'}/>:<strong className="concept-store-logo">{displayName}</strong>}</a><nav aria-label="Store navigation"><span>Shop all</span><span>New arrivals</span><span>Our story</span></nav><span className="concept-store-bag" aria-label="Shopping bag, 0 items">Bag <b>0</b></span></header>
  <main id="store-top">
   <section className="concept-store-hero"><div className="concept-store-hero-copy"><small>{industry || 'A feel-good collection'} · SAMPLE CONCEPT</small><h2>{tagline.trim()||d.hero}</h2><p>{description||d.intro}</p><span className="concept-store-cta">{d.action} <b aria-hidden="true">↗</b></span></div><div className="concept-store-art" role="img" aria-label={displayName + ' collection'} style={{backgroundImage:'url("' + photo + '")'}}><span className="concept-store-sticker">MADE FOR<br/>YOUR EVERY DAY</span><span className="concept-store-art-name">{displayName}</span></div></section>
   <div className="concept-store-perks"><span>✳ Free shipping over $60</span><span>✳ Thoughtfully selected</span><span>✳ Easy, happy returns</span></div>
   <section className="concept-section concept-store-products"><small>JUST LANDED</small><h3>{d.section}</h3><div className="concept-cards">{cards.slice(0,4).map((c,i)=><article key={c+i}><div className={'concept-store-product-art concept-store-product-art-'+(i%4)} style={{backgroundImage:'linear-gradient(0deg,rgba(24,26,18,.05),rgba(24,26,18,.02)),url("' + photo + '")'}}><span className="concept-store-product-label">{i===0?'Bestseller':i===1?'New favorite':'Made for you'}</span><span className="concept-store-quick-add">Explore ↗</span></div><h4>{c}</h4><p>{displayName}{industry?' · '+industry:''}</p></article>)}</div></section>
   <section className="concept-store-story"><div className="concept-store-story-image" role="img" aria-label={displayName + ' brand story'} style={{backgroundImage:'url("' + photo + '")'}}/><div className="concept-store-story-copy"><small>A LITTLE ABOUT US</small><h3>{d.about}</h3><p>{description||('Discover '+displayName+' — considered details, joyful finds, and a little something for your everyday.')}</p><span className="concept-store-cta">Get to know us <b aria-hidden="true">↗</b></span></div></section>
   <section className="concept-store-contact"><small>GOOD MAIL, GOOD MOOD</small><h3>A little more joy in your inbox.</h3><p>Follow along for new arrivals, thoughtful finds, and notes from {displayName}.</p><span>{email || 'Your contact information goes here'}{phone ? ' · '+phone : ''}</span></section>
  </main><footer className="concept-store-footer">© {new Date().getFullYear()} {displayName} <span>Shop thoughtfully. Live joyfully.</span></footer>
 </>;
}

export default function HomepageConcept({type,name,tagline,industry,email,phone,logo,compact,description,services,image}:Props){
 const d=data[type], displayName=name.trim()||'Your business', cards=services?.split(/\n|,/).map(x=>x.trim()).filter(Boolean).slice(0,6)||d.cards, photo=image||d.img;
 return <div className={'concept concept-'+(type==='Restaurant'?'restaurant':type==='Portfolio'?'portfolio':type==='Business / Services'?'service':'store')+(compact?' concept-compact':'')}>
  {type==='E-commerce / Online Store' ? <StoreConcept d={d} displayName={displayName} tagline={tagline} industry={industry} email={email} phone={phone} logo={logo} description={description} cards={cards} photo={photo}/> : <>
   <header className="concept-nav">{logo?<img className="concept-logo" src={logo} alt={displayName+' logo'}/>:<strong>{displayName}</strong>}<span aria-hidden="true">Home &nbsp; {type==='Restaurant'?'Menu':type==='Portfolio'?'Work':'Explore'} &nbsp; About &nbsp; Contact</span></header>
   <section className="concept-hero"><div className="concept-photo" style={{backgroundImage:'linear-gradient(90deg,rgba(0,0,0,.65),rgba(0,0,0,.12)),url(\''+photo+'\')'}}><div className="concept-hero-text"><small>{industry} · SAMPLE CONCEPT</small><h2>{tagline.trim()||d.hero}</h2><p>{description||d.intro}</p><span className="concept-btn">{d.action}</span></div></div></section>
   <section className="concept-section"><small>DISCOVER {displayName.toUpperCase()}</small><h3>{d.section}</h3><div className="concept-cards">{cards.map((c,i)=><article key={c+i}><div className={'concept-tile concept-tile-'+i} style={{backgroundImage:'url(\''+photo+'\')'}}/><h4>{c}</h4><p>{displayName} · {industry}</p></article>)}</div></section>
   <section className="concept-story"><div><small>A LITTLE ABOUT US</small><h3>{d.about}</h3><p>{description || ('Discover '+displayName+'.')}</p><span className="concept-outline">Learn more</span></div><div className="concept-story-image" style={{backgroundImage:'url(\''+photo+'\')'}}/></section>
   <section className="concept-contact"><h3>Let's connect.</h3><p>{email || 'Your contact information goes here'}{phone ? ' · '+phone : ''}</p><span className="concept-btn">Get in touch</span></section><footer>© {new Date().getFullYear()} {displayName} · Example homepage</footer>
  </>}
 </div>
}
