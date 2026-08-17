# Rajeev Spoken English Classes — Website

A production-ready, conversion-optimized marketing website for **Rajeev Spoken English Classes**, a local spoken English coaching institute in Adhartal, Jabalpur, Madhya Pradesh.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes) (Dark/Light mode)
- **Fonts:** Plus Jakarta Sans (display) + Inter (body) via Google Fonts
- **Deployment:** [Vercel](https://vercel.com/) Free Tier

## 📋 Features

- ✅ **Mobile-First Design** with sticky WhatsApp/Call/Directions bar
- ✅ **Dark/Light Mode** with system preference detection
- ✅ **Local SEO Optimized** — meta tags, Open Graph, JSON-LD schema
- ✅ **Conversion-Focused** — prominent WhatsApp, Call, and Directions CTAs
- ✅ **Accessibility** — keyboard navigation, ARIA labels, focus states, contrast compliance
- ✅ **Performance** — lazy loading, optimized fonts, minimal JS
- ✅ **Responsive** — works on all devices from 320px to 4K
- ✅ **No Fabricated Content** — all data sourced from provided business facts

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.18+ 
- npm 9+

### Installation

```bash
cd rajeev-spoken-english
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## 🌐 Deployment (Vercel)

1. Push the `rajeev-spoken-english` folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — click **Deploy**
4. Custom domain: Configure `rajeevspokenenglish.vercel.app` (or your own domain)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Design system & Tailwind config
│   ├── layout.tsx       # Root layout (SEO, fonts, schema)
│   └── page.tsx         # Landing page
├── components/
│   ├── Header.tsx       # Sticky navigation
│   ├── Hero.tsx         # Hero section with CTAs
│   ├── TrustBar.tsx     # Rating & social proof
│   ├── About.tsx        # About the institute
│   ├── Classes.tsx      # Skill areas covered
│   ├── Experience.tsx   # Classroom experience
│   ├── FAQ.tsx          # Frequently asked questions
│   ├── Contact.tsx      # Contact details & map
│   ├── Footer.tsx       # Site footer
│   ├── MobileActions.tsx # Sticky mobile CTA bar
│   ├── ThemeProvider.tsx # Dark/light mode provider
│   └── ThemeToggle.tsx  # Theme switcher button
└── lib/
    ├── constants.ts     # Business data (single source of truth)
    └── utils.ts         # Utility helpers
```

## 📝 Content Updates

All business data is centralized in `src/lib/constants.ts`. To update:

- **Phone numbers:** Edit `phone1`, `phone2`, `whatsappNumber`
- **Address:** Edit the `address` object
- **FAQ answers:** Edit the `FAQ_DATA` array
- **Skills:** Edit the `SKILL_AREAS` array

See `CONTENT_TODO.md` for a list of placeholder content that needs real data.

## 📊 SEO

- **Target keywords:** "Spoken English Classes in Adhartal/Jabalpur"
- **Schema markup:** LocalBusiness + EducationalOrganization JSON-LD
- **Open Graph:** Configured for rich social media previews
- **Canonical URL:** https://rajeevspokenenglish.vercel.app

## 🎨 Design System

| Token | Light | Dark |
|---|---|---|
| Primary | `#4F46E5` (Indigo) | Same |
| Accent | `#F59E0B` (Amber) | Same |
| Background | `#FAFAF9` | `#0F172A` |
| Surface | `#FFFFFF` | `#1E293B` |
| Text | `#1E293B` | `#F1F5F9` |

## License

© 2026 Rajeev Spoken English Classes. All rights reserved.
