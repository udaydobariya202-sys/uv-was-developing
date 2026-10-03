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
- **Fonts**: Fraunces & Inter (via `next/font/google`)

## Features

- Calm editorial design system with warm paper background and deep indigo accent
- Fully responsive — mobile, tablet, and desktop
- Refined typography pairing Fraunces serif headlines with clean Inter body
- MOVIQ Cabs featured editorial case study showcase
- Project cards with technical architectural specifications
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

## Project Structure

```
app/
  layout.tsx        Root layout with SEO metadata and typography
  page.tsx          Portfolio page
  globals.css       Design system tokens and reset
components/
  Navigation.tsx    Fixed nav with mobile menu
  HeroSection.tsx   Editorial hero section
  WorkSection.tsx   Selected work section with project cards
  AboutSection.tsx  About and principles
  StackSection.tsx  Technology stack
  ProcessSection.tsx  Development workflow steps
  ContactSection.tsx  Contact CTAs and inquiry form
  Footer.tsx        Footer with back-to-top
  ui/
    Button.tsx      Reusable button and link component
    SectionHeading.tsx  Numbered section heading
    ProjectMedia.tsx    Calm abstract project media panel
    Reveal.tsx          Reusable animation wrapper
lib/
  data.ts           Typed portfolio data
```

## Build

```bash
npm run build
```

---

Built by [Uday Dobariya](https://github.com/udaydobariya202-sys) — UV WAS DEVELOPING by Uday Dobariya
