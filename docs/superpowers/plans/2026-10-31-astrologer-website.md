# Astrologer Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete responsive bilingual Vedic astrologer website across all requested routes.

**Architecture:** Next.js App Router pages compose small shared server components from centralized content modules. Client JavaScript is limited to the mobile menu and WhatsApp form submission.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, CSS, Node test runner

**Spec:** `docs/superpowers/specs/2026-10-31-astrologer-website-design.md`

## Global Constraints

- Preserve the approved traditional Hindi and English design direction.
- Use placeholder identity and contact data until verified details are supplied.
- Keep testimonials visibly marked as illustrative samples.
- Make all routes responsive and keyboard accessible.

## Review Focus

- Missing service slugs must render a real 404.
- Mobile navigation must remain usable without overflowing the viewport.
- Forms must reject missing required details and encode WhatsApp messages safely.
- Every repeated content item needs a stable unique identifier.
- Placeholder contact details must be centralized and visibly marked in source.

---

### Task 1: Content model and shared foundation

**Files:** `src/data/*.js`, `src/lib/whatsapp.js`, `src/app/layout.js`, `src/app/globals.css`, `src/components/layout/*`, `src/components/ui/*`

- [ ] Add failing tests for content uniqueness, service lookup, and WhatsApp URL encoding.
- [ ] Implement centralized data and shared utilities.
- [ ] Implement the global design tokens, header, footer, and reusable UI.
- [ ] Run tests and lint.

### Task 2: Home page components

**Files:** `src/components/home/*`, `src/app/page.js`, `public/images/astrology-hero.png`

- [ ] Add the generated production hero artwork.
- [ ] Implement hero, services, about, zodiac, testimonials, and CTA sections.
- [ ] Compose the home page and verify the production build.

### Task 3: Inner pages and consultation flow

**Files:** `src/app/about/page.jsx`, `src/app/services/**`, `src/app/horoscope/page.jsx`, `src/app/blog/page.jsx`, `src/app/contact/page.jsx`, `src/app/book-consultation/page.jsx`, `src/components/forms/*`

- [ ] Implement every requested route and dynamic service metadata.
- [ ] Implement validated WhatsApp contact and booking forms.
- [ ] Verify route generation, lint, and production build.

