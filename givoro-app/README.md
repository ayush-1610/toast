# GIVORO Website

A Next.js + Tailwind CSS site for GIVORO, the on-ground marketing platform bridging real-world engagement and digital results.

## Project Structure

```
givoro-app/
├── public/
│   └── images/                 # hero.jpg, platform.jpg, etc. (placeholder assets)
├── src/
│   ├── pages/
│   │   ├── _app.js
│   │   ├── _document.js
│   │   ├── index.js            # Home: hero + high-level snapshots
│   │   ├── about.js            # About: Who We Are · What We Do · Why We Matter
│   │   ├── solutions/
│   │   │   └── index.js        # Solutions page
│   │   ├── platform.js         # Tech Platform: features + How It Works flow
│   │   ├── impact.js           # Impact: results delivered by the approach
│   │   ├── contact.js          # Contact form & company info
│   │   └── auth/
│   │       ├── login.js        # (Stub) Login page → external platform
│   │       └── signup.js       # (Stub) Sign Up page → external platform
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.js
│   │   │   ├── Header.js       # Nav links: Home · About · Solutions · Platform · Impact · Contact · Login/Sign Up
│   │   │   └── Footer.js
│   │   ├── hero/
│   │   │   └── Hero.js         # Hero section component (home page)
│   │   ├── about/
│   │   │   ├── WhoWeAre.js
│   │   │   ├── WhatWeDo.js
│   │   │   └── WhyWeMatter.js
│   │   ├── solutions/
│   │   │   ├── SolutionsGrid.js   # grid layout of four solution cards
│   │   │   └── SolutionCard.js    # individual solution card component
│   │   ├── platform/
│   │   │   ├── PlatformIntro.js   # introductory text for platform page
│   │   │   ├── FeatureList.js     # list of platform features
│   │   │   └── HowItWorks.js      # 5-step workflow of how the platform works
│   │   ├── impact/
│   │   │   └── ImpactPillars.js   # key impact pillars
│   │   └── forms/
│   │       └── ContactForm.js     # contact page form component
│   ├── styles/
│   │   ├── tailwind.css           # Tailwind base imports
│   │   └── globals.css            # Global custom CSS overrides
│   ├── utils/
│   │   └── fetcher.js             # (Example utility module)
│   └── lib/
│       └── analytics.js           # (Example analytics integration)
├── tailwind.config.js             # Tailwind theme configuration
├── postcss.config.js
├── next.config.js                 # Next.js configuration
└── README.md
```

## Design Tokens (Tailwind Theme)
- **Colors:**
  - `primary`: #FF6A00 (orange)
  - `secondary`: #125C77 (teal)
  - `accent`: #FECF0F (yellow)
  - Neutral: Tailwind gray
- **Fonts:**
  - Headings: Montserrat
  - Body: Inter
- **Spacing:**
  - Extended: 72 (18rem), 84 (21rem), 96 (24rem)
- **Border Radius & Shadow:**
  - Standardized for cards, buttons, etc.

## Development
- Run `npm install` to install dependencies.
- Use `npm run dev` to start the local dev server.
- All components and pages are modular and mapped to the content strategy.
- Use Tailwind utility classes for styling.

## Deployment
- Deploys via Vercel (recommended).
- Environment variables for sensitive data (see `.env.example`).
- Analytics stub in `src/lib/analytics.js`.

## Content & SEO
- Each page has unique meta title/description and Open Graph tags.
- Images use `next/image` for optimization.
- Accessibility and performance best practices are followed.

---

For more details, see the full project brief in the docs or contact the GIVORO team.
