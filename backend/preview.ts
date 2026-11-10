import { createHash, createHmac, timingSafeEqual, randomUUID } from 'node:crypto';
import { Resend } from 'resend';
export const templates = ['Restaurant','Business / Services','Portfolio','E-commerce / Online Store'];
const booking = 'https://calendar.app.google/KYrg1R1surXjfRbn7';
export function validate(body: any) {
  if (!body || body.botField || body.contactConsent !== true || typeof body.marketingConsent !== 'boolean') throw Error('Please agree to be contacted about your website request.');
  const fields = ['fullName','email','businessName','industry','description','services','phone','tagline','theme'];
  const clean: any = {};
  for (const field of fields) {
    if (body[field] != null && typeof body[field] !== 'string') throw Error('Invalid form data.');
    clean[field] = (body[field] || '').trim();
    if (clean[field].length > (field === 'description' || field === 'services' ? 3000 : 200)) throw Error('Please shorten your information.');
  }
  if (!clean.fullName || !clean.businessName || !clean.industry || !clean.description || !clean.services || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)) throw Error('Please complete your name, valid email and business details.');
  if (!templates.includes(body.template)) throw Error('Select a website template.');
  if (!Array.isArray(body.colors) || body.colors.length !== 3 || !body.colors.every((c: unknown) => typeof c === 'string' && /^#[a-f0-9]{6}$/i.test(c))) throw Error('Choose valid colors.');
  for (const key of ['logo','image']) {
    clean[key] = body[key] || '';
    if (typeof clean[key] !== 'string' || clean[key].length > 500000 || (clean[key] && !/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(clean[key]))) throw Error('Use a PNG, JPEG or WebP image smaller than 350 KB.');
  }
  for (const key of ['logo','image']) if (clean[key]) {
    const bytes = Buffer.from(clean[key].split(',')[1], 'base64');
    const type = clean[key].slice(5,clean[key].indexOf(';'));
    const png = bytes.subarray(0,8).toString('hex') === '89504e470d0a1a0a';
    const jpeg = bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255;
    const webp = bytes.subarray(0,4).toString() === 'RIFF' && bytes.subarray(8,12).toString() === 'WEBP';
    if (!(type === 'image/png' && png || type === 'image/jpeg' && jpeg || type === 'image/webp' && webp)) throw Error('Invalid image file.');
  }
  return {...clean, email:clean.email.toLowerCase(), template:body.template, colors:body.colors, contactConsent:true, marketingConsent:body.marketingConsent, consentTextVersion:'website-preview-v4'};
}
function signature(value: string) { return createHmac('sha256', process.env.PREVIEW_SIGNING_SECRET!).update(value).digest('base64url'); }
export function token(id: string, role: string, seconds: number) { const value = `${id}.${role}.${Math.floor(Date.now()/1000)+seconds}`; return `${value}.${signature(value)}`; }
export function authorized(value: string, id: string) {
  const parts = value.split('.');
  if (parts.length !== 4 || parts[0] !== id || !['visitor','owner'].includes(parts[1]) || Number(parts[2]) < Date.now()/1000) return false;
  const expected = Buffer.from(signature(parts.slice(0,3).join('.'))), actual = Buffer.from(parts[3]);
  return expected.length === actual.length && timingSafeEqual(expected,actual);
}
async function db(path: string, init: RequestInit = {}) {
  const result = await fetch(`${process.env.SUPABASE_URL}/rest/v1/${path}`, {...init, headers:{apikey:process.env.SUPABASE_SERVICE_ROLE_KEY!, Authorization:`Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`, 'Content-Type':'application/json', Prefer:'return=representation', ...init.headers}});
  if (!result.ok) throw Error('Storage unavailable');
  return result.status === 204 ? null : result.json();
}
function json(status: number, data: any, headers: Record<string,string> = {}) { return new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json','Cache-Control':'no-store','Referrer-Policy':'no-referrer',...headers}}); }
export async function handlePreview(request: Request) {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY || (process.env.PREVIEW_SIGNING_SECRET?.length || 0) < 32) return json(503,{error:'Website previews are temporarily unavailable. Please contact info@theivanacollective.com.'});
  const url = new URL(request.url);
  try {
    if (request.method === 'GET') {
      const id = url.searchParams.get('id') || '';
      if (!/^[a-f0-9-]{36}$/.test(id)) return json(400,{error:'Invalid preview.'});
      const cookie = request.headers.get('cookie')?.split(';').map(x=>x.trim()).find(x=>x.startsWith(`preview_${id}=`))?.split('=')[1] || '';
      if (!authorized(url.searchParams.get('access') || cookie,id)) return json(403,{error:'Your preview access has expired. Please submit a new request.'});
      const rows = await db(`website_previews?id=eq.${id}&select=id,config,created_at`);
      return rows.length ? json(200,rows[0], {'Set-Cookie':`preview_${id}=${url.searchParams.get('access') || cookie}; HttpOnly; Secure; SameSite=Lax; Path=/api/preview-submit; Max-Age=86400`}) : json(404,{error:'Preview not found.'});
    }
    if (request.method !== 'POST') return json(405,{error:'Method not allowed.'},{Allow:'GET, POST'});
    if (request.headers.get('origin') && request.headers.get('origin') !== url.origin) return json(403,{error:'Invalid request origin.'});
    const raw = await request.text();
    if (raw.length > 1100000) return json(413,{error:'Images are too large.'});
    let config: ReturnType<typeof validate>;
    try { config = validate(JSON.parse(raw)); } catch (e) { return json(400,{error:e instanceof Error ? e.message : 'Invalid request.'}); }
    const key = request.headers.get('idempotency-key') || '';
    if (!/^[a-f0-9-]{36}$/.test(key)) return json(400,{error:'Invalid submission identifier.'});
    const ip = request.headers.get('x-vercel-forwarded-for')?.split(',')[0] || config.email;
    const bucket = signature(`${ip}.${new Date().toISOString().slice(0,13)}`);
    const allowed = await db('rpc/allow_preview_request',{method:'POST',body:JSON.stringify({bucket_key:bucket})});
    if (allowed !== true) return json(429,{error:'Too many requests. Please try again later.'});
    const hash = createHash('sha256').update(JSON.stringify(config)).digest('hex');
    // Atomic insert with a unique idempotency key. Repeated clicks reuse the saved record.
    let rows = await db(`website_previews?on_conflict=request_key`,{method:'POST',headers:{Prefer:'resolution=ignore-duplicates,return=representation'},body:JSON.stringify({id:randomUUID(),request_key:key,config,content_hash:hash,created_at:new Date().toISOString()})});
    if (!rows.length) rows = await db(`website_previews?request_key=eq.${key}&select=*`);
    const row = rows[0];
    if (row.content_hash !== hash) return json(409,{error:'Your selections changed. Please submit again.'});
    let emailStatus = row.email_status || 'pending';
    if (process.env.RESEND_API_KEY && process.env.FROM_EMAIL && emailStatus !== 'accepted') {
      const ownerUrl = `${url.origin}/?preview=${row.id}&access=${token(row.id,'owner',7*86400)}#interactive-preview`;
      const resend = new Resend(process.env.RESEND_API_KEY);
      const details = Object.entries(config).filter(([k])=>!['logo','image'].includes(k)).map(([k,v])=>`${k}: ${Array.isArray(v)?v.join(', '):v}`).join('\n');
      const results = await Promise.all([
        resend.emails.send({from:process.env.FROM_EMAIL,to:'info@theivanacollective.com',replyTo:config.email,subject:`Website request: ${config.businessName.replace(/[\r\n]/g,' ')}`,text:`${details}\nSubmitted: ${row.created_at}\nReview (expires in 7 days): ${ownerUrl}`},{idempotencyKey:`owner/${row.id}`}),
        resend.emails.send({from:process.env.FROM_EMAIL,to:config.email,replyTo:'info@theivanacollective.com',subject:'Your website request | The Ivana Collective',text:`Hi ${config.fullName},\n\nThank you for sharing your vision for ${config.businessName}. Your request has been saved. I look forward to discussing your website.\n\nSchedule a consultation: ${booking}\n\nIvana\nThe Ivana Collective`},{idempotencyKey:`visitor/${row.id}`})
      ]);
      emailStatus = results.every(r=>r.data?.id && !r.error) ? 'accepted' : 'failed';
      await db(`website_previews?id=eq.${row.id}`,{method:'PATCH',body:JSON.stringify({email_status:emailStatus,email_ids:results.map(r=>r.data?.id || null)})});
    }
    return json(200,{id:row.id,config:row.config,emailStatus,message:'Your website request is saved.'},{'Set-Cookie':`preview_${row.id}=${token(row.id,'visitor',86400)}; HttpOnly; Secure; SameSite=Lax; Path=/api/preview-submit; Max-Age=86400`});
  } catch { return json(503,{error:'We could not complete your request. Please retry; duplicate clicks will not create another submission.'}); }
}
