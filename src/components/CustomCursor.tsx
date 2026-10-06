import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let raf = 0;
    let tx = -100;
    let ty = -100;
    let rx = -100;
    let ry = -100;
    let isHovering = false;
    let isHidden = true;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;

      if (isHidden) {
        isHidden = false;
        setHidden(false);
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`;
      }

      const target = e.target as Element;
      const interactive = target.closest('a, button, input, textarea, select, [data-cursor]');
      const nextHovering = !!interactive;
      if (nextHovering !== isHovering) {
        isHovering = nextHovering;
        setHovering(nextHovering);
      }

      if (!raf) raf = requestAnimationFrame(loop);
    };

    const onLeave = () => {
      if (!isHidden) {
        isHidden = true;
        setHidden(true);
      }
    };

    const loop = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }

      if (Math.abs(tx - rx) > 0.1 || Math.abs(ty - ry) > 0.1) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = 0;
      }
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
        ref={dotRef}
        className={`pointer-events-none fixed z-[9999] hidden md:block transition-opacity duration-150 ${
          hidden ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div
          className={`rounded-full bg-primary-600 transition-all duration-150 ${
            hovering ? 'w-2.5 h-2.5 opacity-0' : 'w-1.5 h-1.5 opacity-100'
          }`}
        />
      </div>
      <div
        ref={ringRef}
        className={`pointer-events-none fixed z-[9998] hidden md:block transition-opacity duration-150 ${
          hidden ? 'opacity-0' : 'opacity-100'
        }`}
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
