# Mobile Responsive Specifications

## 📱 Critical Mobile Requirements

### Breakpoints (Tailwind)
```css
/* Mobile */
@media (max-width: 640px)  { /* sm */ }

/* Tablet */
@media (min-width: 641px) and (max-width: 768px)  { /* md */ }

/* Laptop */
@media (min-width: 769px) and (max-width: 1024px) { /* lg */ }

/* Desktop */
@media (min-width: 1025px) { /* xl */ }
```

---

## 🎯 Mobile Layout Changes (≤640px)

### 1. Sidebar Card → Hamburger Menu

**Desktop**: Floating card on left
**Mobile**: Completely hidden, replaced with:

```tsx
// Mobile header
<header className="fixed top-0 left-0 right-0 z-50 bg-apollo-dark border-b border-apollo-border">
  <div className="flex items-center justify-between px-4 py-4">
    {/* Logo */}
    <div className="flex items-center gap-2">
      <img src="/logo-icon.svg" alt="Apollo" className="w-10 h-10" />
      <span className="text-white font-bold text-lg">APOLLO</span>
    </div>

    {/* Hamburger button */}
    <button className="w-10 h-10 flex items-center justify-center text-white">
      <svg className="w-6 h-6">
        {/* Hamburger icon - 3 lines */}
      </svg>
    </button>
  </div>
</header>

// Mobile drawer (slide from left)
<div className="fixed inset-0 z-40 transform translate-x-[-100%] transition-transform
                data-[open]:translate-x-0">
  <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}

  <div className="absolute left-0 top-0 bottom-0 w-80 bg-apollo-gray">
    {/* Sidebar content here */}
    {/* Logo, navigation links, social, connect button */}
  </div>
</div>
```

### 2. Right Navigation → Bottom Nav Bar

**Desktop**: Fixed right side, vertical icons
**Mobile**: Fixed bottom bar, horizontal icons

```tsx
<nav className="fixed bottom-0 left-0 right-0 z-50 bg-apollo-gray border-t border-apollo-border
               lg:hidden"> {/* Hide on desktop */}
  <div className="flex items-center justify-around py-3">
    <button className="flex flex-col items-center gap-1 text-white">
      <HomeIcon className="w-6 h-6" />
      <span className="text-[10px]">Home</span>
    </button>
    <button className="flex flex-col items-center gap-1 text-white">
      <UsersIcon className="w-6 h-6" />
      <span className="text-[10px]">Team</span>
    </button>
    <button className="flex flex-col items-center gap-1 text-white">
      <BriefcaseIcon className="w-6 h-6" />
      <span className="text-[10px]">Ventures</span>
    </button>
    <button className="flex flex-col items-center gap-1 text-white">
      <EnvelopeIcon className="w-6 h-6" />
      <span className="text-[10px]">Contact</span>
    </button>
  </div>
</nav>
```

### 3. Main Content Area

**Desktop**: `margin-left: 355px` (sidebar width)
**Mobile**: `margin-left: 0`, full width

```tsx
<main className="ml-0 lg:ml-[395px] px-4 md:px-8 lg:px-20 pb-20 lg:pb-0">
  {/* Content */}
</main>
```

### 4. Typography Scaling

```css
/* Hero Heading */
.hero-heading {
  font-size: 36px;      /* Mobile */
  line-height: 1.1;
}

@media (min-width: 768px) {
  .hero-heading {
    font-size: 56px;    /* Tablet */
  }
}

@media (min-width: 1024px) {
  .hero-heading {
    font-size: 72px;    /* Desktop */
  }
}

/* Section Headings */
.section-heading {
  font-size: 32px;      /* Mobile */
}

@media (min-width: 768px) {
  .section-heading {
    font-size: 42px;    /* Tablet */
  }
}

@media (min-width: 1024px) {
  .section-heading {
    font-size: 56px;    /* Desktop */
  }
}

/* Body Text */
.body-text {
  font-size: 14px;      /* Mobile */
  line-height: 1.6;
}

@media (min-width: 768px) {
  .body-text {
    font-size: 16px;    /* Desktop */
  }
}
```

### 5. Ventures Grid

**Desktop**: 4 columns × 2 rows (4x2)
**Tablet**: 3 columns × 3 rows (3x3)
**Mobile**: 2 columns × 4 rows (2x4)

```tsx
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
  {ventures.map(venture => (
    <VentureCircle key={venture.id} {...venture} />
  ))}
</div>
```

### 6. Team Grid

**Desktop**: 4 columns (4×5 for 18 members)
**Tablet**: 3 columns (3×6)
**Mobile**: 2 columns (2×9)

```tsx
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
  {teamMembers.map(member => (
    <TeamMemberCard key={member.id} {...member} />
  ))}
</div>
```

### 7. Ethos Cards (Mission/Vision/Values)

**Desktop**: 3 columns (side by side)
**Tablet**: 2 columns, 3rd wraps
**Mobile**: 1 column (stacked)

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  {ethosCards.map(card => (
    <ContentCard key={card.title} {...card} />
  ))}
</div>
```

### 8. Contact Form

**Desktop**: 2-column layout
**Mobile**: Single column, full-width fields

```tsx
<form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
  {/* Full Name - spans 1 col on mobile, 1 col on desktop */}
  <FormInput label="FULL NAME" name="fullName" className="md:col-span-1" />

  {/* Email - spans 1 col on mobile, 1 col on desktop */}
  <FormInput label="EMAIL" name="email" className="md:col-span-1" />

  {/* Phone - full width on mobile and desktop */}
  <FormInput label="PHONE" name="phone" className="md:col-span-2" />

  {/* Subject and Budget */}
  <FormInput label="SUBJECT" name="subject" type="select" className="md:col-span-1" />
  <FormInput label="BUDGET" name="budget" className="md:col-span-1" />

  {/* Message - full width */}
  <FormInput label="MESSAGE" name="message" type="textarea" className="md:col-span-2" />

  {/* Submit button - full width */}
  <Button type="submit" className="md:col-span-2">Send Message</Button>
</form>
```

### 9. Section Spacing

```css
/* Section vertical spacing */
section {
  padding-top: 40px;    /* Mobile */
  padding-bottom: 40px;
}

@media (min-width: 768px) {
  section {
    padding-top: 60px;  /* Tablet */
    padding-bottom: 60px;
  }
}

@media (min-width: 1024px) {
  section {
    padding-top: 80px;  /* Desktop */
    padding-bottom: 80px;
  }
}

/* Horizontal padding */
.container {
  padding-left: 16px;   /* Mobile */
  padding-right: 16px;
}

@media (min-width: 768px) {
  .container {
    padding-left: 32px; /* Tablet */
    padding-right: 32px;
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: 80px; /* Desktop */
    padding-right: 80px;
  }
}
```

### 10. Timeline

**Desktop**: Wide layout with left margin for dots
**Mobile**: Narrower, smaller dots, tighter spacing

```css
/* Mobile timeline */
.timeline-item {
  padding-left: 24px;   /* Mobile - smaller indent */
}

.timeline-dot {
  width: 12px;          /* Smaller dots */
  height: 12px;
  left: 0;
}

.timeline-line {
  left: 6px;            /* Center of smaller dot */
  width: 1px;           /* Thinner line */
}

@media (min-width: 1024px) {
  .timeline-item {
    padding-left: 40px; /* Desktop - larger indent */
  }

  .timeline-dot {
    width: 16px;        /* Larger dots */
    height: 16px;
  }

  .timeline-line {
    left: 8px;
    width: 2px;         /* Thicker line */
  }
}
```

---

## 🎨 Mobile-Specific Interactions

### Touch Targets
```css
/* Ensure all buttons are at least 44×44px (iOS guidelines) */
button, a {
  min-width: 44px;
  min-height: 44px;
}

/* Increase tap target for icons */
.nav-icon {
  padding: 8px;        /* Adds space around icon */
  min-width: 44px;
  min-height: 44px;
}
```

### Prevent Horizontal Scroll
```css
body {
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}

/* Ensure all content respects viewport */
.container {
  max-width: 100vw;
  overflow-x: hidden;
}
```

### Smooth Mobile Scrolling
```css
html {
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}
```

---

## 📐 Component-Specific Mobile Specs

### VentureCircle (Mobile)
```css
.venture-circle {
  width: 100%;
  aspect-ratio: 1;
  padding: 24px;      /* Smaller padding on mobile */
}

@media (min-width: 1024px) {
  .venture-circle {
    padding: 40px;    /* Larger padding on desktop */
  }
}
```

### ContentCard (Mobile)
```css
.content-card {
  padding: 24px;      /* Smaller padding */
  min-height: auto;   /* No min-height on mobile */
}

@media (min-width: 1024px) {
  .content-card {
    padding: 48px;
    min-height: 280px;
  }
}
```

### TeamMemberCard (Mobile)
```css
.team-member-card {
  border-radius: 16px; /* Smaller radius */
}

.team-member-badge {
  font-size: 11px;     /* Smaller text */
  padding: 8px 16px;
}

@media (min-width: 1024px) {
  .team-member-card {
    border-radius: 24px;
  }

  .team-member-badge {
    font-size: 13px;
    padding: 10px 24px;
  }
}
```

---

## ✅ Mobile Testing Checklist

- [ ] Sidebar becomes hamburger menu on mobile
- [ ] Right nav becomes bottom nav bar
- [ ] Hero text scales down (72px → 36px)
- [ ] Ventures grid goes 4×2 → 2×4
- [ ] Team grid goes 4×n → 2×9
- [ ] Ethos cards stack vertically
- [ ] Contact form goes single column
- [ ] All touch targets ≥ 44×44px
- [ ] No horizontal scroll
- [ ] Typography readable at mobile sizes
- [ ] Images scale properly
- [ ] Buttons full-width or properly sized
- [ ] Margins/padding appropriate for mobile
- [ ] Section spacing reduced appropriately

---

## 🎯 Tailwind Mobile-First Classes

Use these Tailwind utilities for responsive design:

```tsx
// Typography
className="text-2xl md:text-4xl lg:text-6xl"           // Responsive font size
className="leading-tight md:leading-normal"            // Line height

// Spacing
className="px-4 md:px-8 lg:px-20"                     // Horizontal padding
className="py-10 md:py-16 lg:py-24"                   // Vertical padding
className="gap-4 md:gap-6 lg:gap-8"                   // Grid gap

// Layout
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4" // Responsive grid
className="flex-col md:flex-row"                       // Flex direction
className="w-full md:w-auto"                          // Width

// Display
className="hidden lg:block"                           // Show only on desktop
className="block lg:hidden"                           // Show only on mobile
```

---

## 📱 Mobile Performance

### Image Optimization
```tsx
// Use responsive images with srcset
<img
  src="/images/team/member-small.jpg"
  srcSet="/images/team/member-small.jpg 400w,
          /images/team/member-medium.jpg 800w,
          /images/team/member-large.jpg 1200w"
  sizes="(max-width: 640px) 50vw,
         (max-width: 1024px) 33vw,
         25vw"
  alt="Team member"
  loading="lazy"
/>
```

### Lazy Load Below Fold
```tsx
// Only for images below the fold
<img src="..." loading="lazy" />

// For above-fold images
<img src="..." loading="eager" />
```

---

**Mobile-first approach**: Build for mobile, enhance for desktop!
