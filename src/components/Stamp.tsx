/** Circular label stamp, like the seal on a honey jar. */
export function Stamp({ text, className }: { text: string; className?: string }) {
  return (
    <div className={`stamp ${className ?? ''}`} aria-hidden="true">
      <svg viewBox="0 0 200 200">
        <defs>
          <path id="stamp-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <circle cx="100" cy="100" r="97" className="stamp-ring" />
        <circle cx="100" cy="100" r="62" className="stamp-ring" />
        <text className="stamp-text">
          <textPath href="#stamp-circle" textLength="488">{text}</textPath>
        </text>
        <g className="stamp-hex" transform="translate(100 100)">
          <path d="M0,-26 L22.5,-13 L22.5,13 L0,26 L-22.5,13 L-22.5,-13 Z" />
          <path d="M0,-12 L10.4,-6 L10.4,6 L0,12 L-10.4,6 L-10.4,-6 Z" />
        </g>
      </svg>
    </div>
  );
}
