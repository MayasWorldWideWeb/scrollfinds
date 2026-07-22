/**
 * Click tracking. Free, no backend.
 *
 * Every affiliate click is counted in localStorage so you can see which
 * products people actually want — open the site and press `Ctrl+Shift+D`
 * to view the dashboard.
 *
 * If you later add Google Analytics (GA4), events also forward there
 * automatically. Nothing to configure; it just detects gtag if present.
 */

const STORAGE_KEY = 'scrollfinds:clicks'

export type ClickLog = Record<string, { count: number; last: string }>

export function readClicks(): ClickLog {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') as ClickLog
  } catch {
    return {}
  }
}

export function trackClick(productId: string, productName: string) {
  // Local count — your free analytics.
  try {
    const log = readClicks()
    log[productId] = {
      count: (log[productId]?.count ?? 0) + 1,
      last: new Date().toISOString(),
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(log))
  } catch {
    // Private browsing / storage disabled — tracking is best-effort only.
  }

  // Forward to GA4 if it's installed. Safe no-op when it isn't.
  const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag
  gtag?.('event', 'select_promotion', {
    promotion_id: productId,
    promotion_name: productName,
  })
}

export function clearClicks() {
  localStorage.removeItem(STORAGE_KEY)
}
