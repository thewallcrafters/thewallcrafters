# TWC Fit-Outs Website - Project Structure

## Overview
A premium, production-ready frontend for **The WallCrafters (TWC Fit-Outs)** — an architectural interior brand following the Bulthaup Option B style: dark, luxurious, minimalist, and editorial.

---

## Design System

### Brand Colors
- `#050509` - Deep charcoal (primary background)
- `#111111` - Lighter charcoal
- `#F5F3EE` - Warm white (text)
- `#999999` - Muted grey (labels)
- `#FF2B2B` - TWC red (accents only)

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)
- **Style:** Increased letter-spacing, soft line-height, large margins

### Design Principles
- Full-bleed images with dark gradient overlays
- Extremely clean layouts with wide spacing
- No shadows, no bright colors, no rounded cards
- Subtle fade/slide-up transitions
- Red dot used for active states and hover interactions

---

## File Structure

```
src/
├── App.tsx                          # Main app assembly
├── index.css                        # Global styles + Tailwind
├── components/
│   ├── Navbar.tsx                   # Sticky navigation with scroll effect
│   ├── Hero.tsx                     # Full-screen hero section
│   ├── SpacesWeCraft.tsx           # Services overview (2-column)
│   ├── SignatureProjects.tsx       # Alternating project showcase
│   ├── KitchensGallery.tsx         # 3-column masonry gallery
│   ├── FitOutSpecialties.tsx       # 4-card specialty showcase
│   ├── About.tsx                    # Company story + values
│   ├── Contact.tsx                  # Contact form + info
│   └── Footer.tsx                   # Minimal footer with logo
```

---

## Page Sections

### 1. Navigation
- Transparent on hero, dark after scroll
- Logo: "twc." with red dot
- Center menu items with hover red dots
- "BOOK A VISIT" button (right)

### 2. Hero Section
- Full-screen background image
- Dark gradient overlay
- Large serif headline
- CTA buttons

### 3. Spaces We Craft
- 2-column layout (heading | services)
- Vertical divider
- 3 service types

### 4. Signature Projects
- Alternating image/text layout
- 4 featured projects
- Editorial spacing

### 5. Kitchens Gallery
- Light background section
- 3-column masonry grid
- Hover overlays with text

### 6. Fit-Out Specialties
- Dark background
- 4 horizontal cards
- Conference tables, puja rooms, storage, TV units

### 7. About Section
- Light background
- Company story + values list
- 2-column layout

### 8. Contact Section
- Dark background
- Contact form (left)
- Phone/email info (right)

### 9. Footer
- Minimal centered logo
- Copyright text

---

## Tech Stack
- **Framework:** React 18 + TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Fonts:** Google Fonts (Playfair Display, Inter)

---

## Interactions & Animations
- Smooth scroll behavior
- Navbar background change on scroll
- Red dot hover indicators on menu items
- Image scale on hover (1.05x)
- Fade-in overlays on gallery items
- Form input focus states with red border

---

## Image Placeholders
Currently using Pexels stock images. Replace with actual TWC project images:
- Hero: Kitchen/interior shots
- Projects: JP Residence, Meiyyappan Residence, Villa16, Vaishali Residence
- Kitchens: 6 kitchen images
- Specialties: Conference, puja rooms, storage, TV units

---

## Customization Notes
- All spacing follows 8px system
- Typography uses luxury editorial spacing
- Red (#FF2B2B) used sparingly for maximum impact
- Dark backgrounds (#050509, #111111) alternate with light (#F5F3EE)
- All transitions are smooth (300-700ms)

---

## Production Ready Features
✓ Fully responsive (mobile to desktop)
✓ Semantic HTML structure
✓ TypeScript for type safety
✓ Clean component architecture
✓ Optimized build output
✓ Accessibility considerations
✓ SEO-friendly structure
✓ Fast load times
