# Reorganize Website Structure to Five Main Pages

Consolidate the website structure into exactly five pages (Home, About, Products, Decoiling & Services, Gallery) while integrating locations into the About page and ensuring all content relates strictly to Srinivasa Steel Corporation.

## User Review Required

> [!IMPORTANT]
> The "Locations" page will be removed, and its content will be moved into the "About" page. The "Contact" page will also be removed, and the contact form (Get Quote) will be integrated into the footer or as a modal/section within the main pages.

## Proposed Changes

### Navigation & Header
- Update `Navbar.tsx` to show only: HOME, ABOUT, PRODUCTS, DECOILING & SERVICES, GALLERY, and the GET QUOTE button.
- Ensure the "GET QUOTE" button opens the quote form (currently part of the contact section).

### Home Page (`src/routes/index.tsx`)
- Reorder components:
  1. HeroSection
  2. TrustCapabilities (Trust / company introduction + Core capabilities)
  3. ProductShowcase (Featured products)
  4. DecoilingSection (Decoiling/service highlight)
  5. AboutSection (Short version/Introduction)
  6. ContactSection (Strong final Quote CTA)
- Remove `LocationsSection` from home as it will be in About.

### About Page (`src/routes/about.tsx`)
- Rebuild the page with an editorial layout.
- Sections: Company background, Established since 1994, Business expertise, and the integrated `LocationsSection`.
- Use industrial imagery only.

### Products Page (`src/routes/products.tsx`)
- Dedicated page for TMT Rebars (5mm, 5.5mm, 6mm), Wire Products (Binding, GI), and Oil Rods.
- Include local TMT brands: Vizag, Simhadri, Jindal Panther.
- Each product gets a premium photo, description, specs, and a "Request Quote" CTA.

### Decoiling & Services Page (`src/routes/decoiling.tsx`)
- Dedicated page for processing capabilities.
- Sections: Introduction, capabilities (2mm-4.5mm), sizes (10-40ft), oil rods/wire processing, and the supply process.
- Industrial technical aesthetic.

### Gallery Page (`src/routes/gallery.tsx`)
- Dedicated gallery with categories: Steel Products, TMT Rebars, Wire Products, Stock, Decoiling, Yard.
- Masonry/editorial layout with lightboxes.

### Footer
- Update `Footer.tsx` to match the new 5-page navigation.
- Ensure contact info is prominent.

## Technical Details

- Create new route files: `src/routes/products.tsx`, `src/routes/decoiling.tsx`, `src/routes/gallery.tsx`.
- Update `src/routes/about.tsx` to include the `LocationsSection` component.
- Remove `src/routes/contact.tsx` and `src/routes/locations.tsx` (if exists).
- Refine existing components (`ProductShowcase`, `DecoilingSection`, etc.) to better fit as standalone pages with more detail.
- Update `Navbar` and `Footer` links and labels.
