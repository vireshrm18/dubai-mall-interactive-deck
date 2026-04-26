# Dubai Mall - Interactive Sales Deck

A fully interactive, cinematic, browser-based sales deck designed for the commercial team of the Dubai Mall. This project reimagines the traditional pitch deck as an immersive web experience to drive retail leasing, sponsorship, and event bookings.

## 🎯 The Vision
This tool replaces fragmented PDFs, spreadsheets, and YouTube links with a single, self-contained web application. Designed with the polish of a luxury fashion brand (inspired by Apple, Hermès, and high-end automotive UI) and the energy of a global destination. The viewer controls their journey, and every section is engineered to create immediate emotional buy-in.

## 🚀 Live Demo
**[Insert Your Live URL Here after deployment]**

## 🛠 Tech Stack
* **Frontend Framework**: React 19 + Vite (for lightning-fast HMR and optimized production builds)
* **Styling**: Tailwind CSS v4 (Utility-first styling for rapid UI development)
* **Animations**: Framer Motion (For complex scroll-linked animations, parallax effects, and smooth page transitions)
* **Icons**: Lucide React
* **Deployment**: Vercel / Netlify (Ready for CI/CD)

## 🎨 Design Decisions & Rationale
* **Video-First Storytelling**: Video is treated as the primary medium rather than decoration. The cinematic hero section autoplays to immediately convey scale and ambition.
* **Luxury UI / Dark Mode**: A "Carbon & Platinum" (Black & Gold) color palette was selected to emulate high-end luxury brands, ensuring the tool feels premium to prospective luxury tenants.
* **Non-Linear Navigation**: Viewers can jump between "Overview", "Retail", and "Events" via the footer or scroll organically.
* **Performance**: Built with performance in mind (Vite bundling, optimized DOM structure) to maintain high Lighthouse scores despite heavy media and animation usage.

## 🤖 AI Integration
Generative AI was heavily utilized to accelerate development and enhance the visual experience where real assets were limited:
* **Image Generation**: The interactive "City Within A City" module utilizes stunning, photorealistic 8K AI-generated architectural renderings to visualize the futuristic luxury of the mall's ecosystem.
* **Code Generation & Prototyping**: AI pair-programming tools were utilized to rapidly architect the application, generate boilerplate, and craft complex `framer-motion` parallax components.

## 🏗 Phase 2: Expandable Architecture
While Phase 1 delivers the core interactive overview, the codebase is fundamentally modular. Components are decoupled, making it trivial to build out deep-dive sub-modules (Phase 2) without a rewrite:
* **Routing Ready**: The current single-page structure can easily be wrapped in a router to support dedicated URLs for `/events`, `/sponsorships`, and `/leasing`.
* **Component Reusability**: The `<Section />`, `<VideoFrame />`, and `<AnimatedShowcase />` components accept props for content, allowing developers to generate new sub-pages simply by mapping over new data structures.

## 💻 Local Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vireshrm18/dubai-mall-interactive-deck.git
   cd [repository-folder-name]
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📈 Future Improvements (With More Time)
* **Headless CMS Integration**: Connect the deck to Sanity or Contentful so the sales team can swap out videos and tenant logos without requiring developer intervention.
* **Interactive 3D Map**: Implement a WebGL/Three.js interactive map of the mall for spatial context and leasing availability.
* **Analytics Integration**: Track time-spent-on-section to give the sales team data on what prospects care about most before the follow-up call.
