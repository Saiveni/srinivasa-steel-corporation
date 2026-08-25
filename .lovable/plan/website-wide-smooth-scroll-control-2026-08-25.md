# Website-Wide Smooth Scroll Control

Improve scrolling across every page without changing the website’s visual design or content.

## Changes

- Add a lightweight global smooth-scroll controller for desktop wheel and trackpad input.
- Keep touch scrolling native on phones and tablets so gestures remain responsive and predictable.
- Respect the user’s Reduced Motion preference by disabling interpolation automatically.
- Preserve keyboard scrolling, anchor links, browser history restoration, modal/menu scroll locking, and the existing Back to Top control.
- Mount the controller once in the root layout so behavior is consistent on every route.
- Tune interpolation for smooth but controlled movement without excessive delay or “floating.”

## Verification

- Test wheel, keyboard, anchor, route-change, and Back to Top scrolling.
- Confirm mobile touch scrolling remains native and no horizontal overflow or console errors are introduced.
- Check both desktop and mobile layouts remain visually unchanged.

## Technical Details

- Use Lenis for requestAnimationFrame-based desktop scroll interpolation.
- Synchronize Lenis with browser scroll events and cleanly destroy it when the root unmounts.
- Keep CSS smooth scrolling as a fallback and disable animated scrolling under `prefers-reduced-motion`.