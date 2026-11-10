# Generator production dependencies

The integration branch combines PRs #11 and #12. Production remains unchanged until these dependencies and browser checks pass.

1. Connect the existing Vercel project and confirm `theivanacollective.com` and production branch `react-vite-version`. GitHub bot previews alone do not verify the production mapping.
2. Apply `backend/schema.sql` to a Supabase PostgreSQL project. RLS is enabled with no anonymous or authenticated access policies; only server-side service-role requests can read or write records.
3. Set server-side `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `PREVIEW_SIGNING_SECRET` (at least 32 random characters), `RESEND_API_KEY`, and `FROM_EMAIL` in the deployment environment. Do not commit values. Verify the sender domain in Resend.
4. Preview submissions save an immutable configuration before returning it. The visitor receives a secure, HTTP-only 24-hour cookie. Owner links expire after 7 days. The preview restores from the database, not local form state. Idempotency keys are unique in PostgreSQL. A persistent rate bucket limits requests. Clean old rate buckets periodically and define a lead retention period before launch.
5. Email acceptance is recorded separately from delivery. Verify both inboxes and provider delivery events before claiming delivery. Email dispatch currently runs during submission/retry; pending/failed notifications require retrying the same submission. There is no independent background retry worker yet.
6. Reach is intentionally disconnected: no operations or credentials have been verified. Optional marketing consent is recorded but no subscription is claimed. Configure verified Reach operations separately once available.
7. Test all four designs, invalid emails, denied preview access, database failures, repeated clicks, refresh/reopen, uploaded images, and desktop/tablet/mobile layouts on the preview deployment. Then merge and test the actual custom domain. No merge or production deploy has been authorized by passing tests yet.

Local validation: `npm run lint`, `npm run build`, `node --import tsx --test backend/preview.test.ts`.
Backend tests use a mocked storage transport, not a live database or email provider.

## Configured database connection

The Supabase project uses a narrow storage Edge Function authenticated by RSA signatures. The private key is stored only in Vercel sensitive environment variables; the function source contains only the public key. This avoids sharing the database service-role credential with Vercel. The function accepts only the preview table and rate-limit RPC, with a 60-second signature validity window. `PREVIEW_STORAGE_URL` and `PREVIEW_STORAGE_PRIVATE_KEY` replace direct Supabase credentials.
