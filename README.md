# SENTHIL K // SWISS MONOLITH 2026
> **Production Software Engineering Portfolio & Systems Architecture Showcase**

[![Next.js 16](https://img.shields.io/badge/Next.js-16.3.3-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

A high-performance, monolithic engineering portfolio designed with uncompromising **Swiss International Typographic Style**, brutalist graphic composition, and modern full-stack web architectures.

---

## 🏛️ Design Philosophy & Core Principles

```text
┌─────────────────────────────────────────────────────────────┐
│                      SWISS MONOLITH                         │
│   "Simplicity is not the absence of clutter, but the       │
│    mastery of essential structure." — Max Bill              │
└─────────────────────────────────────────────────────────────┘
```

1. **Form Follows Function**: Strict information hierarchy, high-contrast monochrome tones with vibrant Swiss Blue (`#0038FF`) accents.
2. **Kinetic & Restrained Interaction**: 60 FPS geometric canvas orchestration and subtle 3D card tilt without gimmicks.
3. **Deterministic Systems**: Zero URL hash pollution during smooth navigation, optimized React rendering, and clean static generation.
4. **Data Isolation**: Zero hardcoded URLs or credentials in presentation components; all information flows through centralized configurations and typed data layers.

---

## ✨ Key Features

- **`SYSTEM_TELEMETRY // LIVE` Panel**:
  - Custom WebGL/2D geometric canvas with rotating Swiss cross, dynamic waveform generator, and live mouse coordinate tracker (`LOC: [X: 000 / Y: 000]`).
  - Ease-out animated metric counters (`2+ YRS EXP`, `6 CORE APPS`, `<50ms API LATENCY`, `100% TYPE SAFE`).
  - Selective 3D tilt tracking with smooth interpolation and reset physics.

- **`[ENGINEERING_THESIS]` Vol. 26 Card**:
  - Restored editorial thesis card with verified production engineering credentials.
  - Action buttons: `VIEW SHIPPED WORK ↓` (programmatic smooth scroll) & `DOWNLOAD RESUME ↓` (configured URL).

- **Top System Specification Ticker**:
  - Continuous publication-style ticker strip looping technical stack and system specifications.

- **`ENGINEERING CORE:` Continuous Flow**:
  - Seamless infinite marquee showcasing the core technologies across backend, cloud, and frontend.

- **6 Selected Shipped Projects with Interactive Sandboxes**:
  - **`[01] KARU`**: Film Workspace & Screenplay Studio — *Live typewriter screenplay simulator with dynamic backspacing.*
  - **`[02] VOXPULSE`**: ML Voice Attribute Inference Service — *16-bar real-time audio equalizer with stream toggle and latency telemetry.*
  - **`[03] NOTES`**: Task Tracking & Productivity Workspace — *Clickable interactive todo board with live state toggles.*
  - **`[04] FACE ANIMATE`**: 3D Face Animation & MediaPipe Studio — *Real-time facial landmark mesh simulator.*
  - **`[05] MOVIE UNIVERSE`**: Cinema & Actor Intelligence — *Interactive cinema database with IMDb-style rating metrics.*
  - **`[06] MIRO`**: Collaborative Whiteboard System — *Multiplayer vector canvas with live collaborating cursor presence.*

- **6-Domain Technical Matrix**:
  - Comprehensive skill breakdown: Languages, Backend & Distributed Services, Databases & Caching, Messaging & APIs, Cloud & DevOps, and Frontend & Mobile.

- **Direct Dispatch & Contact**:
  - Simplified communication directory with 1-click email copy to clipboard and toast feedback.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Static Generation) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with `@theme` CSS custom properties |
| **Animations** | [GSAP 3](https://greensock.com/gsap/) & [ScrollTrigger](https://greensock.com/scrolltrigger/) |
| **Typography** | `Space Grotesk`, `Plus Jakarta Sans`, `JetBrains Mono` via `next/font/google` |
| **Package Manager** | [pnpm](https://pnpm.io/) |

---

## 📁 Project Structure

```text
Project 2026/
├── public/                       # Static public assets
├── src/
│   ├── app/
│   │   ├── globals.css           # Swiss design system tokens, themes, typography, utilities
│   │   ├── layout.tsx            # Google fonts configuration, viewport, & SEO metadata
│   │   └── page.tsx              # Single-page monolithic composition
│   ├── components/
│   │   ├── interactions/
│   │   │   └── TiltCard.tsx      # Reusable 3D tilt component (touch & reduced-motion aware)
│   │   ├── layout/
│   │   │   ├── Footer.tsx        # Branded dark footer with back-to-top action
│   │   │   ├── Header.tsx        # Sticky blur header with scroll spy and mobile drawer
│   │   │   ├── ScrollProgress.tsx# Top scroll progress bar
│   │   │   └── TopTicker.tsx     # Continuous top status ticker strip
│   │   ├── sections/
│   │   │   ├── AboutSection.tsx  # Statement of craft & 4 engineering pillars
│   │   │   ├── ContactSection.tsx# Direct directory dispatch with 1-click copy
│   │   │   ├── ExperienceSection.tsx # Mako IT Lab professional timeline & achievements
│   │   │   ├── HeroSection.tsx   # Masked title, thesis card, telemetry, marquee & specs
│   │   │   ├── SkillsSection.tsx # 6-domain technical capability matrix
│   │   │   └── WorkSection.tsx   # 6 Shipped projects with live interactive mockup sandboxes
│   │   └── ui/
│   │       ├── SystemTelemetry.tsx # Canvas geometric scene, coordinates & stat counters
│   │       ├── TechMarquee.tsx   # Engineering Core continuous flow marquee
│   │       └── Toast.tsx         # Floating notification toast
│   ├── config/
│   │   └── site.ts               # Centralized configuration consuming environment variables
│   ├── data/
│   │   ├── experience.ts         # Career timeline and achievement data model
│   │   ├── projects.ts           # 6 curated GitHub projects data model
│   │   └── skills.ts             # 6-domain skill matrix data model
│   └── hooks/
│       ├── useGSAPAnimations.ts  # Master entrance timeline and ScrollTrigger lifecycle hook
│       └── useTilt.ts            # Physics-based 3D tilt hook
├── .env.example                  # Environment variables template
├── .env.local                    # Local development configuration
├── .npmrc                        # Package manager security policies
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # Strict TypeScript configuration
└── README.md                     # Documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or higher
- **pnpm**: `v10.x` or `v11.x`

### 1. Clone & Navigate

```bash
git clone https://github.com/senthil-karthikeyan/portfolio.git
cd "portfolio/Project 2026"
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Variables Setup

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Configure your URLs in `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://senthilk.dev
NEXT_PUBLIC_GITHUB_URL=https://github.com/senthil-karthikeyan
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/senthil-karthikeyan
NEXT_PUBLIC_EMAIL=senthil.karthikeyan.official@gmail.com
NEXT_PUBLIC_RESUME_URL=https://drive.google.com/file/d/1gIBxtTei0W7s5kZOJB685pP8Oj9G7pUc/view?usp=drive_link
```

### 4. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build & Validation

To create an optimized, static production build:

```bash
# Build the application
pnpm build

# Run the production server locally
pnpm start
```

---

## 👤 Author

**Senthil K** — Software Engineer
- **GitHub**: [@senthil-karthikeyan](https://github.com/senthil-karthikeyan)
- **LinkedIn**: [in/senthil-karthikeyan](https://www.linkedin.com/in/senthil-karthikeyan)
- **Email**: [senthil.karthikeyan.official@gmail.com](mailto:senthil.karthikeyan.official@gmail.com)

---

## 📄 License

MIT © [Senthil K](https://github.com/senthil-karthikeyan)
