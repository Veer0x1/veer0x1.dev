// Site identity and navigation. Edit this file to change who the site is about.
// Colors and fonts live in src/styles/theme.css.

export const site = {
  url: 'https://example.com',
  name: 'Your Name',
  handle: 'yourname',
  tagline: 'Software engineer building reliable systems for the web.',
  description: 'Personal site and blog of Your Name, software engineer.',
  locale: 'en',

  nav: [
    { label: 'About', href: '/' },
    { label: 'Blog', href: '/blog' },
  ],

  socials: [
    { label: 'GitHub', href: 'https://github.com/your-username', icon: 'simple-icons:github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-username', icon: 'simple-icons:linkedin' },
    { label: 'X', href: 'https://x.com/your-username', icon: 'simple-icons:x' },
    { label: 'Email', href: 'mailto:you@example.com', icon: 'lucide:mail' },
  ],
} as const;
