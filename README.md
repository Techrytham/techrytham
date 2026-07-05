# Techrytham — Website

Next.js 14 + TypeScript + Tailwind CSS build of the Techrytham Figma design, with 3D-styled
icon badges and Framer Motion animations (scroll reveals, hero float, marquee, testimonial
transitions).

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animation)
- lucide-react (icons)

## Folder Structure
```
src/
  app/
    layout.tsx        # root layout, fonts, metadata
    page.tsx           # homepage, assembles all sections
    globals.css         # tailwind base + 3D/animation utility classes
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    sections/
      Hero.tsx
      Technologies.tsx
      Services.tsx
      WhyChooseUs.tsx
      Process.tsx
      Portfolio.tsx
      Testimonials.tsx
      About.tsx
      Contact.tsx
    ui/
      Button.tsx
      Eyebrow.tsx
      IconBadge3D.tsx   # 3D perspective icon badge used across cards
      Logo.tsx
      TechIcon.tsx
  data/
    siteData.ts          # all copy/content in one place, typed
  types/
    index.ts
public/
  images/                 # portfolio + avatar placeholder images (swap with real assets)
```

## Getting Started
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build for production
```bash
npm run build
npm start
```

## Notes
- All content lives in `src/data/siteData.ts` — edit text/links there instead of digging
  through components.
- Icon badges use a CSS `perspective` + `rotateX/Y` hover effect (`.icon-3d-wrap` /
  `.icon-3d` in `globals.css`) for the 3D look.
- Swap the placeholder SVGs in `public/images/` with real project screenshots and client
  photos from the Figma file.
- Respects `prefers-reduced-motion`.
