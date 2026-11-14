/**
 * The Annapurna range as seen from Pokhara, with Machhapuchhre's fishtail summit at the centre.
 * Used as the brand's signature divider.
 */
const PEAKS =
  'M0 132 L70 118 L130 124 L190 100 L250 108 L310 84 L360 92 L420 66 L470 76 L520 58 L560 70 L610 50 L650 62 L690 34 L712 12 L724 28 L736 6 L760 40 L800 56 L850 48 L900 70 L960 60 L1010 82 L1070 72 L1130 94 L1190 86 L1250 104 L1320 98 L1380 112 L1440 106';

export function Ridge({ className, fill = true }: { className?: string; fill?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      {fill && <path d={`${PEAKS} L1440 160 L0 160 Z`} className="ridge-fill" />}
      <path d={PEAKS} className="ridge-line" fill="none" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
