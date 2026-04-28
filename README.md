# Kaviya Balamurugan — Personal Portfolio

[![Deploy to GitHub Pages](https://github.com/Kaviyariya/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Kaviyariya/portfolio/actions/workflows/deploy.yml)

> A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS.

## 🔗 Live Demo

**[https://kaviyariya.github.io/portfolio](https://kaviyariya.github.io/portfolio)**

## ✨ Features

- **Responsive Design** — Looks great on desktop, tablet, and mobile
- **Smooth Animations** — Polished UI with transitions and hover effects
- **Dark Mode Ready** — Built with Tailwind CSS theming
- **SEO Optimized** — Meta tags, Open Graph, and structured content
- **Fast Performance** — Vite-powered build for optimal loading speeds
- **Accessible** — Semantic HTML and ARIA-friendly components

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | [React 19](https://react.dev/) |
| Router | [TanStack Router](https://tanstack.com/router) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| UI Components | [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/) |
| Build Tool | [Vite 7](https://vitejs.dev/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Forms | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |

## 📁 Project Structure

```
portfolio/
├── .github/workflows/    # CI/CD deployment workflow
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── sections/     # Page section components
│   │   └── ui/           # shadcn/ui components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── routes/           # TanStack Router routes
│   ├── router.jsx        # Router configuration
│   └── styles.css        # Global styles
├── dist/                 # Build output (generated)
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+ or [Bun](https://bun.sh/)

### Installation

```bash
# Clone the repository
git clone https://github.com/Kaviyariya/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server will start at `http://localhost:8080`.

### Build for Production

```bash
npm run build
```

The static files will be generated in the `dist/` directory.

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## 🌐 Deployment

This project is automatically deployed to **GitHub Pages** via GitHub Actions on every push to the `master` branch.

The deployment workflow:
1. Installs dependencies with `npm ci`
2. Builds the project with `npm run build`
3. Deploys the `dist/client` folder to the `gh-pages` branch

To enable GitHub Pages:
1. Go to **Settings → Pages** in your repository
2. Under **Build and deployment**, select **Deploy from a branch**
3. Choose the `gh-pages` branch and `/ (root)` folder
4. Click **Save**

## 📬 Contact

Feel free to reach out if you have any questions or suggestions!

- **GitHub**: [@Kaviyariya](https://github.com/Kaviyariya)

---

Built with ❤️ by **Kaviya Balamurugan**

