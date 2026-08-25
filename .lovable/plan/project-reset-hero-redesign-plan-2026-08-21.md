# Project Reset & Hero Redesign Plan

Reset the Srinivasa Steel Corporation website to reflect the actual business identity and implement a premium industrial Hero section inspired by architectural catalogs.

## User Review Required

> [!IMPORTANT]
> - This plan resets business information (names, contacts, locations) based on provided client materials.
> - The Hero section is being completely redesigned from a dark "sparks" theme to a premium light-industrial "architectural" style.

## Proposed Changes

### 1. Identity & Data Reset
- Update business name to **SRINIVASA STEEL CORPORATION** everywhere.
- Replace all placeholder contact information and locations with verified client data:
  - **Contacts:** M.S.V. Bhaskar (9440170453), M.V. Ramana Kumar (9849600403), M.V.N.M. Yeshwanth (8125397453).
  - **Locations:** Head Office (Vijayawada), Godown (Vijayawada), Vizag Yard, Gannavaram Yard.
- Update footer and contact components to reflect these changes.

### 2. Hero Section Redesign
- **Visual Structure:** 
  - Left side: Clean warm-white / light steel-gray content area.
  - Right side: Premium industrial photography of TMT reinforcement steel.
  - Transition: Sophisticated curved architectural boundary.
- **Copy:**
  - Eyebrow: "SINCE 1994"
  - Headline: "QUALITY STEEL. RELIABLE SUPPLY." (Weight 500-600)
  - Subtext: "Trusted steel supply, TMT products and decoiling solutions for construction and industrial requirements."
- **CTAs:** 
  - Primary: "VIEW PRODUCTS →" (Gold)
  - Secondary: "GET A QUOTE" (Transparent/Light border)
- **Imagery:** Replace generic dark sparks image with realistic TMT reinforcement bar photography in a professional steel yard.

### 3. Typography & Styling
- Switch to a premium modern corporate sans-serif (e.g., Manrope or similar) with 500-600 weights.
- Add technical micro-details like "EST. 1994" or "STEEL / TMT / SUPPLY" in small uppercase gold.
- Implement subtle animations (fade + slide for text, fade + scale for image).

## Technical Details

- **Responsive Implementation:** Use CSS `clip-path` or SVG masks for the curved transition. Ensure mobile stacks vertically with the steel image remaining prominent.
- **Image Assets:** Search for and implement realistic, high-quality industrial steel photography matching the "graphite/steel-gray with warm highlights" specification.
- **Data Centralization:** Update `src/components/Footer.tsx` and any global constants to ensure consistency across the site.
- **Constraint Compliance:** The Steel Performance Index section will remain untouched in this phase.
