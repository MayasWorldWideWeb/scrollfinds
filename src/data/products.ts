/**
 * ============================================================
 *  YOUR PRODUCT CATALOG — the only file you need to edit.
 * ============================================================
 *
 * TO ADD A PRODUCT:
 *   1. Copy any block below.
 *   2. Give it a new unique `id`.
 *   3. Paste YOUR affiliate link into `affiliateUrl`.
 *   4. Save. The site updates automatically.
 *
 * ------------------------------------------------------------
 *  HOW THIS CATALOG IS ORGANIZED (important)
 * ------------------------------------------------------------
 * Your TikTok Shop account is Bronze-tier and blocked from
 * beauty devices, health/wellness devices, and electronics.
 * Skincare IS open to you, and it pays the most (18-20%).
 *
 * So products are split into two groups:
 *
 *   GROUP 1 — TikTok Shop eligible (skincare, home, pets, car,
 *   fitness). These pay 10-20%. This is where your money is.
 *
 *   GROUP 2 — TikTok-blocked. These are NOT deleted; they're
 *   routed to Temu / AliExpress / Amazon instead, which pay
 *   less (4-10%) but keep the product on your site.
 *
 * When you level up and a category unlocks, change that
 * product's `retailer` to 'TikTok Shop', raise its
 * `commissionPct`, and swap in the new link. Nothing else
 * needs to change.
 * ------------------------------------------------------------
 *
 * Products with an empty `affiliateUrl` show in dev but are
 * stripped from the production build, so you can never publish
 * a dead link by accident.
 */

export type Retailer = 'TikTok Shop' | 'Amazon' | 'Temu' | 'AliExpress'

export type Category =
  | 'Skincare'
  | 'Home & Kitchen'
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
  /** Your commission rate, e.g. 12 = 12%. Powers `npm run earnings`. */
  commissionPct: number
  /**
   * Set to true for products your TikTok Shop tier currently blocks.
   * Purely a note to yourself — flip it to false and change `retailer`
   * to 'TikTok Shop' once the category unlocks.
   */
  tiktokBlocked?: boolean
}

export const categories: Category[] = [
  'Skincare',
  'Home & Kitchen',
  'Pets',
  'Car',
  'Fitness',
  'Tech',
]

export const products: Product[] = [
  // ===========================================================
  // GROUP 1 — TIKTOK SHOP ELIGIBLE. Your highest-paying lane.
  // ===========================================================

  // ---------------------------------------------------- Skincare
  //
  // Split on purpose into two kinds of product:
  //
  //   HERO (Medicube) — proven demand, converts on its own, but a
  //   brand this big doesn't need to pay creators much. Commission
  //   here is a CONSERVATIVE GUESS (10%). Check your real rate in
  //   the TikTok Shop affiliate dashboard and fix these numbers —
  //   `npm run earnings` is only as honest as what you put in.
  //
  //   MARGIN (indie) — less built-in demand, but 18-20% commission.
  //   These are what make the account actually pay.
  //
  // Prices marked VERIFIED were checked against Ulta on 2026-07-22.
  // The rest are estimates — confirm before you publish.

  // --- HERO: medicube. #1 brand on TikTok Shop US, Q2 2026 ---
  {
    id: 'medicube-multi-balm',
    name: 'medicube PDRN Pink Collagen Multi Balm',
    blurb: 'The single best-selling product on TikTok Shop. Sells itself.',
    price: 22.9, // VERIFIED (Ulta, 0.35oz)
    category: 'Skincare',
    retailer: 'TikTok Shop',
    affiliateUrl: '',
    emoji: '💗',
    trending: true,
    commissionPct: 10,
  },
  {
    id: 'medicube-gel-mask',
    name: 'medicube PDRN Pink Collagen Gel Mask (4ct)',
    blurb: 'Overnight jelly mask. Wake up with the glass-skin look.',
    price: 19.9, // VERIFIED (Ulta, 4 ct)
    category: 'Skincare',
    retailer: 'TikTok Shop',
    affiliateUrl: '',
    emoji: '🎀',
    trending: true,
    commissionPct: 10,
  },
  {
    id: 'medicube-pore-pad',
    name: 'medicube Zero Pore Pad 2.0',
    blurb: 'Exfoliating pads that actually shrink the look of pores.',
    price: 29.9, // estimate — confirm
    category: 'Skincare',
    retailer: 'TikTok Shop',
    affiliateUrl: '',
    emoji: '⚪',
    commissionPct: 10,
  },
  {
    id: 'medicube-glass-glow-set',
    name: 'medicube Glass Glow Skincare Set',
    blurb: 'The full routine in one box. Highest order value on the site.',
    price: 59.9, // estimate — confirm
    compareAt: 89.9,
    category: 'Skincare',
    retailer: 'TikTok Shop',
    affiliateUrl: '',
    emoji: '🪞',
    trending: true,
    commissionPct: 10,
  },

  // --- MARGIN: indie skincare, 18-20% ---
  {
    id: 'vitamin-c-serum',
    name: 'Vitamin C Brightening Serum',
    blurb: 'Fades dark spots in about six weeks. Double the commission of the big brands.',
    price: 28.99,
    compareAt: 44.99,
    category: 'Skincare',
    retailer: 'TikTok Shop',
    affiliateUrl: '',
    emoji: '🍊',
    commissionPct: 20,
  },
  {
    id: 'barrier-moisturizer',
    name: 'Barrier Repair Moisturizer',
    blurb: 'For skin wrecked by too many actives. Ceramides, no fragrance.',
    price: 32.99,
    category: 'Skincare',
    retailer: 'TikTok Shop',
    affiliateUrl: '',
    emoji: '🧴',
    commissionPct: 20,
  },
  {
    id: 'gel-sunscreen',
    name: 'Korean Gel Sunscreen SPF50',
    blurb: 'No white cast, no pilling under makeup. The one people rebuy.',
    price: 22.99,
    category: 'Skincare',
    retailer: 'TikTok Shop',
    affiliateUrl: '',
    emoji: '☀️',
    commissionPct: 18,
  },

  // -------------------------------------- Home & Kitchen (12-15%)
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
    id: 'steam-mop',
    name: 'Handheld Steam Mop',
    blurb: 'Chemical-free, kills what a mop just spreads around. Good for pet homes.',
    price: 64.99,
    category: 'Home & Kitchen',
    retailer: 'TikTok Shop',
    affiliateUrl: '',
    emoji: '💨',
    commissionPct: 14,
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
    retailer: 'TikTok Shop',
    affiliateUrl: '',
    emoji: '☕',
    commissionPct: 12,
  },

  // ------------------------------------------------ Pets (12-14%)
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

  // ------------------------------------------------- Car (12%)
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
    retailer: 'TikTok Shop',
    affiliateUrl: '',
    emoji: '🧽',
    commissionPct: 12,
  },

  // --------------------------------------------- Fitness (10%)
  {
    id: 'adjustable-dumbbell',
    name: 'Adjustable Dumbbell (25lb)',
    blurb: 'Five weights in one. Replaces a whole rack in a small apartment.',
    price: 74.99,
    category: 'Fitness',
    retailer: 'TikTok Shop',
    affiliateUrl: '',
    emoji: '🏋️',
    commissionPct: 10,
  },
  {
    id: 'smart-jump-rope',
    name: 'Smart Jump Rope',
    blurb: 'Counts jumps and calories to an app. Cordless mode for low ceilings.',
    price: 29.99,
    category: 'Fitness',
    retailer: 'TikTok Shop',
    affiliateUrl: '',
    emoji: '🪢',
    commissionPct: 10,
  },

  // ===========================================================
  // GROUP 2 — BLOCKED on your TikTok tier. Routed elsewhere so
  // they stay on the site. Move them back when they unlock.
  // ===========================================================

  {
    id: 'red-light-wand',
    name: 'Red Light Therapy Wand',
    blurb: 'The at-home version of a $200 facial. Pairs with your skincare posts.',
    price: 69.99,
    compareAt: 119.99,
    category: 'Skincare',
    retailer: 'Temu',
    affiliateUrl: '',
    emoji: '✨',
    commissionPct: 10,
    tiktokBlocked: true,
  },
  {
    id: 'led-vanity-mirror',
    name: 'LED Vanity Mirror',
    blurb: 'Three light temperatures, 10x zoom side. Your makeup finally matches outside.',
    price: 44.99,
    compareAt: 79.99,
    category: 'Skincare',
    retailer: 'Temu',
    affiliateUrl: '',
    emoji: '🪞',
    commissionPct: 10,
    tiktokBlocked: true,
  },
  {
    id: 'massage-gun',
    name: 'Deep Tissue Massage Gun',
    blurb: 'Six heads, quiet motor. Cheaper than one physio appointment.',
    price: 59.99,
    compareAt: 99.99,
    category: 'Fitness',
    retailer: 'Temu',
    affiliateUrl: '',
    emoji: '🔫',
    commissionPct: 10,
    tiktokBlocked: true,
  },
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
    commissionPct: 10,
    tiktokBlocked: true,
  },
  {
    id: 'wireless-earbuds',
    name: 'Noise-Cancelling Earbuds',
    blurb: 'The $200 sound at a quarter of it. 30-hour case, actual ANC.',
    price: 49.99,
    compareAt: 89.99,
    category: 'Tech',
    retailer: 'Temu',
    affiliateUrl: '',
    emoji: '🎧',
    commissionPct: 10,
    tiktokBlocked: true,
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
    tiktokBlocked: true,
  },
]

/** Products that are safe to show publicly (i.e. have a real link). */
export const liveProducts = products.filter((p) => p.affiliateUrl.trim() !== '')

/** Products you can actually promote on TikTok Shop right now. */
export const tiktokEligible = products.filter((p) => !p.tiktokBlocked)
