"use client";

import { useEffect, useRef, useState } from "react";

/** Counts the first number in `value` up from 0 when it scrolls into view. Text like "10–12" or "$0" keeps its other parts. */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLElement>(null);
  const [text, setText] = useState(value);

  useEffect(() => {
    const m = value.match(/\d+/);
    const el = ref.current;
    if (!m || !el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const target = Number(m[0]);
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / 1400);
          const eased = 1 - Math.pow(1 - t, 3);
          setText(value.replace(m[0], String(Math.round(target * eased))));
          if (t < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return <strong ref={ref}>{text}</strong>;
}
