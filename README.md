# Portfolio Website - Cosmic Ocean Edition

A personal portfolio website featuring an immersive "Cosmic Ocean" visual theme with animated starfield backgrounds, glassmorphism UI, and bioluminescent accents. Built with Astro, React, and Tailwind CSS v4.

![Version](https://img.shields.io/badge/version-3.1.0-cyan)
![Astro](https://img.shields.io/badge/Astro-6.0.4-BC52EE?logo=astro)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-4.2.1-06B6D4?logo=tailwindcss)

## ✨ Features

### 🌌 Cosmic Ocean Theme v3.1
- **Dynamic Starfield Background** - Canvas-based animation with 800 flowing stars
- **Aurora Gradient Effects** - CSS animated nebula gradients
- **Glassmorphism UI** - Backdrop-blur navigation and cards with subtle borders
- **Bioluminescent Accents** - Cyan (#33BBC5), teal (#85E6C5), and lime (#C8F560) glow effects
- **Smooth Transitions** - Fade-in animations and View Transitions for SPA-like navigation
- **Dark/Light Mode** - Toggle between cosmic dark and clean light themes

### 🛠 Technical Stack
- **Framework**: Astro 6.0.4 with Islands Architecture
- **UI**: React 19.2.4 for interactive components
- **Styling**: Tailwind CSS v4.2.1 with custom theme configuration
- **State Management**: Nano Stores for cross-island state sharing
- **Content**: MDX support for blog posts with Zod validation
- **Build**: Static site generation for optimal performance

### ⚡ Performance
- Zero JavaScript by default (except interactive islands)
- Optimized images with WebP conversion
- SEO-friendly with sitemap generation
- WCAG 2.1 accessibility compliance
- View Transitions API for smooth navigation

## 📁 Project Structure

```
portfolio-website/
├── public/                 # Static assets (favicon, robots.txt)
├── src/
│   ├── assets/            # Project images and cover art
│   ├── components/
│   │   ├── background/    # Starfield and Aurora components
│   │   ├── interactive/   # React islands (ThemeToggle, ProjectFilter)
│   │   ├── layout/        # Header, Footer components
│   │   ├── sections/      # Hero, ProjectGrid sections
│   │   └── ui/            # Button, Tag, ProjectCard components
│   ├── content/           # Content collections (projects, blog)
│   ├── layouts/           # Main layout wrapper
│   ├── lib/               # Utility functions and Nano Stores
│   ├── pages/             # Route pages
│   └── styles/            # Global CSS with Tailwind v4 theme
├── dist/                  # Build output (static files)
└── package.json           # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js >= 22.12.0
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ChaoticArray516/arch_torrent_web.git
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
# Build static site
npm run build

# Preview production build
npm run preview
```

The optimized static files will be generated in the `dist/` directory.

## 🎨 Color Palette

### Cosmic Ocean Theme
| Color Name | Hex | RGB | Usage |
|------------|-----|-----|-------|
| Ocean Deep | #0D1117 | 13, 17, 23 | Primary background |
| Ocean Abyss | #010409 | 1, 4, 9 | Deepest background |
| Star Light | #E6EDF3 | 230, 237, 243 | Primary text |
| Star Dim | #8B949E | 139, 148, 158 | Secondary text |
| Biolume Cyan | #33BBC5 | 51, 187, 197 | Primary accent |
| Biolume Teal | #85E6C5 | 133, 230, 197 | Hover accent |
| Biolume Lime | #C8F560 | 200, 245, 96 | Success states |
| Nebula Purple | #8250DF | 130, 80, 223 | Secondary accent |
| Nebula Blue | #4A90E2 | 74, 144, 226 | Links and highlights |

## 📧 Contact

- **Email**: [chaoticarray.rf516@gmail.com](mailto:chaoticarray.rf516@gmail.com)
- **Email**: [archtorrent017@aliyun.com](mailto:archtorrent017@aliyun.com)
- **GitHub**: [ChaoticArray516](https://github.com/ChaoticArray516)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

Built with:
- [Astro](https://astro.build) - The web framework for content-driven websites
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [React](https://react.dev) - The library for web and native user interfaces
- [Nano Stores](https://nanostores.github.io/nanostores/) - Tiny state manager

---

**Live Demo**: Coming soon to a Vercel/Netlify near you
