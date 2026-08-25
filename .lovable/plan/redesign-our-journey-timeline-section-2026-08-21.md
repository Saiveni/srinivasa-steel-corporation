# Redesign "Our Journey / Timeline" Section

Redesign the `AboutSection.tsx` to match the "Steel Journey" visual direction from the reference image, featuring a 3D TMT rebar timeline with hanging 3D milestone cards.

## User Review Required

> [!IMPORTANT]
> The current timeline section will be completely replaced with the new "Steel Journey" design. All other sections (Header, Hero, etc.) will remain untouched.

## Proposed Changes

### 1. Visual Identity & Background
- **Background**: Deep navy/black (`#050A14`) with a subtle engineering grid and technical measurement marks.
- **Atmosphere**: Cinematic industrial display with realistic steel reflections and gold ambient lighting.

### 2. Header Redesign
- **Eyebrow**: "OUR JOURNEY" in gold.
- **Main Heading**: "STRONG ROOTS. STRONGER FUTURE." with "STRONGER FUTURE" highlighted in gold.
- **Typography**: Premium sans-serif (Manrope/Plus Jakarta) with tight tracking for an architectural feel.

### 3. Realistic 3D TMT Rebar Timeline
- **Concept**: The timeline line is a high-fidelity 3D cylindrical TMT reinforcement rod.
- **Details**: Metallic gunmetal finish, realistic diagonal ribbing, longitudinal marks, and gold mounting clamps.
- **Responsiveness**: Horizontal on desktop, rotating to vertical on mobile viewports.

### 4. 3D Hanging Milestone Cards
- **Design**: Premium dark metal cards suspended from the rebar via realistic gold hooks/clamps.
- **Aesthetic**: Metallic surface, thin gold borders, depth extrusion, and soft shadows.
- **Content**:
  - `01` - 1994: Established
  - `02` - 2000s: Expanded to Vizag
  - `03` - 2010s: MoU Dealer Status
  - `04` - Today: 3 Locations, 30+ Years
- **Icons**: Custom gold line icons for each stage (Factory, Map, Handshake, Pin).

### 5. Bottom Trust Indicators
- **Icon Strip**: A horizontal row of engineering icons with text:
  - 30+ Years of Trust
  - Premium Steel Products
  - Quality & Reliability
  - Timely Supply Pan India

### 6. Animations & Motion
- **Entrance**: The steel rod "draws" itself across the screen on scroll.
- **Reveal**: Cards drop down sequentially with a subtle natural swaying/hanging motion.
- **Motion System**: Slow, smooth, and premium (no bouncing or aggressive sliding).

## Technical Details
- **Framework**: `framer-motion` for complex 3D-like animations and scroll triggers.
- **Styling**: Tailwind CSS with custom gradients for metallic effects.
- **Icons**: `lucide-react` for the industrial icon set.
- **Components**: `AboutSection.tsx` will be completely refactored.
