# Generator production dependencies

The integration branch combines PRs #11 and #12. The generator runs on the Vercel production branch.

1. Connect the existing Vercel project and confirm `theivanacollective.com` and production branch `react-vite-version`. GitHub bot previews alone do not verify the production mapping.
2. Apply `backend/schema.sql` to a Supabase PostgreSQL project. RLS is enabled with no anonymous or authenticated access policies; only server-side service-role requests can read or write records.
3. Set server-side `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `PREVIEW_SIGNING_SECRET` (at least 32 random characters), `RESEND_API_KEY`, and `FROM_EMAIL` in the deployment environment. Do not commit values. Verify the sender domain in Resend.
4. Preview submissions save an immutable configuration before returning it. The visitor receives a secure, HTTP-only 24-hour cookie. Owner links expire after 7 days. The preview restores from the database, not local form state. Idempotency keys are unique in PostgreSQL. A persistent rate bucket limits requests. Clean old rate buckets periodically and define a lead retention period before launch.
5. Email acceptance is recorded separately from delivery. Verify both inboxes and provider delivery events before claiming delivery. See Automatic notification retries below for the scheduler and retry window.
6. Reach is intentionally disconnected: no operations or credentials have been verified. Optional marketing consent is recorded but no subscription is claimed. Configure verified Reach operations separately once available.
7. Test all four designs, invalid emails, denied preview access, database failures, repeated clicks, refresh/reopen, uploaded images, and desktop/tablet/mobile layouts on the preview deployment. Then merge and test the actual custom domain.

Local validation: `npm run lint`, `npm run build`, `node --import tsx --test backend/preview.test.ts`.
Backend tests use a mocked storage transport, not a live database or email provider.

## Configured database connection

The Supabase project uses a narrow storage Edge Function authenticated by RSA signatures. The private key is stored only in Vercel sensitive environment variables; the function source contains only the public key. This avoids sharing the database service-role credential with Vercel. The function accepts only the preview table and rate-limit RPC, with a 60-second signature validity window. `PREVIEW_STORAGE_URL` and `PREVIEW_STORAGE_PRIVATE_KEY` replace direct Supabase credentials.

## Automatic notification retries

Apply the retry schema migration, deploy the updated signed storage gateway, and configure the same randomly generated `PREVIEW_RETRY_SECRET` as a production-only sensitive Vercel variable and as the Supabase Vault secret named `preview_retry_secret`. Apply the scheduling migration after the Vercel retry endpoint is live. The scheduler runs every five minutes. New leads are persisted before email is attempted, and each recipient's accepted message ID is retained across retries. After 23 hours, unsent messages are marked `retry_exhausted` and the lead remains accessible to authorized database operators. Investigate exhausted records and reconcile provider logs before manually replaying them. Historical records are left intact.

An accepted message ID means Resend accepted the request. For actual delivery or bounce status, open Resend → Emails and look up the individual message IDs. For inbox verification, check the recipient's mailbox.
