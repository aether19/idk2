# Root Healing & Nutrition — Technical Specification

## Dependencies

### Production

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.0.0 | UI framework |
| react-dom | ^19.0.0 | React DOM renderer |
| react-router-dom | ^7.0.0 | Client-side routing (5 pages) |
| gsap | ^3.12.0 | Animation engine (scroll reveals, entrance sequences, parallax) |
| embla-carousel-react | ^8.0.0 | Testimonial drag/swipe carousel |
| lucide-react | ^0.460.0 | SVG icons (all UI icons) |
| clsx | ^2.1.0 | Conditional className utility |
| tailwind-merge | ^2.6.0 | Merge Tailwind classes without conflicts |

### Development

| Package | Version | Purpose |
|---------|---------|---------|
| vite | ^6.0.0 | Build tool / dev server |
| @vitejs/plugin-react | ^4.0.0 | React support for Vite |
| typescript | ^5.7.0 | Type checking |
| tailwindcss | ^4.0.0 | Utility-first CSS |
| @tailwindcss/vite | ^4.0.0 | Tailwind v4 Vite integration |
| @types/react | ^19.0.0 | React type definitions |
| @types/react-dom | ^19.0.0 | React DOM type definitions |

### Fonts (Google Fonts CDN)

Playfair Display (400, 500, 600), Inter (300, 400, 500), Cormorant Garamond (400, 400i, 600)

---

## Component Inventory

### shadcn/ui Components

| Component | Source | Usage | Customization |
|-----------|--------|-------|---------------|
| Button | `npx shadcn add button` | Primary/Secondary/Ghost CTAs throughout | Add pill variant (radius 30px), ghost variant for video overlays |
| Card | `npx shadcn add card` | Service cards, testimonial cards | Custom border-radius (16–20px), hover lift + shadow |
| Input | `npx shadcn add input` | Contact form, newsletter | Add focus ring color (Olive), label styling |
| Textarea | `npx shadcn add textarea` | Contact form message | Same as Input |
| Badge | `npx shadcn add badge` | Service time/price tags | Pill shape, Olive bg, Cream text |

### Custom Components

| Component | Props | Description |
|-----------|-------|-------------|
| Navigation | — | Fixed header with scroll-aware transparent→solid transition, mobile hamburger overlay menu, Services dropdown |
| Footer | — | 4-column dark footer with staggered scroll reveal |
| HeroVideo | — | Full-bleed video background with gradient overlay and sequenced entrance animations |
| SectionReveal | children, delay?, stagger? | Wrapper providing IntersectionObserver-based scroll-triggered fade+slide entrance |
| CurvedDivider | position: 'top' \| 'bottom', color? | Organic curved shape between sections |
| TestimonialCarousel | testimonials: Testimonial[] | Embla-powered horizontal drag carousel with arrows + dot pagination |
| InstagramGrid | posts: InstagramPost[] | 3×2 responsive image grid with hover overlay |
| ServiceCard | service: Service | Image + content card with hover lift, used on Services page |
| ScrollIndicator | — | Animated chevron at hero bottom |

### Hooks

| Hook | Purpose |
|------|---------|
| useScrollReveal | IntersectionObserver wrapper for scroll-triggered animations (returns ref + isVisible) |
| useParallax | Scroll-based translateY offset at configurable speed (requestAnimationFrame) |
| useMediaQuery | Responsive breakpoint detection for conditional rendering |

---

## Animation Implementation

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Hero content sequence (subtitle→H1→body→CTA) | GSAP timeline | gsap.timeline() with sequential .from() calls, staggered delays | Medium |
| Scroll-triggered section reveals | GSAP + ScrollTrigger | useScrollReveal hook → gsap.from() triggered by ScrollTrigger onEnter | Low |
| Staggered child reveals | GSAP + ScrollTrigger | Parent ScrollTrigger with stagger: 0.1 on child elements | Low |
| Navigation entrance | GSAP | gsap.from() on logo (x: -20) and nav links (x: 20), opacity fade | Low |
| Nav background transition | CSS transition | toggle class on scroll > 100px, transition: background 200ms | Low |
| Parallax depth (hero poster) | GSAP + ScrollTrigger | ScrollTrigger scrub, translateY at 0.3× scroll speed | Low |
| Testimonial carousel slide | Embla Carousel | emblaApi.scrollNext/Prev, CSS transition on translateX | Medium |
| Carousel drag/swipe | Embla Carousel | Built-in drag gesture support via Embla | Low |
| Card hover lift | CSS transition | translateY(-6px) + box-shadow on hover, 400ms | Low |
| Image hover scale | CSS transition | scale(1.05) on image container hover, overflow hidden | Low |
| Instagram hover overlay | CSS transition | Opacity 0→1 on overlay div, scale(1.05) on image | Low |
| Mobile menu stagger | GSAP | gsap.from() with stagger: 0.1 on menu items | Low |
| Footer column reveal | GSAP + ScrollTrigger | Staggered translateY(30→0) + fade per column, 100ms stagger | Low |
| CTA decorative line | GSAP + ScrollTrigger | width: 0→60px on scroll into view | Low |
| Scroll indicator pulse | CSS animation | @keyframes opacity pulse, 2s infinite | Low |
| Page transitions | CSS + React Router | Fade out 300ms → route swap → fade in 500ms | Low |
| Reduced motion fallback | CSS + GSAP | prefers-reduced-motion: disable all animations, show immediately | Low |

---

## State & Logic Plan

### React Router Setup

Five routes configured in a layout wrapper:
- `/` → HomePage
- `/about` → AboutPage
- `/services` → ServicesPage
- `/booking` → BookingPage
- `/contact` → ContactPage

A RootLayout component wraps all routes and contains Navigation + Footer (persistent across pages). Page transitions handled via a transition wrapper component that fades out, triggers route change, then fades in.

### Scroll-to-Top on Route Change

A custom hook `useScrollToTop` listens to React Router location changes and calls `window.scrollTo(0, 0)` on every route transition. This runs after the fade-out animation completes.

### Navigation Scroll State

A `useScrollPosition` hook tracks `window.scrollY` via a throttled scroll listener (requestAnimationFrame). Navigation receives this value and toggles the solid background class when scrollY > 100.

### GSAP Context Cleanup

All GSAP animations are created within `gsap.context()` scoped to component refs. On unmount, `context.revert()` cleans up all ScrollTriggers and tweens to prevent memory leaks. This is especially critical for the Home page which creates the most animations.

### Embla Carousel API Access

The TestimonialCarousel stores the Embla API in a ref via `useEmblaCarousel()`. Prev/Next buttons and dot navigation call `api.scrollPrev()`, `api.scrollNext()`, and `api.scrollTo(index)` respectively. A `select` event listener updates active dot state.

---

## Other Key Decisions

### Video Strategy

Hero video implemented as a native HTML5 `<video>` element (autoplay, muted, loop, playsinline). Two source files: MP4 (primary) and WebM (fallback). A poster image displays before video loads. On mobile (<768px), the video is replaced with the static poster image for performance. The video element is lazy-loaded via the `preload="metadata"` attribute.

### Font Loading

Google Fonts loaded via `<link>` tags in `index.html` with `display=swap`. Only required weights are requested to minimize payload. Self-hosting is not needed given the small font set (9 total weight/style combinations).

### Image Strategy

All images served as optimized assets in `/public/images/`. Modern format (WebP with JPEG fallback) handled via `<picture>` element where beneficial. Below-fold images use `loading="lazy"`. The image treatment (warm, slightly desaturated, lifted shadows) is applied at asset generation time, not via CSS filters.

### File Structure

```
src/
  main.tsx              — Entry, router setup
  App.tsx               — Root layout (Nav + Footer + Routes)
  index.css             — Global styles, Tailwind import, CSS variables, font-face
  components/
    ui/                 — shadcn components (auto-generated)
    Navigation.tsx
    Footer.tsx
    HeroVideo.tsx
    SectionReveal.tsx
    CurvedDivider.tsx
    TestimonialCarousel.tsx
    InstagramGrid.tsx
    ServiceCard.tsx
    ScrollIndicator.tsx
  pages/
    HomePage.tsx
    AboutPage.tsx
    ServicesPage.tsx
    BookingPage.tsx
    ContactPage.tsx
  hooks/
    useScrollReveal.ts
    useParallax.ts
    useMediaQuery.ts
    useScrollPosition.ts
    useScrollToTop.ts
  lib/
    utils.ts            — cn() helper (clsx + tailwind-merge)
  types/
    index.ts            — Shared TypeScript types
public/
  images/               — All image assets
  videos/               — Hero video files
```
