import { motion, useReducedMotion } from "motion/react"
import { Phone, ArrowRight } from "@phosphor-icons/react"
import { business } from "../data/content"
import { locationAImages } from "../lib/images"

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center overflow-hidden"
    >
      <img
        src={locationAImages.porch}
        alt="The welcoming front porch of a Blue Touch adult family home in Everett, Washington"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/92 via-navy-950/75 to-navy-950/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            A warm, loving home for the ones you love most.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/85">
            Two licensed Adult Family Homes in Everett&apos;s Silver Lake
            neighborhood, offering 24/7 personalized senior care.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-base font-semibold text-navy-950 shadow-lg shadow-navy-950/20 transition hover:bg-gold-400 active:scale-[0.98]"
            >
              Schedule a Tour
              <ArrowRight size={18} weight="bold" />
            </a>
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 active:scale-[0.98]"
            >
              <Phone size={18} weight="fill" />
              Call {business.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
