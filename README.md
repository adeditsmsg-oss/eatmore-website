# Cup O' Joy — Premium Restaurant Website

A premium, agency-quality, responsive single-page website for **Cup O' Joy** restaurant/café located near IIT Kharagpur, Midnapore.

Built with visual precision, modern web layouts, fluid clamp typography, Schema.org local SEO microdata, and interactive client-side logic.

## 🚀 Live Preview & Code Link
- **GitHub Repository**: [https://github.com/adeditsmsg-oss/eatmore-website](https://github.com/adeditsmsg-oss/eatmore-website)

---

## 🛠️ Features & Sections

1. **Modern Responsive Design**:
   - Designed for wide screens (`max-width: 1400px` scaling to `1600px`).
   - Scales fluidly down to tablet and mobile screens using media query breakpoints (`1024px`, `768px`, `480px`).
   - Uses CSS `clamp()` typography to automatically size text for optimal readability on different screen resolutions without browser zoom.
2. **Hero Header**: Edge-to-edge full-bleed background layout with dark overlays, prominent titles, rating badges, and active action items.
3. **Structured Menu Swapper**: Interactive tabs to swap between 10 food/drink categories with over 50 items. Includes Swiggy order CTAs.
4. **Cozy Gallery Grid**: Responsive photo grid with filter controls and an interactive fullscreen lightbox modal.
5. **Instant Table Booking**: Form validation and dynamic WhatsApp text generation targeting the restaurant's contact number:
   `https://wa.me/919853010156?text=Hi%20Cup%20O'%20Joy!%20I'd%20like%20to%20reserve%20a%20table%20for%20[GUESTS]...`
6. **Local SEO structured Schema**: Integrated JSON-LD Schema.org data for local restaurants to optimize Google Map card rankings.
7. **Floating Quick Actions**: One-click floaters for direct call, WhatsApp support, and a smooth back-to-top scroll.

---

## 💻 Tech Stack
- **Structure**: HTML5 Semantic markup
- **Styling**: Vanilla CSS3 Custom properties, Flexbox, CSS Grid, clamp animations
- **Interactions**: ES6 JavaScript (scroll triggers, overlays, lightboxes, form validations)
- **Local Dev Server**: Node.js (native `http` and `fs` modules)

---

## ⚙️ Running Locally

This project includes a lightweight, zero-dependency Node.js server to preview code and bypass cross-origin browser issues or script execution policies.

1. Install **Node.js** (if not already installed).
2. Clone this repository and navigate to the project directory:
   ```bash
   git clone https://github.com/adeditsmsg-oss/eatmore-website.git
   cd eatmore-website
   ```
3. Run the preview server:
   ```bash
   node server.js
   ```
4. Open your browser and navigate to:
   👉 **[http://localhost:8000](http://localhost:8000)**
