# My-Portfolio

A clean, responsive personal portfolio built with plain HTML, CSS and JavaScript to showcase education, experience, projects and contact information.

---

Badges
- Version: 1.1.0
- Last updated: 2026-01-16

Live demo (if published): https://rakib75464.github.io/My-Portfolio/

Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Development & Testing](#development--testing)
- [Deployment](#deployment)
- [Customization Guide](#customization-guide)
- [Design Tokens & Styles](#design-tokens--styles)
- [Troubleshooting](#troubleshooting)
- [Performance & SEO](#performance--seo)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Changelog](#changelog)

---

Project Overview
----------------
My Portfolio is a multi-page, mobile-first portfolio template demonstrating a professional profile, timeline for education & experience, a projects gallery, and a contact form. Built without external UI frameworks for minimal dependencies and fast load times. Includes a persistent dark/light theme, mobile navigation, and basic client-side validations.

Key objectives:
- Present a clear professional profile
- Showcase projects and research with visual previews
- Provide an easy contact mechanism for potential employers/clients
- Focus on accessibility, responsiveness and performance

Features
--------
Design & UX
- Light/dark theme toggle with preference persistence
- Responsive layout (mobile-first)
- Smooth CSS transitions and subtle animations
- Accessible components (semantic HTML, ARIA where needed, keyboard navigation)

Interactive
- Mobile hamburger menu
- Hover states on cards and buttons
- Simple client-side form validation
- Active state indicators for navigation

Content & Organization
- Multi-page layout (Home, Education, Experience, Projects, Contact)
- Project gallery with screenshots and descriptions
- Timeline-style education & experience sections
- Skills matrix / tags

Technology Stack
----------------
Frontend:
- HTML5 (semantic markup)
- CSS3 (Flexbox, Grid, CSS variables)
- JavaScript (ES6+) for UI behavior and persistence
- Google Fonts: Poppins

Tools:
- VS Code
- Git & GitHub
- Browser DevTools

Project Structure
-----------------
My-Portfolio/
│
├── index.html                    # Main landing page (Home)
├── README.md                     # This documentation file
│
├── CSS/
│   └── main.css                  # Global styles and theme variables
│
├── js/
│   └── main.js                   # JS: dark mode, mobile nav, validation
│
├── HTML/                         # Other pages
│   ├── education.html
│   ├── experience.html
│   ├── project.html
│   └── contactme.html
│
└── images/                       # Assets
    ├── profile_photo.jpg
    ├── social/                   # social icons (facebook, github, etc.)
    ├── education_logos/
    ├── project_screenshots/
    └── experience_images/

Quick Start
-----------
Prerequisites
- A modern code editor (VS Code recommended)
- A modern browser (Chrome, Firefox, Safari, Edge)
- Git (optional, for cloning)

Clone and run locally (quick)
```bash
git clone https://github.com/rakib75464/My-Portfolio.git
cd My-Portfolio
# Open index.html in your browser, or run a simple server:
python -m http.server 8000
# then visit http://localhost:8000
```

Recommended local server options
```bash
# Python 3
python -m http.server 8000

# Node (http-server)
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Why use a local server?
- Avoids CORS/file:// restrictions
- Proper asset path resolution
- Enables testing form submissions and relative routing

Development & Testing
---------------------
- Use the browser DevTools to inspect layout and look for console errors
- Test responsiveness using device emulation or by resizing the browser
- Verify keyboard navigation and screen reader labels for accessibility
- Recommended browser versions:
  - Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

Deployment
----------
GitHub Pages (recommended)
```bash
git init
git add .
git commit -m "Initial portfolio deployment"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
# Then enable Pages in repo Settings -> Pages, branch: main, folder: /
```

Netlify / Vercel
- Drag-and-drop deploy or connect repository for CI/CD and automatic builds.
- Provide HTTPS, custom domain, and redirects.

Customization Guide
-------------------
1. Personal Info
   - Update name, bio and hero content in `index.html`
   - Replace `images/profile_photo.jpg` with your photo (1:1 ratio recommended)

2. Pages & Content
   - Education: `HTML/education.html`
   - Experience: `HTML/experience.html`
   - Projects: `HTML/project.html` (update project cards and screenshots)
   - Contact: `HTML/contactme.html` (update email, links and contact text)

3. Styles
   - Edit `CSS/main.css`
   - Theme colors: change CSS variables in the `:root` section
   - Breakpoints: adjust `@media` queries if needed

4. Scripts
   - `js/main.js` contains theme toggle, mobile menu logic and form validation
   - Add or modularize code for additional behaviors

Images & Optimization
- Use WebP where possible and provide fallbacks
- Keep web-optimized images (< 500 KB recommended)
- Use `srcset` and `sizes` for responsive images
- Preserve consistent naming and case sensitivity for file names

Design Tokens & Styles
----------------------
Suggested color tokens (examples in `main.css`):
- Light theme primary: #0066cc
- Light background: #f5f5f5
- Dark background: #121212
- Card background (dark): #1e1e1e

Typography:
- Poppins (Google Fonts), base: 16px (1rem), line-height: 1.6

Components:
- Cards: border-radius 10px, subtle shadow
- Buttons: clear primary style with hover states
- Forms: visible focus states and accessible labels

Troubleshooting
---------------
Common issues and fixes:

1. Styles not loading
```html
<!-- Use relative paths for portability -->
<link rel="stylesheet" href="CSS/main.css">
```

2. JavaScript errors
- Check Console (F12). Ensure `defer` is used on script tags and selectors match IDs/classes.

3. Images not found
- Check /images/ folder, filenames and extensions (case-sensitive on some hosts).

4. Contact form doesn't send
- Static hosting requires third-party services (Formspree, Netlify Forms) or a backend.

Helpful debugging checklist:
- Inspect Console → Network → Accessibility tree
- Validate HTML/CSS with validators

Performance & SEO
-----------------
Current optimizations:
- Minimize external dependencies
- Concatenate CSS/JS in production builds
- Use optimized and responsive images

Further improvements:
- Implement lazy loading for heavy images (`loading="lazy"`)
- Add service worker for PWA support
- Add structured data (JSON-LD) and sitemap.xml for better SEO

Future Enhancements
-------------------
Planned:
- Backend integration for contact form
- Project filtering & tagging
- PDF resume download
- Multi-language support
- PWA & offline caching
- Analytics and improved SEO

Contributing
------------
This is primarily a personal portfolio, but suggestions and improvements are welcome.

Preferred contribution flow:
1. Fork the repository
2. Create a branch: `git checkout -b feature/awesome`
3. Commit: `git commit -m "Add awesome feature"`
4. Push: `git push origin feature/awesome`
5. Open a Pull Request with a clear description and screenshots if applicable

Please open issues for bugs or feature requests with steps to reproduce and environment details.

License
-------
© 2025–2026 Md Rakib Hasan. All rights reserved.

- Personal use and learning: permitted
- Redistribution as-is for personal use: permitted
- Commercial redistribution/republishing as your own template: not permitted without explicit permission

Contact
-------
- GitHub: [rakib75464](https://github.com/rakib75464)
- Email: rakibss974@gmail.com
- Facebook: Rakib Hasan

Changelog
---------
- 1.1.0 — 2026-01-16: README restructure, clarity improvements, updated instructions and date
- 1.0.0 — 2025-01: Initial public release

Acknowledgements
----------------
Thanks to open-source authors and resources that help build and improve personal portfolios and front-end practices.
