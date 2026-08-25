# Steel Performance Index Console Redesign

Redesign the "Steel Performance Index" section into a premium dark industrial specification console with light engineering background.

## User Review Required

> [!IMPORTANT]
> This redesign replaces the previous white glassmorphic card with a dark navy/graphite "specification console" that visually floats above a light background.

- **Contrast Shift**: The section will move from the dark Hero into a dark console, which then sits on a light grey technical background.
- **Micro-details**: Adds tiny engineering markers (A-01, SPEC-01, measurement ticks) to enhance the industrial aesthetic.

## Proposed Changes

### Components

#### `src/components/TrustStatsBar.tsx`
- **Background**: Replace the white background with a light steel-gray/off-white background and an ultra-subtle technical grid.
- **Console Container**:
    - Background: `rgba(12, 24, 40, 0.94)` with inner gradient `#16283E → #0B1728`.
    - Border: 1px translucent steel border with 24px radius.
    - Shadow: Soft, large floating shadow (20-30px elevation).
    - Top edge: Precision gold accent line.
- **Header**:
    - Left: "STEEL PERFORMANCE INDEX" (Gold) + "ENGINEERED FOR RELIABLE DELIVERY" (Muted gray).
    - Right: "SSC / SPEC-01" technical label.
    - Horizontal technical rule divider.
- **Stat Items**:
    - Grid: 2x2 on mobile, 4 columns on desktop.
    - Typography: Light weight (400-500) large numbers in light steel/white.
    - Labels: Small, letter-spaced, muted steel-gray uppercase.
    - Icons: Precision gold line icons.
    - Technical sub-labels: "01 / QUALITY", "02 / NETWORK", etc.
- **Animations**:
    - Entry: 800ms fade-in + slide-up (30px) with custom cubic-bezier.
    - Numbers: Subtle count-up stagger.
- **Hovers**: Subtle background highlight on columns, number translate-up (2-3px), icon brightness increase.

## Technical Details
- Use `framer-motion` for the entry transition and count-up animations.
- Implement the grid and background details using Tailwind utility classes and inline styles for gradients.
- Ensure strict mobile responsiveness: 2x2 grid, no overflow, header visibility preserved.
- The console will be positioned with a slight overlap on desktop/tablet but no overlap on mobile.
