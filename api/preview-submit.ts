import type { IncomingMessage, ServerResponse } from 'node:http';
import { handlePreview } from '../backend/preview.js';
export default async function handler(req: IncomingMessage & { body?: unknown }, res: ServerResponse) {
  const headers = new Headers();
  for (const [key,value] of Object.entries(req.headers)) if(value) headers.set(key,Array.isArray(value)?value.join(','):value);
  const host = req.headers.host || 'theivanacollective.com';
  const result = await handlePreview(new Request(`https://${host}${req.url || '/api/preview-submit'}`, {
    method:req.method,headers,
    ...(req.method==='POST'?{body:typeof req.body==='string'?req.body:JSON.stringify(req.body || {})}:{})
  }));
  res.statusCode=result.status;
  result.headers.forEach((value,key)=>res.setHeader(key,value));
  res.end(await result.text());
}
