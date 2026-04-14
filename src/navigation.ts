import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Locale } from '~/i18n';
import { t } from '~/i18n';

export function getHeaderData(locale: Locale) {
  return {
    links: [
      {
        text: t(locale, 'nav.features'),
        href: getRelativeLocaleUrl(locale, '/features/'),
        links: [
          {
            text: t(locale, 'nav.generation'),
            href: getRelativeLocaleUrl(locale, '/features/generation/'),
          },
          {
            text: t(locale, 'nav.evaluation'),
            href: getRelativeLocaleUrl(locale, '/features/evaluation/'),
          },
        ],
      },
      {
        text: t(locale, 'nav.useCases'),
        href: getRelativeLocaleUrl(locale, '/use-cases/'),
        links: [
          {
            text: t(locale, 'nav.brainImaging'),
            href: getRelativeLocaleUrl(locale, '/use-cases/brain-imaging/'),
          },
          {
            text: t(locale, 'nav.breastCancer'),
            href: getRelativeLocaleUrl(locale, '/use-cases/breast-cancer/'),
          },
          {
            text: t(locale, 'nav.environment'),
            href: getRelativeLocaleUrl(locale, '/use-cases/environment/'),
          },
        ],
      },
      {
        text: t(locale, 'nav.publications'),
        href: getRelativeLocaleUrl(locale, '/publications/'),
      },
      {
        text: t(locale, 'nav.docs'),
        href: 'https://docs.sstdv.io',
      },
    ],
    actions: [
      {
        text: t(locale, 'nav.download'),
        href: 'https://github.com/arthelokyo/astrowind',
        target: '_blank',
      },
    ],
  };
}

export function getFooterData(locale: Locale) {
  return {
    links: [
      {
        title: t(locale, 'nav.features'),
        links: [
          { text: t(locale, 'nav.generation'), href: getRelativeLocaleUrl(locale, '/features/generation/') },
          { text: t(locale, 'nav.evaluation'), href: getRelativeLocaleUrl(locale, '/features/evaluation/') },
        ],
      },
      {
        title: t(locale, 'nav.useCases'),
        links: [
          { text: t(locale, 'nav.brainImaging'), href: getRelativeLocaleUrl(locale, '/use-cases/brain-imaging/') },
          { text: t(locale, 'nav.breastCancer'), href: getRelativeLocaleUrl(locale, '/use-cases/breast-cancer/') },
          { text: t(locale, 'nav.environment'), href: getRelativeLocaleUrl(locale, '/use-cases/environment/') },
        ],
      },
      {
        title: t(locale, 'footer.resources'),
        links: [
          { text: t(locale, 'nav.publications'), href: getRelativeLocaleUrl(locale, '/publications/') },
          { text: t(locale, 'nav.docs'), href: 'https://docs.sstdv.io' },
        ],
      },
      {
        title: t(locale, 'footer.company'),
        links: [{ text: t(locale, 'footer.about'), href: getRelativeLocaleUrl(locale, '/about/') }],
      },
    ],
    secondaryLinks: [],
    socialLinks: [
      { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
      { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
      { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
    ],
    footNote: `${t(locale, 'footer.madeBy')} <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo">Arthelokyo</a> · All rights reserved.`,
  };
}
