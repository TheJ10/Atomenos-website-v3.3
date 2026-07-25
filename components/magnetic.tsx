'use client';

import { useRef } from 'react';
import type { ReactNode } from 'react';

export function Magnetic({ children, strength = 16 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`;
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0,0)';
  }

  return (
    <span
      ref={ref}
      className="magnetic"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: 'transform .25s ease-out' }}
    >
      {children}
    </span>
  );
}
