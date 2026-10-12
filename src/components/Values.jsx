import { Heart, HandHeart, House } from "@phosphor-icons/react"
import { values } from "../data/content"

const icons = { Heart, HandHeart, House }

export default function Values() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 lg:py-28">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern id="stoneCourse" width="140" height="46" patternUnits="userSpaceOnUse">
            <path
              d="M0 23 H46 M0 0 V46 M46 0 V18 M46 30 V46 M46 18 H96 M46 30 H96 M96 0 V30 M96 42 V46 M96 30 H140 M96 42 H140"
              stroke="var(--color-gold-400)"
              strokeWidth="1"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#stoneCourse)" />
      </svg>

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-display text-2xl font-medium italic leading-[1.3] text-white sm:text-3xl">
          Compassionate care. Trusted support. A home that feels like
          family.
        </p>

        <ul className="mt-14 flex flex-col divide-y divide-white/10 text-left sm:flex-row sm:divide-y-0 sm:divide-x">
          {values.map((v) => {
            const Icon = icons[v.icon]
            return (
              <li
                key={v.title}
                className="flex flex-1 items-start gap-4 py-6 first:pt-0 sm:px-8 sm:py-0 sm:first:pl-0 sm:last:pr-0"
              >
                <Icon
                  size={28}
                  weight="duotone"
                  className="mt-1 shrink-0 text-gold-400"
                />
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {v.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-white/70">
                    {v.body}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
