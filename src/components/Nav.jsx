import { useState, useEffect } from "react"
import { List, X, Phone } from "@phosphor-icons/react"
import { business } from "../data/content"
import Logo from "./Logo"

const links = [
  { href: "#about", label: "About" },
  { href: "#amenities", label: "Care & Amenities" },
  { href: "#homes", label: "Our Homes" },
  { href: "#contact", label: "Contact" },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-cream-50/95 shadow-[0_1px_0_rgba(19,42,82,0.08)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo className="h-9 w-9 shrink-0" />
          <span className="flex items-baseline gap-1.5">
            <span
              className={`font-display text-2xl font-semibold tracking-tight transition-colors ${
                scrolled ? "text-navy-900" : "text-white"
              }`}
            >
              Blue Touch
            </span>
            <span
              className={`hidden text-xs font-medium uppercase tracking-[0.08em] sm:inline ${
                scrolled ? "text-gold-600" : "text-gold-400"
              }`}
            >
              Adult Family Home
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[15px] font-medium transition-colors ${
                scrolled
                  ? "text-ink-600 hover:text-navy-900"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-gold-500 px-5 py-2.5 text-[15px] font-semibold text-navy-950 shadow-sm transition hover:bg-gold-400 active:scale-[0.98]"
          >
            Schedule a Tour
          </a>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={business.phoneHref}
            aria-label={`Call Blue Touch at ${business.phone}`}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
              scrolled
                ? "bg-navy-900 text-white"
                : "bg-white/15 text-white backdrop-blur"
            }`}
          >
            <Phone size={18} weight="fill" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
              scrolled ? "text-navy-900" : "text-white"
            }`}
          >
            {open ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-navy-900/10 bg-cream-50 px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-900 hover:bg-navy-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gold-500 px-5 py-3 text-center text-base font-semibold text-navy-950"
            >
              Schedule a Tour
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
