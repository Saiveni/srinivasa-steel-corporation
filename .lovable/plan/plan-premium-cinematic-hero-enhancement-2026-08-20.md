# Plan - Premium Cinematic Hero Enhancement

Enhance the `HeroSection` of the Srinivasa Steel Corporation website with cinematic entrance animations, parallax effects, and smooth scroll transitions, while strictly preserving the approved design system and layout.

## User Review Required

> [!IMPORTANT]
> - Parallax effects will be automatically disabled/restrained on mobile and when "Reduced Motion" is enabled.
> - The scroll transition will create a subtle overlap effect with the "Trust / Statistics" section.

## Proposed Changes

### Hero Enhancements (`src/components/HeroSection.tsx`)

- **Cinematic Entrance**:
  - Background starts near black and fades in the TMT image.
  - Subtle slow background scale (1.03 → 1.00) instead of a continuous loop.
  - Add a cinematic dark vignette overlay.
- **Staggered Text Reveal**:
  - Sequential reveal of "SINCE 1994" → "The Strength" → "Behind" → "Success." → Paragraph → Buttons.
  - Use `opacity`, `translateY`, and a slight `blur` transition for an editorial feel.
  - Add specific emphasis to the "Success." reveal as the climax.
- **Mouse Parallax (Desktop only)**:
  - Background image moves slightly based on mouse position (max 10px).
  - Text moves at a different, smaller rate to create depth.
- **Scroll Exit Animation**:
  - The hero will scale down and move upward slightly as the user scrolls away.
  - Hero opacity will reduce towards the bottom to blend with the next section.

### Section Transitions (`src/components/HeroSection.tsx` & `src/routes/index.tsx`)

- **Transition Prep**: Modify the hero's exit to allow the "TrustStatsBar" to overlap/slide in smoothly.
- **Motion Polish**: Ensure all transitions use high-quality easing (no elastic/bouncing effects).

## Technical Details

- **Framer Motion**: Leverage `useMotionValue`, `useSpring`, and `useTransform` for performant mouse parallax.
- **Intersection Observer**: Use Framer Motion's `viewport` or `inView` for entrance triggers if not already handled by mount.
- **Performance**: Use `will-change-transform` and ensure all animations are GPU-accelerated (transform/opacity).
- **Accessibility**: Wrap animations in `useReducedMotion` checks to simplify or disable movement for sensitive users.
- **Responsive**: Detect pointer type (coarse vs fine) to disable mouse-based parallax on touch devices.
