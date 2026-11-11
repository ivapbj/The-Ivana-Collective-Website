import type { IncomingMessage, ServerResponse } from 'node:http';
import { handleNotificationRetry } from '../backend/preview.js';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow','POST');
    res.statusCode = 405;
    res.end();
    return;
  }
  const result = await handleNotificationRetry(req.headers.authorization || '');
  res.statusCode = result.status;
  result.headers.forEach((value,key)=>res.setHeader(key,value));
  res.end(await result.text());
}
