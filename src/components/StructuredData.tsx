import { useEffect } from 'react'
import type { Product } from '../data/products'
import { site } from '../data/site'

/**
 * Injects schema.org JSON-LD so Google can show prices and product names
 * in search results instead of a plain blue link. Costs nothing, and it's
 * the one bit of SEO that reliably helps a listing page like this.
 */
export function StructuredData({ products }: { products: Product[] }) {
  useEffect(() => {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${site.name} — trending products`,
      numberOfItems: products.length,
      itemListElement: products.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: p.name,
          description: p.blurb,
          category: p.category,
          offers: {
            '@type': 'Offer',
            price: p.price.toFixed(2),
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: p.affiliateUrl || undefined,
          },
        },
      })),
    }

    const tag = document.createElement('script')
    tag.type = 'application/ld+json'
    tag.textContent = JSON.stringify(data)
    document.head.appendChild(tag)

    return () => {
      document.head.removeChild(tag)
    }
  }, [products])

  return null
}
