# Changelog - DevnoxxKit

All notable changes to DevnoxxKit will be documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [2.1.0] - March 2026

### Added
- **Dark/Light mode system** - full dual-theme token set, localStorage persistence, system preference detection, zero-flash initializer
- **Style Guide page** - 14 documented sections covering all tokens, components, and patterns; copy buttons on all code blocks
- **Coming Soon page** - live countdown timer, email waitlist with validation, progress bar, features strip
- **404 Error page** - SVG orbit animation, site search, quick-link pills, keyboard `Esc` navigation
- **Product Landing page** - dedicated sell page for the template itself with full feature grid, screenshots, pricing, and buyer testimonials
- **3-step Contact form** - project type radio cards, budget slider, checkbox interests, Formspree/Netlify compatible
- **Blog Index** - live category filter, full-text search, load more, newsletter capture with success state

### Changed
- Services page: expanded accordion now includes a full-bleed project image per service
- About page: added vertical timeline from 2013 to present with animated gold dot
- Portfolio page: case study modal now includes dual project detail images
- Shop page: added cart toast notification and wishlist heart toggle
- All pages: reading progress bar on blog-single uses `IntersectionObserver` for accuracy

### Fixed
- Mobile nav z-index conflict with sticky nav on iOS Safari
- Budget slider aria-valuemin/max not updating on input
- Form success screen flash on initial render
- Lighthouse accessibility score on form labels (all inputs now have explicit `for` associations)

### Removed (Marketplace Build)
- Demo switcher widget (dev-only)
- Build tooling configs (static HTML package)

---

## [2.0.0] - January 2026

### Added
- **4 homepage variations** - Brutalist, Warm Ivory, Midnight Teal, Pure Monochrome
- **Shop page** - featured product, product grid with filter, bundle card, trust strip, email capture
- **About page** - manifesto, story, stats, team grid, awards, clients, timeline
- **Services page** - accordion with images, process grid, capabilities table, tools grid, FAQ
- **Blog Single** - editorial article layout with TOC, reading progress, share, author bio, related posts
- **Documentation page** - two-column shell, design token reference, deployment guide, selling guide
- Custom cursor with magnetic hover ring
- Noise texture overlay via SVG data URI
- Fraunces + DM Sans + JetBrains Mono type system

### Changed
- Replaced Tailwind utility classes with CSS custom property system for better runtime customization
- Redesigned hero from centered layout to bottom-aligned editorial composition

---

## [1.0.0] - October 2025

### Initial Release
- Homepage (Cinematic Dark)
- Portfolio with filterable grid
- Blog index and single article
- Contact form
- Basic documentation
