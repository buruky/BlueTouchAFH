import { useState } from "react"
import { motion } from "motion/react"
import { CaretDown } from "@phosphor-icons/react"
import { faqs } from "../data/content"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-navy-50 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl">
          Common questions.
        </h2>

        <div className="mt-10 divide-y divide-navy-900/10 border-y border-navy-900/10">
          {faqs.map((item, i) => {
            const open = openIndex === i
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-lg font-semibold text-navy-900">
                    {item.question}
                  </span>
                  <CaretDown
                    size={18}
                    weight="bold"
                    className={`shrink-0 text-gold-600 transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open ? "auto" : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-xl pb-5 text-[15px] leading-relaxed text-ink-600">
                    {item.answer}
                  </p>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
