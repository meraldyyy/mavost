import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let raf = 0;
    let tx = -100;
    let ty = -100;
    let rx = -100;
    let ry = -100;

    const onMove = (e: MouseEvent) => {
      setHidden(false);
      tx = e.clientX;
      ty = e.clientY;
      setPos({ x: tx, y: ty });

      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, input, textarea, select, [data-cursor]');
      setHovering(!!interactive);
    };

    const onLeave = () => setHidden(true);

    const loop = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      setRingPos({ x: rx, y: ry });
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{ left: pos.x, top: pos.y, transform: 'translate(-50%, -50%)' }}
      >
        <div
          className={`rounded-full bg-primary-600 transition-all duration-150 ${
            hovering ? 'w-2.5 h-2.5 opacity-0' : 'w-1.5 h-1.5 opacity-100'
          }`}
        />
      </div>
      <div
        className="pointer-events-none fixed z-[9998] hidden md:block"
        style={{ left: ringPos.x, top: ringPos.y, transform: 'translate(-50%, -50%)' }}
      >
        <div
          className={`rounded-full border border-ink-900 transition-all duration-200 ease-out ${
            hovering ? 'w-12 h-12 border-primary-600 bg-primary-600/10' : 'w-7 h-7 border-ink-900/40'
          }`}
        />
      </div>
    </>
  );
}
