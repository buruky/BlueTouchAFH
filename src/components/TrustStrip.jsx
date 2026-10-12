import { HouseLine, ClockCountdown, ShieldCheck, HandHeart } from "@phosphor-icons/react"

const facts = [
  {
    icon: HouseLine,
    label: "Two homes in Silver Lake, Everett",
  },
  {
    icon: ClockCountdown,
    label: "Staffed 24 hours a day, every day",
  },
  {
    icon: ShieldCheck,
    label: "Licensed by Washington State DSHS",
  },
  {
    icon: HandHeart,
    label: "Family-owned and personally managed",
  },
]

export default function TrustStrip() {
  return (
    <section className="border-b border-navy-900/8 bg-navy-50 py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:gap-8 lg:px-8">
        {facts.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon size={26} weight="duotone" className="shrink-0 text-gold-600" />
            <span className="text-[15px] font-medium leading-snug text-navy-900">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
