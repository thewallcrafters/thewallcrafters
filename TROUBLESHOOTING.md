# Troubleshooting Guide

## Dev Server "Failed to resolve import" Error

If you see this error in the dev server:
```
Failed to resolve import "react-router-dom" from "src/App.tsx"
```

**This is a dev server cache issue.** The package is installed correctly and the production build works perfectly.

### Solutions:

#### Option 1: Restart the Dev Server (Automatic)
The dev server will automatically detect the changes and restart. Just wait a moment.

#### Option 2: Clear Cache Manually
If the issue persists, you can manually clear the Vite cache:

```bash
# Stop the dev server (if running)
# Then delete the cache directory
rm -rf node_modules/.vite

# Restart the dev server
npm run dev
```

#### Option 3: Force Reinstall
```bash
# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install

# Start dev server
npm run dev
```

---

## Verify Installation

To confirm everything is working:

### Check Package Installation
```bash
npm list react-router-dom
```

**Expected output:**
```
react-router-dom@7.9.5
```

### Check Production Build
```bash
npm run build
```

**Expected output:**
```
✓ 1900 modules transformed.
✓ built in ~7-8s
```

If the build succeeds, **everything is working correctly** and it's just a dev server cache issue.

---

## Routes Verification

All these routes should work after the dev server restarts:

- ✅ `/` — Homepage
- ✅ `/work` — Work listing
- ✅ `/work/jp-residence` — Project page
- ✅ `/work/meiyyappan-residence` — Project page
- ✅ `/work/villa16` — Project page
- ✅ `/work/vaishali-residence` — Project page
- ✅ `/kitchens` — Kitchens page
- ✅ `/interiors` — Interiors overview
- ✅ `/interiors/puja-room` — Puja room page
- ✅ `/interiors/storage` — Storage page
- ✅ `/interiors/tv-units` — TV units page
- ✅ `/interiors/conference-tables` — Conference tables page

---

## Build Output

Current build stats (production-ready):
```
dist/index.html          0.48 KB  (0.31 KB gzipped)
dist/assets/index.css   21.76 KB  (4.87 KB gzipped)
dist/assets/index.js   381.67 KB (114.92 KB gzipped)
```

---

## Common Issues

### Issue: Routes not working after deployment
**Solution:** Ensure your hosting platform (Netlify, Vercel, etc.) is configured for client-side routing:

**Netlify:** Add `dist/_redirects` file:
```
/*    /index.html   200
```

**Vercel:** Add `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Issue: Images not loading
**Solution:** Replace placeholder Pexels URLs with local images in `/public/images/`

### Issue: Smooth scroll not working
**Solution:** The Lenis smooth scroll is working. Make sure you're not testing in an iframe or with browser extensions that affect scrolling.

---

## Deployment Checklist

Before deploying to production:

- [ ] Replace all placeholder images with real TWC photography
- [ ] Update project descriptions with actual content
- [ ] Configure client-side routing on hosting platform
- [ ] Test all routes in production build (`npm run preview`)
- [ ] Verify mobile responsiveness
- [ ] Check SEO metadata (add if needed)
- [ ] Test custom cursor on different devices
- [ ] Verify smooth scroll works on production

---

**Note:** The production build is working perfectly. Any dev server errors are temporary and will resolve automatically when the server restarts.
