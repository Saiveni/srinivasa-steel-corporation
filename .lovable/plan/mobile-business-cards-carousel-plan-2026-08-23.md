# Mobile Business Cards Carousel Plan

Rebuild the mobile version of the About page business cards into a premium horizontal carousel while preserving the desktop and tablet grid layouts exactly as they are.

## User Review Required

> [!IMPORTANT]
> The new mobile carousel will feature 6 cards instead of the current 4, incorporating additional verified company claims (30+ Years Experience, MOU/Dealer Relations, Regional Presence) as requested.

## Proposed Changes

### 1. Business Logic & Content
- Expand the `businessAreas` array in `src/components/AboutBusinessCards.tsx` from 4 to 6 items.
- Incorporate high-quality industrial imagery for the new items:
  - **30+ YEARS EXPERIENCE**: Established steel business visual.
  - **MOU / DEALER RELATIONS**: Industrial partnership visual.
  - **REGIONAL PRESENCE**: Logistics/distribution visual.
- Use existing assets where appropriate (`tmt-rebars.jpg`, `wire-coils.jpg`, `decoiling.jpg`, `rebar-warehouse.jpg`) and ensure all 6 have premium industrial specs.

### 2. UI Components
- **Mobile-Only Carousel**:
  - Implement a horizontal scrolling container for mobile viewport using Framer Motion's `drag` and `animate`.
  - Design premium cards with a "1 full + hint of next" layout (approx 85-90% width).
  - Add smooth, continuous auto-movement that pauses on interaction.
  - Remove browser scrollbars and add subtle progress indicators.
- **Desktop/Tablet Grid**:
  - Keep the existing `xl:grid-cols-4` and `sm:grid-cols-2` layout logic.
  - The new cards will flow into the existing grid system for desktop/tablet (e.g., 2 rows of 3 on large screens).

### 3. Visual Styling
- Deep navy/graphite backgrounds with steel borders.
- Gold accents for technical labels and progress indicators.
- High-fidelity typography (Manrope/Plus Jakarta Sans) with industrial technical codes.

## Technical Details
- **Implementation**: Framer Motion for the carousel animation and drag handling.
- **Responsiveness**: `hidden lg:block` vs `block lg:hidden` pattern or conditional rendering based on a custom hook/media query to strictly isolate mobile changes.
- **Performance**: Optimized image loading for the carousel to ensure smooth swiping.
