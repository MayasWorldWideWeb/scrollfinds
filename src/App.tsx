import { useMemo, useState } from 'react'
import { ProductCard } from './components/ProductCard'
import { ClickDashboard } from './components/ClickDashboard'
import { StructuredData } from './components/StructuredData'
import { categories, products, type Category } from './data/products'
import { site } from './data/site'

/**
 * In dev we show every product (so you can see your placeholders).
 * In the built site we only ship products that have a real affiliate
 * link — that way a half-finished entry can never go live.
 */
const visibleProducts = import.meta.env.DEV
  ? products
  : products.filter((p) => p.affiliateUrl.trim() !== '')

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return visibleProducts
      .filter((p) => activeCategory === 'All' || p.category === activeCategory)
      .filter(
        (p) =>
          q === '' ||
          p.name.toLowerCase().includes(q) ||
          p.blurb.toLowerCase().includes(q),
      )
      .sort((a, b) => Number(b.trending ?? false) - Number(a.trending ?? false))
  }, [activeCategory, query])

  const tabs: (Category | 'All')[] = ['All', ...categories]

  return (
    <div className="min-h-screen">
      <ClickDashboard />
      <StructuredData products={visibleProducts} />

      <header className="sticky top-0 z-30 border-b border-line bg-surface/85 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <a href="/" className="text-xl font-extrabold tracking-tight">
              {site.name}
              <span className="text-hot">.</span>
            </a>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products"
              aria-label="Search products"
              className="w-36 rounded-full border border-line bg-white px-4 py-2 text-sm transition-[width] focus:w-52 focus:border-hot focus:outline-none sm:w-52 sm:focus:w-64"
            />
          </div>
        </div>

        {/* Category tabs — horizontally scrollable on phones. */}
        <nav
          aria-label="Product categories"
          className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveCategory(tab)}
              aria-pressed={activeCategory === tab}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === tab
                  ? 'bg-ink text-white'
                  : 'bg-white text-ink-soft ring-1 ring-line hover:text-ink'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4">
        <section className="py-10 text-center sm:py-14">
          <h1 className="mx-auto max-w-2xl text-3xl leading-[1.1] font-extrabold text-balance sm:text-5xl">
            {site.tagline}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-pretty text-ink-soft">
            {site.blurb}
          </p>
        </section>

        {/* FTC disclosure — must stay visible and above the links. */}
        <p className="mb-8 rounded-xl bg-slate-100 px-4 py-3 text-center text-xs text-ink-soft">
          {site.disclosure}
        </p>

        {filtered.length === 0 ? (
          <p className="py-20 text-center text-ink-soft">
            Nothing here yet — try another category.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </main>

      <footer className="mt-20 border-t border-line py-10">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-ink-soft">
          <p className="font-semibold text-ink">{site.name}</p>
          <p className="mx-auto mt-3 max-w-lg text-xs leading-relaxed">
            {site.disclosure}
          </p>
          <p className="mt-4 text-xs">
            Prices and availability are set by the retailer and can change at
            any time.
          </p>
          {site.email && (
            <a
              href={`mailto:${site.email}`}
              className="mt-3 inline-block text-xs underline hover:text-hot"
            >
              {site.email}
            </a>
          )}
        </div>
      </footer>
    </div>
  )
}
