# CONTENT_TODO.md — Content Items Pending

This file tracks all placeholder content and missing data that needs to be
provided before the website is fully production-ready.

## ⚠️ HIGH PRIORITY — Must be added before launch

### Instructor Photo
- **Where:** Hero section (right column placeholder), About section
- **Spec:** High-quality portrait photo (min 800×1000px), preferably professional headshot
- **File:** Save as `public/images/instructor.webp` (convert to WebP for performance)
- **Status:** ❌ Not provided

### Logo
- **Where:** Header, Footer, Open Graph image
- **Spec:** SVG or PNG with transparent background (min 200×60px)
- **File:** Save as `public/images/logo.svg`
- **Status:** ❌ Not provided

---

## 🟡 MEDIUM PRIORITY — Improve credibility and conversions

### Real Student Testimonials
- **Where:** Could add a Testimonials section between Experience and FAQ
- **Spec:** Student first name, short quote, approximate context (e.g., "working professional")
- **Status:** ❌ No testimonials provided (section omitted to avoid fabrication)

### Classroom / Environment Photos
- **Where:** About section, Experience section, or a gallery
- **Spec:** 3–5 high-quality photos of the classroom, group sessions, etc.
- **Status:** ❌ Not provided

### Social Media URLs
- **Where:** Footer social links
- **Data needed:** Instagram, Facebook, YouTube links (if any)
- **Status:** ❌ Not provided

---

## 🟢 LOW PRIORITY — Nice-to-have for future updates

### Google Maps Precise Coordinates
- **Current:** Using address-based Google Maps embed
- **Better:** Exact lat/long for precise pin placement
- **Status:** ⚠️ Using approximate coordinates in JSON-LD (23.1815, 79.9864)

### Batch Timings / Schedule
- **Where:** Could add to Classes section or a dedicated Schedule section
- **Constraint:** NOT displayed currently (per strict constraints — no fake timings)
- **Status:** ❌ Not provided

### Fee Structure / Pricing
- **Where:** Could add a Pricing section
- **Constraint:** NOT displayed currently (not provided, cannot fabricate)
- **Status:** ❌ Not provided

### Open Graph Image
- **Where:** Social media link previews
- **Spec:** 1200×630px branded image with business name and tagline
- **File:** Save as `public/images/og-image.jpg`
- **Status:** ❌ Not created (needs logo/branding first)

---

## How to Update Content

1. Replace placeholder content in `src/lib/constants.ts` for any data changes
2. Add images to `public/images/` directory
3. Update component files directly for structural changes
4. Run `npm run build` to verify no errors before deploying
