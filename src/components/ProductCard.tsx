import type { Product } from '../data/products'
import { trackClick } from '../lib/tracking'

const retailerStyles: Record<Product['retailer'], string> = {
  'TikTok Shop': 'bg-ink text-white',
  Amazon: 'bg-amber-100 text-amber-900',
  Temu: 'bg-orange-100 text-orange-900',
  AliExpress: 'bg-red-100 text-red-900',
}

export function ProductCard({ product }: { product: Product }) {
  const {
    name,
    blurb,
    price,
    compareAt,
    retailer,
    affiliateUrl,
    image,
    emoji,
    trending,
  } = product

  const savings =
    compareAt && compareAt > price
      ? Math.round(((compareAt - price) / compareAt) * 100)
      : null

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow duration-200 hover:shadow-lg hover:shadow-ink/5">
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center text-6xl transition-transform duration-300 group-hover:scale-110"
          >
            {emoji}
          </div>
        )}

        {trending && (
          <span className="absolute top-3 left-3 rounded-full bg-hot px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
            🔥 Trending
          </span>
        )}
        {savings !== null && (
          <span className="absolute top-3 right-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-hot-deep shadow-sm">
            −{savings}%
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <span
          className={`w-fit rounded-md px-2 py-0.5 text-[11px] font-semibold ${retailerStyles[retailer]}`}
        >
          {retailer}
        </span>

        <h3 className="text-[15px] leading-snug font-semibold text-balance">
          {name}
        </h3>
        <p className="text-sm leading-relaxed text-ink-soft">{blurb}</p>

        <div className="mt-auto flex items-baseline gap-2 pt-2">
          <span className="text-xl font-bold">${price.toFixed(2)}</span>
          {compareAt && (
            <span className="text-sm text-ink-soft line-through">
              ${compareAt.toFixed(2)}
            </span>
          )}
        </div>

        <a
          href={affiliateUrl}
          target="_blank"
          /* noopener/noreferrer: required for target=_blank. `sponsored` tells
             Google this is a paid link — required to stay penalty-free. */
          rel="noopener noreferrer sponsored nofollow"
          onClick={() => trackClick(product.id, name)}
          className="mt-2 rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-hot focus-visible:ring-2 focus-visible:ring-hot focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          See it on {retailer} →
        </a>
      </div>
    </article>
  )
}
