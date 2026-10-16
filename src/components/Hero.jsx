import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react"
import { Phone, ArrowRight, CaretDown } from "@phosphor-icons/react"
import { business } from "../data/content"
import { locationAImages } from "../lib/images"

export default function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90])

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100dvh] items-center overflow-hidden"
    >
      <motion.img
        src={locationAImages.porch}
        alt="The welcoming front porch of a Blue Touch adult family home in Everett, Washington"
        style={{ y }}
        className="absolute inset-0 h-[115%] w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/92 via-navy-950/75 to-navy-950/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
          >
            A warm, loving home for the ones you love most.
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-lg text-lg leading-relaxed text-white/85"
          >
            Two licensed Adult Family Homes in Everett&apos;s Silver Lake
            neighborhood, offering 24/7 personalized senior care.
          </motion.p>

          <motion.blockquote
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md border-l-2 border-gold-400/60 pl-4"
          >
            <p className="font-display text-base italic leading-snug text-gold-100 sm:text-lg">
              &ldquo;Do everything in love.&rdquo;
            </p>
            <cite className="mt-1.5 block text-xs font-semibold not-italic uppercase tracking-[0.18em] text-gold-400/90">
              1 Corinthians 16:14
            </cite>
          </motion.blockquote>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-7 py-3.5 text-base font-semibold text-navy-950 shadow-lg shadow-navy-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/20 active:translate-y-0 active:scale-[0.98]"
            >
              Schedule a Tour
              <ArrowRight
                size={18}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10 active:translate-y-0 active:scale-[0.98]"
            >
              <Phone size={18} weight="fill" />
              Call {business.phone}
            </a>
          </motion.div>
        </div>
      </div>

      {!reduce && (
        <motion.a
          href="#about"
          aria-label="Scroll to learn more"
          className="absolute inset-x-0 bottom-8 mx-auto flex w-fit flex-col items-center gap-1 text-white/70 transition hover:text-white"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs font-medium uppercase tracking-widest">
            Scroll
          </span>
          <CaretDown size={18} weight="bold" />
        </motion.a>
      )}
    </section>
  )
}
