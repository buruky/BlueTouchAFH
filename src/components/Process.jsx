import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react"
import { Phone, DoorOpen, ChatsCircle, House } from "@phosphor-icons/react"
import { tourSteps } from "../data/content"

const icons = { Phone, DoorOpen, ChatsCircle, House }

export default function Process() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  })
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl">
            How a tour works.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-600">
            No applications, no forms to start. Just a conversation and a
            walk through the home.
          </p>
        </div>

        <div className="relative mt-16 hidden lg:grid lg:grid-cols-4 lg:gap-8">
          <svg
            viewBox="0 0 1200 48"
            className="absolute inset-x-0 top-6 z-0 h-12 w-full"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M150,24 C320,24 320,8 450,8 C580,8 580,40 750,40 C880,40 880,24 1050,24"
              stroke="var(--color-gold-500)"
              strokeWidth="2"
              strokeLinecap="round"
              style={reduce ? undefined : { pathLength }}
              pathLength={reduce ? 1 : undefined}
            />
          </svg>

          {tourSteps.map((step) => {
            const Icon = icons[step.icon]
            return (
              <div key={step.title} className="relative z-10 flex flex-col items-start">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold-500 bg-cream-50 text-gold-600">
                  <Icon size={22} weight="bold" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                  {step.body}
                </p>
              </div>
            )
          })}
        </div>

        <ol className="mt-12 flex flex-col gap-8 lg:hidden">
          {tourSteps.map((step, i) => {
            const Icon = icons[step.icon]
            return (
              <li key={step.title} className="relative flex gap-4 pl-0">
                <div className="flex flex-col items-center">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-gold-500 bg-cream-50 text-gold-600">
                    <Icon size={20} weight="bold" />
                  </span>
                  {i < tourSteps.length - 1 && (
                    <span className="mt-2 w-[1.5px] grow bg-gold-500/30" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                    {step.body}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
