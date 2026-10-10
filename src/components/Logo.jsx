export default function Logo({ className = "h-9 w-9", style }) {
  return (
    <svg
      viewBox="0 0 160 140"
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* heart */}
      <path
        d="M80,118 C45,95 15,65 15,40 C15,18 35,8 55,15 C66,19 74,28 80,42 C86,28 94,19 105,15 C125,8 145,18 145,40 C145,65 115,95 80,118 Z"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* house */}
      <path
        d="M50,78 L80,46 L110,78 M58,78 L58,108 M102,78 L102,108"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* supporting hand */}
      <path
        d="M22,138 C15,127 17,113 26,111 C34,109 42,113 48,116 L92,116 C95,116 97,112 99,109 C97,109 99.7,96 103,96 C106.3,96 109,109 109,109 C107,109 109.7,94 113,94 C116.3,94 119,109 119,109 C116.7,109 119.1,99 122,99 C124.9,99 127.3,109 127.3,109 C130,109 133,112 135,117 C139,124 138,132 131,137 L32,137 C26,137 23,138 22,138 Z"
        fill="var(--logo-accent, #c6983a)"
      />
      {/* figure 1 (skirt silhouette), with cane */}
      <circle cx="70" cy="84" r="6" fill="var(--logo-accent, #c6983a)" />
      <path d="M64,92 L76,92 L80,108 L60,108 Z" fill="var(--logo-accent, #c6983a)" />
      <line x1="62" y1="98" x2="56" y2="111" stroke="var(--logo-accent, #c6983a)" strokeWidth="2.6" strokeLinecap="round" />
      {/* figure 2 (trousers silhouette), taller, with cane */}
      <circle cx="90" cy="82" r="6.5" fill="var(--logo-accent, #c6983a)" />
      <path d="M84,90 L96,90 L96,101 L84,101 Z" fill="var(--logo-accent, #c6983a)" />
      <line x1="88" y1="101" x2="86" y2="112" stroke="var(--logo-accent, #c6983a)" strokeWidth="3" strokeLinecap="round" />
      <line x1="92" y1="101" x2="94" y2="112" stroke="var(--logo-accent, #c6983a)" strokeWidth="3" strokeLinecap="round" />
      <line x1="98" y1="96" x2="104" y2="111" stroke="var(--logo-accent, #c6983a)" strokeWidth="2.6" strokeLinecap="round" />
      {/* linked hands */}
      <line x1="76" y1="96" x2="85" y2="94" stroke="var(--logo-accent, #c6983a)" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}
