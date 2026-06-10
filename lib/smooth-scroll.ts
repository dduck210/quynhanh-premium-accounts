const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function smoothScrollTo(targetY: number, duration = 750) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let start: number | null = null;

  const step = (ts: number) => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    window.scrollTo(0, startY + diff * easeInOutCubic(p));
    if (p < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}
