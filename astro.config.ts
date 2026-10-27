import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import { site } from './src/site.config';

export default defineConfig({
  site: site.url,
  integrations: [mdx(), sitemap(), icon()],

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Space Grotesk',
      cssVariable: '--font-sans',
      weights: [400, 500, 600, 700],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],

  markdown: {
    // Both themes are emitted as CSS variables; global.css picks one per site theme.
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    },
  },
});
