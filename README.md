# UV WAS DEVELOPING
### by Uday Dobariya

Personal portfolio of **Uday Dobariya** — Flutter Developer & Full-Stack Product Builder working independently under **UV WAS DEVELOPING**.

> "I build production-ready Flutter apps and full-stack digital products."

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist (via `next/font`)

## Features

- UV Print Lab aesthetic with Paper and UV Lamp modes
- Fully responsive — mobile, tablet, and desktop
- Editorial headline typography with registration drift and spot ink accents
- MOVIQ Cabs featured Android proof sheet with live interface capture
- Project cards with architectural blueprints
- Accessible navigation with mobile menu
- SEO-optimised metadata and Open Graph tags
- Static export ready

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

## Adding App Screenshots

Place Flutter app screenshots in:

```
public/images/apps/moviq/moviq-home.webp
public/images/apps/terracast.png
public/images/apps/udaya-ai.png
```

CSS phone frame placeholders are shown until the real images are added.

## Project Structure

```
app/
  layout.tsx        Root layout with SEO metadata
  page.tsx          Portfolio page
  globals.css       Design system and CSS variables
components/
  Navigation.tsx    Fixed nav with mobile menu
  HeroSection.tsx   Animated hero section
  AppShowcaseSection.tsx  Phone mockup showcase
  WorkSection.tsx   Project cards grid
  AboutSection.tsx  About and values
  StackSection.tsx  Technology stack
  ProcessSection.tsx  Work process steps
  ContactSection.tsx  Contact CTAs
  Footer.tsx        Footer with back-to-top
  ui/
    Button.tsx      Reusable button component
    SectionHeading.tsx  Animated section heading
lib/
  data.ts           Typed portfolio data
public/
  images/apps/      App screenshots (add your own)
```

## Build

```bash
npm run build
```

---

Built by [Uday Dobariya](https://github.com/udaydobariya202-sys) — UV WAS DEVELOPING by Uday Dobariya
