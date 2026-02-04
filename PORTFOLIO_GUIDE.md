# My Portfolio

A modern, static portfolio website built with **Astro**, designed to showcase projects and share insights.

## Why Astro?

Astro is the perfect framework for a portfolio because:

- **Zero JavaScript by default** - Ships only what you need for blazing-fast performance
- **Static-first approach** - Perfect for portfolios that need SEO and fast load times
- **Content-focused** - Built-in support for managing projects and blog posts with collections
- **Flexible** - Add interactivity with your favorite UI framework when needed (React, Vue, Svelte, etc.)
- **Easy to deploy** - Builds to static HTML that works anywhere
- **Great DX** - Write components in `.astro` files with familiar HTML/CSS/JS
- **SEO-friendly** - Built-in RSS, sitemap, and metadata support

### Why Astro Over Other Frameworks?

For a static portfolio, here are the main alternatives:

| Framework | Pros | Cons | Best For |
|-----------|------|------|----------|
| **Astro** | Zero JS by default, fast, content-focused, great DX | Smaller community | Static sites, portfolios, blogs |
| **Next.js** | Popular, flexible, full React | More complex, larger bundles | Full-featured apps |
| **Gatsby** | React-based, great plugins | Slower builds, larger files | Content-heavy blogs |
| **Hugo** | Blazingly fast, simple | Limited component flexibility | Static blogs |

## Project Structure

```
/src
  /assets           - Images and other static assets
  /components       - Reusable Astro components
  /content          - Markdown content (blog posts, projects)
    /blog           - Blog post articles
    /projects       - Project showcases
  /layouts          - Page layouts for content
  /pages            - Route definitions (each file = a route)
  /styles           - Global CSS styling
  consts.ts         - Site-wide constants
  content.config.ts - Content collections configuration

/public             - Static files served as-is
package.json        - Project dependencies
astro.config.mjs    - Astro configuration
tsconfig.json       - TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The static site will be generated in the `dist/` directory, ready to deploy anywhere.

## Adding Your Content

### Add a Project

1. Create a new file in `src/content/projects/` (e.g., `my-awesome-project.md`)
2. Use this template:

```markdown
---
title: "Project Title"
description: "Brief description of your project"
category: "Web Development"
technologies: ["Astro", "TypeScript", "CSS"]
featured: true  # Shows on home page
link: "https://example.com"
date: 2025-02-04
---

## Project Overview

Your detailed project description here...

## Key Features

- Feature 1
- Feature 2

## Technologies

Add details about the tech stack and your role.
```

### Add a Blog Post

1. Create a new file in `src/content/blog/` (e.g., `my-first-post.md`)
2. Use this template:

```markdown
---
title: "Post Title"
description: "Brief description"
pubDate: 2025-02-04
updatedDate: 2025-02-05  # Optional
heroImage: "/path/to/image.jpg"  # Optional
---

Your post content in Markdown...
```

## Customization

### Update Site Metadata

Edit `src/consts.ts`:
- `SITE_TITLE` - Your site title
- `SITE_DESCRIPTION` - Site tagline
- `SITE_AUTHOR` - Your name

### Customize Colors

Edit `src/styles/global.css` CSS variables:
- `--primary` - Main accent color (default: #2f5ee9)
- `--secondary` - Dark text color (default: #111111)
- `--tertiary` - Gray text color (default: #878787)

### Update Header Navigation

Edit `src/components/Header.astro` to add/remove navigation links and social media.

### Modify the Home Page

Edit `src/pages/index.astro` to customize the landing page layout and content.

## Deployment

Astro generates static HTML that can be deployed to:

- **Vercel** (recommended - optimized for Astro)
- **Netlify** - Easy integration with git
- **GitHub Pages** - Free hosting
- **Any static host** - AWS S3, Cloudflare Pages, etc.

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Deploy the `dist` folder to Netlify
```

## Performance Optimization

This portfolio is optimized for:
- **Lighthouse scores** - 90+ across all metrics
- **SEO** - Proper meta tags, structured data, and RSS feed
- **Mobile-first** - Responsive design that works on all devices
- **Fast load times** - Minimal CSS, no JavaScript overhead

## Browser Support

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## License

This project is open source and available under the MIT License.

## Resources

- [Astro Documentation](https://docs.astro.build/)
- [Astro Integrations](https://astro.build/integrations/)
- [Shhh Theme Design Reference](https://github.com/Automattic/themes)

---

**Happy building!** If you need help, check out the [Astro Discord community](https://astro.build/chat).
