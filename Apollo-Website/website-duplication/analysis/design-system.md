# Website Duplication Project - Design System Analysis

## Project Info
- **Source URL**: https://uweteamapollo.framer.website/
- **Type**: Single-page portfolio (Framer)
- **Analysis Date**: 2025-10-22

## Color Palette
```css
--primary-bg: #1f1f1f       /* Dark charcoal background */
--accent-blue: rgb(38, 148, 237)  /* Bright blue highlight */
--deep-blue: rgb(15, 59, 171)     /* Secondary blue */
```

## Typography System
- **Primary Fonts**: Inter, Inter Display
- **Secondary Font**: Manrope (weight: 600)
- **Weights Available**: 100-900
- **Default Line Height**: 1.2em
- **Fallback**: Arial, sans-serif

## Layout Architecture
- **Type**: Single-page scroll
- **Navigation**: Fixed header (z-index: 1)
- **Sections**: Full-width, vertically stacked
- **Min Header Height**: 55px + 60px top padding

## Responsive Breakpoints
```css
/* Desktop XL */
@media (min-width: 1920px) { ... }

/* Desktop Large */
@media (min-width: 1440px) and (max-width: 1919px) { ... }

/* Tablet */
@media (min-width: 810px) and (max-width: 1439px) { ... }

/* Mobile */
@media (max-width: 809px) { ... }
```

## Component Patterns
- **Navigation**: Flexbox space-between, fixed positioning
- **Text Components**: Semantic HTML (h1-h6, p, lists)
- **Animations**: Hover transitions, will-change optimization
- **Images**: Aspect ratio preservation
- **Lists**: Auto numbering/bullets

## Interaction Patterns
- Link hover states with style transitions
- Cursor: pointer on interactives
- Cursor: grab on draggables
- Webkit scrollbar hidden
- Touch-friendly mobile interactions

## Performance Optimizations
- Will-change for animations
- Native flexbox gap with fallbacks
- CSS custom properties for theming
- Component-based architecture
