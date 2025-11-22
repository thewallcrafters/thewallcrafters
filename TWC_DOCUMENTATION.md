# TWC Fit-Outs — Ultra-Premium Architecture Website

## Overview
A **world-class, cinematic, production-ready** frontend for **The WallCrafters (TWC Fit-Outs)** — a full-service architecture and execution firm.

Design Language: **Bulthaup / Boffi / Gaggenau / Aesop / Apple** — dark, architectural, minimal, editorial storytelling with signature brand interactions.

---

## Tech Stack

### Core Technologies
- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS (custom configuration)
- **Animations:** Framer Motion (scroll-linked, page transitions, micro-interactions)
- **Smooth Scrolling:** Lenis (inertial, natural physics-based scrolling)
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Playfair Display, Cormorant Garamond, Inter, IBM Plex Sans)

### Key Features
✅ **Custom cursor** with hover states and labels
✅ **Smooth scroll** with Lenis (inertial physics)
✅ **Scroll-linked animations** with Framer Motion
✅ **Grayscale → color** image transitions
✅ **Red dot brand system** (navigation, hover, loader)
✅ **Overlay mobile menu** with staggered animations
✅ **Noise texture** on dark backgrounds
✅ **Cinematic page sections** with generous spacing

---

## Brand Identity

### Logo
- **Text:** `twc.` (lowercase, bold, black)
- **Accent:** Red dot (●) — the signature element
- **Subtitle:** `FIT-OUTS` (serif, spaced, small caps)

### Color Palette
```
#050509  Deep charcoal (primary background)
#111111  Secondary dark
#F5F3EE  Warm white (text)
#999999  Muted grey (labels)
#FF2B2B  TWC red (accent ONLY)
```

### Typography
- **Display:** Playfair Display / Cormorant Garamond (serif, luxury)
- **Body:** Inter / IBM Plex Sans (clean, modern)
- **Base Size:** 17px, responsive scaling
- **Line Height:** 1.6 (body), 1.1 (headings)
- **Letter Spacing:** Generous on labels, tight on display text

---

## File Structure

```
src/
├── App.tsx                              # Main app
├── index.css                            # Global styles
├── components/
│   ├── SmoothScrollProvider.tsx         # Lenis wrapper
│   ├── CustomCursor.tsx                 # Custom cursor
│   ├── Navbar.tsx                       # Navigation
│   ├── Footer.tsx                       # Footer
│   └── home/
│       ├── HeroSection.tsx
│       ├── SpacesSection.tsx
│       ├── ProjectsSection.tsx
│       ├── KitchensSection.tsx
│       ├── SpecialtiesSection.tsx
│       ├── ProcessSection.tsx
│       ├── AboutSection.tsx
│       └── ContactSection.tsx
```

---

## Global Features

### Custom Cursor
- Replaces default cursor with premium design
- Small circle + outer ring
- Expands and turns red on hover
- Shows labels on interactive elements
- Add `data-cursor-label="Text"` to any element

### Smooth Scrolling
- Lenis library for inertial physics
- Duration: 1.2s with custom easing
- Works globally across entire site

### Red Dot System
The signature brand element used for:
- Active navigation indicators
- Hover micro-interactions
- Animated logo accent
- Scroll indicators

### Animations
- **Fade-up:** Elements enter from below
- **Stagger:** Sequential child animations
- **Grayscale → Color:** Images on hover
- **Scale effects:** 1.0 → 1.05 on interactive elements
- **Timing:** cubic-bezier(0.25, 0.1, 0.25, 1)

---

## Homepage Sections

### 1. Hero — "Spaces crafted with precision"
Full-screen with gradient overlay, display heading, CTAs, and scroll indicator.

### 2. Spaces — "Spaces we craft"
2-column layout: Services overview (Residential, Commercial, Turnkey).

### 3. Projects — "Signature projects"
Alternating editorial layout with 4 featured projects (JP Residence, Meiyyappan, Villa16, Vaishali).

### 4. Kitchens — "Kitchens that work beautifully"
Light background, 3-column masonry gallery with hover overlays.

### 5. Specialties — "Beyond kitchens"
4-card grid: Conference Tables, Puja Rooms, Storage, TV Units.

### 6. Process — "Craft, systems, and execution"
3-step process + differentiators strip.

### 7. About — "Built by friends, driven by craft"
Studio story + values grid with link to about page.

### 8. Contact — "Let's talk about your space"
Form + contact details (phone, email, Instagram).

### 9. Footer
Minimal centered logo with animated red dot.

---

## Responsive Design

### Breakpoints
- Mobile: < 768px (stacked layouts, overlay menu)
- Tablet: 768–1024px
- Desktop: > 1024px (wide margins, full grid)

### Mobile Features
- Full-screen overlay navigation
- Hamburger menu with animated icon
- Touch-optimized interactions
- Reduced padding and spacing

---

## Custom Tailwind Utilities

### Colors
```css
.bg-twc-charcoal  /* #050509 */
.bg-twc-dark      /* #111111 */
.text-twc-warm    /* #F5F3EE */
.text-twc-grey    /* #999999 */
.text-twc-red     /* #FF2B2B */
```

### Layout
```css
.container-wide      /* Max-width 1800px, responsive padding */
.section-padding     /* py-24 md:py-32 lg:py-40 */
.noise-texture       /* SVG grain overlay (::before) */
```

### Typography
```css
.font-serif-display  /* Playfair Display */
.font-sans-body      /* Inter */
.text-hero           /* Responsive display text (3-7rem) */
.text-display        /* Responsive heading (2.5-5rem) */
```

---

## Development

### Commands
```bash
npm run dev       # Start development server
npm run build     # Production build
npm run preview   # Preview build
npm run lint      # ESLint
```

### Build Output
- CSS: ~21 KB (4.68 KB gzipped)
- JS: ~312 KB (97.57 KB gzipped)
- HTML: < 1 KB

---

## Brand Guidelines

1. **Red dot is sacred** — Only use #FF2B2B for accents
2. **White space is intentional** — Don't reduce padding
3. **Grayscale first** — Images start grayscale, color on interaction
4. **No shadows** — Depth through layering only
5. **Typography hierarchy** — Clear distinction between levels
6. **Noise texture** — Adds warmth (don't remove)
7. **Custom cursor** — Reinforces premium feel
8. **Smooth scroll** — Never use default behavior

---

## Image Assets

**Currently:** Pexels placeholders
**Replace with:** Actual TWC project photography

**Required:**
- Hero background (1920px wide)
- 4 signature projects
- 6 kitchen images
- 4 specialty images (conference, puja, storage, TV)

---

## Performance

✅ Optimized Vite build
✅ Code splitting & tree-shaking
✅ Lazy image loading
✅ GPU-accelerated animations
✅ Compressed assets
✅ TypeScript for type safety

---

**Status:** Production-ready, world-class frontend ✨
