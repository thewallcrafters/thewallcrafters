# TWC Fit-Outs — Next.js 14 Website

Premium interior design and carpentry portfolio website built with **Next.js 14 App Router**.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build

# Start production server
npm run start
```

---

## 📁 Project Structure

```
project/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout with global providers
│   ├── page.tsx                # Homepage
│   ├── work/                   # Work section
│   ├── kitchens/               # Kitchens page
│   └── interiors/              # Interiors pages
│
├── components/                 # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── home/                   # Homepage sections
│   ├── projects/               # Project page components
│   └── categories/             # Category components
│
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS config
└── tsconfig.json               # TypeScript config
```

---

## 📄 Pages & Routes

### Main Pages
- `/` — Homepage
- `/work` — Project portfolio listing
- `/kitchens` — Kitchen designs
- `/interiors` — Interior fit-outs overview

### Work Projects (Static Generated)
- `/work/jp-residence`
- `/work/meiyyappan-residence`
- `/work/villa16`
- `/work/vaishali-residence`

### Interior Categories
- `/interiors/puja-room`
- `/interiors/storage`
- `/interiors/tv-units`
- `/interiors/conference-tables`

**Total: 15 pages**

---

## 🛠 Tech Stack

### Core
- **Next.js 14** — React framework with App Router
- **React 18** — UI library
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling

### Animation & UX
- **Framer Motion** — Smooth animations
- **Lenis** — Smooth scroll
- Custom cursor implementation

### Additional
- **Lucide React** — Icons
- **Supabase** — Database (ready for integration)

---

## 🎨 Design System

### Colors
```css
#050509  /* bg-twc-charcoal - Primary dark */
#111111  /* bg-twc-dark - Secondary dark */
#F5F3EE  /* text-twc-warm - Text */
#999999  /* text-twc-grey - Labels */
#FF2B2B  /* text-twc-red - Accent */
```

### Typography
- **Display:** Playfair Display (headings)
- **Body:** Inter (body text)

### Key Utilities
- `container-wide` — Max 1800px responsive container
- `section-padding` — Vertical rhythm
- `noise-texture` — Subtle grain overlay

---

## 🏗 Key Features

### ✅ Next.js App Router
- File-based routing
- Server and client components
- Static generation (SSG) for project pages
- Automatic code splitting

### ✅ Performance
- Optimized bundle size
- Static page generation
- Image optimization ready
- Fast page loads

### ✅ SEO Ready
- Server-side rendering
- Metadata support
- Semantic HTML
- Static content

### ✅ Premium UX
- Smooth scroll (Lenis)
- Custom animated cursor
- Scroll-linked animations
- Responsive design

---

## 📦 Build Output

```
Route (app)                              Size     First Load JS
┌ ○ /                                    6.67 kB         132 kB
├ ○ /interiors                           2.32 kB         137 kB
├ ○ /interiors/conference-tables         2.46 kB         137 kB
├ ○ /interiors/puja-room                 2.46 kB         137 kB
├ ○ /interiors/storage                   2.49 kB         137 kB
├ ○ /interiors/tv-units                  2.47 kB         137 kB
├ ○ /kitchens                            2.78 kB         137 kB
├ ○ /work                                2.07 kB         137 kB
└ ● /work/[slug]                         2.28 kB         137 kB
    ├ /work/jp-residence
    ├ /work/meiyyappan-residence
    ├ /work/villa16
    └ /work/vaishali-residence

○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML
```

---

## 🔄 Migration from React SPA

This project was successfully migrated from a React SPA (Vite + react-router-dom) to Next.js 14.

**See:** `NEXTJS_MIGRATION.md` for full migration details.

### What Changed
- ❌ Removed `react-router-dom`
- ❌ Removed Vite build system
- ✅ Added Next.js 14 with App Router
- ✅ Updated all navigation to `next/link`
- ✅ Converted to server/client component architecture

### What Stayed
- ✅ All components unchanged
- ✅ All animations preserved
- ✅ Design system intact
- ✅ Smooth scroll working
- ✅ Custom cursor functional

---

## 📝 Development

### Adding New Pages

**1. Create a new route:**
```bash
mkdir -p app/new-page
touch app/new-page/page.tsx
```

**2. Create the page component:**
```tsx
export default function NewPage() {
  return (
    <div className="min-h-screen bg-twc-charcoal">
      <h1>New Page</h1>
    </div>
  );
}
```

**3. Add to navigation in `components/Navbar.tsx`**

### Adding New Components

Place in `components/` directory. Use `'use client'` if:
- Component uses React hooks
- Component uses Framer Motion
- Component needs browser APIs

---

## 🎯 Next Steps

1. **Replace placeholder images** with real TWC photography
2. **Update content** with actual project descriptions
3. **Add more projects** to `/work/[slug]`
4. **Integrate Supabase** for dynamic content
5. **Add contact form** functionality
6. **Set up analytics**
7. **Deploy** to Vercel/Netlify

---

## 📚 Documentation

- `NEXTJS_MIGRATION.md` — Migration details
- `ROUTES_DOCUMENTATION.md` — Complete route reference
- `QUICK_REFERENCE.md` — Design system guide
- `SITE_MAP.md` — Site structure

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the .next folder
```

### Manual
```bash
npm run build
npm run start
# Runs on port 3000
```

---

## ⚙️ Configuration

### Environment Variables
Create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

### Next.js Config
Edit `next.config.js` for:
- Image domains
- Redirects
- Headers
- Environment variables

---

## 📄 License

Private project — TWC Fit-Outs © 2025

---

## 🆘 Support

For issues or questions:
1. Check `TROUBLESHOOTING.md`
2. Review `NEXTJS_MIGRATION.md`
3. Check Next.js documentation

---

**Built with ❤️ using Next.js 14**
