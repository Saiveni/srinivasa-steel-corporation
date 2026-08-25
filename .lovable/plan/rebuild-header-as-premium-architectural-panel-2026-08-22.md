# Rebuild Header as Premium Architectural Panel

Replace the current navbar with a precision-engineered architectural header based on the provided design reference. The new header will feature a brushed-metal surface, engineered hardware details, and a sophisticated navy/gold brand language.

## User Review Required

> [!IMPORTANT]
> - The new header will be implemented as a floating horizontal panel with a fixed position, replacing the standard top-aligned navbar.
> - The design uses high-fidelity CSS for realistic metallic textures and depth.

## Technical Details

### 1. Architectural Panel Structure
- **Container**: Implement a horizontal panel with `max-width: 1400px`, `rounded-xl` corners, and a realistic `1px` refined border.
- **Surface**: Apply a brushed-metal texture using CSS `linear-gradient` overlays and a subtle aluminum pattern.
- **Depth**: Utilize multiple box-shadow layers to create a "machined component" feel (inner bevels + outer soft dropshadow).

### 2. Left Side: Brand Lockup
- **Logo**: Use the existing `ssc-logo-transparent.png`. Ensure it is clean with no background.
- **Typography**: 
  - "SRINIVASA STEEL" in deep navy (`#0B1B33`).
  - "CORPORATION" in gold (`#C5A059`).
- **Divider**: Add a subtle `1px` vertical metallic divider.

### 3. Right Side: Custom Menu Control
- **Button**: A small, machined gold-metal component.
- **Styling**: `bg-gradient-to-b from-[#D4AF37] to-[#C5A059]`, realistic rounded corners, and a navy hamburger icon (3 bars).
- **Interactivity**: Custom hover states with depth change.

### 4. Responsiveness
- **Desktop**: Centered floating panel with generous spacing.
- **Mobile**: Scale dimensions proportionally, maintaining the engineered aesthetic and the floating panel shape.

## Verification Plan

### Automated Tests
- `bun run build` to ensure no transformation errors.

### Manual Verification
- Check transparency of logo on the brushed metal surface.
- Verify the "floating" nature of the header (not full-width at the very top).
- Inspect the gold menu button's realistic depth on hover.
- Test responsiveness from 320px to 4K resolutions.
