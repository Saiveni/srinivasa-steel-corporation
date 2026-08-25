# Website-Wide Navigation, Transitions, and Scroll Control Fix

Audit and fix all navigation links, mobile menu behavior, page transitions, and scroll issues to ensure a fast, premium, and functional user experience across all devices.

## Proposed Changes

### 1. Navigation & Routing
- **Global Link Audit**: Ensure all `Link` components in `Navbar.tsx` and `Footer.tsx` point to correct routes (`/`, `/about`, `/products`, `/gallery`, `/contact`).
- **Logo Link**: Make the entire brand lockup in `Navbar.tsx` a functional link to `/`.
- **Active State**: Use `activeProps` or conditional logic in `Link` to clearly highlight the current page with the existing gold indicator.
- **Hover Interactions**: Standardize hover effects across all navigation items, ensuring `cursor: pointer` is consistent.

### 2. Mobile Menu Fixes
- **Functional Links**: Verify that every item in the full-screen mobile menu in `Navbar.tsx` correctly triggers navigation.
- **Menu Close Behavior**: Ensure the menu closes immediately upon clicking a link.
- **Scroll Locking**: Fix `overflow: hidden` on `body` when the menu is open and ensure it is released correctly after navigation or closing.

### 3. Page Transitions & Background Consistency
- **Eliminate Flashes**: Set a permanent global background color in `src/routes/__root.tsx` and `src/styles.css` to prevent white or black flashes during route changes.
- **Fast Transitions**: Optimize Framer Motion animations in `Navbar.tsx` and `BrandPreloader.tsx` to ensure they don't delay the appearance of the new page.

### 4. Scroll Control & Layout Stability
- **Scroll to Top**: Ensure `scrollRestoration: true` in `router.tsx` works as expected, or add a global scroll-to-top handler on route change.
- **Horizontal Overflow Fix**: Audit `src/styles.css` and all page components to remove `w-screen` or oversized elements that cause horizontal scrolling on mobile.
- **Smooth Scrolling**: Standardize `scroll-behavior: smooth` in `src/styles.css` while ensuring it doesn't conflict with Framer Motion animations.

### 5. Code Polish
- **Remove Duplicated Logic**: Clean up any conflicting navigation handlers in `Navbar.tsx`.
- **Performance**: Ensure no heavy assets or artificial delays are blocking page loads.

## Technical Details
- **Component**: `src/components/Navbar.tsx`
- **Route**: `src/routes/__root.tsx`
- **Styling**: `src/styles.css`
- **Router Config**: `src/router.tsx`
- **Framework**: TanStack Start / Framer Motion
