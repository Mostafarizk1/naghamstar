/**
 * One-time architectural transition between Hero and About.
 * The stepped gold line echoes the 3 ascending bars of the logo icon.
 * Low on the left, high on the right — mirrors the logo's RTL tower language.
 */
export default function ArchitecturalDivider() {
  return (
    <div className="w-full overflow-hidden bg-brand-navy" style={{ lineHeight: 0, height: '72px' }}>
      <svg
        viewBox="0 0 1440 72"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* About section background cutting up into hero with a stepped architectural shape */}
        <path
          d="M0,72 L0,52 L360,52 L480,36 L840,36 L960,20 L1440,20 L1440,72 Z"
          className="fill-brand-ivory dark:fill-[#111f30]"
        />

        {/* Gold stepped line — the architectural accent */}
        <polyline
          points="0,52 360,52 480,36 840,36 960,20 1440,20"
          fill="none"
          stroke="#cdb689"
          strokeWidth="1.5"
          strokeLinejoin="miter"
          opacity="0.55"
        />

        {/* Corner marks at each step — like rivets in structural steel */}
        <circle cx="360" cy="52" r="2.5" fill="#cdb689" opacity="0.6" />
        <circle cx="480" cy="36" r="2.5" fill="#cdb689" opacity="0.6" />
        <circle cx="840" cy="36" r="2.5" fill="#cdb689" opacity="0.6" />
        <circle cx="960" cy="20" r="2.5" fill="#cdb689" opacity="0.6" />
      </svg>
    </div>
  );
}
