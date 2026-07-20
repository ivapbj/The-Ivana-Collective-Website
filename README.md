# The Ivana Collective Website

A polished, responsive portfolio and lead-generation website for The Ivana Collective, a boutique digital strategy studio. The application combines an editorial React interface with an Express API, interactive service experiences, appointment and contact workflows, and an optional Gemini-powered SEO readiness audit.

## Project Provenance

This portfolio project demonstrates the ability to take ownership of an existing AI-generated codebase, understand its architecture, identify production risks, and prepare it for reliable deployment.

- **Designed in Google AI Studio** as the original visual and application concept
- **Exported as a React, Vite, and TypeScript application** with an Express server
- **Audited, enhanced, and production-hardened by Ivana**, including dependency and build validation, static-asset handling, production-server configuration, environment and secret review, and deployment-ready repository documentation

The original experience and business branding have been intentionally preserved. The development work represented here focuses on codebase evaluation, production issue resolution, and deployment readiness rather than presenting the AI-generated starting point as entirely hand-authored.

## Features

- Responsive multi-page marketing experience with custom navigation
- Interactive keyboard-inspired homepage hero
- Dedicated service, work, methodology, pricing, about, insights, and contact pages
- Website style preview with validation, consent handling, and spam protection
- Contact and strategy-call booking workflows
- AI-assisted SEO and search-readiness audit with a graceful local fallback
- Dynamic SEO metadata and structured business data
- Production Express server for the built single-page application

## Technologies Used

- React 19
- TypeScript
- Vite 6
- Express 4
- Tailwind CSS 4
- Motion
- Lucide React
- Google Gen AI SDK
- esbuild

## Folder Structure

```text
.
|-- public/
|   `-- images/                 # Static assets copied directly into production
|-- src/
|   |-- assets/                 # Source media retained for project organization
|   |-- components/             # Shared interface and modal components
|   |-- context/                # Client-side navigation state
|   |-- pages/                  # Page-level React components
|   |-- App.tsx                 # Application routes and composition
|   |-- data.ts                 # Portfolio and editorial content
|   |-- index.css               # Global styles and design system
|   |-- main.tsx                # React entry point
|   `-- types.ts                # Shared TypeScript types
|-- index.html                  # Vite HTML entry point
|-- server.ts                   # Express API and production server
|-- vite.config.ts              # Vite and Tailwind configuration
|-- tsconfig.json               # TypeScript configuration
`-- package.json                # Scripts and dependencies
```

## Installation

Prerequisites:

- Node.js 20 or newer
- npm

Clone the repository and install its dependencies:

```bash
git clone https://github.com/your-username/the-ivana-collective-website.git
cd the-ivana-collective-website
npm install
```

Copy the environment template if you want to configure optional integrations:

```bash
cp .env.example .env
```

`GEMINI_API_KEY` enables live AI audit responses. Without it, the application returns its built-in fallback audit. Email-provider variables are optional and are documented in `.env.example`.

## Running Locally

Start the Express server with Vite development middleware:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Run the TypeScript check separately:

```bash
npm run lint
```

## Production Build

Build the client and bundle the Express server:

```bash
npm run build
```

Start the compiled server with `NODE_ENV` set to production:

```bash
NODE_ENV=production npm start
```

PowerShell:

```powershell
$env:NODE_ENV = "production"
npm start
```

The production application is served at [http://localhost:3000](http://localhost:3000).

## Screenshots

Screenshots should be captured from the production build so they represent the deployment-ready application accurately.

<!-- Replace these placeholders with repository-hosted images before publishing. -->

### Desktop Homepage

> Screenshot placeholder — interactive keyboard hero and primary navigation.

### Services Experience

> Screenshot placeholder — services overview or an individual service page.

### Interactive Tools

> Screenshot placeholder — website style preview or SEO readiness audit.

### Mobile Experience

> Screenshot placeholder — responsive homepage and mobile navigation.

Suggested captures:

- Homepage and interactive keyboard hero
- Services overview
- Website style preview
- SEO audit experience
- Mobile navigation and responsive layout

## Future Improvements

- Connect contact and booking workflows to a persistent database
- Integrate a transactional email provider for live notifications
- Add calendar availability and invitation delivery
- Add automated unit, integration, accessibility, and end-to-end tests
- Add a content management workflow for insights and portfolio entries
- Add deployment configuration and continuous integration

## License

This portfolio project is private and is not currently licensed for redistribution.
