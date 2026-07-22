# ScrollFinds — 30-Day Plan (Spotlight Track)

Goal for month one: **qualify for the Spotlight Creator Program.** Not $1,000 in commission.

## Why this goal, and why it changes everything

Spotlight's requirements are:

- 1,000+ active followers — **you have ~1,665. Done.**
- At least **2 good-quality videos** in the last 30 days
- A **20% good-quality video rate**
- Pass risk checks

That third one is the whole strategy. **A 20% *rate* means bad videos count against you.** If you post 60 videos and 9 are good, you're at 15% and you fail. If you post 20 videos and 6 are good, you're at 30% and you pass — with a third of the work.

**This is the opposite of normal TikTok advice, and the opposite of what I told you earlier.** Standard growth advice is "post 3x a day, volume beats everything." That advice will actively disqualify you from Spotlight. Ignore it while you're on this track.

**Post once a day, 5–6 days a week. Every single one gets real effort.** If a video isn't working while you're filming it, delete it — don't post it to "keep the streak." An unposted video costs nothing; a weak posted one costs you your rate.

TikTok doesn't publish the exact quality formula, but the consistent signals are: original footage (no watermarks from other apps), 15+ seconds, good lighting and resolution, product clearly visible in use, and no policy violations. Reposting someone else's clip fails all of this.

---

## Your money lane: skincare

Your tier blocks beauty devices, health devices, and electronics — but **skincare is open, and it's the best category on the platform anyway:**

- Pays **18–20%**, the highest rates in your catalog
- **People rebuy it.** A cleaning gadget sells once; a serum sells every 8 weeks. Repeat purchases compound your GMV without new traffic.
- Before/after content is the single most-watched format on TikTok

Eleven of your 21 products are TikTok-eligible. Five are skincare. **Lead with those.**

The six blocked products (red light wand, vanity mirror, massage gun, projector, earbuds, sunrise alarm) still live on the site, routed to Temu/Amazon. You just can't make TikTok Shop content about them. Don't waste videos there.

## The target that matters

```
$1,000 GMV = 22 sales = ~727 site visits/day
```

That's Silver tier, which unlocks the **Request Sample** button — no more buying products out of pocket. Your commission at $1k GMV is only ~$130, but the samples are worth more than the cash right now because they delete your cost of making content.

Spotlight may get you samples *before* Silver. That's why it's the month-one goal.

---

## Bio setup (10 minutes, do it first)

```
ScrollFinds
Skin stuff that actually worked on me
↓ everything I use
[your-domain.com]
```

Link to the site root, not Linktree — every extra tap loses ~40% of clicks. Never put "link in bio" in the caption; TikTok suppresses reach on posts pushing traffic off-platform. Say it out loud in the video, or pin it as a comment 20 minutes after posting.

## The four formats that carry this account

| # | Format | Hook | Products |
|---|---|---|---|
| 1 | **Skin progress** | *(start on the close-up)* "Three weeks of the same two products" | Vitamin C, retinol, snail mucin |
| 2 | **Routine order** | "You're using these in the wrong order" | All five skincare |
| 3 | **Satisfying clean** | *(start mid-scrub)* "I put this off for four months" | Spin scrubber, steam mop, detailing kit, grooming vac |
| 4 | **Problem → solve** | "If your [X] does this, you need this" | Tire inflator, pet fountain, frother, dumbbell |

Rotate them. Never the same format twice running.

---

## 30-day calendar — one video a day, Sundays off

Post 11am–1pm or 7–9pm. Rest days are deliberate: use them to film the next 3–4 videos in one batch, so nothing goes up rushed.

| Day | Video | Format |
|---|---|---|
| 1 | Snail mucin — texture close-up, day 1 baseline | Skin progress |
| 2 | Spin scrubber — shower grout | Satisfying |
| 3 | Vitamin C serum — what it's for, who needs it | Routine |
| 4 | Pet fountain — cat won't drink from a bowl | Problem→solve |
| 5 | Full 5-step routine, correct order | Routine |
| 6 | Steam mop — kitchen floor reveal | Satisfying |
| 7 | *Rest — batch film days 8–11* | — |
| 8 | Sunscreen — no white cast test on camera | Routine |
| 9 | Detailing kit — car vents | Satisfying |
| 10 | Retinol — "start here, not with the strong stuff" | Routine |
| 11 | Tire inflator — the 11pm flat | Problem→solve |
| 12 | **Snail mucin — 2-week progress vs day 1** | Skin progress |
| 13 | Grooming vac — fur volume reveal | Satisfying |
| 14 | *Rest — check Ctrl+Shift+D + TikTok analytics* | — |
| 15 | Barrier moisturizer — "if your skin stings, stop" | Routine |
| 16 | Spin scrubber — *new angle*, kitchen sink | Satisfying |
| 17 | Milk frother — morning coffee, cost per cup | Problem→solve |
| 18 | Vitamin C — 3-week dark spot progress | Skin progress |
| 19 | Blender — frozen fruit test | Problem→solve |
| 20 | Sunscreen — reapplying over makeup | Routine |
| 21 | *Rest — cut your two worst products from the site* | — |
| 22 | **Full-face 3-week progress, all 5 products** | Skin progress |
| 23 | Dumbbell — small apartment setup | Problem→solve |
| 24 | Steam mop — worst floor in the house | Satisfying |
| 25 | Retinol — the peeling week nobody warns you about | Routine |
| 26 | Grooming vac — full groom start to finish | Satisfying |
| 27 | Jump rope — app stats after 3 weeks | Problem→solve |
| 28 | *Rest — rebuild next month around your top 3* | — |
| 29 | Your best video of the month, refilmed better | — |
| 30 | **"What actually worked" recap** — drives to site | Skin progress |

That's **26 videos.** To clear the 20% rate you need 6 of them to land as good-quality. Aiming for one strong video a day makes that comfortable. Aiming for three rushed ones a day makes it impossible.

---

## Weekly loop

Every 7 days:

1. Site → **Ctrl+Shift+D** → note top 3 products by clicks.
2. TikTok analytics → note top 3 videos by **watch time**, not likes.
3. Where the lists overlap is your winner. Make five more videos about it.
4. Zero clicks after two videos → delete it from `src/data/products.ts`.

A 12-product site where everything converts beats a 40-product site where nothing does. Cut hard.

## When categories unlock

As you level up and beauty/health/tech open back up, for each blocked product:

1. Set `tiktokBlocked` to `false`
2. Change `retailer` to `'TikTok Shop'`
3. Raise `commissionPct` (10% → 15–18%)
4. Swap in the TikTok Shop link

The red light wand alone goes from 10% to ~18% — and it pairs naturally with the skincare content you'll already be making.
