import { motion, useReducedMotion } from "motion/react"
import {
  ShieldCheck,
  Sparkle,
  Pill,
  ForkKnife,
  UsersThree,
  Bed,
} from "@phosphor-icons/react"
import { amenities } from "../data/content"
import { locationAImages } from "../lib/images"

const icons = { ShieldCheck, Sparkle, Pill, ForkKnife, UsersThree, Bed }

const spans = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
]

const photos = {
  "Home-Cooked Meals": locationAImages.kitchen,
  "Comfortable Private Rooms": locationAImages.bedroom,
}

export default function Amenities() {
  const reduce = useReducedMotion()

  return (
    <section id="amenities" className="bg-navy-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl">
            Care and comfort, built in.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-600">
            Every resident at Blue Touch receives the same standard of
            attentive, round-the-clock care, in a setting that still feels
            like a home.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[172px]">
          {amenities.map((item, i) => {
            const Icon = icons[item.icon]
            const photo = photos[item.title]
            const featured = i === 0

            return (
              <motion.div
                key={item.title}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`${spans[i]} relative flex flex-col justify-end overflow-hidden rounded-2xl p-6 ${
                  featured
                    ? "bg-navy-900 text-white"
                    : photo
                      ? "text-white"
                      : "border border-navy-900/8 bg-white text-navy-900"
                }`}
              >
                {photo && (
                  <>
                    <img
                      src={photo}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/25 to-transparent" />
                  </>
                )}
                <Icon
                  size={28}
                  weight="duotone"
                  className={`relative mb-3 ${
                    featured || photo ? "text-gold-400" : "text-gold-600"
                  }`}
                />
                <h3 className="relative font-display text-lg font-semibold leading-snug">
                  {item.title}
                </h3>
                <p
                  className={`relative mt-1.5 text-sm leading-relaxed ${
                    featured || photo ? "text-white/80" : "text-ink-600"
                  }`}
                >
                  {item.body}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
