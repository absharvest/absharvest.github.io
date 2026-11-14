'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * The bee IS the mouse cursor on desktop.
 * - its head sits exactly on the click point and moves with no lag
 * - it tilts a little in the direction you move and leaves a fading gold trail
 * - over anything clickable it grows, glows and buzzes faster; clicking gives it a little squeeze
 * The normal cursor is used over the map (an iframe the page can't track),
 * on touch devices, and for people who prefer reduced motion.
 */
const CLICKABLE = 'a, button, label, input, select, textarea, summary, [role="button"]';
const TRAIL = 14;
const REST_ANGLE = -32; // head pointing up-left, like a normal arrow cursor

export function BeeCursor() {
  const [enabled, setEnabled] = useState(false);
  const beeRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setEnabled(fine.matches && !calm.matches);
    update();
    fine.addEventListener('change', update);
    calm.addEventListener('change', update);
    return () => {
      fine.removeEventListener('change', update);
      calm.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    const bee = beeRef.current!;
    const dots = Array.from(trailRef.current!.children) as HTMLElement[];
    root.classList.add('bee-cursor');

    let mx = -100, my = -100, pmx = -100, pmy = -100;
    let angle = REST_ANGLE;
    let visible = false;
    let dotIndex = 0;
    let lastDotX = 0, lastDotY = 0;
    let raf = 0;

    const place = () => { bee.style.transform = `translate3d(${mx}px, ${my}px, 0) rotate(${angle}deg)`; };
    const show = (on: boolean) => { visible = on; bee.classList.toggle('is-on', on); };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      mx = e.clientX; my = e.clientY;
      if (!visible) { pmx = mx; pmy = my; show(true); }
      place(); // position immediately — no lag on the click point

      if (Math.hypot(mx - lastDotX, my - lastDotY) > 18) {
        const d = dots[dotIndex++ % TRAIL];
        d.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
        d.classList.remove('go');
        void d.offsetWidth;
        d.classList.add('go');
        lastDotX = mx; lastDotY = my;
      }
    };
    const onOver = (e: PointerEvent) => {
      const target = e.target as Element;
      if (target.tagName === 'IFRAME') { show(false); return; }
      bee.classList.toggle('is-hover', !!target.closest?.(CLICKABLE));
    };
    const onDown = () => bee.classList.add('is-down');
    const onUp = () => bee.classList.remove('is-down');
    const onLeave = () => show(false);

    // Ease the tilt: lean into the direction of travel, return to rest when still
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      const dx = mx - pmx, dy = my - pmy;
      pmx = mx; pmy = my;
      const lean = Math.max(-28, Math.min(28, dx * 1.6 + dy * 0.4));
      const want = REST_ANGLE + lean;
      const next = angle + (want - angle) * 0.18;
      if (Math.abs(next - angle) > 0.05) { angle = next; place(); }
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });
    root.addEventListener('pointerleave', onLeave);
    window.addEventListener('blur', onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove('bee-cursor');
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      root.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('blur', onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="bee-layer" aria-hidden="true">
      <div ref={trailRef}>
        {Array.from({ length: TRAIL }, (_, i) => <span key={i} className="bee-dot" />)}
      </div>
      <div ref={beeRef} className="bee">
        <div className="bee-inner">
          <svg viewBox="-20 -24 40 48" width="30" height="36">
            <g className="bee-wings">
              <ellipse className="bee-wing bee-wing-l" cx="-8" cy="-6" rx="8.5" ry="5" />
              <ellipse className="bee-wing bee-wing-r" cx="8" cy="-6" rx="8.5" ry="5" />
            </g>
            <ellipse className="bee-body" cx="0" cy="4" rx="7" ry="11" />
            <path className="bee-stripe" d="M-6.6,1 h13.2 M-6.9,6 h13.8 M-5.4,11 h10.8" />
            <circle className="bee-head" cx="0" cy="-9" r="5" />
            <path className="bee-feelers" d="M-2,-13 q-3,-6 -6,-7 M2,-13 q3,-6 6,-7" />
            <path className="bee-sting" d="M0,15 l0,4" />
          </svg>
        </div>
      </div>
    </div>
  );
}
