# DevnoxxKit - Premium HTML Design System

**Version:** 2.1.0  
**Last Updated:** March 2026

A cinematic, editorial-grade HTML design system for agencies, studios, and creators who refuse to ship mediocre work.

---

## What’s Included

### Pages (16 total)
| File | Description |
|------|-------------|
| `index.html` | Homepage - Cinematic Dark (default) |
| `devnoxxkit-home-brutalist.html` | Homepage Variation - Neo-Brutalist |
| `devnoxxkit-home-ivory.html` | Homepage Variation - Warm Ivory Editorial |
| `devnoxxkit-home-teal.html` | Homepage Variation - Midnight Teal |
| `devnoxxkit-home-monochrome.html` | Homepage Variation - Pure Monochrome |
| `devnoxxkit-portfolio.html` | Portfolio with filterable grid + case study modal |
| `devnoxxkit-blog.html` | Blog index with live filter + search |
| `devnoxxkit-blog-single.html` | Blog article with reading progress, TOC, share |
| `devnoxxkit-about.html` | About with team, awards, timeline |
| `devnoxxkit-services.html` | Services with accordion, process, FAQ |
| `devnoxxkit-contact.html` | 3-step contact form with budget slider |
| `devnoxxkit-shop.html` | Product shop with cart toast, wishlist |
| `devnoxxkit-docs.html` | Documentation + customization guide |
| `devnoxxkit-404.html` | Error page with orbiting SVG animation |
| `devnoxxkit-coming-soon.html` | Pre-launch page with live countdown |
| `devnoxxkit-style-guide.html` | Full component library reference |
| `devnoxxkit-dark-light.html` | Dark/Light mode demo + implementation guide |

### Scripts
- `devnoxxkit-theme.js` - theme toggle + persistence (used across pages)

### Other Files
- `favicon.svg`
- `CHANGELOG.md`
- `README.md`

---

## Quick Start

This is a static HTML package. No build step is required.

1. Open `index.html` in your browser.
2. Edit the HTML and replace placeholder images/text.
3. Optional: run a local static server for best results (fonts, fetches, and relative paths).

---

## Design Tokens

All design decisions are encoded as CSS custom properties in the `:root` block at the top of each page. Change here, change everywhere.

```css
:root {
  --bg:    #0A0A0C;
  --bg-2:  #111114;
  --bg-3:  #18181D;
  --border: rgba(242,237,228,0.08);
  --ink:   #F2EDE4;
  --ink-2: #B8B0A4;
  --ink-3: #6E6860;
  --gold:  #C9A96E;
}
```

---

## SEO Setup

Each page ships with the basic meta structure. Complete it before going live:

```html
<head>
  <title>Page Title - Site Name</title>
  <meta name="description" content="150-160 chars, unique per page"/>
  <link rel="canonical" href="https://yourdomain.com/this-page"/>

  <meta property="og:title" content="Page Title"/>
  <meta property="og:description" content="Same as meta description"/>
  <meta property="og:image" content="https://yourdomain.com/og-1200x630.jpg"/>
  <meta property="og:url" content="https://yourdomain.com/this-page"/>
  <meta property="og:type" content="website"/>

  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="Page Title"/>
  <meta name="twitter:image" content="https://yourdomain.com/og-1200x630.jpg"/>
</head>
```

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome 100+ | Full |
| Firefox 100+ | Full |
| Safari 15+ | Full |
| Edge 100+ | Full |
| Safari iOS 15+ | Full |
| Chrome Android | Full |
| IE 11 | Not supported |

---

## Accessibility

DevnoxxKit targets WCAG 2.1 AA:

- Semantic HTML5 landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`, `<aside>`)
- Visible focus states on all interactive elements
- Proper `alt` attributes (or `alt=""` + `aria-hidden="true"` for decorative images)
- Adequate color contrast for body and large text
- Form labels associated to inputs
- Keyboard navigation supported across UI
- `prefers-reduced-motion` respected where motion is used

---

## Changelog

See `CHANGELOG.md` for full version history.

**v2.1.0** (March 2026)
- Added dark/light mode system with localStorage persistence
- Added Style Guide page
- Added Coming Soon page with live countdown
- Added 404 page with SVG orbit animation
- Added 3-step Contact form with budget slider
- Added Blog Index with live filter + search
- Improved Shop page with cart toast + wishlist
- Fixed form validation edge cases
- Improved mobile nav animation timing

---

## License & Credits

### Fonts
- Fraunces - Open Font License (OFL)
- DM Sans - Open Font License (OFL)
- JetBrains Mono - Open Font License (OFL)
- Bebas Neue - Open Font License (OFL)
- Cormorant Garamond - Open Font License (OFL)
- Syne - Open Font License (OFL)
- Playfair Display - Open Font License (OFL)

All fonts served via Google Fonts. No self-hosting required for basic setup.

### Images
All demo images are sourced from Unsplash and are free for commercial use under the Unsplash License. Replace with your own images before deployment.

### License Tiers

| License | Personal | Studio | Agency |
|---------|----------|--------|--------|
| Personal use | Yes | Yes | Yes |
| Client projects | No | Up to 5 | Unlimited |
| Commercial use | No | Yes | Yes |
| White-label / resell | No | No | Yes |
| Price | $49 | $99 | $199 |

---

Built with obsession by the DevnoxxKit team.
Questions? chtauqeer1117@gmail.com
