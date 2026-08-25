# Products Section Architectural Redesign

Redesign the "Our Products" section into a premium architectural material catalogue with a light industrial aesthetic, high-quality material imagery, and refined typography.

## User Review Required

> [!IMPORTANT]
> This redesign completely replaces the current product cards with a "Material Catalogue" style, using a white architectural aesthetic on a warm-cool steel background (#F4F6F8).

- **Visual Chapter Shift**: The transition from the dark Steel Performance Index to this bright, technical catalogue is deliberate to emphasize precision and clarity.
- **Imagery**: Replaces existing images with high-end macro photography focusing on material detail (ribbed rebars, coiled wire, precision rods).
- **Layout**: Features a new header layout with technical catalogue identifiers on the right and a 4-column architectural card grid.

## Proposed Changes

### Components

#### `src/components/ProductShowcase.tsx`
- **Section Styling**:
    - Background: `#F4F6F8` with a microscopic engineering grid and subtle architectural lines.
    - Spacing: Generous vertical padding to create a "new chapter" feeling.
- **Header Layout**:
    - Left: Gold eyebrow ("OUR PRODUCTS"), architectural headline ("Engineered for Excellence"), and concise engineering-focused description.
    - Right: Technical metadata ("SSC / MATERIAL CATALOGUE", "EST. 1994", "INDUSTRIAL SUPPLY").
- **Product Cards**:
    - Material: White/warm-white background with a 1px steel border and 20px radius.
    - Imagery: 4:3 ratio industrial photography with 1.04x scale hover effects.
    - Content: Micro-index (e.g., "01 / MATERIAL"), product title, and description.
    - Interaction: Gold accent arrows for "VIEW DETAILS" with subtle horizontal motion on hover.
- **Responsiveness**:
    - Desktop: 4 columns.
    - Tablet: 2x2 grid.
    - Mobile: 1x1 vertical stack with specific image heights (220-240px).

## Technical Details
- Use `framer-motion` for staggered section entry and micro-interactions.
- Background grid implemented via `repeating-linear-gradient` with extremely low opacity.
- Responsive breakpoints handled via standard Tailwind grid utilities (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`).
