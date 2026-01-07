# Astrology Website (Personal Practice)

## Quick Start
```bash
npm install
npm run dev
```
Then open the printed local URL.

## Structure
- `src/components` — **all pages live here** (Home, Services, Blog, Transits, Contact, AboutUs, FAQs) + shared components
- `src/styles` — **all page stylesheets live here** (one CSS per page + globals)

## Notes
- Footer includes Instagram & WhatsApp links.
- Blog card grid scrolls to expandable info sections and has "Back to Top".
- Services has a Currency selector (INR, CAD, USD, AUD). Prices are pre-set per currency (no live conversion).
- Transits page shows an animated solar system background with "Coming Soon".
- Testimonials on Home auto-scroll in an endless loop.
- Contact page form can forward to Email (mailto:) or WhatsApp (pre-filled message).