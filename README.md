# Nexcore Website

Production-ready enterprise website for Nexcore, a technology company building digital solutions for large organizations.

## Tech Stack

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- Framer Motion
- Zod validation
- Lucide React icons

## Architecture

The site is static-first for performance and SEO. Content pages render as server components, while interaction-heavy pieces are isolated as client components:

- `src/app`: routes, metadata, loading, error, sitemap, and robots files
- `src/components/site`: global layout components such as navigation, footer, theme, and page transitions
- `src/components/forms`: validated contact and newsletter forms
- `src/components/ui`: reusable interface primitives
- `src/components/home`: homepage hero, service explorer, delivery principles, and process timeline
- `src/components/systems`: original service and workflow illustrations plus the industry selector
- `src/lib`: shared content, validation schemas, and utilities
- `public/images`: project-owned visual assets

## Pages

- Home
- About
- Services
- Projects
- Individual project case studies
- Industries
- Contact
- Request a Consultation
- Privacy Policy
- Terms of Use

## Features

- Responsive enterprise design
- Dark and light mode
- Sticky desktop and mobile navigation
- Smooth scrolling
- Framer Motion page and section transitions
- Contact and consultation forms with client-side validation and Formspree submission
- Newsletter signup with client-side validation and Formspree submission
- Interactive OpenStreetMap location map with Leaflet
- SEO metadata, Open Graph, sitemap, robots, and JSON-LD
- Accessible labels, skip link, focus states, and reduced-motion support
- Generated hero image stored at `public/images/nexcore-enterprise-platform.png`
- Theme-ready logo assets stored at `public/branding`

## Connected Systems Design

The shared design uses architectural connectors, numbered workflows, and restrained motion. Framer Motion handles reveals, hero pointer movement, and the delivery timeline; CSS handles diagram signals and hover states. Reduced-motion preferences disable decorative movement, and content remains visible without animation.

`src/lib/workflows.ts` describes illustrative project workflows using the existing case-study content. `ProjectVisual` renders these as explicitly labelled illustrations, not client screenshots. To add approved project media later, pass an `image` with `src` and meaningful `alt` text to `ProjectVisual`; it keeps the existing responsive frame.

The service and industry explorers use keyboard- and touch-accessible selection buttons. Public pages share `PageIntro`, `SectionHeading`, and the existing layout. Formspree submission and Leaflet integration are independent of these visual components.

## Getting Started

Install Node.js 20 or newer, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js.

## Quality Checks

```bash
npm run typecheck
npm run lint
npm run build
```

`npm run build` creates the optimized production build used by Vercel.

## Environment

The public website can run without `.env.local`. Add this public variable when Formspree is ready:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=
```

## Contact Forms

The contact and consultation forms validate fields in the browser and submit directly to Formspree with `fetch`, keeping visitors on the Nexcore website.

Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to the Formspree endpoint configured to deliver submissions to `systemsnexcore1@gmail.com`, using the format `https://formspree.io/f/FORM_ID`. If the endpoint is missing, the forms stay visible but submission is disabled with a clear message asking visitors to email Nexcore directly.

The newsletter form uses the same Formspree endpoint. There is currently no database, API route, authentication service, CRM, webhook, or private credential required for public site operation.

## Admin Tools

The previous internal CRM has been temporarily removed. `/admin` and `/admin/login` show a static Coming Soon page with no authentication or backend dependency.

## Vercel Deployment

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the project into Vercel.
3. Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` after the Formspree form is created.
4. Build with Vercel's default Next.js settings.
5. After deployment, run Lighthouse against the production URL and confirm scores above 90.

## Notes

On Windows PowerShell, use `npm.cmd` if the local execution policy blocks `npm.ps1`.
