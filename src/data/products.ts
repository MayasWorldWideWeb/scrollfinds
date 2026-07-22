/**
 * ============================================================
 *  YOUR PRODUCT CATALOG — this is the only file you need to
 *  edit to add, remove, or update products.
 * ============================================================
 *
 * TO ADD A PRODUCT:
 *   1. Copy any block below.
 *   2. Give it a new unique `id`.
 *   3. Paste YOUR affiliate link into `affiliateUrl`.
 *   4. Save. The site updates automatically.
 *
 * Products here sit in the $20-80 range and lean toward TikTok
 * Shop, which pays 5-20% vs Amazon's 1-4%. Their `affiliateUrl`
 * is empty on purpose — any product without a link shows a
 * "Link needed" state in dev and is stripped from the production
 * build, so you can never publish a dead link by accident.
 */

export type Retailer = 'TikTok Shop' | 'Amazon' | 'Temu' | 'AliExpress'

export type Category =
  | 'Home & Kitchen'
  | 'Beauty'
  | 'Tech'
  | 'Fitness'
  | 'Pets'
  | 'Car'

export type Product = {
  id: string
  name: string
  /** One line on why it's worth buying. Keep it under ~90 characters. */
  blurb: string
  /** What the buyer pays at the retailer. */
  price: number
  /** Optional crossed-out "was" price. Only use it if it's genuinely true. */
  compareAt?: number
  category: Category
  retailer: Retailer
  /** YOUR affiliate link. Empty = product is hidden from the live site. */
  affiliateUrl: string
  /** Optional product image URL. Falls back to an emoji tile if omitted. */
  image?: string
  /** Fallback tile emoji, used when there's no image. */
  emoji: string
  /** Shows a "Trending" flame badge and sorts it to the top. */
  trending?: boolean
  /**
   * Your commission rate as a percentage (e.g. 12 = 12%).
   * Powers the earnings estimator in `npm run earnings`.
   * Typical: TikTok Shop 5-20%, Amazon 1-4%, AliExpress 3-9%.
   */
  commissionPct: number
}

export const categories: Category[] = [
  'Home & Kitchen',
  'Beauty',
  'Tech',
  'Fitness',
  'Pets',
  'Car',
]

export const products: Product[] = [
  // ---------------------------------------------------------------- Beauty
  {
    id: 'red-light-wand',
    name: 'Red Light Therapy Wand',
    blurb: 'The at-home version of a $200 facial. Highest-commission item here.',
    price: 69.99,
    compareAt: 119.99,
    category: 'Beauty',
    retailer: 'TikTok Shop',
    affiliateUrl: '',
    emoji: '✨',
    trending: true,
    commissionPct: 18,
  },
  {
    id: 'bond-repair-serum',
    name: 'Bond-Repair Hair Serum',
    blurb: 'Rebuilds bleach-fried hair in about three washes. Repeat-buy product.',
    price: 32.99,
    category: 'Beauty',
    retailer: 'TikTok Shop',
    affiliateUrl: '',
    emoji: '💧',
    trending: true,
    commissionPct: 20,
  },
  {
    id: 'led-vanity-mirror',
    name: 'LED Vanity Mirror',
    blurb: 'Three light temperatures, 10x zoom side. Your makeup finally matches outside.',
    price: 44.99,
    compareAt: 79.99,
    category: 'Beauty',
    retailer: 'TikTok Shop',
    affiliateUrl: '',
    emoji: '🪞',
    commissionPct: 12,
  },
  {
    id: 'heated-lash-curler',
    name: 'Heated Eyelash Curler',
    blurb: 'Holds a curl all day without the clamp crease. Under $25.',
    price: 24.99,
    category: 'Beauty',
    retailer: 'TikTok Shop',
    affiliateUrl: '',
    emoji: '👁️',
    commissionPct: 15,
  },

  // -------------------------------------------------------- Home & Kitchen
  {
    id: 'spin-scrubber',
    name: 'Electric Spin Scrubber',
    blurb: 'Cleans grout without you kneeling. The most-filmed cleaning tool going.',
    price: 39.99,
    compareAt: 69.99,
    category: 'Home & Kitchen',
    retailer: 'TikTok Shop',
    affiliateUrl: '',
    emoji: '🫧',
    trending: true,
    commissionPct: 15,
  },
  {
    id: 'portable-blender',
    name: 'Portable USB Blender',
    blurb: 'Charges by USB, blends frozen fruit, doubles as the cup. Gym-bag sized.',
    price: 34.99,
    category: 'Home & Kitchen',
    retailer: 'TikTok Shop',
    affiliateUrl: '',
    emoji: '🥤',
    commissionPct: 14,
  },
  {
    id: 'milk-frother',
    name: 'Milk Frother & Warmer',
    blurb: 'Turns your kitchen into the coffee shop. Pays for itself in a week.',
    price: 27.99,
    compareAt: 49.99,
    category: 'Home & Kitchen',
    retailer: 'Temu',
    affiliateUrl: '',
    emoji: '☕',
    commissionPct: 10,
  },
  {
    id: 'steam-mop',
    name: 'Handheld Steam Mop',
    blurb: 'Chemical-free, kills what a mop just spreads around. Good for pet homes.',
    price: 64.99,
    category: 'Home & Kitchen',
    retailer: 'Amazon',
    affiliateUrl: '',
    emoji: '💨',
    commissionPct: 4,
  },

  // ------------------------------------------------------------------ Tech
  {
    id: 'mini-projector',
    name: 'Mini Smart Projector',
    blurb: 'Turns any wall into a 100" screen. The bedroom-ceiling movie setup.',
    price: 69.99,
    compareAt: 129.99,
    category: 'Tech',
    retailer: 'Temu',
    affiliateUrl: '',
    emoji: '📽️',
    trending: true,
    commissionPct: 10,
  },
  {
    id: 'wireless-earbuds',
    name: 'Noise-Cancelling Earbuds',
    blurb: 'The $200 sound at a quarter of it. 30-hour case, actual ANC.',
    price: 49.99,
    compareAt: 89.99,
    category: 'Tech',
    retailer: 'TikTok Shop',
    affiliateUrl: '',
    emoji: '🎧',
    commissionPct: 12,
  },
  {
    id: 'sunrise-alarm',
    name: 'Sunrise Alarm Clock',
    blurb: 'Wakes you with light instead of panic. Genuinely changes winter mornings.',
    price: 39.99,
    category: 'Tech',
    retailer: 'Amazon',
    affiliateUrl: '',
    emoji: '🌄',
    commissionPct: 4,
  },

  // --------------------------------------------------------------- Fitness
  {
    id: 'massage-gun',
    name: 'Deep Tissue Massage Gun',
    blurb: 'Six heads, quiet motor. Cheaper than one physio appointment.',
    price: 59.99,
    compareAt: 99.99,
    category: 'Fitness',
    retailer: 'TikTok Shop',
    affiliateUrl: '',
    emoji: '🔫',
    trending: true,
    commissionPct: 15,
  },
  {
    id: 'adjustable-dumbbell',
    name: 'Adjustable Dumbbell (25lb)',
    blurb: 'Five weights in one. Replaces a whole rack in a small apartment.',
    price: 74.99,
    category: 'Fitness',
    retailer: 'Amazon',
    affiliateUrl: '',
    emoji: '🏋️',
    commissionPct: 4,
  },
  {
    id: 'smart-jump-rope',
    name: 'Smart Jump Rope',
    blurb: 'Counts jumps and calories to an app. Cordless mode for low ceilings.',
    price: 29.99,
    category: 'Fitness',
    retailer: 'AliExpress',
    affiliateUrl: '',
    emoji: '🪢',
    commissionPct: 8,
  },

  // ------------------------------------------------------------------ Pets
  {
    id: 'pet-fountain',
    name: 'Pet Water Fountain',
    blurb: 'Cats drink more from moving water. Prevents real kidney problems.',
    price: 39.99,
    compareAt: 64.99,
    category: 'Pets',
    retailer: 'TikTok Shop',
    affiliateUrl: '',
    emoji: '⛲',
    trending: true,
    commissionPct: 14,
  },
  {
    id: 'dog-grooming-vac',
    name: 'Dog Grooming Vacuum Kit',
    blurb: 'Clips and suctions the fur as it falls. No more hair tumbleweeds.',
    price: 79.99,
    compareAt: 139.99,
    category: 'Pets',
    retailer: 'TikTok Shop',
    affiliateUrl: '',
    emoji: '🐩',
    commissionPct: 12,
  },

  // ------------------------------------------------------------------- Car
  {
    id: 'tire-inflator',
    name: 'Cordless Tire Inflator',
    blurb: 'Set the PSI and walk away. The thing you wish you had at 11pm.',
    price: 54.99,
    compareAt: 89.99,
    category: 'Car',
    retailer: 'TikTok Shop',
    affiliateUrl: '',
    emoji: '🛞',
    trending: true,
    commissionPct: 12,
  },
  {
    id: 'detailing-kit',
    name: 'Interior Car Detailing Kit',
    blurb: 'Brushes, cleaner, and the vent tool. Detailer results in your driveway.',
    price: 34.99,
    category: 'Car',
    retailer: 'Temu',
    affiliateUrl: '',
    emoji: '🧽',
    commissionPct: 10,
  },
]

/** Products that are safe to show publicly (i.e. have a real link). */
export const liveProducts = products.filter((p) => p.affiliateUrl.trim() !== '')
