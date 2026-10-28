"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

/**
 * Site-wide motion: Lenis smooth scrolling plus scroll reveals.
 * Content is always visible at rest; reveals only nudge position, never hide text.
 * Everything is skipped for visitors who ask for reduced motion.
 */
export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.12 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      document.querySelectorAll("[data-reveal-group]").forEach((group) => {
        gsap.from(group.children, {
          y: 36,
          rotationX: -8,
          transformPerspective: 800,
          duration: 0.8,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: { trigger: group, start: "top 90%", once: true },
        });
      });
      const steps = document.querySelector(".steps");
      if (steps) {
        gsap.from(".step .bar", {
          scaleX: 0,
          duration: 0.8,
          stagger: 0.25,
          ease: "power2.out",
          scrollTrigger: { trigger: steps, start: "top 80%", once: true },
        });
      }
      const track = document.querySelector(".track");
      if (track) gsap.to(track, { xPercent: -50, duration: 40, ease: "none", repeat: -1 });
    });
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [pathname]);

  return null;
}
