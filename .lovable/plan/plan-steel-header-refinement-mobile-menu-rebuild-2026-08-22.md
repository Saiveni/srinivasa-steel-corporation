# Plan: Steel Header Refinement & Mobile Menu Rebuild

Rebuild the mobile navigation overlay into a full-screen top-down reveal and refine the header visual identity with integrated TMT rebar imagery, matching the engineering-grade design language of Srinivasa Steel Corporation.

## User Review Required

> [!IMPORTANT]
> - The mobile menu will now cover the **entire screen** and slide in from the **top**.
> - The header will feature **TMT rebar background patterns** on the right side (integrated as subtle technical overlays).
> - I will use the **rounded steel icons** for the menu list as requested.

## Proposed Changes

### 1. Navigation Header Refinement (`src/components/Navbar.tsx`)
- **Desktop Header Enhancement**: Integrate a subtle TMT rebar texture overlay on the right side of the header panel, matching the "Style 08" reference image composition.
- **Mobile Menu Rebuild**:
    - Change the overlay from a floating inset card to a **full-screen takeover**.
    - Implement a **top-down slide animation** for the menu entrance.
    - Restore the **rounded steel icons** (from the provided sprite sheet) in a consistent, technical layout.
    - Ensure the brand lockup (SSC logo + text) remains visible and high-contrast.

### 2. Visual Polish
- Refine the gold machined button transition to be snappier.
- Ensure the background TMT patterns on the header don't interfere with navigation legibility.

## Technical Details

- **Animation**: Using `framer-motion`'s `AnimatePresence` with `initial={{ y: "-100%" }}` and `animate={{ y: 0 }}` for the full-screen menu.
- **Responsive Logic**: Keep the architectural panel structure but adjust the internal padding and overlay layers.
- **Icon Mapping**: Map the 5 menu items (Home, About, Products, Gallery, Contact) to the correct offsets in `steel-menu-icons.png.asset.json`.
