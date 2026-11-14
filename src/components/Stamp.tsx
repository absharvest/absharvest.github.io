/** Circular label stamp, like the seal on a honey jar. */
const R = 78;
const CIRC = 2 * Math.PI * R; // ≈ 490

export function Stamp({ text, lang, className }: { text: string; lang: string; className?: string }) {
  // Devanagari joins letters into conjuncts, so it must never be letter-spaced:
  // Nepali is set at its natural spacing and repeated to fill the ring.
  // Latin text is sized to almost fill the ring, then evened out with textLength.
  const isDeva = lang === 'ne';
  const ring = isDeva ? text.repeat(2) : text;
  return (
    <div className={`stamp ${className ?? ''}`} aria-hidden="true">
      <svg viewBox="0 0 200 200">
        <defs>
          <path id="stamp-circle" d={`M100,100 m-${R},0 a${R},${R} 0 1,1 ${R * 2},0 a${R},${R} 0 1,1 -${R * 2},0`} />
        </defs>
        <circle cx="100" cy="100" r="97" className="stamp-ring" />
        <circle cx="100" cy="100" r="62" className="stamp-ring" />
        <text className="stamp-text">
          {isDeva ? (
            <textPath href="#stamp-circle">{ring}</textPath>
          ) : (
            <textPath href="#stamp-circle" textLength={CIRC - 4} lengthAdjust="spacing">{ring}</textPath>
          )}
        </text>
        <g className="stamp-hex" transform="translate(100 100)">
          <path d="M0,-26 L22.5,-13 L22.5,13 L0,26 L-22.5,13 L-22.5,-13 Z" />
          <path d="M0,-12 L10.4,-6 L10.4,6 L0,12 L-10.4,6 L-10.4,-6 Z" />
        </g>
      </svg>
    </div>
  );
}
