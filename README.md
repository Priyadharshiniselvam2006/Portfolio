# 🌌 MathVerse Portfolio

> *Where mathematical precision meets artistic expression*

An interactive, mathematically-themed portfolio website showcasing the intersection of mathematics, technology, and creative innovation. Built with modern web technologies and featuring stunning 3D visualizations powered by Three.js.

---

## ✨ Features

### 🎨 **Visual Excellence**
- **3D Mathematical Backgrounds** - Dynamic Three.js particle systems and geometric visualizations
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Mathematical Aesthetics** - Custom mathematical symbols and equations as design elements
- **Smooth Animations** - GSAP-powered transitions and interactions

### 🧮 **Mathematical Theme**
- **Symbol Navigation** - Unique navigation using mathematical symbols (∫, Δ, Σ, ∞, π)
- **Interactive Puzzles** - Mathematical verification system for contact form
- **Dynamic Equations** - Animated mathematical formulas throughout the site
- **Proof of Interest** - Randomized math puzzles to verify genuine engagement

### 🚀 **Performance Optimized**
- **Mobile-First** - Adaptive particle counts and rendering for mobile devices
- **WebGL Fallback** - 2D canvas fallback for devices without WebGL support
- **Optimized Assets** - ~11KB smaller CSS with production-ready optimizations
- **Fast Loading** - Efficient resource loading and minimal dependencies

### 📱 **Pages**
1. **Landing** - Mathematical hero section with animated name and profile
2. **About** - Personal journey and mathematical philosophy
3. **Skills** - Interactive skill visualization with proficiency matrix
4. **Works** - Project gallery with mathematical categorization
5. **Contact** - Infinite connections portal with puzzle verification
6. **Playground** - Hidden mathematical laboratory (Easter egg)

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Core** | HTML5, CSS3, JavaScript (ES6+) |
| **Styling** | Tailwind CSS 3.4.17 |
| **3D Graphics** | Three.js r128 |
| **Animations** | GSAP 3.12.2 |
| **Fonts** | JetBrains Mono, Inter, Space Grotesk, Fira Code |
| **Form Backend** | Formspree |
| **Analytics** | Google Analytics, Google Tag Manager |

---

## � Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/Priyadharshiniselvam2006/Portfolio.git
cd Portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
# Build and watch CSS
npm run dev

# In another terminal, serve the site
python -m http.server 8000
# or
npx serve
```

4. **Open in browser**
```
http://localhost:8000
```

### Build for Production

```bash
# Build optimized CSS
npm run build:css
```

---

## 📁 Project Structure

```
mathverse_portfolio/
├── css/
│   ├── tailwind.css              # Tailwind source with custom utilities
│   ├── main.css                  # Compiled CSS (auto-generated)
│   └── responsive-typography.css # Fluid typography system
├── js/
│   ├── navigation.js             # Shared navigation module
│   └── threejs-background.js     # 3D background utilities
├── pages/
│   ├── landing_dimension_mathematical_hero.html
│   ├── about_theorem_integration_of_self.html
│   ├── proficiencies_matrix_skills_visualization.html
│   ├── works_gallery_sum_of_projects.html
│   ├── reach_me_portal_infinite_connections.html
│   └── mathematical_playground_hidden_laboratory.html
├── images/
│   ├── logo.png
│   └── pic.png
├── public/
│   ├── favicon/                  # Favicon assets
│   └── manifest.json             # PWA manifest
├── index.html                    # Entry point with loading animation
├── tailwind.config.js            # Tailwind configuration
└── package.json                  # Dependencies and scripts
```

---

## 🎨 Customization

### Tailwind Configuration

The project uses a custom Tailwind configuration with mathematical theming:

**Color Palette:**
- `primary`: Deep space blue (#0f0f23)
- `accent`: Cyan (#00d4ff)
- `success`: Emerald (#10ba83)
- `warning`: Amber (#f59e0b)

**Custom Utilities:**
- `mathematical-glow` - Glowing box shadow effect
- `transition-mathematical` - Smooth 300ms transitions
- `backdrop-blur-mathematical` - Custom blur effect

### Fonts

```css
/* Mathematical & Code */
font-jetbrains    /* JetBrains Mono - Headers & symbols */
font-fira-code    /* Fira Code - Code blocks */

/* Body & UI */
font-inter        /* Inter - Body text */
font-space-grotesk /* Space Grotesk - Headings */
```

---

## 🔧 NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run build:css` | Build production CSS |
| `npm run watch:css` | Watch and rebuild CSS on changes |
| `npm run dev` | Start development mode (watch CSS) |

---

## 🌐 Deployment

### GitHub Pages

The site is configured for GitHub Pages deployment:

1. Push to `main` branch
2. GitHub Actions automatically deploys to GitHub Pages
3. Visit: `https://priyadharshiniselvam2006.github.io/Portfolio/`

### Manual Deployment

1. Build production CSS: `npm run build:css`
2. Upload all files to your hosting provider
3. Ensure `index.html` is the entry point

---

## 📱 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |
| Mobile Safari | iOS 14+ | ✅ Optimized |
| Chrome Mobile | Latest | ✅ Optimized |

**Note:** WebGL required for 3D backgrounds. Automatic 2D fallback provided.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👤 Author

**Priyadharshini S**
- B.Sc. Mathematics
- GitHub: [@Priyadharshiniselvam2006](https://github.com/Priyadharshiniselvam2006)
- LinkedIn: [Priyadharshini S](https://www.linkedin.com/in/priyadharshini-s-7b2973372/)
- Email: priyadharshiniselvam242006@gmail.com

---

## 🙏 Acknowledgments

- **Three.js** - For amazing 3D graphics capabilities
- **GSAP** - For smooth animations
- **Tailwind CSS** - For rapid UI development
- **Formspree** - For contact form backend
- **Google Fonts** - For beautiful typography

---

## 📊 Project Stats

- **Total Pages:** 6 + 1 landing
- **Lines of Code:** ~5,000+
- **CSS Size:** 35.5KB (optimized)
- **Load Time:** < 2s (on 3G)
- **Lighthouse Score:** 95+ (Performance)

---

<div align="center">

### ∫ f(x) dx = Knowledge

*Made with ❤️ and ∞ mathematical precision*

</div>
