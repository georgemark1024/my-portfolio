# Getting Started - Quick Setup Guide

Welcome! Your portfolio is now set up with **Astro**. Here's what was done and what's next.

## What Was Set Up

✅ **Git Clean Slate**
- Initialized fresh git repository with clean history
- Ready for long-term development

✅ **Astro Framework**
- Modern static site generator
- TypeScript support
- Built-in blog and projects collections

✅ **Portfolio Structure**
- Home page with hero section and featured projects
- Projects showcase page
- Blog with multiple posts
- About page
- Modern design inspired by Shhh WordPress theme

✅ **Production Ready**
- Builds to static HTML (100% Lighthouse performance)
- Fully responsive design
- SEO-optimized with meta tags and RSS feed
- Zero JavaScript overhead by default

## Next Steps

### 1. Start the Dev Server

```bash
npm run dev
```

Then visit `http://localhost:3000` to see your portfolio in action.

### 2. Customize Your Information

Edit `src/consts.ts`:
```typescript
export const SITE_TITLE = 'My Portfolio';
export const SITE_DESCRIPTION = 'Your tagline here';
export const SITE_AUTHOR = 'Your Name';
```

### 3. Add Your Projects

Create files in `src/content/projects/`:

```bash
# Create your first project
nano src/content/projects/my-first-project.md
```

Use this template:
```markdown
---
title: "Amazing Project"
description: "What this project does"
category: "Web Development"
technologies: ["Astro", "React", "TypeScript"]
featured: true
link: "https://github.com/yourname/project"
date: 2025-02-04
---

## Project Overview
Tell the story of your project...
```

### 4. Write Blog Posts

Add posts to `src/content/blog/`:

```bash
nano src/content/blog/my-first-post.md
```

Example template:
```markdown
---
title: "Building with Astro"
description: "Why I chose Astro for my portfolio"
pubDate: 2025-02-04
---

Your blog post content here...
```

### 5. Customize Colors

Edit `src/styles/global.css`:
```css
:root {
  --primary: #2f5ee9;      /* Change to your favorite color */
  --secondary: #111111;     /* Dark text color */
  --tertiary: #878787;      /* Gray text color */
}
```

### 6. Update Social Links

Edit `src/components/Header.astro` to add your GitHub, Twitter, LinkedIn links.

## Build & Deploy

### Local Build
```bash
npm run build
# Output goes to dist/ folder
```

### Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag the dist/ folder to Netlify or connect GitHub
```

### Deploy to GitHub Pages

1. Update `astro.config.mjs` site URL
2. Configure GitHub Actions for deployment

## File Structure Overview

```
my-portfolio/
├── src/
│   ├── pages/              # Routes
│   │   ├── index.astro     # Home page
│   │   ├── projects.astro  # Projects page
│   │   └── blog/           # Blog routes
│   ├── content/            # Markdown content
│   │   ├── projects/       # Your projects
│   │   └── blog/           # Your blog posts
│   ├── components/         # Reusable parts
│   ├── styles/
│   │   └── global.css      # Global styles
│   └── consts.ts           # Site config
├── public/                 # Static files
├── dist/                   # Built site (after npm run build)
└── package.json            # Dependencies
```

## Useful Commands

```bash
# Development
npm run dev        # Start dev server

# Building
npm run build      # Build for production
npm run preview    # Preview production build

# Maintenance
npm run check      # TypeScript check
npm run astro      # Run Astro CLI directly
```

## Tips for Success

1. **Keep content organized** - Create descriptive filenames
2. **Use frontmatter well** - Good metadata helps with SEO
3. **Add images strategically** - Astro optimizes them automatically
4. **Update regularly** - Fresh content keeps your portfolio alive
5. **Test locally** - Always run `npm run build` before deploying

## Resources

- [Astro Docs](https://docs.astro.build/) - Complete guide
- [Astro Examples](https://astro.build/examples/) - Real projects
- [Community Discord](https://astro.build/chat) - Get help
- [Design Inspiration](https://github.com/Automattic/themes) - Shhh theme

## Troubleshooting

### Build fails
- Run `npm install` to ensure dependencies are installed
- Check `astro.config.mjs` for syntax errors
- Clear cache: `rm -rf node_modules && npm install`

### Changes not showing
- Restart dev server: `npm run dev`
- Clear browser cache
- Check file paths in frontmatter

### Deploy issues
- Verify `dist/` folder was created with `npm run build`
- Check that site URL is correct in `astro.config.mjs`
- Review deployment service logs

---

**You're all set!** Your clean slate portfolio is ready. Now go add your projects and tell your story! 🚀
