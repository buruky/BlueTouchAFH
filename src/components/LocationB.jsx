import { useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import { MapPin, Phone, Images } from "@phosphor-icons/react"
import { locations } from "../data/content"
import { locationBImages } from "../lib/images"
import Lightbox from "./Lightbox"

const location = locations[1]

const gallery = [
  { key: "exterior", alt: "Front exterior, 27th Drive home" },
  { key: "great-room", alt: "Open living and dining area, 27th Drive home" },
  { key: "kitchen", alt: "Bright kitchen with quartz counters, 27th Drive home" },
  { key: "backyard", alt: "Fully fenced backyard, 27th Drive home" },
  { key: "deck", alt: "Private back deck, 27th Drive home" },
  { key: "living-room", alt: "Shared living room, 27th Drive home" },
  { key: "breakfast-nook", alt: "Sunlit breakfast nook, 27th Drive home" },
  { key: "bedroom", alt: "Resident bedroom, 27th Drive home" },
  { key: "bathroom-1", alt: "Walk-in bathroom with grab bars, 27th Drive home" },
  { key: "bathroom-2", alt: "Accessible bathroom with step-free shower, 27th Drive home" },
].map((g) => ({ src: locationBImages[g.key], alt: g.alt }))

const thumbs = [1, 2, 3, 4, 5]

export default function LocationB() {
  const reduce = useReducedMotion()
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="bg-navy-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.button
          type="button"
          onClick={() => setOpenIndex(0)}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="group relative block w-full overflow-hidden rounded-3xl text-left"
        >
          <img
            src={gallery[0].src}
            alt={gallery[0].alt}
            className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[420px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <div className="flex items-center gap-3">
              <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                {location.shortName}
              </h3>
              <span className="shrink-0 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.04em] text-gold-400 backdrop-blur-sm">
                {location.neighborhood}
              </span>
            </div>
          </div>
        </motion.button>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 lg:col-span-5"
          >
            <p className="text-[17px] leading-relaxed text-ink-600">
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
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy-900/20 px-6 py-3 text-[15px] font-semibold text-navy-900 transition hover:bg-white active:scale-[0.98]"
              >
                <Images size={17} weight="bold" />
                View all photos
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 grid grid-cols-3 gap-3 lg:order-2 lg:col-span-7"
          >
            {thumbs.slice(0, 4).map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setOpenIndex(i)}
                className={`overflow-hidden rounded-2xl ${i === 1 ? "col-span-2 row-span-2" : ""}`}
              >
                <img
                  src={gallery[i].src}
                  alt={gallery[i].alt}
                  className="h-full max-h-[220px] w-full object-cover transition duration-500 hover:scale-105"
                />
              </button>
            ))}
            <button
              type="button"
              onClick={() => setOpenIndex(thumbs[4])}
              className="group relative col-span-1 overflow-hidden rounded-2xl"
            >
              <img
                src={gallery[thumbs[4]].src}
                alt={gallery[thumbs[4]].alt}
                className="h-full max-h-[220px] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-navy-950/60 text-white">
                <Images size={18} weight="bold" />
                <span className="text-xs font-semibold">
                  +{gallery.length - 5} more
                </span>
              </span>
            </button>
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
