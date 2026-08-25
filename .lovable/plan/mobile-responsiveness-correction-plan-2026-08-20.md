# Mobile Responsiveness Correction Plan

Dedicated mobile responsive pass for Srinivasa Steel Corporation. Desktop version remains untouched.

## 1. Header & Navigation (`src/components/Navbar.tsx`)
- **Structure**: Create a compact mobile header (68-76px height) with logo on left and hamburger on right.
- **Mobile Menu**: Implement a full-width overlay for viewports < 768px.
  - Links: HOME, ABOUT, PRODUCTS, GALLERY, CONTACT.
  - Prominent "GET QUOTE" button.
  - Fix z-index, background (solid white), and spacing.
  - Ensure it closes on selection/close click.
- **Hamburger**: Proper 44x44px touch target and transition to 'X' icon.

## 2. Hero Section (`src/components/HeroSection.tsx`)
- **Layout**: Full-width cinematic hero on mobile (75-90vh).
- **Background**: Ensure background image remains visible with `center center` positioning and dark overlay for readability.
- **Typography**: Responsive headline using `clamp(42px, 13vw, 64px)` with clean line breaks.
- **Buttons**: Stack CTA buttons vertically (near full-width) with 44px min height.
- **Animations**: Disable mouse parallax on mobile; keep only simple `opacity`, `translateY`, and `scale`.

## 3. Sections & Cards
- **Trust Cards (`src/routes/index.tsx`)**: Stack vertically on mobile with consistent width/margins.
- **Statistics (`src/components/TrustStatsBar.tsx`)**: Convert to a 2-column grid.
- **Product Cards (`src/components/ProductShowcase.tsx`)**:
  - Stack vertically on mobile.
  - Image height: 190-230px with `object-fit: cover`.
  - Fix internal padding and readability.
- **Partner Strip (`src/components/PartnerStrip.tsx`)**: Vertical or 2-column mobile arrangement.
- **Footer (`src/components/Footer.tsx`)**: Single-column layout. Order: Logo/Desc -> Quick Links -> Contact -> Partners -> Legal.

## 4. Global Refinements
- **Overflow**: Ensure `overflow-x: hidden` on body for mobile.
- **Padding**: Apply 16px-24px responsive padding.
- **Breakpoints**: 
  - Mobile: <= 767px.
  - Tablet: 768px-1024px (adaptive layout, not just scaled desktop).

## Technical Details
- Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) and `max-sm:`.
- Adjust `framer-motion` variants to check for mobile/reduced motion.
- Verify touch targets and spacing using standard mobile accessibility guidelines.
