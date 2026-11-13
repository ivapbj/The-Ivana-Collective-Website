import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { routes } from "./seo-routes.mjs";

const origin = "https://theivanacollective.com";
const titleSet = new Set();
const canonicalSet = new Set();
const sitemap = await readFile("dist/sitemap.xml", "utf8");

for (const route of routes) {
  const file = route.path === "/" ? "dist/index.html" : `dist${route.path}/index.html`;
  const html = await readFile(file, "utf8");
  const canonical = origin + route.path;
  const titles = [...html.matchAll(/<title>([\s\S]*?)<\/title>/g)];
  const descriptions = [...html.matchAll(/<meta name="description" content="([^"]*)"\s*\/?\s*>/g)];
  const canonicals = [...html.matchAll(/<link rel="canonical" href="([^"]*)"\s*\/?\s*>/g)];
  const headings = [...html.matchAll(/<h1(?:\s|>)/gi)];
  const schemas = [...html.matchAll(/<script id="structured-data-schema" type="application\/ld\+json">([\s\S]*?)<\/script>/g)];

  assert.equal(titles.length, 1, `Expected one <title>: ${route.path}`);
  assert.equal(descriptions.length, 1, `Expected one description: ${route.path}`);
  assert.ok(descriptions[0][1].length >= 50, `Description too short: ${route.path}`);
  assert.equal(canonicals.length, 1, `Expected one canonical: ${route.path}`);
  assert.equal(canonicals[0][1], canonical, `Incorrect canonical: ${route.path}`);
  assert.ok(headings.length >= 1, `No server-rendered H1: ${route.path}`);
  assert.equal(schemas.length, 1, `Missing structured data: ${route.path}`);

  const schema = JSON.parse(schemas[0][1]);
  assert.equal(schema["@context"], "https://schema.org", `Invalid schema context: ${route.path}`);
  assert.ok(Array.isArray(schema["@graph"]), `Missing JSON-LD graph: ${route.path}`);
  assert.ok(schema["@graph"].some(node => node.url === canonical), `Missing page schema: ${route.path}`);

  assert.ok(!titleSet.has(titles[0][1]), `Duplicate title: ${route.path}`);
  assert.ok(!canonicalSet.has(canonical), `Duplicate canonical: ${route.path}`);
  titleSet.add(titles[0][1]);
  canonicalSet.add(canonical);
  assert.ok(sitemap.includes(`<loc>${canonical}</loc>`), `Missing sitemap URL: ${route.path}`);
  console.log(`PASS: ${route.path}`);
}

const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)];
assert.equal(urls.length, routes.length, "Sitemap URL count does not match canonical route registry");
const missing = await readFile("dist/404.html", "utf8");
assert.ok(/<meta name="robots" content="noindex, follow"/.test(missing), "404 must be noindex");
assert.ok(!/<link rel="canonical"/.test(missing), "404 must not canonicalize to homepage");
console.log(`Verified ${routes.length} prerendered SEO pages, sitemap, and 404 metadata.`);
