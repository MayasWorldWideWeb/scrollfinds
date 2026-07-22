import { useEffect, useState } from 'react'
import { products } from '../data/products'
import { clearClicks, readClicks } from '../lib/tracking'

/**
 * Private stats panel. Opens with Ctrl+Shift+D — visitors will never
 * find it by accident, and it costs you nothing to run.
 *
 * Note: counts are per-device (localStorage), so this shows YOUR testing
 * plus anyone on this browser. For real cross-visitor numbers, install
 * GA4 or Plausible — clicks forward there automatically.
 */
export function ClickDashboard() {
  const [open, setOpen] = useState(false)
  const [clicks, setClicks] = useState(readClicks)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'd') {
        e.preventDefault()
        setClicks(readClicks())
        setOpen((v) => !v)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (!open) return null

  const rows = products
    .map((p) => ({ ...p, count: clicks[p.id]?.count ?? 0 }))
    .sort((a, b) => b.count - a.count)

  const total = rows.reduce((sum, r) => sum + r.count, 0)

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/60 p-4 backdrop-blur-sm">
      <div className="my-8 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold">Click stats</h2>
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-1 text-sm text-ink-soft hover:bg-slate-100"
          >
            Close
          </button>
        </div>

        <p className="mb-4 text-sm text-ink-soft">
          <strong className="text-ink">{total}</strong> total clicks on this
          device. Whatever's at the top is what your audience wants more of.
        </p>

        <ul className="divide-y divide-line">
          {rows.map((r) => (
            <li key={r.id} className="flex items-center gap-3 py-2 text-sm">
              <span className="text-lg">{r.emoji}</span>
              <span className="flex-1 truncate">{r.name}</span>
              <span
                className={`font-semibold tabular-nums ${r.count > 0 ? 'text-hot' : 'text-ink-soft'}`}
              >
                {r.count}
              </span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => {
            clearClicks()
            setClicks({})
          }}
          className="mt-4 text-xs text-ink-soft underline hover:text-hot"
        >
          Reset counts
        </button>
      </div>
    </div>
  )
}
