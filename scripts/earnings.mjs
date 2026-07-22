/**
 * Realistic earnings estimator.  Run: npm run earnings
 *
 * This is deliberately conservative. It uses industry-typical conversion
 * rates, not the numbers in YouTube thumbnails. Change the assumptions at
 * the top to model your own situation.
 */

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))

// ---------------------------------------------------------------------------
// ASSUMPTIONS — edit these
// ---------------------------------------------------------------------------

/** People who land on your site, per month. */
const MONTHLY_VISITORS = [500, 2_000, 10_000, 50_000]

/** Of visitors, how many click an affiliate link. 2-8% is typical. */
const CLICK_THROUGH_RATE = 0.05

/** Of clickers, how many actually buy. 1-4% is typical for cold traffic. */
const CONVERSION_RATE = 0.02

// ---------------------------------------------------------------------------

// Pull real numbers straight out of your catalog so this stays in sync.
const src = readFileSync(join(here, '..', 'src', 'data', 'products.ts'), 'utf8')

const prices = [...src.matchAll(/^\s*price:\s*([\d.]+),/gm)].map((m) =>
  Number(m[1]),
)
const rates = [...src.matchAll(/^\s*commissionPct:\s*([\d.]+),/gm)].map((m) =>
  Number(m[1]),
)

if (!prices.length || prices.length !== rates.length) {
  console.error(
    'Could not parse products.ts — make sure every product has both `price` and `commissionPct`.',
  )
  process.exit(1)
}

const avgPrice = prices.reduce((a, b) => a + b, 0) / prices.length
const avgRate = rates.reduce((a, b) => a + b, 0) / rates.length
const perSale = avgPrice * (avgRate / 100)

const money = (n) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

console.log(`
  ScrollFinds — earnings model
  ${'─'.repeat(52)}
  Products in catalog     ${prices.length}
  Average price           ${money(avgPrice)}
  Average commission      ${avgRate.toFixed(1)}%
  You earn per sale       ${money(perSale)}

  Assumes ${(CLICK_THROUGH_RATE * 100).toFixed(0)}% of visitors click a link,
  and ${(CONVERSION_RATE * 100).toFixed(0)}% of those clickers buy.
  ${'─'.repeat(52)}`)

console.log(
  `  ${'Visitors/mo'.padEnd(14)}${'Clicks'.padEnd(10)}${'Sales'.padEnd(9)}Your cut`,
)

for (const visitors of MONTHLY_VISITORS) {
  const clicks = visitors * CLICK_THROUGH_RATE
  const sales = clicks * CONVERSION_RATE
  const revenue = sales * perSale
  console.log(
    `  ${visitors.toLocaleString().padEnd(14)}` +
      `${Math.round(clicks).toLocaleString().padEnd(10)}` +
      `${sales.toFixed(1).padEnd(9)}` +
      `${money(revenue)}/mo`,
  )
}

// The number that actually matters: what it takes to hit a real target.
const TARGET = 1_000
const visitorsNeeded = Math.round(
  TARGET / (CLICK_THROUGH_RATE * CONVERSION_RATE * perSale),
)

console.log(`
  ${'─'.repeat(52)}
  To clear ${money(TARGET)}/month you need roughly
  ${visitorsNeeded.toLocaleString()} visitors/month — about ${Math.round(visitorsNeeded / 30).toLocaleString()}/day.

  That is the whole game. The site is not the hard part;
  getting those visitors is. Organic TikTok/Reels is the
  only channel where that math works at a ${money(perSale)} commission —
  paid ads cost more per click than you earn per sale.
`)
