# Component Specifications - Pixel-Perfect Reference

## Color System (Extracted from Screenshots)

### Primary Colors
```css
--color-bg-dark: #1f1f1f          /* Main dark background */
--color-bg-sidebar-light: #ffffff  /* Sidebar top section */
--color-bg-sidebar-dark: #2a2a2a   /* Sidebar bottom section */
--color-accent-blue: rgb(38, 148, 237)  /* Bright blue - "Apollo", highlights */
--color-text-primary: #ffffff      /* Main text */
--color-text-secondary: #a0a0a0    /* Subtle text, dates */
--color-border-subtle: #3a3a3a     /* Card borders */
```

### Semantic Colors
```css
--color-status-upcoming: #4ade80   /* Green for timeline "Upcoming" */
--color-badge-dark: #333333        /* Dark badge background */
--color-badge-blue: rgb(38, 148, 237)  /* Blue badge background */
```

## Typography System

### Font Stack
```css
--font-primary: 'Inter', 'Inter Display', Arial, sans-serif
--font-secondary: 'Manrope', Arial, sans-serif
```

### Type Scale
```css
/* Hero Heading - "At Apollo, we're..." */
--text-hero-heading:
  font-size: 72px
  line-height: 1.2
  font-weight: 400
  letter-spacing: -0.02em

/* Section Headings - "Apollo's Team Ethos" */
--text-section-heading:
  font-size: 56px
  line-height: 1.2
  font-weight: 400
  letter-spacing: -0.01em

/* Card Titles - "OUR TEAM MISSION" */
--text-card-title:
  font-size: 18px
  line-height: 1.4
  font-weight: 600
  letter-spacing: 0.05em
  text-transform: uppercase

/* Body Text */
--text-body:
  font-size: 16px
  line-height: 1.6
  font-weight: 400

/* Labels/Buttons - "TIMELINE" */
--text-label:
  font-size: 13px
  line-height: 1.4
  font-weight: 600
  letter-spacing: 0.08em
  text-transform: uppercase

/* Small Text - "Based in Bristol, UWE" */
--text-small:
  font-size: 14px
  line-height: 1.5
  font-weight: 400
```

## Layout Measurements

### Sidebar (Fixed Left)
```css
width: 355px
height: 100vh
position: fixed
left: 0
top: 0

/* Top Logo Section */
  background: #ffffff
  padding: 60px 40px
  height: ~500px

/* Bottom Info Section */
  background: #2a2a2a
  padding: 40px 40px 50px

/* Logo */
  width: 180px (approx)
  margin-bottom: 20px

/* Social Icons */
  size: 48px diameter
  border: 1.5px solid #5a5a5a
  spacing: 16px gap

/* Connect Button */
  height: 56px
  border-radius: 28px
  margin-top: 40px
  width: 100%
```

### Main Content Area
```css
margin-left: 355px  /* Sidebar width */
padding-left: 80px
padding-right: 80px
max-width: 1400px (content container)
```

### Right Navigation (Fixed)
```css
position: fixed
right: 40px
top: 50%
transform: translateY(-50%)
width: 60px

/* Menu Items */
  size: 48px diameter each
  background: transparent
  border: 1.5px solid #4a4a4a
  spacing: 16px vertical gap
  border-radius: 50%

/* Hover State */
  background: #2a2a2a
  border-color: #6a6a6a
```

## Component Specifications

### 1. Section Label Button (Pill)
**Example**: "MEET THE TEAM", "TIMELINE", "VENTURES"

```css
/* Container */
padding: 12px 28px
border-radius: 24px
border: 1.5px solid #4a4a4a
background: transparent
backdrop-filter: blur(10px)

/* Icon + Text */
icon-size: 16px
gap: 10px
color: #ffffff

/* Position */
display: inline-flex
align-items: center
margin-bottom: 40px
```

### 2. Content Card (Ethos/Mission/Vision)
**Example**: Team Mission, Team Vision, Team Values cards

```css
/* Container */
background: transparent
border: 1.5px solid #3a3a3a
border-radius: 32px
padding: 48px
min-height: 280px
transition: all 0.3s ease

/* Hover State */
border-color: rgb(38, 148, 237)
transform: translateY(-4px)

/* Icon (top-right) */
size: 56px
color: rgb(38, 148, 237)
position: absolute
top: 48px
right: 48px

/* Title */
margin-bottom: 20px
color: #ffffff

/* Body Text */
color: #b0b0b0
margin-bottom: 24px
line-height: 1.7

/* Read More Link */
color: #ffffff
text-decoration: underline
font-size: 15px
opacity: 0.8
```

### 3. Timeline Component
**Structure**: Vertical timeline with connected dots

```css
/* Timeline Container */
padding-left: 40px
position: relative

/* Timeline Line */
position: absolute
left: 8px
top: 0
bottom: 0
width: 2px
background: #3a3a3a

/* Timeline Dot */
width: 16px
height: 16px
border-radius: 50%
position: absolute
left: 0
background: #5a5a5a (default)
background: #4ade80 (upcoming/active)

/* Status Label */
color: #4ade80 (upcoming)
font-size: 14px
font-weight: 600
margin-bottom: 20px

/* Event Title */
font-size: 24px
font-weight: 500
margin-bottom: 8px
color: #ffffff

/* Event Details */
font-size: 15px
color: #808080
margin-bottom: 40px

/* Spacing */
gap between items: 60px
```

### 4. Venture Circle/Logo
**Grid of circular venture logos**

```css
/* Grid Container */
display: grid
grid-template-columns: repeat(4, 1fr)
gap: 32px
margin-top: 60px

/* Circle Container */
aspect-ratio: 1
border-radius: 50%
border: 2px solid #3a3a3a
padding: 40px
background: #2a2a2a (dark bg for most)
background: #ffffff (light bg for some)
transition: all 0.3s ease

/* Selected/Active State */
border-color: rgb(38, 148, 237)
border-width: 3px

/* Hover State */
transform: scale(1.05)
border-color: rgba(38, 148, 237, 0.5)

/* Logo Inside */
max-width: 100%
max-height: 100%
object-fit: contain

/* Label (below) */
text-align: center
margin-top: 20px
font-size: 15px
font-weight: 500
color: #ffffff
```

### 5. Team Member Card
**Individual profile cards**

```css
/* Card Container */
border-radius: 24px
overflow: hidden
background: #2a2a2a
transition: all 0.3s ease

/* Image */
aspect-ratio: 3/4
object-fit: cover
width: 100%
border-radius: 24px 24px 0 0

/* Badge (overlay on image) */
position: absolute
bottom: 24px
left: 50%
transform: translateX(-50%)
padding: 10px 24px
border-radius: 20px
font-size: 13px
font-weight: 600
backdrop-filter: blur(10px)

/* Dark badge */
background: rgba(0, 0, 0, 0.6)
color: #ffffff

/* Blue badge */
background: rgb(38, 148, 237)
color: #ffffff

/* Name (below image) */
padding: 24px
font-size: 24px
font-weight: 600
color: #ffffff
text-align: center

/* Hover State */
transform: translateY(-8px)
```

### 6. Form Input Fields

```css
/* Text Input */
background: transparent
border: 1.5px solid #3a3a3a
border-radius: 12px
padding: 16px 20px
color: #ffffff
font-size: 15px
transition: all 0.3s ease

/* Label */
font-size: 12px
text-transform: uppercase
letter-spacing: 0.1em
color: #808080
margin-bottom: 8px
font-weight: 600

/* Placeholder */
color: #5a5a5a

/* Focus State */
border-color: rgb(38, 148, 237)
outline: none

/* Dropdown */
appearance: none
background-image: url('chevron-down-icon')
background-position: right 20px center
background-repeat: no-repeat

/* Textarea */
min-height: 150px
resize: vertical
```

### 7. Connect Button (Primary CTA)

```css
/* Button */
background: rgb(38, 148, 237)
border: none
border-radius: 28px
padding: 16px 32px
color: #ffffff
font-size: 15px
font-weight: 600
letter-spacing: 0.05em
text-transform: uppercase
cursor: pointer
transition: all 0.3s ease
display: flex
align-items: center
justify-content: center
gap: 12px

/* Icon */
size: 20px

/* Hover State */
background: rgb(48, 158, 247)
transform: scale(1.02)
box-shadow: 0 8px 24px rgba(38, 148, 237, 0.3)

/* Active State */
transform: scale(0.98)
```

## Spacing System

```css
/* Consistent spacing scale */
--space-xs: 8px
--space-sm: 16px
--space-md: 24px
--space-lg: 32px
--space-xl: 48px
--space-2xl: 64px
--space-3xl: 96px

/* Section spacing */
margin-bottom between sections: 120px

/* Container padding */
horizontal: 80px
vertical: 80px (first section)
vertical: 60px (subsequent sections)
```

## Animation & Interaction Patterns

### Hover Animations
```css
/* Cards */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
hover: translateY(-4px)

/* Buttons */
transition: all 0.2s ease
hover: scale(1.02) + brightness increase

/* Links */
transition: color 0.2s ease
hover: opacity change + underline
```

### Scroll Behaviors
- Smooth scrolling between sections
- Fixed sidebar and right navigation
- Subtle parallax on background elements (if any)

### Loading States
- Skeleton screens for images
- Fade-in on content load
- Progressive image loading

## Responsive Breakpoints

Based on Framer defaults:
```css
/* Desktop XL */
@media (min-width: 1920px) { ... }

/* Desktop Large */
@media (min-width: 1440px) and (max-width: 1919px) { ... }

/* Tablet */
@media (min-width: 810px) and (max-width: 1439px) {
  /* Sidebar collapses to hamburger */
  /* Content full-width with padding */
  /* Right nav moves to bottom or hamburger */
}

/* Mobile */
@media (max-width: 809px) {
  /* Stack everything vertically */
  /* Full-width cards */
  /* Mobile menu */
  /* Reduced spacing */
}
```
