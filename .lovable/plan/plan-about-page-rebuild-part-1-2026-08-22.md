# Plan - About Page Rebuild (Part 1)

I will rebuild the opening section of the About page to align with the premium architectural brand identity. This will replace the generic intro with a powerful cinematic composition featuring industrial textures, precision typography, and high-quality steel visuals.

## Proposed Changes

### 1. New Component: `AboutHero`
- **Location**: Create `src/components/AboutHero.tsx`.
- **Composition**: Asymmetric 46/54 split layout.
- **Left Column**:
  - Eyebrow: "EST. 1994 • STEEL • TMT • SUPPLY • DECOILING" (Technical sans).
  - Headline: "BUILT ON **STEEL.** BUILT ON **TRUST.**" (Bold architectural caps, gold accents).
  - Introduction: Concise, factual description of Srinivasa Steel Corporation's role as a primary steel supplier.
- **Right Column**:
  - Premium visual treatment using `rebar-warehouse.jpg.asset.json` or `rebar-detail.jpg.asset.json`.
  - Subtle industrial details: Engineering grid, metallic linework, and soft depth shadows.
- **Styling**: Navy/Charcoal background, brushed steel textures, and gold highlights.

### 2. Update `src/routes/about.tsx`
- **Import**: Replace the simple `AboutSection` call at the top with the new `AboutHero`.
- **Layout**: Ensure proper spacing between the fixed Global Header and the new opening section.
- **Structure**:
  ```tsx
  <div className="bg-[#050A14]">
    <AboutHero />
    <AboutSection /> {/* This is the existing timeline section */}
    <LocationsSection />
  </div>
  ```

### 3. Visual Refinement
- **Typography**: Strictly use Manrope/Plus Jakarta Sans for high-end technical feel.
- **Responsiveness**: Mobile stack (Eyebrow -> Headline -> Text -> Visual) with appropriate padding to prevent collision with the new global header.

## Technical Details
- Use `framer-motion` for subtle industrial reveals.
- Apply `src/assets/rebar-warehouse.jpg.asset.json` for the hero visual.
- Maintain the `#050A14` (Deep Navy) and `#C5A059` (Gold) palette.
- Implement a fine engineering grid (`1px` lines at low opacity) as a background overlay.
