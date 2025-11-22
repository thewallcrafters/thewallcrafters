# TWC Fit-Outs — Complete Site Map

```
TWC Fit-Outs Website
│
├── 🏠 Homepage (/)
│   ├── Hero Section
│   ├── Spaces We Craft
│   ├── Signature Projects Preview
│   ├── Kitchens Preview
│   ├── Fit-Out Specialties
│   ├── Process
│   ├── About Teaser
│   ├── Contact Form
│   └── Footer
│
├── 💼 Work (/work)
│   ├── Work Listing Page
│   │   ├── Filter: All / Residential / Commercial
│   │   └── 4 Project Cards
│   │
│   ├── 📁 JP Residence (/work/jp-residence)
│   │   ├── Hero
│   │   ├── Project Meta (sidebar)
│   │   ├── Vision, Challenges, Solutions, Outcome
│   │   ├── Image Gallery (4 images)
│   │   └── Navigation (← Back | Next: Meiyyappan →)
│   │
│   ├── 📁 Meiyyappan Residence (/work/meiyyappan-residence)
│   │   ├── Hero
│   │   ├── Project Meta (sidebar)
│   │   ├── Vision, Challenges, Solutions, Outcome
│   │   ├── Image Gallery (4 images)
│   │   └── Navigation (← JP | Next: Villa16 →)
│   │
│   ├── 📁 Villa16 (/work/villa16)
│   │   ├── Hero
│   │   ├── Project Meta (sidebar)
│   │   ├── Vision, Challenges, Solutions, Outcome
│   │   ├── Image Gallery (4 images)
│   │   └── Navigation (← Meiyyappan | Next: Vaishali →)
│   │
│   └── 📁 Vaishali Residence (/work/vaishali-residence)
│       ├── Hero
│       ├── Project Meta (sidebar)
│       ├── Vision, Challenges, Solutions, Outcome
│       ├── Image Gallery (4 images)
│       └── Navigation (← Villa16 | Back to Work →)
│
├── 🍳 Kitchens (/kitchens)
│   ├── Category Hero
│   ├── Filters
│   │   ├── Layout: All / L-shaped / U-shaped / Parallel / Island
│   │   └── Finish: All / Premium / Budget / Matte / Gloss
│   └── Kitchen Gallery (6 designs)
│       ├── Premium Island Kitchen
│       ├── Warm L-Shaped Kitchen
│       ├── Parallel Kitchen with Tall Units
│       ├── Compact Urban Kitchen
│       ├── Modern U-Shape Kitchen
│       └── Minimalist White Kitchen
│
└── 🏛️ Interiors (/interiors)
    ├── Interiors Overview
    │   ├── Category Hero
    │   └── 4 Main Categories
    │       ├── Puja Rooms → /interiors/puja-room
    │       ├── Storage Systems → /interiors/storage
    │       ├── TV & Media Units → /interiors/tv-units
    │       └── Conference Tables → /interiors/conference-tables
    │
    ├── 🕉️ Puja Rooms (/interiors/puja-room)
    │   ├── Category Hero
    │   └── 6 Puja Room Designs
    │       ├── Traditional Wood & Brass Altar
    │       ├── Minimal Niche Puja
    │       ├── Floating Unit with Backlit Panel
    │       ├── Temple-Style Carved Doors
    │       ├── Contemporary Marble Puja Corner
    │       └── Glass & Brass Compact Altar
    │
    ├── 🗄️ Storage (/interiors/storage)
    │   ├── Category Hero
    │   └── 6 Storage Solutions
    │       ├── Floor-to-Ceiling Wardrobes
    │       ├── Loft Storage Solutions
    │       ├── Living Room Wall Cabinets
    │       ├── Utility & Service Storage
    │       ├── Walk-In Closet Systems
    │       └── Bedroom Storage Beds
    │
    ├── 📺 TV Units (/interiors/tv-units)
    │   ├── Category Hero
    │   └── 6 TV Unit Designs
    │       ├── Floating Media Console
    │       ├── Full-Wall Entertainment Unit
    │       ├── Minimal Low-Profile Stand
    │       ├── Stone & Wood Feature Wall
    │       ├── Swivel Panel TV Mount
    │       └── Built-In Alcove Unit
    │
    └── 🪑 Conference Tables (/interiors/conference-tables)
        ├── Category Hero
        └── 6 Conference Table Options
            ├── Long Boardroom Table
            ├── Compact Meeting Table
            ├── High-Collaboration Table
            ├── Executive Conference Table
            ├── Modular Meeting Pods
            └── Glass-Top Modern Table
```

---

## Route Summary

### Total Routes: 12

**Homepage:** 1
- `/` — Main landing page

**Work Section:** 5
- `/work` — Project listing
- `/work/jp-residence` — Case study
- `/work/meiyyappan-residence` — Case study
- `/work/villa16` — Case study
- `/work/vaishali-residence` — Case study

**Kitchens:** 1
- `/kitchens` — Kitchen gallery

**Interiors:** 5
- `/interiors` — Overview
- `/interiors/puja-room` — Subcategory
- `/interiors/storage` — Subcategory
- `/interiors/tv-units` — Subcategory
- `/interiors/conference-tables` — Subcategory

---

## Navigation Flow

### From Homepage
- Navbar → Work → `/work`
- Navbar → Kitchens → `/kitchens`
- Navbar → Interiors → `/#interiors` (homepage section)
- Projects Section Cards → Individual projects
- Kitchens Section → `/kitchens`
- Specialties Section → `/interiors/[subcategory]`

### Within Work Section
```
/work
  ↓ Click project
/work/jp-residence
  ↓ Next Project
/work/meiyyappan-residence
  ↓ Next Project
/work/villa16
  ↓ Next Project
/work/vaishali-residence
  ↓ Back to Work
/work
```

### Within Interiors Section
```
/interiors
  ↓ Click category
/interiors/puja-room
/interiors/storage
/interiors/tv-units
/interiors/conference-tables
```

---

## Content Count

**Total Pages:** 12
**Total Sections:** 50+
**Project Case Studies:** 4 (complete with Vision/Challenges/Solutions/Outcome)
**Category Items:** 24 (6 per subcategory)
**Image Galleries:** 4 (project galleries)
**Reusable Components:** 6 (ProjectHero, ProjectMeta, ProjectBody, ImageGallery, CategoryHero, CategoryGrid)

---

## Page Templates

### Project Case Study Template
1. ProjectHero (full-screen)
2. Grid layout (3-col meta + 9-col body)
3. ProjectBody sections
4. ImageGallery
5. Navigation footer

### Category Template
1. CategoryHero
2. Optional filters
3. CategoryGrid (2, 3, or 4 columns)

### Work Listing Template
1. Hero with intro
2. Filter row
3. Project cards grid

---

**All routes tested and working ✅**
**Navigation flows intuitive and logical ✅**
**Design consistency maintained throughout ✅**
