import { useEffect, useState } from "react"
import { Palette } from "@phosphor-icons/react"
import { palettes } from "../data/palettes"

function applyPalette(id) {
  const palette = palettes.find((p) => p.id === id) ?? palettes[0]
  const root = document.documentElement.style
  for (const [key, value] of Object.entries(palette.tokens)) {
    root.setProperty(key, value)
  }
}

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(palettes[0].id)

  useEffect(() => {
    const saved = localStorage.getItem("bt-palette") || palettes[0].id
    setActive(saved)
    applyPalette(saved)
  }, [])

  function choose(id) {
    setActive(id)
    applyPalette(id)
    localStorage.setItem("bt-palette", id)
  }

  return (
    <div className="fixed bottom-5 right-5 z-[90] print:hidden">
      {open && (
        <div className="mb-3 w-72 rounded-2xl border border-black/10 bg-white p-3 shadow-xl">
          <p className="px-1 pb-2 text-xs font-semibold uppercase tracking-wide text-ink-600">
            Color combos (preview only)
          </p>
          <div className="flex flex-col gap-1">
            {palettes.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => choose(p.id)}
                className={`flex items-start gap-2.5 rounded-lg px-2 py-2 text-left transition ${
                  active === p.id ? "bg-navy-50" : "hover:bg-navy-50"
                }`}
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 overflow-hidden rounded-full border border-black/10">
                  <span className="h-full w-1/2" style={{ background: p.swatch[0] }} />
                  <span className="h-full w-1/2" style={{ background: p.swatch[1] }} />
                </span>
                <span>
                  <span className={`block text-sm ${active === p.id ? "font-semibold" : ""}`}>
                    {p.label}
                  </span>
                  <span className="mt-0.5 block text-xs leading-snug text-ink-600">
                    {p.description}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Try color combinations"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-white shadow-lg transition hover:bg-navy-800 active:scale-95"
      >
        <Palette size={22} weight="bold" />
      </button>
    </div>
  )
}
