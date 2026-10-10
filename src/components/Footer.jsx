import { business, locations } from "../data/content"
import Logo from "./Logo"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 py-14 text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-9 w-9 shrink-0" />
              <p className="font-display text-xl font-semibold text-white">
                {business.name}
              </p>
            </div>
            <p className="mt-1 text-sm text-gold-400">{business.type}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {business.tagline}
            </p>
          </div>

          {locations.map((loc) => (
            <div key={loc.id}>
              <p className="text-sm font-semibold text-white">{loc.shortName}</p>
              <p className="mt-2 text-sm leading-relaxed">
                {loc.address}
                <br />
                {loc.cityStateZip}
              </p>
              <a
                href={loc.phoneHref}
                className="mt-2 inline-block text-sm text-gold-400 hover:text-gold-100"
              >
                {loc.phone}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {business.name}. Licensed Washington State Adult
            Family Home.
          </p>
          <a href={business.emailHref} className="hover:text-white">
            {business.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
