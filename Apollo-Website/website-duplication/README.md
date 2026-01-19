# Team Apollo Website Duplication Project

Complete analysis and specifications for pixel-perfect rebuild of https://uweteamapollo.framer.website/

## 📋 Project Overview

**Source**: Team Apollo Framer Website
**Goal**: Pixel-perfect duplication with custom implementation
**Timeline**: 9-10 days (solo) | 5-6 days (team of 2)
**Tech Stack**: React + TypeScript + Tailwind CSS + Framer Motion

## 📁 Documentation Structure

```
website-duplication/
├── README.md (this file)
├── screenshots/ (10 screenshots organized by section)
├── analysis/
│   ├── design-system.md          # Colors, typography, layout basics
│   ├── component-specifications.md # Detailed component specs
│   ├── visual-content-inventory.md # All content extracted
│   └── implementation-roadmap.md   # 11-phase build plan
├── design-specs/ (placeholder for detailed measurements)
└── implementation/ (placeholder for actual code)
```

## 🎨 Key Design Elements

### Color Palette
- **Primary Background**: `#1f1f1f` (dark charcoal)
- **Accent Blue**: `rgb(38, 148, 237)` (Apollo brand color)
- **Deep Blue**: `rgb(15, 59, 171)` (secondary accent)
- **Sidebar Light**: `#ffffff` (logo section)
- **Sidebar Dark**: `#2a2a2a` (info section)

### Typography
- **Primary**: Inter, Inter Display
- **Secondary**: Manrope (weight: 600)
- **Hero**: 72px, light weight
- **Headings**: 56px, regular weight
- **Body**: 16px, line-height 1.6

### Layout
- **Sidebar**: 355px fixed left
- **Right Nav**: 60px fixed right (vertical)
- **Content Area**: Margin-left 355px, padding 80px horizontal
- **Max Width**: 1400px content container

## 📱 Sections Breakdown

1. **Hero** - "At Apollo, we're more than just a team..."
2. **Team Ethos** - Mission, Vision, Values cards
3. **Timeline** - Vertical timeline with events
4. **Ventures** - 4x2 grid of circular venture logos
5. **Team** - Group photo + individual member cards
6. **About Ventures** - Featured venture descriptions
7. **Contact** - Full contact form

## 🔧 Tech Stack (Recommended)

```json
{
  "framework": "React 18+ with TypeScript",
  "styling": "Tailwind CSS",
  "animations": "Framer Motion",
  "routing": "React Router (optional for single-page)",
  "build": "Vite",
  "deployment": "Vercel/Netlify"
}
```

## 🚀 Quick Start

### Option 1: Start from Scratch
```bash
# Create new Vite project
npm create vite@latest apollo-website -- --template react-ts
cd apollo-website

# Install dependencies
npm install tailwindcss postcss autoprefixer framer-motion
npx tailwindcss init -p

# Start development
npm run dev
```

### Option 2: Use Existing Apollo-Website Directory
```bash
# If starting in current directory
cd /Users/shaansisodia/DEV/team-entrepreneurship/Apollo-Website

# Follow Phase 1 in implementation-roadmap.md
```

## 📖 Documentation Files

### 1. design-system.md
- Complete design token extraction
- Color system
- Typography scale
- Responsive breakpoints
- Component patterns
- Animation principles

### 2. component-specifications.md
- Pixel-perfect measurements for every component
- CSS specifications
- Hover states and interactions
- Spacing systems
- Detailed breakdowns of:
  - Sidebar
  - Right Navigation
  - Section Labels
  - Content Cards
  - Venture Circles
  - Team Member Cards
  - Timeline Items
  - Form Inputs
  - Buttons

### 3. visual-content-inventory.md
- Complete text content extracted
- All headlines, body copy, labels
- Button text
- Form field labels
- Navigation items
- Social links
- Copyright info

### 4. implementation-roadmap.md
- 11-phase development plan
- Detailed task breakdowns
- Timeline estimates
- Success criteria
- Testing checklist
- Deployment guide

## 🎯 Implementation Phases

| Phase | Focus | Duration |
|-------|-------|----------|
| 1 | Foundation Setup | 0.5 days |
| 2 | Core Layout | 1 day |
| 3 | UI Components | 1 day |
| 4 | Sections | 2 days |
| 5 | Data Integration | 0.5 days |
| 6 | Animations | 1 day |
| 7 | Responsive | 1 day |
| 8 | Form | 0.5 days |
| 9 | Performance | 0.5 days |
| 10 | Testing | 1 day |
| 11 | Deployment | 0.5 days |

**Total**: 9-10 days

## ✅ Success Metrics

- **Visual Accuracy**: 98%+ match to original
- **Performance**: Lighthouse score 90+
- **Accessibility**: WCAG AA compliant
- **Responsive**: Perfect on all devices (320px - 1920px+)
- **Loading**: < 3 seconds on 3G
- **Animation**: Smooth 60fps

## 🔗 Key Components to Build

### Layout Components
- [x] Sidebar (logo + social + connect button)
- [x] Right Navigation (vertical icon menu)
- [x] Main Layout Container

### UI Components
- [x] Section Label (pill buttons)
- [x] Content Card (with icon, title, description)
- [x] Venture Circle (circular logo containers)
- [x] Team Member Card (image + badge + name)
- [x] Timeline Item (dot + line + content)
- [x] Form Input (text/textarea/select variants)
- [x] Button (primary/secondary variants)

### Section Components
- [x] Hero Section
- [x] Team Ethos Section (3 cards)
- [x] Timeline Section (vertical timeline)
- [x] Ventures Section (8 circle grid)
- [x] Team Section (group photo + individuals)
- [x] About Ventures Section (featured cards)
- [x] Contact Section (form)

## 📊 Assets Needed

### Images Required
- [ ] Apollo logo (SVG preferred)
- [ ] Team member photos (18 individuals)
- [ ] Full team group photo
- [ ] Venture logos (8 ventures):
  - Delta Sports Management
  - Frat Fridays
  - SISO SOLUTIONS
  - DORCH GARMS
  - Lido (?)
  - FAIRFEED
  - Apollo Sports
  - Gaming venture
- [ ] Social icons (LinkedIn, Instagram)
- [ ] Navigation icons (8 icons)

### Content Required
- [ ] All text content (copy from visual-content-inventory.md)
- [ ] Team member details (names, roles, bios)
- [ ] Venture descriptions
- [ ] Timeline events
- [ ] Contact information

## 🎨 Design Tokens (Tailwind Config)

```javascript
// Quick reference for tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'apollo-dark': '#1f1f1f',
        'apollo-blue': 'rgb(38, 148, 237)',
        'apollo-deep-blue': 'rgb(15, 59, 171)',
        'apollo-gray': '#2a2a2a',
        'apollo-border': '#3a3a3a',
      },
      fontFamily: {
        'inter': ['Inter', 'Inter Display', 'Arial', 'sans-serif'],
        'manrope': ['Manrope', 'Arial', 'sans-serif'],
      },
      spacing: {
        'sidebar': '355px',
      }
    }
  }
}
```

## 🐛 Known Challenges

1. **Exact Logo Recreation**: May need original SVG from team
2. **Image Assets**: Need high-quality team/venture photos
3. **Font Loading**: Inter & Manrope need to be properly loaded
4. **Framer-specific Effects**: Some animations might be Framer-specific
5. **Mobile Menu**: Original uses Framer's built-in mobile menu

## 📝 Next Steps

1. **Gather Assets**
   - Contact team for logo files
   - Collect all team member photos
   - Get venture logos
   - Confirm all content text

2. **Choose Implementation Path**
   - Review implementation-roadmap.md
   - Decide on tech stack (recommend React + Tailwind)
   - Set up development environment

3. **Start Phase 1**
   - Initialize project
   - Install dependencies
   - Configure Tailwind with design tokens
   - Set up project structure

4. **Build Iteratively**
   - Follow phases in order
   - Test on multiple devices
   - Review against screenshots
   - Adjust as needed

## 📞 Questions to Answer

- [ ] Do we need exact Framer export or custom build?
- [ ] What's the deployment target? (Vercel/Netlify/Custom)
- [ ] Do we need CMS integration for content updates?
- [ ] What's the form submission endpoint?
- [ ] Do we need analytics tracking?
- [ ] What domain will this be hosted on?
- [ ] Do we need any backend functionality?

## 🎯 Project Goals

**Primary Goal**: Pixel-perfect recreation of Team Apollo website

**Secondary Goals**:
- Better performance than Framer original
- Easy to update content
- Maintainable codebase
- Accessible (WCAG AA)
- SEO optimized
- Fast loading (< 3s)

**Success Definition**:
> "A user visiting both sites side-by-side cannot tell the difference, and the new site loads faster and performs better on all metrics."

## 📚 Resources

- **Original Site**: https://uweteamapollo.framer.website/
- **Framer Motion Docs**: https://www.framer.com/motion/
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **React Docs**: https://react.dev/
- **TypeScript Docs**: https://www.typescriptlang.org/docs/

---

## 🚀 Ready to Build?

Start with **Phase 1** in `implementation-roadmap.md` and follow the step-by-step guide!

---

*Documentation created: 2025-10-22*
*Total screenshots analyzed: 10*
*Components documented: 15+*
*Sections documented: 7*
*Estimated build time: 9-10 days*
