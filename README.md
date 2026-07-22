# ScrollFinds

Affiliate curation site for trending TikTok / Temu / AliExpress / Amazon products.
No inventory, no checkout, no customer service. You earn commission on clicks that convert.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run earnings   # realistic income model from your actual catalog
```

## The only file you edit

`src/data/products.ts` — add, remove, and price products there. Branding lives in `src/data/site.ts`.

A product with an empty `affiliateUrl` shows in dev but is **automatically excluded from the production build**, so you can't publish a dead link by accident.

## Press `Ctrl+Shift+D` on the site

Opens a private click dashboard. Whatever's at the top is what your audience actually wants — that's your signal for what to make more content about. Counts are per-device; install GA4 later for real cross-visitor numbers (clicks forward there automatically, no config).

---

## Read this before you spend any money

Run `npm run earnings`. With the current $20–80 catalog it reports:

```
Average price       $48.66
Average commission  11.6%
You earn per sale   $5.65

To clear $1,000/month → ~177,000 visitors/month (~5,900/day)
```

That number is the entire business, and it's why most people quit.

### Why paid ads don't work here

You earn **$5.65** per sale. A Facebook or TikTok click costs **$0.50–$2.00**, and only ~2% of clickers buy — so you're paying roughly $25–100 in ad spend to earn $5.65. That is not a margin problem you can optimize your way out of; the math is inverted from the start.

An AI ad tool (Zeely, PagePilot, any of them) generates the *creative*. It does not buy the *placement*. You still fund the ad spend, and the spend still exceeds the return.

**Paid ads are for dropshipping (where you keep $20–30/sale), not for affiliate.** Don't run ads on this site.

### The two levers that matter

**1. Price.** Commission is a percentage, so price does the heavy lifting:

| Avg price | Commission | Per sale | Visitors for $1,000/mo |
|---|---|---|---|
| $17 | 9.5% | $1.67 | ~599,000 |
| **$48 (current)** | **11.6%** | **$5.65** | **~177,000** |
| $250 | 10% | $25.00 | ~40,000 |

Moving the catalog from ~$17 to ~$48 average cut the traffic requirement by 3.4x. Same site, same work.

**2. Prioritize TikTok Shop over Amazon.** TikTok Shop pays 5–20%. Amazon pays 1–4% and its cookie expires in 24 hours. Same effort, up to 5x the payout. That's why 11 of the 18 products here are TikTok Shop.

### Where traffic comes from

Organic short-form video is the only channel where these numbers work. One video at 200k views beats a month of paid ads for $0. The site's job is to be the link in your bio — it converts traffic; it does not create it.

**→ See `CONTENT_PLAN.md` for the 30-day posting calendar.** That file is the actual business; this one is just the code.

## Legal — don't remove this

The FTC disclosure in `src/data/site.ts` is **legally required** in the US when you earn commission on links. It must stay visible near the links. Affiliate links also carry `rel="sponsored nofollow"` so Google doesn't penalize the site.

## Deploying (free)

Cloudflare Pages: connect the repo, build command `npm run build`, output directory `dist`. Free tier, no card. A domain runs ~$12/year.
