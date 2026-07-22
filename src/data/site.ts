/**
 * Site-wide settings. Change the brand here and it updates everywhere.
 */
export const site = {
  name: 'ScrollFinds',
  tagline: 'The stuff you keep seeing on your feed — actually worth buying.',
  // Shown in the header under the logo and in the page <title>
  blurb: 'Hand-picked viral products. We check the reviews so you don\'t buy junk.',
  // Your contact email, shown in the footer
  email: 'hello@scrollfinds.com',
  // Social handles — leave any of them as '' to hide the link
  socials: {
    tiktok: '',
    instagram: '',
  },
  /**
   * FTC AFFILIATE DISCLOSURE — legally required in the US when you earn
   * commission on links. Do not remove this. It must be visible near the
   * links themselves, not buried in a policy page.
   */
  disclosure:
    'ScrollFinds earns a commission when you buy through links on this page, at no extra cost to you. We only list products we\'d recommend regardless.',
} as const
