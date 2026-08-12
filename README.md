# georgemark.dev

Personal portfolio and blog of George Mark, built with [Astro](https://astro.build). Live at [www.georgemark.dev](https://www.georgemark.dev/).

## Stack

- **Astro 5** — static output, no UI framework
- **Vanilla CSS** — semantic design tokens in `src/styles/global.css` with light/dark themes (`[data-theme]` + `prefers-color-scheme` fallback)
- **Content collections** — projects and blog posts as markdown in `src/content/`
- Deployed on Vercel via git push to `main`

## Structure

```
src/
├── components/     # Header, Footer, ThemeToggle, ProjectCard, PostPreview, ExperienceTimeline…
├── content/        # projects/*.md and blog/*.md (schemas in src/content.config.ts)
├── data/           # experience.ts and skills.ts (edit these to update homepage sections)
├── layouts/        # BaseLayout (shared shell), BlogPost (article layout)
├── pages/          # routes
└── styles/         # global.css (design tokens + shared classes)
```

## Common tasks

| Task | How |
| --- | --- |
| Add a project | Create `src/content/projects/<name>.md` with frontmatter (`title`, `description`, `category`, `technologies`, `date`, optional `featured`, `link`, `image`) |
| Add a blog post | Create `src/content/blog/<name>.md` (`title`, `description`, `pubDate`, optional `heroImage`) |
| Update experience | Edit `src/data/experience.ts` |
| Update skills | Edit `src/data/skills.ts` |
| Change colors | Edit the token blocks at the top of `src/styles/global.css` |

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the build locally |
