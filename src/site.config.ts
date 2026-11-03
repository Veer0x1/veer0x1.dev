// Site identity and navigation. Edit this file to change who the site is about.
// Resume content (about, experience, projects...) lives in src/data/profile.ts.
// Colors and fonts live in src/styles/theme.css.

export const site = {
  url: 'https://veer0x1.dev',
  name: 'Balveer Singh Rao',
  handle: 'veer0x1',
  tagline: 'Software engineer working on AI agents and backend systems.',
  description: 'Personal site and blog of Balveer Singh Rao, software engineer.',
  locale: 'en',

  nav: [
    { label: 'About', href: '/' },
    { label: 'Blog', href: '/blog' },
  ],

  socials: [
    { label: 'GitHub', href: 'https://github.com/Veer0x1', icon: 'simple-icons:github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/veer0x1', icon: 'simple-icons:linkedin' },
    { label: 'X', href: 'https://x.com/Balveerrajput56', icon: 'simple-icons:x' },
    { label: 'Email', href: 'mailto:balveerxpersonal@gmail.com', icon: 'lucide:mail' },
  ],
} as const;
