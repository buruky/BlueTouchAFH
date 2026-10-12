import { motion, useReducedMotion } from "motion/react"
import { Phone, EnvelopeSimple, Printer, MapPin } from "@phosphor-icons/react"
import { business, locations } from "../data/content"

export default function Contact() {
  const reduce = useReducedMotion()

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl">
            Ready to see it for yourself?
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-600">
            Schedule a tour of either home, or call with questions. We&apos;re
            happy to help you find the right fit for your family.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-2xl bg-navy-900 p-8 text-white lg:col-span-5"
          >
            <div>
              <h3 className="font-display text-2xl font-semibold">
                Speak with {business.owner.split(" ")[0]} directly
              </h3>
              <p className="mt-1.5 text-sm text-white/70">
                {business.owner}, {business.ownerTitle}
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <a
                href={business.phoneHref}
                className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-4 text-base font-semibold transition hover:bg-white/15"
              >
                <Phone size={20} weight="fill" className="text-gold-400" />
                {business.phone}
              </a>
              <a
                href={business.emailHref}
                className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-4 text-base font-semibold transition hover:bg-white/15"
              >
                <EnvelopeSimple size={20} weight="fill" className="text-gold-400" />
                {business.email}
              </a>
              <div className="flex items-center gap-3 px-5 text-sm text-white/60">
                <Printer size={18} weight="bold" />
                Fax {business.fax}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.id}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col justify-between rounded-2xl border border-navy-900/10 bg-white p-7"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold text-navy-900">
                      {loc.shortName}
                    </h3>
                    <span className="shrink-0 rounded-full bg-gold-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.04em] text-gold-600">
                      {loc.neighborhood}
                    </span>
                  </div>
                  <div className="mt-3 flex items-start gap-2 text-sm text-ink-600">
                    <MapPin size={18} weight="duotone" className="mt-0.5 shrink-0 text-navy-700" />
                    <span>
                      {loc.address}
                      <br />
                      {loc.cityStateZip}
                    </span>
                  </div>
                </div>
                <a
                  href={loc.phoneHref}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-400 active:scale-[0.98]"
                >
                  <Phone size={16} weight="fill" />
                  Call {loc.phone}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
