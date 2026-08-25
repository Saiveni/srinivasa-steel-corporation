# Foundation Plan - Srinivasa Steel Corporation (SSC)

Set up the premium industrial brand foundation for SSC including the design system, shared components, and route structure.

## Design System & Tokens
- **Colors**: Configure Tailwind theme with:
  - Backgrounds: Clean off-white/steel-gray (`#F7F8FA`, `#EDEFF2`)
  - Primary: Deep Navy (`#0B1E3D`)
  - Secondary: Gold/Amber (`#D4A24C`)
- **Typography**: Industrial Poppins (headings) + Inter (body)
- **Shared Library**: Flexible components supporting per-page accent variables.

## Structural Setup
- **Routes**: Create 5 routed pages: Home, About, Products, Gallery, Contact.
- **Components**:
  - `Navbar`: Sticky, logo, nav links, gold "Get Quote" button, mobile hamburger.
  - `Footer`: Logo, tagline, partner logos, contact info.
  - `Button`: Primary (Gold) and Secondary (Outline) variants with hover animations.
  - `ScrollReveal`: Framer Motion wrapper for scroll-triggered entry.
  - `AnimatedCard`: Hover lift and soft layered shadows.
- **Favicon**: Create a brand-appropriate favicon from the logo.

## Implementation Steps

### 1. Global Styles & Theme
- Update `src/styles.css` with the industrial color palette using `oklch`.
- Set up CSS variables for per-page accent moods.
- Import Google Fonts (Poppins & Inter) in `src/routes/__root.tsx`.

### 2. Layout & Shell
- Refactor `src/routes/__root.tsx` to include `Navbar` and `Footer`.
- Implement responsive breakpoints and mobile drawer.
- Create `/favicon.png` from the uploaded logo.

### 3. Shared Components
- Build `Navbar.tsx` with scroll-blur effect.
- Build `Footer.tsx` with partner logos.
- Build `Button.tsx`, `SectionContainer.tsx`, `AnimatedCard.tsx`, and `ScrollReveal.tsx`.

### 4. Routing
- Create individual route files for `/about`, `/products`, `/gallery`, and `/contact`.
- Rewrite `src/routes/index.tsx` for the home page.

## Technical Details
- **Framework**: TanStack Start v1
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion (whileInView, transitions)
- **Icons**: Lucide React
- **Responsiveness**: Mobile-first with slide-in navigation drawer.
