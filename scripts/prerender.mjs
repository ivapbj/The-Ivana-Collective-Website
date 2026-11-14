import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { pathToFileURL } from "node:url";
import { routes } from "./seo-routes.mjs";

const site = "https://theivanacollective.com";
const template = await readFile("dist/index.html", "utf8");
const mod = await import(pathToFileURL(resolve("dist-ssr/entry-server.js")).href);

function esc(s) {
  return String(s).replaceAll("&","&amp;").replaceAll('"',"&quot;").replaceAll("<","&lt;").replaceAll(">","&gt;");
}
function setMeta(html, key, value) {
  for (const attr of ["name","property"]) {
    const oldStart = '<meta '+attr+'="'+key+'" content="';
    const i=html.indexOf(oldStart);
    if(i<0) continue;
    const start=i+oldStart.length, end=html.indexOf('"',start);
    return html.slice(0,start)+esc(value)+html.slice(end);
  }
  return html;
}
function headFor(route) {
  const url=site+route.path;
  let html=template.replace(/<title>[^<]*<\/title>/,'<title>'+esc(route.title)+'</title>');
  html=html.replace('href="https://theivanacollective.com/"','href="'+url+'"');
  for(const [k,v] of Object.entries({
    description:route.description,"og:title":route.title,"og:description":route.description,
    "og:url":url,"twitter:title":route.title,"twitter:description":route.description
  })) html=setMeta(html,k,v);
  if(route.noindex) html=html.replace(/<meta name="robots" content="[^"]*"/,'<meta name="robots" content="noindex, nofollow"');
  const match=html.match(/<script id="structured-data-schema" type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if(match){
    const previous=JSON.parse(match[1]);
    const graph=previous["@graph"].filter(n=>["ProfessionalService","WebSite"].includes(n["@type"]));
    graph.push({"@type":route.kind==="Service"?"WebPage":route.kind,"@id":url+"#webpage",url,
      name:route.title,description:route.description,isPartOf:{"@id":site+"/#website"}});
    if(route.kind==="Service") graph.push({"@type":"Service","@id":url+"#service",
      name:route.service,description:route.description,provider:{"@id":site+"/#organization"},
      areaServed:{"@type":"Country",name:"United States"}});
    const json=JSON.stringify({"@context":"https://schema.org","@graph":graph}).replaceAll("<","\\u003c");
    html=html.replace(match[0],'<script id="structured-data-schema" type="application/ld+json">'+json+'</script>');
  }
  return html;
}

for (const route of routes) {
  const markup=mod.render(route.path);
  if(!markup || !markup.includes("<h1")) throw Error("Missing SSR H1: "+route.path);
  const html=headFor(route).replace('<div id="root"></div>','<div id="root">'+markup+'</div>');
  const target=route.path==="/"?"dist/index.html":"dist"+route.path+"/index.html";
  await mkdir(dirname(target),{recursive:true});
  await writeFile(target,html);
}
const entries=routes.filter(r=>!r.noindex).map(r=>"  <url><loc>"+site+r.path+"</loc></url>").join("\n");
await writeFile("dist/sitemap.xml",'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+entries+'\n</urlset>\n');
const notFound=template.replace(/<title>[^<]*<\/title>/,'<title>Page Not Found | The Ivana Collective</title>')
  .replace(/<meta name="robots" content="[^"]*" \/>/, '<meta name="robots" content="noindex, follow" />')
  .replace(/<link rel="canonical" href="[^"]*" \/>/, '')
  .replace('<div id="root"></div>','<div id="root"><main><h1>Page not found</h1><a href="/">Return home</a></main></div>');
await writeFile("dist/404.html",notFound);
console.log("Prerendered "+routes.length+" routes.");
