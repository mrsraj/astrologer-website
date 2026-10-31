# Astrologer Website Design

## Intent

Build a complete bilingual Hindi and English website for a Vedic astrologer. Visitors should understand the available services, browse daily horoscope content, and move naturally toward requesting a consultation.

## Direction

The visual system follows the generated concept in `docs/concepts/astrologer-homepage-concept.png`: warm cream backgrounds, maroon text, saffron and antique-gold accents, fine traditional ornament, generous whitespace, and a refined editorial layout. The placeholder brand is “श्री ज्योतिष सेवा | Shri Jyotish Seva” until the owner supplies a final astrologer name and verified contact details.

## Scope

- Responsive home, about, services, individual service, horoscope, blog, contact, and consultation pages.
- Shared header, mobile navigation, footer, page hero, service cards, zodiac navigation, testimonials, and consultation CTA.
- Content centralized in `src/data`.
- Consultation and contact forms create a WhatsApp message using a clearly marked placeholder number.
- Testimonials are explicitly labeled as illustrative samples; no credentials, awards, or performance claims are invented.

## Approaches

1. Complete multi-page website — selected because it supports the requested structure, service discovery, and future SEO.
2. Smaller launch version — faster but omits the requested horoscope and blog surfaces.
3. Single-page website — simpler but weaker for future content and individual service pages.

## Constraints

- Next.js App Router, React 19, and Tailwind CSS 4 already installed.
- Server components by default; client components only for navigation and forms.
- No external UI or icon dependency.
- Placeholder identity and contact details must be easy to find and replace.

