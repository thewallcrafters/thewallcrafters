# TWC Fit-Outs — Quick Reference Card

## 🎨 Brand Colors (Use These Exactly)

```css
#050509  /* bg-twc-charcoal - Primary dark background */
#111111  /* bg-twc-dark - Secondary dark */
#F5F3EE  /* text-twc-warm - Text color */
#999999  /* text-twc-grey - Labels */
#FF2B2B  /* text-twc-red - ACCENT ONLY (hover, dots, active states) */
```

---

## 🔤 Typography Classes

```css
font-serif-display   /* Playfair Display - for headings */
font-sans-body       /* Inter - for body text */

text-hero           /* Large responsive display text (3-7rem) */
text-display        /* Medium responsive heading (2.5-5rem) */
```

---

## 📐 Layout Utilities

```css
container-wide      /* Max-width 1800px with responsive padding */
section-padding     /* Vertical rhythm: py-24 md:py-32 lg:py-40 */
noise-texture       /* Adds subtle SVG grain overlay to dark backgrounds */
```

---

## 🎯 Custom Cursor

**Add interactive labels to any element:**
```html
<div data-cursor-label="View Project">...</div>
```

The cursor will show "View Project" text when hovering over this element.

---

## 🔴 Red Dot Pattern (Signature Element)

```jsx
<div className="w-2 h-2 bg-twc-red rounded-full"></div>
```

**Animated version:**
```jsx
<motion.div
  className="w-2 h-2 bg-twc-red rounded-full"
  animate={{ scale: [1, 1.2, 1] }}
  transition={{ duration: 2, repeat: Infinity }}
/>
```

---

## 🎬 Common Animation Patterns

### Fade-up on scroll
```jsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
>
  Your content
</motion.div>
```

### Hover scale effect
```jsx
<motion.img
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.6 }}
/>
```

### Grayscale to color on hover
```css
className="grayscale hover:grayscale-0 transition-all duration-700"
```

---

## 📱 Responsive Breakpoints

```
sm:   640px   (mobile landscape)
md:   768px   (tablet)
lg:   1024px  (desktop)
xl:   1280px  (large desktop)
2xl:  1536px  (extra large)
```

---

## 🎨 Section Background Pattern

```jsx
/* Dark section */
<section className="bg-twc-charcoal section-padding relative noise-texture">

/* Light section */
<section className="bg-twc-warm section-padding">

/* Secondary dark */
<section className="bg-twc-dark section-padding relative noise-texture">
```

---

## 🔗 Navigation Structure

```
/                              → Homepage
/work                          → Work listing (✅ DONE)
/work/jp-residence             → JP Residence case study (✅ DONE)
/work/meiyyappan-residence     → Meiyyappan case study (✅ DONE)
/work/villa16                  → Villa16 case study (✅ DONE)
/work/vaishali-residence       → Vaishali case study (✅ DONE)
/kitchens                      → Kitchen gallery (✅ DONE)
/interiors                     → Interiors overview (✅ DONE)
/interiors/puja-room           → Puja rooms (✅ DONE)
/interiors/storage             → Storage (✅ DONE)
/interiors/tv-units            → TV units (✅ DONE)
/interiors/conference-tables   → Conference tables (✅ DONE)
/#services                     → Scroll to services section
/#contact                      → Scroll to contact section
```

---

## 🎭 Premium Interaction Timing

```
Fast:    200-300ms  (micro-interactions, hover states)
Medium:  500-700ms  (image transitions, fades)
Slow:    1000-1500ms (page entrance, hero animations)

Easing: cubic-bezier(0.25, 0.1, 0.25, 1)
```

---

## 📦 Component Import Map

```jsx
/* Global */
import SmoothScrollProvider from './components/SmoothScrollProvider'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

/* Homepage Sections */
import HeroSection from './components/home/HeroSection'
import SpacesSection from './components/home/SpacesSection'
import ProjectsSection from './components/home/ProjectsSection'
import KitchensSection from './components/home/KitchensSection'
import SpecialtiesSection from './components/home/SpecialtiesSection'
import ProcessSection from './components/home/ProcessSection'
import AboutSection from './components/home/AboutSection'
import ContactSection from './components/home/ContactSection'
```

---

## ⚡ Common Patterns

### 2-Column Grid
```jsx
<div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
  <div>Left column</div>
  <div>Right column</div>
</div>
```

### Card with hover effect
```jsx
<div className="group relative" data-cursor-label="Explore">
  <img className="grayscale group-hover:grayscale-0 transition-all duration-700" />
  <div className="opacity-0 group-hover:opacity-100">Overlay content</div>
</div>
```

### Button styles
```jsx
/* Primary */
<button className="border border-twc-warm px-8 py-4 hover:bg-twc-warm hover:text-twc-charcoal transition-all duration-500">

/* Ghost */
<button className="text-twc-warm/70 hover:text-twc-warm relative group">
  <span className="absolute bottom-0 left-0 right-0 h-px bg-twc-warm scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
```

---

## 🚫 Don't Do This

❌ Use red for large blocks of color
❌ Add shadows or drop shadows
❌ Use default scroll behavior
❌ Remove white space to "fit more"
❌ Start with colored images (use grayscale)
❌ Use bright, saturated colors
❌ Add rounded corners everywhere

---

## ✅ Do This Instead

✓ Use red sparingly (dots, accents, hover states)
✓ Create depth through layering and spacing
✓ Keep Lenis smooth scroll enabled
✓ Embrace generous white space
✓ Start images grayscale, reveal color on interaction
✓ Stick to the 5-color palette
✓ Keep edges sharp and minimal

---

## 🛠 Development Commands

```bash
npm run dev       # Start dev server (http://localhost:5173)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## 📸 Image Guidelines

**Format:** JPG or WebP
**Size:** 1920px wide (hero), 800-1200px (cards)
**Optimization:** Compress before upload
**Ratio:** 16:9 (projects), 3:4 (kitchens), 4:3 (hero)
**Treatment:** Will be shown as grayscale by default

---

## 🎯 Quick Wins

1. Replace placeholder images with real TWC photography
2. Update project descriptions with actual copy
3. Wire contact form to email service
4. Add real phone numbers and email addresses
5. Connect Instagram handle
6. Add Google Analytics or similar
7. Set up domain and SSL certificate
8. Test on real devices (mobile, tablet)

---

**Remember:** Every detail matters. This is a luxury brand experience.
