import React from 'react';
import './HomepageConcept.css';
import ServicesConcept from './ServicesConcept';
import PortfolioConcept from './PortfolioConcept';
export type ConceptType = 'Restaurant' | 'Business / Services' | 'Portfolio' | 'E-commerce / Online Store';
type Props = { type: ConceptType; name: string; tagline: string; industry: string; email: string; phone: string; logo: string | null; compact: boolean; description?: string; services?: string; image?: string };
const data: Record<Exclude<ConceptType, 'Business / Services' | 'Portfolio'>, {hero:string; intro:string; action:string; section:string; cards:string[]; about:string; img:string}> = {
 'Restaurant': {hero:'A place to gather and enjoy.',intro:'Good food, shared moments, and a warm welcome.',action:'View Menu',section:'Explore our menu',cards:['A taste of the menu','Something to share','A favorite to discover'],about:'Our story',img:'/images/concept-restaurant.webp'},
 'E-commerce / Online Store': {hero:'Find something worth keeping.',intro:'Discover a collection thoughtfully brought together for you.',action:'Shop the Collection',section:'Featured collections',cards:['Collection one','Collection two','Collection three'],about:'Our brand story',img:'/images/concept-store.webp'}
};
export default function HomepageConcept({type,name,tagline,industry,email,phone,logo,compact,description,services,image}:Props){
 if (type === 'Business / Services') return <ServicesConcept {...{name, tagline, industry, email, phone, logo, description, services, image}} />;
 if (type === 'Portfolio') return <PortfolioConcept {...{name, tagline, industry, email, phone, logo, description, services, image}} />;
 const d=data[type]; const displayName=name.trim()||'Your business'; const cards=services?.split(/\n|,/).map(x=>x.trim()).filter(Boolean).slice(0,6)||d.cards; const photo=image||d.img; return <div className={`concept concept-${type==='Restaurant'?'restaurant':'store'} ${compact?'concept-compact':''}`}>
 <header className="concept-nav">{logo?<img className="concept-logo" src={logo} alt={`${displayName} logo`}/>:<strong>{displayName}</strong>}<span aria-hidden="true">Home &nbsp; {type==='Restaurant'?'Menu':'Explore'} &nbsp; About &nbsp; Contact</span></header>
 <section className="concept-hero"><div className="concept-photo" style={{backgroundImage:`linear-gradient(90deg,rgba(0,0,0,.65),rgba(0,0,0,.12)),url('${photo}')`}}><div className="concept-hero-text"><small>{industry} · SAMPLE CONCEPT</small><h2>{tagline.trim()||d.hero}</h2><p>{description||d.intro}</p><span className="concept-btn">{d.action}</span></div></div></section>
 <section className="concept-section"><small>DISCOVER {displayName.toUpperCase()}</small><h3>{d.section}</h3><div className="concept-cards">{cards.map((c,i)=><article key={c+i}><div className={'concept-tile concept-tile-'+i} style={{backgroundImage:`url('${photo}')`}}/><h4>{c}</h4><p>{displayName} · {industry}</p></article>)}</div></section>
 <section className="concept-story"><div><small>A LITTLE ABOUT US</small><h3>{d.about}</h3><p>{description || `Discover ${displayName}.`}</p><span className="concept-outline">Learn more</span></div><div className="concept-story-image" style={{backgroundImage:`url('${photo}')`}}/></section>
 <section className="concept-contact"><h3>Let's connect.</h3><p>{email || 'Your contact information goes here'}{phone ? ` · ${phone}` : ''}</p><span className="concept-btn">Get in touch</span></section><footer>© {new Date().getFullYear()} {displayName} · Example homepage</footer>
 </div>}
