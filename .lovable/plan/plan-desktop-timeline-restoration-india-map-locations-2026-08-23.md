# Plan: Desktop Timeline Restoration & India Map Locations

Restore the previous approved desktop timeline design while preserving the current mobile version. Redesign the desktop locations section with a premium technical India map background.

## User Review Required

> [!IMPORTANT]
> - The desktop timeline will return to a horizontal rebar layout with hanging cards, as previously approved.
> - The desktop locations section will now feature a subtle India map background with regional network markers.

## Proposed Changes

### 1. Steel Timeline Restoration
#### [src/components/SteelTimeline.tsx]
- Implement a responsive split: use the current vertical 3D timeline for mobile/tablet and restore the horizontal 3D rebar timeline for desktop.
- Restore the `SteelRod`, `MetalCard`, and `ClampHook` components from the previous version for the desktop layout.
- Ensure the desktop cards appear physically suspended from the horizontal steel rebar.

### 2. Industrial Network Redesign (Desktop Only)
#### [src/components/IndustrialNetwork.tsx]
- Add a large, subtle, architectural India map SVG as a background layer in the desktop map container.
- Style the map with a graphite/steel color and low opacity to act as an engineering blueprint overlay.
- Reposition markers (Vijayawada, Vizag, Gannavaram) to align geographically on the map.
- Enhance the desktop markers with premium gold finishes and subtle connecting network lines.
- Ensure proper spacing and layout balance for desktop screens (1366px to 1920px).

## Technical Details
- Use `lg:hidden` and `hidden lg:block` to strictly isolate desktop and mobile implementations.
- The India map will be implemented as a path-based SVG for resolution independence and styling control.
- Marker coordinates will be adjusted to geographic approximations within the SVG coordinate space.
