import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Features',
      href: getPermalink('/features/'),
      links: [
        {
          text: 'Generation',
          href: getPermalink('/features/generation/'),
        },
        {
          text: 'Evaluation',
          href: getPermalink('/features/evaluation/'),
        },
      ],
    },
    {
      text: 'Use Cases',
      href: getPermalink('/use-cases/'),
      links: [
        {
          text: 'Brain Imaging',
          href: getPermalink('/use-cases/brain-imaging'),
        },
        {
          text: 'Breast Cancer',
          href: getPermalink('/use-cases/breast-cancer'),
        },
        {
          text: 'Environment',
          href: getPermalink('/use-cases/environment'),
        },
      ],
    },
    {
      text: 'Publications',
      href: getPermalink('/publications'),
    },
    {
      text: 'Docs',
      href: 'https://docs.sstdv.io',
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/arthelokyo/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Features',
      links: [
        { text: 'Generation', href: getPermalink('/features/generation/') },
        { text: 'Evaluation', href: getPermalink('/features/evaluation/') },
      ],
    },
    {
      title: 'Use Cases',
      links: [
        { text: 'Brain Imaging', href: getPermalink('/use-cases/brain-imaging') },
        { text: 'Breast Cancer', href: getPermalink('/use-cases/breast-cancer') },
        { text: 'Environment', href: getPermalink('/use-cases/environment') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Publications', href: getPermalink('/publications') },
        { text: 'Docs', href: 'https://docs.sstdv.io' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo"> Arthelokyo</a> · All rights reserved.
  `,
};
