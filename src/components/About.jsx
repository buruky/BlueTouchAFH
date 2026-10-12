import { motion, useReducedMotion } from "motion/react"
import { business } from "../data/content"
import { locationAImages } from "../lib/images"

export default function About() {
  const reduce = useReducedMotion()

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-6 lg:col-start-1 lg:row-start-1">
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
          <div className="mt-8">
            <svg width="34" height="24" viewBox="0 0 34 24" fill="none" aria-hidden="true">
              <path
                d="M8.5 0C3.8 3.6 0 8.9 0 14.4 0 19.5 3.3 23 7.6 23c3.5 0 6-2.6 6-6 0-3.1-2.1-5.4-5-5.7C9.3 7.8 11.8 3.9 15.5 1.4L8.5 0Zm18 0c-4.7 3.6-8.5 8.9-8.5 14.4 0 5.1 3.3 8.6 7.6 8.6 3.5 0 6-2.6 6-6 0-3.1-2.1-5.4-5-5.7 1.2-3.5 3.7-7.4 7.4-9.9L26.5 0Z"
                fill="var(--color-gold-500)"
              />
            </svg>
            <p className="mt-2 font-display text-lg italic leading-[1.3] text-navy-900">
              Your family becomes part of ours.
            </p>
            <p className="mt-1.5 text-sm font-medium text-ink-600">
              {business.owner}, {business.ownerTitle}
            </p>
          </div>
        </div>

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
            className="aspect-4/5 w-full rounded-2xl object-cover shadow-xl shadow-navy-900/10"
          />
        </motion.div>
      </div>
    </section>
  )
}
