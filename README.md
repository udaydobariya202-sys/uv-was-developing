# UV WAS DEVELOPING

Personal portfolio of **Uday Dobariya** — Flutter developer, full-stack app developer, and AI product builder based in Rajkot, Gujarat, India.

> "I build digital products that feel clear, capable, and alive."

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist (via `next/font`)

## Features

- Dark cinematic design with ultraviolet brand identity
- Fully responsive — mobile, tablet, and desktop
- Animated hero with UV visual orb
- App screenshot showcase with CSS phone frames
- Project cards with case study modals
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

Built by [Uday Dobariya](https://github.com/udaydobariya202-sys) — UV Was Developing
