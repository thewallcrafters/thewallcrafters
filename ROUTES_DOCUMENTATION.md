# TWC Fit-Outs — Routes & Pages Documentation

## Overview
This document details all the new routes, pages, and reusable components added to extend the TWC Fit-Outs website with project case studies and category pages.

---

## 📁 File Structure

```
src/
├── App.tsx                              # Updated with React Router routing
├── components/
│   ├── projects/                        # Project-specific components
│   │   ├── ProjectHero.tsx              # Full-bleed hero for project pages
│   │   ├── ProjectMeta.tsx              # Sticky sidebar with project details
│   │   ├── ProjectBody.tsx              # Sections (Vision, Challenges, etc.)
│   │   └── ImageGallery.tsx             # Responsive image gallery
│   │
│   ├── categories/                      # Category page components
│   │   ├── CategoryHero.tsx             # Hero for category pages
│   │   └── CategoryGrid.tsx             # Grid of category items/cards
│   │
│   └── home/                            # Homepage sections (existing)
│
└── pages/
    ├── work/
    │   ├── WorkListingPage.tsx          # Work listing with filters
    │   ├── JPResidencePage.tsx          # JP Residence case study
    │   ├── MeiyyappanResidencePage.tsx  # Meiyyappan case study
    │   ├── Villa16Page.tsx              # Villa16 case study
    │   └── VaishaliResidencePage.tsx    # Vaishali case study
    │
    ├── kitchens/
    │   └── KitchensPage.tsx             # Kitchens gallery with filters
    │
    └── interiors/
        ├── InteriorsPage.tsx            # Interiors category overview
        ├── PujaRoomPage.tsx             # Puja room designs
        ├── StoragePage.tsx              # Storage solutions
        ├── TVUnitsPage.tsx              # TV & media units
        └── ConferenceTablesPage.tsx     # Conference tables
```

---

## 🛣️ Routes

### Homepage
- **Path:** `/`
- **Component:** `HomePage` (composed of home sections)
- **Description:** Main landing page with hero, services, projects preview, etc.

### Work Pages
- **Path:** `/work`
- **Component:** `WorkListingPage`
- **Description:** Gallery of all projects with filtering UI

#### Individual Projects
- **`/work/jp-residence`** — JP Residence case study
- **`/work/meiyyappan-residence`** — Meiyyappan Residence case study
- **`/work/villa16`** — Villa16 case study
- **`/work/vaishali-residence`** — Vaishali Residence case study

### Category Pages

#### Kitchens
- **Path:** `/kitchens`
- **Component:** `KitchensPage`
- **Description:** Kitchen gallery with layout and finish filters

#### Interiors
- **Path:** `/interiors`
- **Component:** `InteriorsPage`
- **Description:** Overview of interior categories with links to subcategories

**Subcategories:**
- **`/interiors/puja-room`** — Puja room designs
- **`/interiors/storage`** — Storage systems
- **`/interiors/tv-units`** — TV & media units
- **`/interiors/conference-tables`** — Conference tables

---

## 🧩 Reusable Components

### 1. **ProjectHero** (`components/projects/ProjectHero.tsx`)

Full-screen hero section for project pages.

**Props:**
```typescript
{
  title: string;      // Project name
  location: string;   // Project location
  type: string;       // e.g., "Residential · Interior Fit-Out"
  image: string;      // Hero background image URL
}
```

**Features:**
- Full-screen height with parallax effect
- Dark gradient overlay for text readability
- Red dot brand accent
- Smooth fade-up animation on load

---

### 2. **ProjectMeta** (`components/projects/ProjectMeta.tsx`)

Sticky sidebar displaying project metadata.

**Props:**
```typescript
{
  name: string;
  location: string;
  category: string;   // e.g., "Residential", "Commercial"
  scope: string;      // e.g., "Interior Fit-Out", "Turnkey"
  year?: string;      // Optional
  size?: string;      // Optional (e.g., "2500 sq ft")
}
```

**Features:**
- Sticky positioning on desktop (lg:sticky lg:top-32)
- Staggered animation for each meta item
- Border-left visual accent
- Responsive: stacks on mobile

---

### 3. **ProjectBody** (`components/projects/ProjectBody.tsx`)

Content sections for project case studies.

**Props:**
```typescript
{
  sections: Array<{
    title: string;        // e.g., "Vision", "Challenges"
    content: string | string[];  // Paragraph or bullet points
  }>;
}
```

**Features:**
- Handles both paragraph text and bullet lists
- Red dot accent for each section title
- Fade-up animation on scroll
- Staggered delays for sequential appearance

**Example Usage:**
```typescript
const sections = [
  {
    title: 'Vision',
    content: 'Single paragraph describing the vision...'
  },
  {
    title: 'Challenges',
    content: [
      'Challenge point 1',
      'Challenge point 2'
    ]
  }
];
```

---

### 4. **ImageGallery** (`components/projects/ImageGallery.tsx`)

Responsive image gallery with two layout modes.

**Props:**
```typescript
{
  images: string[];           // Array of image URLs
  layout?: 'grid' | 'horizontal';  // Default: 'grid'
}
```

**Features:**
- **Grid layout:** 2-column responsive grid
- **Horizontal layout:** Scrollable carousel
- Grayscale → color on hover
- Scale effect on hover (1.0 → 1.05)
- Custom cursor label "View Full"
- Staggered animation on scroll

---

### 5. **CategoryHero** (`components/categories/CategoryHero.tsx`)

Hero section for category pages.

**Props:**
```typescript
{
  title: string;
  description: string;
  image?: string;   // Optional background image
}
```

**Features:**
- With image: Full-height (70vh) with background
- Without image: Auto height with padding
- Center-aligned when image is present
- Responsive text sizing

---

### 6. **CategoryGrid** (`components/categories/CategoryGrid.tsx`)

Grid of category cards with hover effects.

**Props:**
```typescript
{
  items: Array<{
    title: string;
    description: string;
    image: string;
    href?: string;    // Optional link
  }>;
  columns?: 2 | 3 | 4;  // Default: 3
}
```

**Features:**
- Responsive columns (adjusts for mobile/tablet/desktop)
- Grayscale → color on hover
- Red dot indicator appears on hover
- Scale effect on images
- Optional "Explore →" link
- Staggered entrance animations

---

## 📄 Page Details

### Work Listing Page (`/work`)

**Structure:**
1. **Hero section** with page title and intro
2. **Filter row** (non-functional UI): All / Residential / Commercial
3. **Project grid** (2-column on desktop)
   - 4 projects: JP, Meiyyappan, Villa16, Vaishali
   - Each card: Image + Tag + Title + Location
   - Hover: Image zooms, "View project →" appears

**Navigation:**
- Links to individual project pages (`/work/[project-slug]`)

---

### Individual Project Pages

**Consistent Layout:**
1. **ProjectHero** — Full-screen hero with project name
2. **Content section** — 12-column grid
   - Left (3 cols): ProjectMeta sidebar
   - Right (9 cols): ProjectBody with sections
3. **Gallery section** — ImageGallery with 4 placeholder images
4. **Navigation footer** — Links to previous/next project or back to work

**Sections included:**
- Vision
- Challenges (bullet list)
- Solutions (bullet list)
- Outcome

**Navigation Pattern:**
- JP → Next: Meiyyappan
- Meiyyappan → Prev: JP, Next: Villa16
- Villa16 → Prev: Meiyyappan, Next: Vaishali
- Vaishali → Prev: Villa16, Back to Work

---

### Kitchens Page (`/kitchens`)

**Structure:**
1. **CategoryHero** with background image
2. **Filter section** (non-functional UI)
   - Layout filters: All / L-shaped / U-shaped / Parallel / Island
   - Finish filters: All / Premium / Budget / Matte / Gloss
3. **CategoryGrid** — 6 kitchen designs in 3-column grid

**Kitchen Items:**
- Premium Island Kitchen
- Warm L-Shaped Kitchen
- Parallel Kitchen with Tall Units
- Compact Urban Kitchen
- Modern U-Shape Kitchen
- Minimalist White Kitchen

---

### Interiors Overview Page (`/interiors`)

**Structure:**
1. **CategoryHero** (no background image)
2. **CategoryGrid** — 4 large category tiles (2-column grid)

**Categories:**
- Puja Rooms → `/interiors/puja-room`
- Storage Systems → `/interiors/storage`
- TV & Media Units → `/interiors/tv-units`
- Conference Tables → `/interiors/conference-tables`

---

### Interior Subcategory Pages

All follow the same structure:
1. **CategoryHero** with background image
2. **CategoryGrid** with 6 items in 3-column grid

#### Puja Room Page (`/interiors/puja-room`)
- Traditional Wood & Brass Altar
- Minimal Niche Puja
- Floating Unit with Backlit Panel
- Temple-Style Carved Doors
- Contemporary Marble Puja Corner
- Glass & Brass Compact Altar

#### Storage Page (`/interiors/storage`)
- Floor-to-Ceiling Wardrobes
- Loft Storage Solutions
- Living Room Wall Cabinets
- Utility & Service Storage
- Walk-In Closet Systems
- Bedroom Storage Beds

#### TV Units Page (`/interiors/tv-units`)
- Floating Media Console
- Full-Wall Entertainment Unit
- Minimal Low-Profile Stand
- Stone & Wood Feature Wall
- Swivel Panel TV Mount
- Built-In Alcove Unit

#### Conference Tables Page (`/interiors/conference-tables`)
- Long Boardroom Table
- Compact Meeting Table
- High-Collaboration Table
- Executive Conference Table
- Modular Meeting Pods
- Glass-Top Modern Table

---

## 🎨 Design Consistency

All new pages follow the existing TWC design system:

### Colors
- Dark backgrounds (`bg-twc-charcoal`, `bg-twc-dark`)
- Light section alternates (`bg-twc-warm` for kitchens hero)
- Red accents (`text-twc-red`, `bg-twc-red`) for dots and hover states

### Typography
- **Display headings:** `font-serif-display` (Playfair Display)
- **Body text:** `font-sans-body` (Inter)
- **Labels:** Uppercase with wide tracking (`tracking-widest-plus`)

### Layout
- **Container:** `container-wide` (max-width 1800px, responsive padding)
- **Section padding:** `section-padding` (py-24 md:py-32 lg:py-40)
- **Noise texture:** `.noise-texture` class on dark backgrounds

### Animations
- **Fade-up on scroll:** `initial={{ opacity: 0, y: 40 }}` → `opacity: 1, y: 0`
- **Stagger delays:** `delay: index * 0.1` for sequential animations
- **Hover effects:** Scale (1.05), grayscale → color
- **Easing:** `[0.25, 0.1, 0.25, 1]` (premium cubic-bezier)

### Interactions
- **Custom cursor labels:** `data-cursor-label="Text"`
- **Red dot indicators:** Appear on hover
- **Smooth transitions:** 300-700ms duration
- **Image grayscale:** Default grayscale, color on hover

---

## 🔧 Technical Implementation

### Routing
- Uses **React Router v6** (`react-router-dom`)
- `BrowserRouter` wraps the entire app
- Routes defined in `App.tsx` using `<Routes>` and `<Route>`

### Navigation
- Navbar links updated to use Router-compatible hrefs
- All internal links use standard `<a href>` (React Router intercepts)
- Smooth scroll provider works across all routes

### Image Placeholders
All images currently use **Pexels stock photos** via URLs.

**To replace:**
1. Add real project images to `public/images/projects/`
2. Update image URLs in page components
3. Format: `/images/projects/[project-name]-[number].jpg`

**Recommended structure:**
```
public/images/
├── projects/
│   ├── jp-1.jpg, jp-2.jpg, ...
│   ├── meiyyappan-1.jpg, ...
│   ├── villa16-1.jpg, ...
│   └── vaishali-1.jpg, ...
├── kitchens/
│   └── k1.jpg, k2.jpg, ...
└── interiors/
    ├── puja-1.jpg, ...
    ├── storage-1.jpg, ...
    ├── tv-1.jpg, ...
    └── conference-1.jpg, ...
```

---

## 📊 Build Output

```
✓ 1900 modules transformed
✓ Built in 7.41s

dist/index.html          0.48 KB  (0.31 KB gzipped)
dist/assets/index.css   21.76 KB  (4.87 KB gzipped)
dist/assets/index.js   381.67 KB (114.92 KB gzipped)
```

The additional routes and components increased the JS bundle by ~70KB (gzipped: +17KB), which is acceptable for the added functionality.

---

## 🚀 Usage Examples

### Adding a New Project

1. **Create page component** in `src/pages/work/`
2. **Define sections:**
```typescript
const sections = [
  { title: 'Vision', content: '...' },
  { title: 'Challenges', content: ['...', '...'] },
  { title: 'Solutions', content: ['...', '...'] },
  { title: 'Outcome', content: '...' },
];
```
3. **Add route** in `App.tsx`:
```typescript
<Route path="/work/new-project" element={<NewProjectPage />} />
```
4. **Update WorkListingPage** with new project card

### Adding a New Category

1. **Create page component** in `src/pages/[category]/`
2. **Use CategoryHero + CategoryGrid**
3. **Add route** in `App.tsx`
4. **Link from relevant parent page** (e.g., InteriorsPage)

---

## ✅ What's Complete

✓ All routes implemented and working
✓ 11 new pages created
✓ 6 reusable components
✓ Consistent design system applied
✓ Responsive layouts (mobile/tablet/desktop)
✓ Smooth animations and transitions
✓ Custom cursor integration
✓ React Router navigation
✓ Build successful (no errors)

---

## 🔜 Next Steps (Optional)

1. **Replace placeholder images** with real TWC photography
2. **Add actual project content** (replace Lorem-style descriptions)
3. **Make filters functional** (currently UI-only)
4. **Add page transitions** between routes (Framer Motion AnimatePresence)
5. **Implement CMS** for easier content management
6. **Add SEO metadata** (titles, descriptions) for each page
7. **Create /about page** with studio story and team
8. **Wire up contact forms** to backend/email service

---

**Status:** ✅ All requested routes and pages successfully implemented and integrated with existing TWC design system.
