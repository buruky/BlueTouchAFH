import { motion, useReducedMotion } from "motion/react"
import { Heart, HandHeart, House } from "@phosphor-icons/react"
import { values } from "../data/content"

const icons = { Heart, HandHeart, House }

export default function Values() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-navy-900 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-2xl font-medium italic leading-[1.3] text-white sm:text-3xl"
        >
          Compassionate care. Trusted support. A home that feels like
          family.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {values.map((v, i) => {
            const Icon = icons[v.icon]
            return (
              <motion.div
                key={v.title}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Icon
                  size={32}
                  weight="duotone"
                  className="mx-auto text-gold-400"
                />
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/70">
                  {v.body}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
