import { motion, useReducedMotion } from "motion/react"
import { business } from "../data/content"
import { locationAImages } from "../lib/images"

export default function About() {
  const reduce = useReducedMotion()

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 lg:col-start-1 lg:row-start-1"
        >
          <h2 className="font-display text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl">
            Family-owned, and run that way.
          </h2>
          <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-ink-600">
            Blue Touch is owned and personally managed by {business.owner},
            who oversees day-to-day care across both homes. Our caregivers
            are trained, present around the clock, and held to the same
            standard: treat every resident the way we would want our own
            parents treated.
          </p>
          <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-ink-600">
            That means home-cooked meals instead of a cafeteria tray, a
            small number of residents instead of a crowded wing, and a
            caregiver who knows your loved one's name, routine, and
            favorite chair.
          </p>
          <div className="mt-7 border-l-2 border-gold-500 pl-4">
            <p className="font-display text-lg italic leading-[1.3] text-navy-900">
              &ldquo;Your family becomes part of ours.&rdquo;
            </p>
            <p className="mt-1.5 text-sm font-medium text-ink-600">
              {business.owner}, {business.ownerTitle}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 lg:col-start-7 lg:row-start-1"
        >
          <img
            src={locationAImages.dining}
            alt="Warm dining and living area with a stacked-stone fireplace nook in a Blue Touch home"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-xl shadow-navy-900/10"
          />
        </motion.div>
      </div>
    </section>
  )
}
