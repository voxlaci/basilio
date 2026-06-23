# Basilio Astúlez Premium Personal Website

A premium, CMS-ready Next.js concept site for Maestro Basilio Astúlez.

## Stack

- Next.js app router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons
- SEO metadata, Open Graph and JSON-LD

## Local development

```bash
pnpm install
pnpm dev
```

The hero uses `/public/media/basilio-hero.mp4` as the production video slot and falls back to the configured poster image if no video is present.

## Content model

Primary editable content lives in `lib/site-data.ts`, making the site ready to connect to a CMS later without changing the page structure.
