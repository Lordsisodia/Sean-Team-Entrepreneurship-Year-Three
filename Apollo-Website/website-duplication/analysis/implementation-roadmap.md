# Implementation Roadmap - Pixel-Perfect Rebuild

## Tech Stack Recommendations

### Option 1: React + Tailwind CSS (Recommended)
**Best for**: Full control, performance, maintainability
```
- React 18+ with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation
- Vite for build tooling
```

**Pros**:
- Complete design control
- Excellent performance
- Easy to maintain and extend
- Large ecosystem
- TypeScript for type safety

**Cons**:
- More setup required
- Need to build everything from scratch

### Option 2: Next.js + Tailwind CSS
**Best for**: SEO, static export, future scaling
```
- Next.js 14+ with App Router
- Tailwind CSS
- Framer Motion
- TypeScript
```

**Pros**:
- Better SEO out of the box
- Static export option
- Image optimization
- API routes for contact form

**Cons**:
- More complex than plain React
- Overkill for single-page site

### Option 3: Framer (like original)
**Best for**: Speed, visual editing
```
- Framer built-in components
- Visual editor
- Built-in animations
```

**Pros**:
- Fastest to prototype
- Visual editing
- Built-in hosting

**Cons**:
- Less control
- Vendor lock-in
- Export limitations

## Recommended: React + Tailwind + Framer Motion

## Project Structure

```
apollo-website/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── RightNavigation.tsx
│   │   │   └── Layout.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── TeamEthosSection.tsx
│   │   │   ├── TimelineSection.tsx
│   │   │   ├── VenturesSection.tsx
│   │   │   ├── TeamSection.tsx
│   │   │   ├── AboutVenturesSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── ui/
│   │   │   ├── SectionLabel.tsx
│   │   │   ├── ContentCard.tsx
│   │   │   ├── VentureCircle.tsx
│   │   │   ├── TeamMemberCard.tsx
│   │   │   ├── TimelineItem.tsx
│   │   │   ├── FormInput.tsx
│   │   │   └── Button.tsx
│   │   └── icons/
│   │       ├── HomeIcon.tsx
│   │       ├── UserIcon.tsx
│   │       └── ... (all nav icons)
│   ├── data/
│   │   ├── teamMembers.ts
│   │   ├── ventures.ts
│   │   ├── timeline.ts
│   │   └── content.ts
│   ├── styles/
│   │   ├── globals.css
│   │   └── animations.css
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo.svg
│   │   │   ├── team/
│   │   │   └── ventures/
│   │   └── icons/
│   ├── hooks/
│   │   ├── useScrollSpy.ts
│   │   ├── useScrollToSection.ts
│   │   └── useMediaQuery.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
│   └── (static assets)
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## Development Phases

### Phase 1: Foundation Setup (Day 1)
**Goal**: Project scaffold and design system

1. **Initialize Project**
   ```bash
   npm create vite@latest apollo-website -- --template react-ts
   cd apollo-website
   npm install
   ```

2. **Install Dependencies**
   ```bash
   npm install tailwindcss postcss autoprefixer
   npm install framer-motion
   npm install react-router-dom
   npm install @heroicons/react
   npm install react-intersection-observer
   ```

3. **Setup Tailwind CSS**
   - Configure tailwind.config.js with custom colors
   - Set up CSS variables for theme
   - Create utility classes

4. **Create Design Tokens**
   - Define color palette
   - Typography scale
   - Spacing system
   - Border radius values
   - Shadow system

**Deliverables**:
- ✅ Project initialized
- ✅ Dependencies installed
- ✅ Tailwind configured with design tokens
- ✅ Base styles applied

---

### Phase 2: Core Layout Components (Day 1-2)
**Goal**: Build persistent layout structure

1. **Sidebar Component**
   - Logo section (white background)
   - Footer section (dark background)
   - Social icons (LinkedIn, Instagram)
   - Connect button with email icon
   - Fixed positioning

2. **Right Navigation Component**
   - Vertical icon menu
   - Smooth scroll to sections
   - Active state indicators
   - Hamburger menu button (top)
   - Fixed positioning with transform

3. **Main Layout Component**
   - Content area with proper margins
   - Section containers
   - Scroll behavior setup

**Deliverables**:
- ✅ Sidebar fully functional
- ✅ Right navigation with scroll spy
- ✅ Layout responsive structure
- ✅ Navigation interactions working

---

### Phase 3: Reusable UI Components (Day 2-3)
**Goal**: Build component library

1. **SectionLabel Component**
   - Pill-shaped button with icon
   - Variants for different sections
   - Props: icon, text, onClick

2. **ContentCard Component**
   - Border styling
   - Icon positioning (top-right)
   - Title, description, link
   - Hover effects
   - Props: icon, title, description, link

3. **VentureCircle Component**
   - Circular container
   - Logo/image handling
   - Selected state
   - Hover effects
   - Label below
   - Props: logo, label, isSelected, onClick

4. **TeamMemberCard Component**
   - Image container
   - Badge overlay (dark/blue variants)
   - Name display
   - Hover lift effect
   - Props: image, name, role, roleType

5. **TimelineItem Component**
   - Dot indicator (color variants)
   - Connecting line
   - Status label
   - Event details
   - Props: date, title, description, status

6. **FormInput Component**
   - Text input variant
   - Textarea variant
   - Select dropdown variant
   - Label styling
   - Focus states
   - Props: type, label, placeholder, value, onChange

7. **Button Component**
   - Primary variant (blue)
   - Secondary variant (outlined)
   - With icon support
   - Hover/active states
   - Props: variant, icon, children, onClick

**Deliverables**:
- ✅ All UI components built
- ✅ Storybook or preview page for components
- ✅ TypeScript types defined
- ✅ Animations implemented

---

### Phase 4: Section Components (Day 3-5)
**Goal**: Build each page section

#### 4.1 Hero Section
```tsx
- Section label: "MEET THE TEAM"
- Large heading with Apollo highlighted
- Subtext paragraph
- Scroll indicator or CTA
```

#### 4.2 Team Ethos Section
```tsx
- Section label: "TEAM ETHOS"
- Heading: "Apollo's Team Ethos"
- 3 Cards: Mission, Vision, Values
- Icons: Target, Bell, Crown
- Read more links
```

#### 4.3 Timeline Section
```tsx
- Section label: "TIMELINE"
- Heading: "Team Apollo Timeline"
- Timeline items with:
  - Status indicators (green/gray dots)
  - Event titles
  - Dates and details
  - Vertical connecting line
```

#### 4.4 Ventures Section
```tsx
- Section label: "VENTURES"
- Heading: "Our Team Ventures"
- 4x2 Grid of venture circles
- Venture logos/images
- Labels below each
- Selected state on "Frat Fridays"
```

#### 4.5 Team Section
```tsx
- Section label: "PORTFOLIO"
- Heading: "Meet The Team"
- Full team photo with pagination
- Grid of individual member cards
- Role badges (Venture Lead, Academic Lead, etc.)
```

#### 4.6 About Ventures Section
```tsx
- Section label: "ABOUT VENTURES"
- Heading with highlighted text
- Feature card with:
  - Avatar
  - Name and title
  - Linked subtitle (Delta Sports Management)
  - Long description text
```

#### 4.7 Contact Section
```tsx
- Section label: "CONTACT"
- Heading: "Let's Work Together!"
- Description text
- Form with fields:
  - Full Name
  - Email
  - Phone
  - Subject (dropdown)
  - Budget
  - Message (textarea)
- Submit button
```

**Deliverables**:
- ✅ All 7 sections completed
- ✅ Content data integrated
- ✅ Responsive behavior
- ✅ Smooth scroll working

---

### Phase 5: Data & Content Integration (Day 5)
**Goal**: Replace hardcoded content with data

1. **Create Data Files**
   ```typescript
   // data/content.ts
   export const heroContent = {
     title: "At Apollo, we're more than just a team...",
     subtitle: "We are a team of 18 young entrepreneurs...",
   }

   // data/teamMembers.ts
   export const teamMembers = [
     {
       id: 1,
       name: "Freddie",
       role: "Venture Lead",
       roleType: "dark",
       image: "/images/team/freddie.jpg"
     },
     // ... all members
   ]

   // data/ventures.ts
   export const ventures = [
     {
       id: 1,
       name: "Delta Sports Management",
       logo: "/images/ventures/delta.png",
       isSelected: false
     },
     // ... all ventures
   ]

   // data/timeline.ts
   export const timelineEvents = [
     {
       id: 1,
       status: "upcoming",
       label: "Upcoming",
       events: [
         {
           title: "Frat Friday Event Night at Pams",
           date: "8th of November 2024"
         }
       ]
     },
     // ... all events
   ]
   ```

2. **TypeScript Interfaces**
   ```typescript
   interface TeamMember {
     id: number
     name: string
     role: string
     roleType: "dark" | "blue"
     image: string
   }

   interface Venture {
     id: number
     name: string
     logo: string
     isSelected?: boolean
   }

   interface TimelineEvent {
     id: number
     status: "upcoming" | "planned" | "past"
     label: string
     date?: string
     events: Event[]
   }
   ```

**Deliverables**:
- ✅ All content in data files
- ✅ TypeScript types defined
- ✅ Easy to update content
- ✅ Images organized

---

### Phase 6: Animations & Interactions (Day 6)
**Goal**: Add polish and micro-interactions

1. **Scroll Animations**
   ```tsx
   // Using Framer Motion + Intersection Observer
   - Fade in sections on scroll
   - Slide up cards
   - Stagger children animations
   ```

2. **Hover Effects**
   ```tsx
   - Card lift on hover
   - Border color changes
   - Button scale effects
   - Venture circle selection
   ```

3. **Smooth Scrolling**
   ```tsx
   - Scroll to section on nav click
   - Active section highlighting
   - Smooth scroll behavior
   ```

4. **Form Interactions**
   ```tsx
   - Focus states
   - Validation feedback
   - Submit animation
   - Success message
   ```

5. **Loading States**
   ```tsx
   - Image loading skeletons
   - Lazy loading for images
   - Smooth transitions
   ```

**Deliverables**:
- ✅ All animations implemented
- ✅ 60fps performance
- ✅ Reduced motion support
- ✅ Mobile-friendly interactions

---

### Phase 7: Responsive Design (Day 6-7)
**Goal**: Perfect mobile and tablet experience

#### Desktop XL (1920px+)
- Standard layout
- Max content width: 1400px
- Full sidebar visible

#### Desktop (1440-1919px)
- Slightly reduced spacing
- Content scales proportionally

#### Tablet (810-1439px)
- Sidebar becomes hamburger menu
- Content full-width with padding
- Right nav moves to hamburger or bottom
- 2-column venture grid
- Reduced font sizes

#### Mobile (≤809px)
- Full hamburger navigation
- Single column layout
- Stacked venture circles (1 column)
- Smaller hero text
- Touch-optimized buttons
- Reduced spacing throughout

**Breakpoint Tests**:
- [ ] 1920px+ (Desktop XL)
- [ ] 1440px (Desktop)
- [ ] 1024px (Laptop)
- [ ] 768px (Tablet)
- [ ] 375px (Mobile)
- [ ] 320px (Small Mobile)

**Deliverables**:
- ✅ All breakpoints working
- ✅ Touch targets 44px minimum
- ✅ Readable text on all devices
- ✅ Images optimized

---

### Phase 8: Form Functionality (Day 7)
**Goal**: Working contact form

1. **Form Validation**
   - Required field checks
   - Email format validation
   - Phone number format
   - Message length check

2. **Form Submission**
   ```typescript
   // Options:
   // A) EmailJS integration
   // B) Formspree
   // C) Custom API endpoint
   // D) Netlify Forms
   ```

3. **Success/Error States**
   - Success message modal
   - Error handling
   - Loading state during submit
   - Form reset after success

**Deliverables**:
- ✅ Form validation working
- ✅ Submission endpoint configured
- ✅ Success/error feedback
- ✅ Spam protection

---

### Phase 9: Performance Optimization (Day 8)
**Goal**: Fast, optimized site

1. **Image Optimization**
   - WebP format with fallbacks
   - Responsive images (srcset)
   - Lazy loading
   - Compressed sizes
   - Proper dimensions

2. **Code Splitting**
   - Route-based splitting
   - Component lazy loading
   - Dynamic imports for heavy components

3. **Bundle Optimization**
   - Tree shaking
   - Remove unused dependencies
   - Minification
   - CSS purging

4. **Performance Metrics**
   - Lighthouse score 90+
   - First Contentful Paint < 1.5s
   - Time to Interactive < 3.5s
   - Total bundle size < 500KB

**Deliverables**:
- ✅ Lighthouse score 90+
- ✅ Fast loading times
- ✅ Optimized bundle size
- ✅ Good Core Web Vitals

---

### Phase 10: Testing & QA (Day 8-9)
**Goal**: Bug-free, polished site

#### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

#### Functionality Testing
- [ ] Navigation (all links work)
- [ ] Smooth scrolling
- [ ] Form submission
- [ ] Hover states
- [ ] Animations smooth
- [ ] Images load correctly
- [ ] Social links work
- [ ] Responsive breakpoints
- [ ] Touch interactions (mobile)

#### Accessibility Testing
- [ ] Keyboard navigation
- [ ] Screen reader friendly
- [ ] ARIA labels
- [ ] Color contrast (WCAG AA)
- [ ] Focus indicators
- [ ] Alt text on images

#### Performance Testing
- [ ] Lighthouse audit
- [ ] Mobile performance
- [ ] Network throttling test
- [ ] Bundle size check

**Deliverables**:
- ✅ All tests passing
- ✅ Cross-browser compatible
- ✅ Accessible (WCAG AA)
- ✅ No console errors

---

### Phase 11: Deployment (Day 9)
**Goal**: Live, production site

#### Deployment Options

**Option A: Vercel (Recommended)**
```bash
npm install -g vercel
vercel
```
- Automatic deployments
- Preview URLs for PRs
- Excellent performance
- Free tier available

**Option B: Netlify**
```bash
npm run build
# Deploy dist/ folder
```
- Drag-and-drop deploy
- Form handling built-in
- Free tier available

**Option C: GitHub Pages**
```bash
npm run build
# Deploy to gh-pages branch
```
- Free for public repos
- Simple setup
- Good for static sites

#### Pre-Deployment Checklist
- [ ] Environment variables set
- [ ] Production build tested locally
- [ ] Analytics configured (optional)
- [ ] Domain configured
- [ ] SSL certificate
- [ ] Favicons added
- [ ] Meta tags for SEO
- [ ] Open Graph tags
- [ ] Sitemap generated

**Deliverables**:
- ✅ Site live on production URL
- ✅ SSL enabled
- ✅ Domain configured
- ✅ Analytics tracking (if needed)

---

## Timeline Summary

| Phase | Duration | Deliverable |
|-------|----------|-------------|
| 1. Foundation Setup | 0.5 day | Project initialized with design system |
| 2. Core Layout | 1 day | Sidebar, navigation, layout |
| 3. UI Components | 1 day | All reusable components |
| 4. Sections | 2 days | All 7 sections built |
| 5. Data Integration | 0.5 day | Content managed via data files |
| 6. Animations | 1 day | Polish and interactions |
| 7. Responsive | 1 day | Mobile/tablet perfect |
| 8. Form | 0.5 day | Working contact form |
| 9. Performance | 0.5 day | Optimized and fast |
| 10. Testing | 1 day | QA and bug fixes |
| 11. Deployment | 0.5 day | Live site |
| **Total** | **9 days** | **Pixel-perfect website** |

## Estimated Effort
- **Solo Developer**: 9-10 working days
- **With Design Assets**: 7-8 days
- **Experienced Team (2)**: 5-6 days
- **Using Template**: 3-4 days

## Success Criteria

✅ **Visual Accuracy**
- Matches original design 98%+
- Colors exact
- Typography correct
- Spacing consistent

✅ **Performance**
- Lighthouse score 90+
- Loading under 3 seconds
- Smooth 60fps animations

✅ **Functionality**
- All navigation works
- Form submits successfully
- Hover states perfect
- Mobile responsive

✅ **Quality**
- No console errors
- Accessible (WCAG AA)
- Cross-browser compatible
- TypeScript strict mode

## Next Steps

1. **Review this roadmap** with stakeholders
2. **Gather all assets** (images, logos, content)
3. **Choose tech stack** (React + Tailwind recommended)
4. **Set up development environment**
5. **Start Phase 1** - Foundation Setup

---

## File Structure Quick Reference

```
Key files to create:
✅ tailwind.config.js - Design tokens
✅ src/data/content.ts - All text content
✅ src/data/teamMembers.ts - Team data
✅ src/data/ventures.ts - Venture data
✅ src/data/timeline.ts - Timeline events
✅ src/components/layout/Sidebar.tsx
✅ src/components/layout/RightNavigation.tsx
✅ src/components/sections/HeroSection.tsx
✅ src/components/sections/TeamEthosSection.tsx
✅ src/components/sections/TimelineSection.tsx
✅ src/components/sections/VenturesSection.tsx
✅ src/components/sections/TeamSection.tsx
✅ src/components/sections/AboutVenturesSection.tsx
✅ src/components/sections/ContactSection.tsx
✅ src/components/ui/ContentCard.tsx
✅ src/components/ui/VentureCircle.tsx
✅ src/components/ui/TeamMemberCard.tsx
✅ src/components/ui/TimelineItem.tsx
✅ src/App.tsx - Main app component
```

---

*Ready to start building? Begin with Phase 1!* 🚀
