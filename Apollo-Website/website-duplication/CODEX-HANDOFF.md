# 🤖 CODEX HANDOFF - Team Apollo Website Build

**PROJECT**: Pixel-perfect rebuild of Team Apollo website
**SOURCE**: https://uweteamapollo.framer.website/
**DOCUMENTATION LOCATION**: `/Users/shaansisodia/DEV/team-entrepreneurship/Apollo-Website/website-duplication/`

---

## 🎯 MISSION FOR CODEX

Build a pixel-perfect recreation of the Team Apollo website using React + TypeScript + Tailwind CSS + Framer Motion.

**All specifications are complete and ready for implementation.**

---

## 📋 WHAT'S BEEN PREPARED FOR YOU

### Complete Documentation Suite
1. ✅ **visual-content-inventory.md** - All content extracted from 10 screenshots
2. ✅ **component-specifications.md** - Pixel-perfect CSS specs for every component
3. ✅ **design-system.md** - Complete design tokens and system
4. ✅ **implementation-roadmap.md** - 11-phase build plan with detailed tasks
5. ✅ **QUICK-START.md** - Copy-paste starter code and setup commands
6. ✅ **SIDEBAR-CORRECTION.md** - ⚠️ CRITICAL: Correct sidebar implementation
7. ✅ **MOBILE-RESPONSIVE-SPECS.md** - Complete mobile/tablet specifications
8. ✅ **team-members-full.ts** - All 18 team members data (Freddie + Logan + 16 placeholders)

### Ready-to-Use Assets
- Color palette defined
- Typography system documented
- Component measurements specified
- All text content extracted
- Layout structure mapped
- Animation patterns defined
- **18 team members data ready** (2 real + 16 placeholders)
- **Mobile specs complete** (hamburger menu, bottom nav, responsive grids)

---

## 🚀 CODEX: START HERE

### Phase 1: Initialize Project (Execute First)

```bash
# Create new React + TypeScript project with Vite
npm create vite@latest team-apollo-rebuild -- --template react-ts

# Navigate into project
cd team-apollo-rebuild

# Install all dependencies
npm install tailwindcss postcss autoprefixer framer-motion @heroicons/react clsx

# Initialize Tailwind
npx tailwindcss init -p

# Start dev server to verify setup
npm run dev
```

### Phase 2: Install Additional Dependencies

```bash
# Install Swiper for About Ventures carousel
npm install swiper

# Install if needed
npm install @heroicons/react
```

### Phase 3: Configure Tailwind

**ACTION**: Replace the contents of `tailwind.config.js` with:

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
        'apollo-dark': '#1f1f1f',
        'apollo-blue': 'rgb(38, 148, 237)',
        'apollo-deep-blue': 'rgb(15, 59, 171)',
        'apollo-gray': '#2a2a2a',
        'apollo-sidebar-dark': '#2a2a2a',
        'apollo-border': '#3a3a3a',
        'apollo-text-secondary': '#a0a0a0',
        'apollo-text-tertiary': '#808080',
        'apollo-green': '#4ade80',
      },
      fontFamily: {
        'inter': ['Inter', 'Inter Display', 'Arial', 'sans-serif'],
        'manrope': ['Manrope', 'Arial', 'sans-serif'],
      },
      spacing: {
        'sidebar': '355px',
        'nav-width': '60px',
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'section': ['56px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'card-title': ['18px', { lineHeight: '1.4', letterSpacing: '0.05em' }],
      },
      borderRadius: {
        'card': '32px',
        'pill': '24px',
        'button': '28px',
      },
    },
  },
  plugins: [],
}
```

**ACTION**: Update `src/index.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Inter+Display:wght@300;400;500;600;700;800;900&family=Manrope:wght@600&display=swap');

body {
  margin: 0;
  font-family: 'Inter', 'Inter Display', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}
```

### Phase 3: Create Project Structure

**ACTION**: Create these directories and files:

```bash
mkdir -p src/components/layout
mkdir -p src/components/sections
mkdir -p src/components/ui
mkdir -p src/data
mkdir -p src/assets/images
mkdir -p src/types
```

---

## 📦 COMPONENT BUILD ORDER

### Build Components in This Exact Order:

#### 1. Data Files First (Copy from visual-content-inventory.md)

**CRITICAL FILES**:
1. `src/data/content.ts` - All text content
2. `src/data/team-members-full.ts` - All 18 team members (use this!)
3. `src/data/ventures-detailed.ts` - All 8 venture profiles for carousel (use this!)

**File**: `src/data/content.ts`

```typescript
export const sidebarContent = {
  location: "Based in Bristol, UWE",
  copyright: "© 2024 APOLLO. Open to connect always.",
  social: {
    linkedin: "#",
    instagram: "#"
  }
}

export const heroContent = {
  sectionLabel: "MEET THE TEAM",
  headline: "At Apollo, we're more than just a team - we're innovators and visionaries.",
  subtitle: "We are a team of 18 young entrepreneurs, currently studying Team Entrepreneurship at the University of the West of England."
}

export const ethosContent = {
  sectionLabel: "TEAM ETHOS",
  heading: "Apollo's Team Ethos",
  cards: [
    {
      icon: "target",
      title: "OUR TEAM MISSION",
      description: "To be a team of self-leaders and role models focussed on our exit strategy alongside team performance.",
      link: "Read more"
    },
    {
      icon: "bell",
      title: "OUR TEAM VISION",
      description: "To leave an impact within the team entrepreneurship and external communities for our academic and entrepreneurial achievements whilst supporting each other's exit strategy.",
      link: "Read more"
    },
    {
      icon: "crown",
      title: "OUR TEAM VALUES",
      description: "Our values are rooted in honesty and integrity, fostering a strong sense of community, and prioritizing both personal growth and peer development.",
      link: "Read more"
    }
  ]
}

export const timelineContent = {
  sectionLabel: "TIMELINE",
  heading: "Team Apollo Timeline",
  items: [
    {
      status: "upcoming",
      label: "Upcoming",
      events: [
        { title: "Frat Friday Event Night at Pams", date: "8th of November 2024" },
        { title: "UWE Poker Championship Tournament", details: "Undisclosed every Thursday, - Sunday 8PM" }
      ]
    },
    {
      status: "planned",
      label: "Our Plans",
      events: [
        { title: "Apollo Consulting Launch", details: "Official launch of Apollo Consulting services" },
        { title: "Pioneering Marketting Connections", details: "Affiliate Team" },
        { title: "A New Chapter with Exo", details: "New Education Standard" }
      ]
    },
    {
      status: "past",
      date: "24th September 2023",
      events: [
        { title: "Formation of the Apollo Team", location: "UWE BRISTOL" }
      ]
    }
  ]
}

export const venturesContent = {
  sectionLabel: "VENTURES",
  heading: "Our Team Ventures",
  ventures: [
    { id: 1, name: "Delta Sports Management", logo: "/ventures/delta.png", selected: false },
    { id: 2, name: "Frat Fridays", logo: "/ventures/frat-fridays.png", selected: true },
    { id: 3, name: "SISO SOLUTIONS", logo: "/ventures/siso.png", selected: false },
    { id: 4, name: "DORCH GARMS", logo: "/ventures/dorch.png", selected: false },
    { id: 5, name: "Lido", logo: "/ventures/lido.png", selected: false },
    { id: 6, name: "FAIRFEED", logo: "/ventures/fairfeed.png", selected: false },
    { id: 7, name: "Apollo Sports", logo: "/ventures/apollo-sports.png", selected: false },
    { id: 8, name: "Gaming", logo: "/ventures/gaming.png", selected: false }
  ]
}

export const contactContent = {
  sectionLabel: "CONTACT",
  heading: "Let's Work Together!",
  subtitle: "Feel you resonate with Apollo's vision? Reach out and share a bit about yourself. We're always eager to connect with individuals eager to shape the future with us. Contact the Apollo team today!",
  fields: [
    { name: "fullName", label: "FULL NAME", placeholder: "Your Full Name", type: "text" },
    { name: "email", label: "EMAIL", placeholder: "Your email address", type: "email" },
    { name: "phone", label: "PHONE", placeholder: "Your Phone Number", type: "tel" },
    { name: "subject", label: "SUBJECT", placeholder: "Select a Subject", type: "select" },
    { name: "budget", label: "YOUR BUDGET", placeholder: "A range budget for your project", type: "text" },
    { name: "message", label: "MESSAGE", placeholder: "Write Your Message here...", type: "textarea" }
  ]
}
```

**File**: `src/types/index.ts`

```typescript
export interface TeamMember {
  id: number
  name: string
  role: string
  roleType: 'dark' | 'blue'
  image: string
}

export interface Venture {
  id: number
  name: string
  logo: string
  selected?: boolean
}

export interface TimelineEvent {
  title: string
  date?: string
  details?: string
  location?: string
}

export interface TimelineItem {
  status: 'upcoming' | 'planned' | 'past'
  label?: string
  date?: string
  events: TimelineEvent[]
}

export interface EthosCard {
  icon: string
  title: string
  description: string
  link: string
}
```

#### 2. Layout Components

**File**: `src/components/layout/Sidebar.tsx`

**⚠️ CRITICAL: READ analysis/SIDEBAR-CORRECTION.md FIRST!**

**CODEX INSTRUCTION**: Build the sidebar as a FLOATING CARD (not full-height sidebar):
- **Outer container**:
  - Position: fixed
  - Left: 40px, Top: 40px, Bottom: 40px (margins on all sides!)
  - Width: 355px
- **Card itself**:
  - Border-radius: 32px (large rounded corners)
  - Box-shadow: 0 4px 24px rgba(0,0,0,0.12)
  - Overflow: hidden
  - Display: flex, flex-direction: column
- **Top section**: white background (#ffffff), padding: 60px 40px
  - Apollo logo (placeholder for now)
  - "APOLLO" heading (large, bold, navy)
  - "LEARNING ORGANISATION" subtext (small, spaced letters)
- **Bottom section**: dark background (#2a2a2a), padding: 40px, flex: 1
  - Location text: "Based in Bristol, UWE"
  - Copyright text
  - Social icons (LinkedIn, Instagram) - circular, bordered, margin-top: 32px
  - "CONNECT" button - full width, blue (#2684ed), rounded-full, margin-top: 32px

**Reference**: See `analysis/SIDEBAR-CORRECTION.md` for complete implementation

**File**: `src/components/layout/RightNavigation.tsx`

**⚠️ CRITICAL: READ analysis/ADDITIONAL-CORRECTIONS.md - Right Nav Section!**

**CODEX INSTRUCTION**: Build as a SINGLE VERTICAL PILL CONTAINER (not separate buttons):
- **Container**:
  - Position: fixed, right: 40px, top: 50%, transform: translateY(-50%)
  - Width: 60px
  - Background: rgba(42, 42, 42, 0.8) with backdrop-blur
  - Border-radius: 30px (pill shape)
  - Padding: 12px vertical
  - Display: flex, flex-direction: column, gap: 20px
- **Icons inside** (8 total):
  - Size: 24px each
  - Color: gray (default), blue (hover/active)
  - Icons: home, user, portfolio, documents, network, timeline, chat, email
- **Interactions**:
  - Smooth scroll to sections on click
  - Active section indicator (blue color)
  - Hover effect (scale + color change)

**Tailwind Implementation**:
```tsx
<nav className="fixed right-10 top-1/2 -translate-y-1/2 z-50
                bg-apollo-gray/80 backdrop-blur-md rounded-[30px] py-3
                flex flex-col items-center gap-5 w-[60px]">
  {/* 8 icon buttons */}
</nav>
```

**Reference**: See `analysis/ADDITIONAL-CORRECTIONS.md` for complete specs

**File**: `src/components/layout/Layout.tsx`

```typescript
import Sidebar from './Sidebar'
import RightNavigation from './RightNavigation'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-apollo-dark min-h-screen">
      <Sidebar />
      <RightNavigation />
      <main className="ml-sidebar px-20 max-w-[1400px]">
        {children}
      </main>
    </div>
  )
}
```

#### 3. UI Components (Reusable)

**File**: `src/components/ui/SectionLabel.tsx`

**CODEX INSTRUCTION**: Pill-shaped button component
- Props: icon (ReactNode), text (string)
- Styling: padding 12px 28px, border-radius 24px, border 1.5px solid #4a4a4a
- Icon + text with 10px gap
- Background: transparent

**Reference**: See `component-specifications.md` lines 222-240

**File**: `src/components/ui/ContentCard.tsx`

**CODEX INSTRUCTION**: Card with border and icon
- Props: icon, title, description, link
- Border: 1.5px solid #3a3a3a, border-radius 32px
- Padding: 48px, min-height: 280px
- Icon top-right corner (56px, blue color)
- Hover: border color changes to blue, slight lift (-4px)

**Reference**: See `component-specifications.md` lines 242-275

**File**: `src/components/ui/VentureCircle.tsx`

**CODEX INSTRUCTION**: Circular logo container
- Aspect ratio: 1:1 (square)
- Border-radius: 50% (circle)
- Border: 2px solid #3a3a3a (default), 3px solid blue (selected)
- Padding: 40px
- Logo centered inside
- Label below

**Reference**: See `component-specifications.md` lines 327-368

**File**: `src/components/ui/TeamMemberCard.tsx`

**CODEX INSTRUCTION**: Profile card with image and badge
- Border-radius: 24px
- Image: aspect-ratio 3:4, covers full width
- Badge: overlay on image (bottom center)
  - Dark variant: rgba(0,0,0,0.6)
  - Blue variant: rgb(38, 148, 237)
- Name below image, centered
- Hover: lift effect (-8px)

**Reference**: See `component-specifications.md` lines 370-408

**File**: `src/components/ui/TimelineItem.tsx`

**CODEX INSTRUCTION**: Timeline entry with dot and line
- Dot: 16px diameter, left-aligned
- Connecting line: 2px wide, vertical
- Colors: green (#4ade80) for upcoming, gray for others
- Status label, event title, date, details

**Reference**: See `component-specifications.md` lines 277-325

**File**: `src/components/ui/FormInput.tsx`

**CODEX INSTRUCTION**: Form input with variants (text, textarea, select)
- Background: transparent
- Border: 1.5px solid #3a3a3a
- Border-radius: 12px
- Padding: 16px 20px
- Focus: border changes to blue
- Label above (uppercase, small, gray)

**Reference**: See `component-specifications.md` lines 410-447

**File**: `src/components/ui/Button.tsx`

**CODEX INSTRUCTION**: Primary button component
- Background: rgb(38, 148, 237)
- Border-radius: 28px
- Padding: 16px 32px
- With optional icon
- Hover: scale(1.02) + shadow

**Reference**: See `component-specifications.md` lines 449-477

#### 4. Section Components

**File**: `src/components/sections/HeroSection.tsx`

**CODEX INSTRUCTION**:
- Use SectionLabel component with "MEET THE TEAM"
- Large headline (72px) with "Apollo" highlighted in blue
- Subtitle text (20px, gray)
- Minimum height: 100vh, centered vertically
- Use content from `heroContent` in data file

**File**: `src/components/sections/TeamEthosSection.tsx`

**CODEX INSTRUCTION**:
- Use SectionLabel with "TEAM ETHOS"
- Heading "Apollo's Team Ethos" ("Ethos" in blue)
- 3 ContentCard components in a row (or grid)
- Use content from `ethosContent` in data file
- Cards should have mission/vision/values data

**File**: `src/components/sections/TimelineSection.tsx`

**CODEX INSTRUCTION**:
- Use SectionLabel with "TIMELINE"
- Heading "Team Apollo Timeline"
- Map through timeline items from data
- Each TimelineItem component shows events
- Vertical layout with connecting line

**File**: `src/components/sections/VenturesSection.tsx`

**CODEX INSTRUCTION**:
- Use SectionLabel with "VENTURES"
- Heading "Our Team Ventures" ("Ventures" in blue)
- 4x2 grid of VentureCircle components (8 circular logos)
- Map through ventures from `data/content.ts`
- Show selected state on "Frat Fridays" (blue border)
- Grid: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4`

**File**: `src/components/sections/TeamSection.tsx`

**⚠️ IMPORTANT: This section shows ALL 18 team members!**

**CODEX INSTRUCTION**:
- Use SectionLabel with "PORTFOLIO"
- Heading "Meet The **Team**" ("Team" in blue)
- Full team photo (large, centered)
  - Label below: "The Whole Team"
  - Pagination dots (if multiple photos)
- Grid of 18 TeamMemberCard components
  - **CRITICAL**: Import from `data/team-members-full.ts` (18 members!)
  - Grid: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`
  - Each card: photo, name, role badge
  - Badges: "Venture Lead" (dark), "Academic Lead" (blue), etc.
- Map through ALL 18 members:
  ```tsx
  {teamMembers.map(member => (
    <TeamMemberCard key={member.id} {...member} />
  ))}
  ```

**File**: `src/components/sections/AboutVenturesSection.tsx`

**⚠️ CRITICAL: This is a CAROUSEL with 8 venture profiles!**

**CODEX INSTRUCTION**:
- Use SectionLabel with "ABOUT VENTURES"
- Heading: "Learn more about **our Teams Ventures** and how you can connect"
  - "our Teams Ventures" in blue
- **CAROUSEL/SLIDER** with 8 slides:
  - Install: `npm install swiper`
  - Import from `data/ventures-detailed.ts` (8 profiles!)
  - Each slide shows: VentureProfileCard
    - Avatar (circular)
    - Name
    - Title (e.g., "Director of Delta Sports Management")
    - Venture name (linked, blue)
    - Full description paragraph
  - Navigation: Left/right arrows
  - Pagination: "1 / 8" counter + dot indicators
  - Touch-enabled for mobile swipe

**Implementation**:
```tsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { ventureProfiles } from '@/data/ventures-detailed'

<Swiper
  modules={[Navigation, Pagination]}
  navigation
  pagination={{ type: 'fraction' }}
  slidesPerView={1}
  spaceBetween={50}
>
  {ventureProfiles.map(profile => (
    <SwiperSlide key={profile.id}>
      <VentureProfileCard {...profile} />
    </SwiperSlide>
  ))}
</Swiper>
```

**File**: `src/components/sections/ContactSection.tsx`

**CODEX INSTRUCTION**:
- Use SectionLabel with "CONTACT"
- Heading "Let's Work **Together!**" ("Together!" in blue)
- Subtitle text
- Form with 6 fields (use FormInput component)
- 2-column layout on desktop, single column on mobile
- Use responsive grid: `grid-cols-1 md:grid-cols-2`
- Submit button at bottom (full width)

#### 5. Main App Assembly

**File**: `src/App.tsx`

```typescript
import Layout from './components/layout/Layout'
import HeroSection from './components/sections/HeroSection'
import TeamEthosSection from './components/sections/TeamEthosSection'
import TimelineSection from './components/sections/TimelineSection'
import VenturesSection from './components/sections/VenturesSection'
import TeamSection from './components/sections/TeamSection' // 18 team members!
import AboutVenturesSection from './components/sections/AboutVenturesSection' // Carousel!
import ContactSection from './components/sections/ContactSection'

function App() {
  return (
    <Layout>
      <HeroSection />
      <TeamEthosSection />
      <TimelineSection />
      <VenturesSection />
      <TeamSection /> {/* 18 team member cards */}
      <AboutVenturesSection /> {/* 8-slide carousel */}
      <ContactSection />
    </Layout>
  )
}

export default App
```

---

## 🎨 CRITICAL STYLING NOTES FOR CODEX

### Colors (Use Exactly)
```css
--apollo-dark: #1f1f1f          /* Main background */
--apollo-blue: rgb(38, 148, 237) /* Brand accent */
--apollo-gray: #2a2a2a          /* Sidebar dark section */
--apollo-border: #3a3a3a        /* Card borders */
--apollo-text-secondary: #a0a0a0 /* Subtle text */
```

### Typography
```css
/* Hero headings */
font-size: 72px
line-height: 1.2
font-weight: 400

/* Section headings */
font-size: 56px
line-height: 1.2

/* Body text */
font-size: 16px
line-height: 1.6

/* Card titles (uppercase) */
font-size: 18px
font-weight: 600
letter-spacing: 0.05em
```

### Spacing
```css
/* Section margins */
margin-bottom: 120px

/* Container padding */
padding: 80px (horizontal)
padding: 60px (vertical sections)

/* Component spacing */
gap: 32px (card grids)
gap: 16px (icon lists)
```

### Animations (Use Framer Motion)
```typescript
// Fade in on scroll
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}

// Card hover
whileHover={{ y: -4 }}
transition={{ duration: 0.3 }}
```

---

## ✅ CODEX SUCCESS CRITERIA

Your build is successful when:
- [ ] All 7 sections render correctly
- [ ] Sidebar is fixed on left (355px wide)
- [ ] Right navigation is fixed (60px wide)
- [ ] Colors match exactly (#1f1f1f, rgb(38, 148, 237))
- [ ] Typography sizes are correct (72px hero, 56px sections, 16px body)
- [ ] All content from data files is displayed
- [ ] Cards have hover effects (border color change, lift)
- [ ] Smooth scrolling works
- [ ] Form inputs have focus states
- [ ] Layout is responsive (mobile-friendly)
- [ ] No console errors
- [ ] npm run build succeeds
- [ ] Lighthouse performance > 85

---

## 🚨 CRITICAL NOTES FOR CODEX

1. **SIDEBAR IS A CARD**: Read `SIDEBAR-CORRECTION.md` - it has margins and rounded corners!
2. **RIGHT NAV IS A PILL**: Single vertical pill container, NOT separate buttons! See `ADDITIONAL-CORRECTIONS.md`
3. **18 TEAM MEMBERS**: Use `data/team-members-full.ts` - must show ALL 18 in grid!
4. **8 VENTURE CAROUSEL**: Use `data/ventures-detailed.ts` with Swiper.js - pagination shows "1 / 8"!
5. **MOBILE-FIRST**: Read `MOBILE-RESPONSIVE-SPECS.md` for complete mobile layout
6. **Use TypeScript** - All files should be .tsx with proper types
7. **Use Tailwind classes** - Don't write custom CSS unless necessary
8. **Component structure** - One component per file
9. **Import data files** - Never hardcode content in components
10. **Framer Motion** - Use for all animations
11. **Responsive grids** - Use `grid-cols-2 md:grid-cols-3 lg:grid-cols-4` pattern
12. **Mobile nav** - Sidebar → hamburger, Right nav → bottom bar
13. **Accessibility** - Add proper ARIA labels, alt text
14. **Performance** - Lazy load images, use React.memo where needed

---

## 📚 REFERENCE DOCUMENTS

All detailed specifications are in:
- `/Users/shaansisodia/DEV/team-entrepreneurship/Apollo-Website/website-duplication/analysis/`

**Key files**:
1. `component-specifications.md` - Exact CSS for every component
2. `visual-content-inventory.md` - All text content extracted
3. `implementation-roadmap.md` - Phase-by-phase plan
4. `design-system.md` - Design tokens and patterns

---

## 🎯 EXECUTION CHECKLIST FOR CODEX

Execute in this order:

- [ ] **Step 1**: Initialize project with Vite + React + TypeScript
- [ ] **Step 2**: Install dependencies (Tailwind, Framer Motion, etc.)
- [ ] **Step 3**: Configure Tailwind with design tokens
- [ ] **Step 4**: Create project folder structure
- [ ] **Step 5**: Create data files (content.ts, types)
- [ ] **Step 6**: Build Sidebar component
- [ ] **Step 7**: Build RightNavigation component
- [ ] **Step 8**: Build Layout component
- [ ] **Step 9**: Build all UI components (SectionLabel, ContentCard, VentureCircle, etc.)
- [ ] **Step 10**: Build HeroSection
- [ ] **Step 11**: Build TeamEthosSection
- [ ] **Step 12**: Build TimelineSection
- [ ] **Step 13**: Build VenturesSection
- [ ] **Step 14**: Build ContactSection
- [ ] **Step 15**: Assemble App.tsx
- [ ] **Step 16**: Add animations with Framer Motion
- [ ] **Step 17**: Test responsiveness
- [ ] **Step 18**: Fix any TypeScript errors
- [ ] **Step 19**: Test build (npm run build)
- [ ] **Step 20**: Deploy to Vercel

---

## 💬 CODEX PROMPT TEMPLATE

When you're ready to hand this to Codex, use this prompt:

```
I need you to build a pixel-perfect recreation of the Team Apollo website.

CONTEXT:
- All specifications are complete and documented
- Documentation location: /Users/shaansisodia/DEV/team-entrepreneurship/Apollo-Website/website-duplication/
- Main handoff document: CODEX-HANDOFF.md (this file)

TECH STACK:
- React 18+ with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Framer Motion for animations

INSTRUCTIONS:
1. Read CODEX-HANDOFF.md completely
2. Follow the build order exactly as specified
3. Reference component-specifications.md for exact CSS
4. Use content from visual-content-inventory.md
5. Follow the 20-step execution checklist

START HERE:
Begin with Step 1 (Initialize project) in the CODEX-HANDOFF.md file.

Build each component following the specifications exactly. All colors, spacing, typography, and interactions are documented.

After completing each major component, verify it matches the specifications before moving to the next.

Let me know when you're ready to start, and I'll guide you through any questions.
```

---

## 🎬 START BUILDING

**Codex**: You have everything you need. Begin with Phase 1, Step 1 above.

All specifications are complete. All content is extracted. All measurements are documented.

**Time to build! 🚀**

---

*Documentation complete: 2025-10-22*
*Ready for Codex execution*
*Estimated build time: 6-8 hours*
