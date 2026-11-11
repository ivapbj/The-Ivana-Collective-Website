import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validate, token, authorized, handlePreview } from './preview';
const valid={fullName:'Test Visitor',email:'visitor@example.com',businessName:'Acme',industry:'Design',description:'Personal design',services:'Planning\nConsulting',template:'Portfolio',colors:['#163c36','#f4efe5','#17231f'],contactConsent:true,marketingConsent:false};
process.env.PREVIEW_SIGNING_SECRET='test-secret-with-at-least-thirty-two-characters';
test('validates consent, email, template, colors and unsafe images',()=>{
 assert.equal(validate(valid).marketingConsent,false);
 assert.throws(()=>validate({...valid,requestType:'quote'}), /launch timeline/);
 for(const change of [{email:'invalid'},{contactConsent:false},{marketingConsent:'yes'},{template:'unknown'},{logo:'data:image/svg+xml;base64,AAAA'},{colors:['red']},{fullName:''}])assert.throws(()=>validate({...valid,...change}));
});
test('signed access rejects tampering, expired links and another submission',()=>{
 const signed=token('record','owner',60);
 assert.equal(authorized(signed,'record'),true);
 assert.equal(authorized(signed,'another'),false);
 assert.equal(authorized(signed+'x','record'),false);
 assert.equal(authorized(token('record','visitor',-1),'record'),false);
});
test('storage outage never unlocks a preview',async()=>{
 delete process.env.SUPABASE_URL;
 assert.equal((await handlePreview(new Request('https://example.com/api/preview-submit',{method:'POST',body:JSON.stringify(valid)}))).status,503);
});
test('saves exact design, deduplicates retries and requires protected access',async()=>{
 process.env.SUPABASE_URL='https://database.example';process.env.SUPABASE_SERVICE_ROLE_KEY='test';
 const original=globalThis.fetch;let saved:any;
 globalThis.fetch=async (_url:any,init:any)=>{
  if(String(_url).includes('/rpc/'))return Response.json(true);
  if(init?.method==='POST'){if(saved)return new Response('[]');saved=JSON.parse(init.body);return Response.json([saved]);}
  return Response.json(saved?[saved]:[]);
 };
 try {
 const request=()=>new Request('https://example.com/api/preview-submit',{method:'POST',headers:{'Idempotency-Key':'12345678-1234-1234-1234-123456789abc'},body:JSON.stringify({...valid,requestType:'quote',launchTimeline:'In 1–3 months',projectRequirements:'Online booking'})});
 const first=await handlePreview(request()),data=await first.json();assert.equal(first.status,200);assert.equal(data.config.businessName,'Acme');assert.equal(data.config.services,valid.services);
 assert.equal(data.config.requestType,'quote');assert.equal(data.config.launchTimeline,'In 1–3 months');assert.equal(data.config.projectRequirements,'Online booking');
 const second=await (await handlePreview(request())).json();assert.equal(second.id,data.id);
 assert.equal((await handlePreview(new Request(`https://example.com/api/preview-submit?id=${data.id}`))).status,403);
 const access=token(data.id,'owner',60);assert.equal((await handlePreview(new Request(`https://example.com/api/preview-submit?id=${data.id}&access=${access}`))).status,200);
 }finally {globalThis.fetch=original;}
});

test('retries the failed email without resending the accepted owner notification',async()=>{
 const {handleNotificationRetry}=await import('./preview');
 process.env.PREVIEW_RETRY_SECRET='test-retry-secret';
 process.env.RESEND_API_KEY='re_test';
 process.env.FROM_EMAIL='Test <test@example.com>';
 const original=globalThis.fetch;
 const notification={id:'12345678-1234-1234-1234-123456789abc',config:validate(valid),created_at:new Date().toISOString(),email_ids:[null,null],notification_attempts:0};
 const sent: {to:string,subject:string,text:string,reply_to:string[]}[]=[];
 globalThis.fetch=async (url,init)=>{
  if(String(url).includes('/rpc/claim_preview_notifications')){
   notification.notification_attempts++;
   return Response.json([notification]);
  }
  if(init?.method==='PATCH'){
   notification.email_ids=JSON.parse(String(init.body)).email_ids;
   return Response.json([notification]);
  }
  const message=JSON.parse(String(init?.body));
  sent.push(message);
  if(sent.length===2) return Response.json({name:'application_error',message:'Test outage'},{status:500});
  return Response.json({id:'message-'+sent.length});
 };
 try {
  assert.equal((await handleNotificationRetry('Bearer invalid')).status,401);
  const first=await handleNotificationRetry('Bearer test-retry-secret');
  assert.deepEqual(await first.json(),{claimed:1,accepted:0});
  assert.deepEqual(notification.email_ids,['message-1',null]);
  const second=await handleNotificationRetry('Bearer test-retry-secret');
  assert.deepEqual(await second.json(),{claimed:1,accepted:1});
  assert.equal(sent.length,3);
  assert.equal(sent[0].to,'info@theivanacollective.com');
  assert.equal(sent[0].subject,'New Website Generator Lead — Acme');
  assert.match(sent[0].text,/theivanacollective.com\/\?preview=/);
  assert.doesNotMatch(sent[2].text,/\?preview=/);
 }finally {
  globalThis.fetch=original;
  delete process.env.PREVIEW_RETRY_SECRET;
  delete process.env.RESEND_API_KEY;
  delete process.env.FROM_EMAIL;
 }
});
