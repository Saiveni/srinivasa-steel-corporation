# Final Polish — Part 1: Visual Consistency + Mobile UX

Refine the Srinivasa Steel Corporation website for premium industrial branding, consistent typography/spacing, and a polished mobile experience across all 5 pages.

## Design System Refinement

- **Colors**: Strictly enforce Deep Navy (#0B1B33), Warm White (#F7F7F4), Steel Grey (#E8EBEF), and Refined Gold (#D9A000).
- **Typography**: 
  - Headings: Manrope/Plus Jakarta Sans, semi-bold (600), architectural tracking.
  - Body: Inter, line-height 1.6-1.7, 15-18px desktop.
- **Components**: Standardize buttons (Gold Primary, Outline Secondary) and cards (rounded-2xl, subtle shadow, scale-103 hover).
- **Spacing**: 80-120px desktop sections, 56-80px mobile sections. 1280px max-width container.

## Implementation Details

### 1. Global CSS (`src/styles.css`)
- Update typography scale for H1-H3 to be semi-bold (600) instead of extrabold (800).
- Refine container horizontal padding for mobile (px-5) vs desktop (px-8).
- Ensure consistent section spacing utilities.

### 2. Component Refinement
- **Navbar**: Standardize button height (56px) and active state indicator. Refine mobile hamburger tap target (44px+).
- **HeroSection**: *MAINTAIN CURRENT DESIGN*. Only verify 1280px container alignment.
- **TrustCapabilities**: Align spacing and typography.
- **TrustStatsBar**: Refine card shadow and padding.
- **ProductShowcase / ProductsComponent**: Standardize card radius (24px) and hover zoom (1.03).
- **SteelGallery**: Refine masonry grid spacing and lightbox controls.
- **Footer**: Standardize contact info layout and link hover states.
- **AboutSection**: Adjust editorial image radius and content spacing.

### 3. Page Routes
- **Contact Page**: Refine form field heights, spacing, and mobile input width.
- **Other Pages**: Ensure consistent `pt-20` (header offset) and section transitions.

### 4. Mobile QA Fixes
- Fix horizontal overflow in `SteelGallery` and `ProductsComponent` grid.
- Ensure all text-eyebrows and headings fit smaller screens (320px).
- Verify touch targets for all CTA buttons and links.

## User Review Required

> [!IMPORTANT]
> This plan focuses strictly on visual refinement and mobile UX. Business data and the Home Hero design remain unchanged.
