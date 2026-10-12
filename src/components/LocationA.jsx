import { useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import { MapPin, Phone, Images } from "@phosphor-icons/react"
import { locations } from "../data/content"
import { locationAImages } from "../lib/images"
import Lightbox from "./Lightbox"

const location = locations[0]

const gallery = [
  { key: "porch", alt: "Front porch entrance, 108th Street home" },
  { key: "dining", alt: "Dining area with stacked-stone fireplace, 108th Street home" },
  { key: "kitchen", alt: "Chef's kitchen with professional range, 108th Street home" },
  { key: "living-room", alt: "Shared living room, 108th Street home" },
  { key: "bedroom", alt: "Resident bedroom, 108th Street home" },
  { key: "deck", alt: "Covered back deck, 108th Street home" },
  { key: "bathroom-1", alt: "Walk-in bathroom with grab bars, 108th Street home" },
  { key: "bathroom-2", alt: "Walk-in bathroom with marble-tile shower, 108th Street home" },
  { key: "hallway", alt: "Hallway with stacked-stone fireplace column, 108th Street home" },
].map((g) => ({ src: locationAImages[g.key], alt: g.alt }))

export default function LocationA() {
  const reduce = useReducedMotion()
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="grid h-[420px] grid-cols-4 grid-rows-2 gap-3 sm:h-[480px]">
              <button
                type="button"
                onClick={() => setOpenIndex(0)}
                className="col-span-2 row-span-2 overflow-hidden rounded-2xl"
              >
                <img
                  src={gallery[0].src}
                  alt={gallery[0].alt}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </button>
              <button
                type="button"
                onClick={() => setOpenIndex(2)}
                className="col-span-2 row-span-1 overflow-hidden rounded-2xl"
              >
                <img
                  src={gallery[2].src}
                  alt={gallery[2].alt}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </button>
              <button
                type="button"
                onClick={() => setOpenIndex(1)}
                className="col-span-1 row-span-1 overflow-hidden rounded-2xl"
              >
                <img
                  src={gallery[1].src}
                  alt={gallery[1].alt}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </button>
              <button
                type="button"
                onClick={() => setOpenIndex(5)}
                className="group relative col-span-1 row-span-1 overflow-hidden rounded-2xl"
              >
                <img
                  src={gallery[5].src}
                  alt={gallery[5].alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-navy-950/60 text-white">
                  <Images size={20} weight="bold" />
                  <span className="text-xs font-semibold">
                    +{gallery.length - 4} more
                  </span>
                </span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3">
              <h3 className="font-display text-2xl font-semibold text-navy-900 sm:text-3xl">
                {location.shortName}
              </h3>
              <span className="shrink-0 rounded-full bg-gold-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.04em] text-gold-600">
                {location.neighborhood}
              </span>
            </div>
            <p className="mt-4 text-[17px] leading-relaxed text-ink-600">
              {location.blurb}
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {location.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 text-sm leading-snug text-navy-900"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex items-start gap-2 text-ink-600">
              <MapPin size={20} weight="duotone" className="mt-0.5 shrink-0 text-navy-700" />
              <span>
                {location.address}
                <br />
                {location.cityStateZip}
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={location.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-900 px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-navy-800 active:scale-[0.98]"
              >
                <Phone size={17} weight="fill" />
                Call {location.phone}
              </a>
              <button
                type="button"
                onClick={() => setOpenIndex(0)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy-900/20 px-6 py-3 text-[15px] font-semibold text-navy-900 transition hover:bg-navy-50 active:scale-[0.98]"
              >
                <Images size={17} weight="bold" />
                View all photos
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          images={gallery}
          index={openIndex}
          onNavigate={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  )
}
