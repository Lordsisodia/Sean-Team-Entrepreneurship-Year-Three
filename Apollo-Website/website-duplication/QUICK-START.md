# Quick Start Guide - Build Team Apollo Website

## 🚀 30-Second Start

```bash
# 1. Create project
npm create vite@latest team-apollo-site -- --template react-ts
cd team-apollo-site

# 2. Install dependencies
npm install tailwindcss postcss autoprefixer framer-motion @heroicons/react
npx tailwindcss init -p

# 3. Start dev server
npm run dev
```

## 📋 Pre-Build Checklist

### Assets You Need
- [ ] Apollo logo (SVG)
- [ ] 18 team member photos
- [ ] Full team group photo
- [ ] 8 venture logos
- [ ] Social media links

### Decisions to Make
- [ ] Tech stack confirmed? (React + Tailwind recommended)
- [ ] Deployment platform? (Vercel recommended)
- [ ] Form submission service? (EmailJS/Formspree)
- [ ] Domain name?

## ⚡ Speed Build Path (Minimum Viable)

**Goal**: Working prototype in 1 day

### Hour 1-2: Setup + Sidebar
```bash
# Setup
npm create vite@latest apollo-minimal -- --template react-ts
cd apollo-minimal
npm install tailwindcss framer-motion
npx tailwindcss init -p

# Configure tailwind.config.js
# Add design tokens from docs
# Build Sidebar component
```

### Hour 3-4: Hero + Navigation
```bash
# Build Hero section
# Build Right Navigation
# Setup scroll behavior
```

### Hour 5-6: Main Sections
```bash
# Build Team Ethos cards
# Build Timeline
# Build Ventures grid
```

### Hour 7-8: Polish + Deploy
```bash
# Add animations
# Test responsive
# Deploy to Vercel
```

## 🎨 Essential Design Tokens

Copy this into your `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'apollo': {
          'dark': '#1f1f1f',
          'blue': 'rgb(38, 148, 237)',
          'deep-blue': 'rgb(15, 59, 171)',
          'gray': '#2a2a2a',
          'border': '#3a3a3a',
          'text-secondary': '#a0a0a0',
        },
      },
      fontFamily: {
        'inter': ['Inter', 'Inter Display', 'Arial', 'sans-serif'],
        'manrope': ['Manrope', 'Arial', 'sans-serif'],
      },
      spacing: {
        'sidebar': '355px',
      },
      fontSize: {
        'hero': '72px',
        'section': '56px',
      },
      borderRadius: {
        'card': '32px',
        'pill': '24px',
      },
    },
  },
  plugins: [],
}
```

## 📦 Essential npm Packages

```bash
# Core
npm install react react-dom
npm install typescript @types/react @types/react-dom

# Styling
npm install tailwindcss postcss autoprefixer

# Animations
npm install framer-motion

# Icons (optional - can use SVGs)
npm install @heroicons/react

# Forms (choose one)
npm install @emailjs/browser     # Option A: EmailJS
npm install @formspree/react     # Option B: Formspree

# Utils
npm install clsx                 # For conditional classes
```

## 🏗️ Minimal Project Structure

```
src/
├── components/
│   ├── Sidebar.tsx              # Start here
│   ├── RightNav.tsx             # Then this
│   ├── Hero.tsx                 # Then sections
│   ├── TeamEthos.tsx
│   └── Contact.tsx
├── data/
│   └── content.ts               # All text content
├── App.tsx
└── main.tsx
```

## 🎯 Build Order (Priority)

1. **Sidebar** (1-2 hours)
   - Logo section
   - Social icons
   - Connect button

2. **Hero** (30 mins)
   - Large heading
   - Subtitle text

3. **Team Ethos Cards** (1 hour)
   - 3 cards with borders
   - Icons + text

4. **Right Navigation** (1 hour)
   - Icon menu
   - Scroll behavior

5. **Timeline** (1 hour)
   - Vertical layout
   - Dots + connecting line

6. **Ventures Grid** (1 hour)
   - Circular logos
   - 4x2 grid

7. **Contact Form** (2 hours)
   - Form fields
   - Validation
   - Submission

8. **Polish** (2-3 hours)
   - Animations
   - Hover states
   - Responsive

## 🔥 Copy-Paste Starter Code

### App.tsx
```tsx
import Sidebar from './components/Sidebar'
import RightNav from './components/RightNav'
import Hero from './components/Hero'
import TeamEthos from './components/TeamEthos'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-apollo-dark min-h-screen">
      <Sidebar />
      <RightNav />
      <main className="ml-sidebar px-20">
        <Hero />
        <TeamEthos />
        {/* Add more sections */}
        <Contact />
      </main>
    </div>
  )
}

export default App
```

### Sidebar.tsx (Starter)
```tsx
export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 w-sidebar h-screen">
      {/* Logo Section */}
      <div className="bg-white p-16 h-[500px]">
        <img src="/logo.svg" alt="Apollo" className="w-48" />
        <h1 className="text-4xl font-bold text-apollo-dark mt-4">
          APOLLO
        </h1>
        <p className="text-xs tracking-widest mt-2">
          LEARNING ORGANISATION
        </p>
      </div>

      {/* Footer Section */}
      <div className="bg-apollo-gray p-10 flex-1">
        <p className="text-white text-lg mb-2">Based in Bristol, UWE</p>
        <p className="text-apollo-text-secondary text-sm">
          © 2024 APOLLO. Open to connect always.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-8">
          <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center">
            {/* LinkedIn Icon */}
          </a>
          <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center">
            {/* Instagram Icon */}
          </a>
        </div>

        {/* Connect Button */}
        <button className="w-full bg-apollo-blue text-white py-4 rounded-full mt-8 font-semibold">
          ✉️ CONNECT
        </button>
      </div>
    </aside>
  )
}
```

### Hero.tsx (Starter)
```tsx
export default function Hero() {
  return (
    <section className="py-32 min-h-screen flex flex-col justify-center">
      {/* Section Label */}
      <button className="inline-flex items-center gap-2 px-7 py-3 rounded-pill border border-apollo-border text-white mb-12">
        🏠 MEET THE TEAM
      </button>

      {/* Headline */}
      <h1 className="text-hero leading-tight mb-8">
        At <span className="text-apollo-blue">Apollo</span>, we're
        more than just a team - we're innovators and visionaries.
      </h1>

      {/* Subtitle */}
      <p className="text-xl text-apollo-text-secondary max-w-3xl">
        We are a team of 18 young entrepreneurs, currently studying Team
        Entrepreneurship at the University of the West of England.
      </p>
    </section>
  )
}
```

## 🎬 Animation Starter

```tsx
import { motion } from 'framer-motion'

// Fade in on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>

// Card hover
<motion.div
  whileHover={{ y: -4, borderColor: 'rgb(38, 148, 237)' }}
  transition={{ duration: 0.3 }}
>
  {/* Card content */}
</motion.div>
```

## 🚀 Deploy to Vercel (1 minute)

```bash
# Install Vercel CLI
npm i -g vercel

# Build and deploy
npm run build
vercel

# Follow prompts, done!
```

## 📱 Quick Responsive Test

```bash
# Test these viewports in DevTools
- 1920px (Desktop XL)
- 1440px (Desktop)
- 1024px (Tablet)
- 768px (iPad)
- 375px (iPhone)
```

## ✅ Launch Checklist

- [ ] All sections built
- [ ] Images loaded
- [ ] Form works
- [ ] Mobile responsive
- [ ] Links functional
- [ ] Build succeeds (`npm run build`)
- [ ] Lighthouse score 90+
- [ ] Deployed

## 🆘 Common Issues

**Tailwind not working?**
```bash
# Make sure you have these files:
tailwind.config.js
postcss.config.js

# And in src/index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Fonts not loading?**
```html
<!-- Add to index.html <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@600&display=swap" rel="stylesheet">
```

**Images not showing?**
```typescript
// Put images in public/ folder
<img src="/images/logo.svg" alt="Logo" />

// Or import directly
import logo from './assets/logo.svg'
<img src={logo} alt="Logo" />
```

## 💡 Pro Tips

1. **Build mobile-first** - Easier to scale up than down
2. **Use component library** - Build reusable components
3. **Test early, test often** - Don't wait until the end
4. **Commit frequently** - Git is your friend
5. **Deploy preview branches** - Use Vercel/Netlify preview URLs

## 🎯 Success in 1 Day Challenge

**Morning** (4 hours):
- ✅ Setup + Sidebar
- ✅ Hero + Navigation
- ✅ 2-3 main sections

**Afternoon** (4 hours):
- ✅ Remaining sections
- ✅ Form functionality
- ✅ Basic responsive

**Result**: Working prototype deployed!

---

**Need detailed specs?** → See `implementation-roadmap.md`
**Need exact measurements?** → See `component-specifications.md`
**Need content?** → See `visual-content-inventory.md`

---

*Let's build something amazing! 🚀*
