# Hostinger staging notes

Deploy this branch as a Node.js / Express web app only after reviewing the changes.
Use Node.js 22 or newer, build command `npm run build`, and start command
`npm run start:hostinger`. Hostinger should provide PORT.

Set NODE_ENV=production, RESEND_API_KEY, FROM_EMAIL, and FORM_NOTIFICATION_EMAIL
in the app environment. GEMINI_API_KEY is only required for the AI audit.
Do not commit credentials. FROM_EMAIL must be verified with the email provider.

The Express server reuses the transactional email handler for the website builder.
The old in-memory admin endpoint and fake email/booking success routes were removed.
The current standalone booking API returns an error instead of claiming to book;
the existing Google Calendar link remains the intended scheduling flow.

Before changing the domain, test the app on a temporary Hostinger address,
including real email delivery and all contact/booking routes. Saved preview links
and durable preview storage have not been implemented yet. Database provisioning,
upload safety, automated retention, spam/rate limiting, and mobile and tablet
verification are still required. This branch has not been tested on Hostinger.
