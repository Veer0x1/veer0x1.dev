# Personal site

Static personal site and blog built with [Astro](https://docs.astro.build), live at [veer0x1.dev](https://veer0x1.dev).

## Deploys

Hosted on Cloudflare Workers (static assets, config in `wrangler.jsonc`). Every push to `main` builds and deploys automatically; other branches get a preview URL.

## Commands

| Command        | Action                                     |
| :------------- | :----------------------------------------- |
| `pnpm install` | Install dependencies                       |
| `pnpm dev`     | Dev server at `localhost:4321` (shows drafts) |
| `pnpm check`   | Type-check `.astro` and `.ts` files        |
| `pnpm build`   | Build the site to `./dist/`                |
| `pnpm preview` | Serve the built site locally               |

## Where things live

| To change                       | Edit                         |
| :------------------------------ | :--------------------------- |
| Name, tagline, links, nav, URL  | `src/site.config.ts`         |
| Colors (both themes), accent hue | `src/styles/theme.css`       |
| Fonts                           | `fonts` in `astro.config.ts` |
| About, experience, projects, skills | `src/data/profile.ts`    |
| Info page section order         | `src/pages/index.astro`      |
| Post typography                 | `src/styles/prose.css`       |
| Post frontmatter schema         | `src/content.config.ts`      |

## Writing a post

Create `src/content/blog/<slug>.md` (or `<slug>/index.md` to keep images next to it):

```md
---
title: 'Post title'
description: 'One-line summary for lists, RSS and search results.'
pubDate: 2026-10-28
tags: [astro]
draft: true
---

Content in Markdown.
```

- The file or folder name becomes the URL: `/blog/<slug>`.
- `draft: true` shows the post in `pnpm dev` only. Remove it to publish.
- Use `.mdx` to put components inside a post.
- `src/content/blog/writing-guide/index.mdx` is a draft cheat sheet for highlighting, images, video and embeds.

## Icons

`<Icon name="lucide:..." />` for UI icons and `simple-icons:...` for brand logos. Browse names at [icones.js.org](https://icones.js.org). Custom SVGs go in `src/icons/`.
