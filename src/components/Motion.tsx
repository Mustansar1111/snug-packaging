"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

/** Scroll to an element, smoothly when Lenis is running. */
function scrollToEl(el: HTMLElement) {
  if (lenisInstance) lenisInstance.scrollTo(el);
  else el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Site-wide motion: Lenis smooth scrolling plus scroll reveals.
 * Content is always visible at rest; reveals only nudge position, never hide text.
 * Everything is skipped for visitors who ask for reduced motion.
 */
export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.12, anchors: true });
    lenisInstance = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  // On a new page, start at the top. Lenis keeps its own scroll target, so without this a click on a
  // footer link loads the new page but leaves you at its footer, which looks like nothing happened.
  useEffect(() => {
    if (location.hash) return;
    if (lenisInstance) lenisInstance.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  // "Get a quote" links jump to the quote form on the same page when there is one, instead of opening /quote.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || !a.href) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname !== "/quote" || location.pathname === "/quote") return;
      const target = document.getElementById("quote");
      if (!target) return;
      // Capture phase, before Next's Link handler, so we can stop the route change.
      e.preventDefault();
      e.stopPropagation();
      scrollToEl(target);
      history.replaceState(null, "", "#quote");
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // Thin progress bar at the top that fills as you scroll.
  useEffect(() => {
    const bar = document.createElement("div");
    bar.className = "scroll-progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);
    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
    };
    update();
    addEventListener("scroll", update, { passive: true });
    return () => {
      removeEventListener("scroll", update);
      bar.remove();
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
      // Section headings rise in as they scroll into view.
      document.querySelectorAll(".head").forEach((h) => {
        gsap.from(h.children, {
          y: 28,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: h, start: "top 88%", once: true },
        });
      });
      // Page titles: a soft lift on load.
      const title = document.querySelector(".page-hero h1, .hero h1");
      if (title) gsap.from(title, { y: 30, duration: 1, ease: "power3.out" });
      document.querySelectorAll(".page-hero .lede, .page-hero .ctas, .hero .lede, .hero .ctas").forEach((el, i) => {
        gsap.from(el, { y: 20, duration: 0.9, delay: 0.15 + i * 0.08, ease: "power3.out" });
      });
      // Category hero photo: rises in, then floats gently.
      const heroPhoto = document.querySelector("[data-hero-photo]");
      if (heroPhoto) {
        gsap.from(heroPhoto, { y: 40, scale: 0.94, rotation: -2, duration: 1.1, ease: "power3.out" });
        gsap.to(heroPhoto, { y: -10, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.1 });
        const badge = heroPhoto.querySelector(".photo-badge");
        if (badge) gsap.from(badge, { scale: 0, duration: 0.6, ease: "back.out(2)", delay: 0.7 });
      }
      // Spec table rows slide in one by one.
      document.querySelectorAll("[data-reveal-rows]").forEach((t) => {
        gsap.from(t.querySelectorAll("tr"), {
          x: -24,
          duration: 0.6,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: { trigger: t, start: "top 85%", once: true },
        });
      });
      // Single blocks rise in.
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        gsap.from(el, { y: 30, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } });
      });
      const track = document.querySelector(".track");
      if (track) gsap.to(track, { xPercent: -50, duration: 40, ease: "none", repeat: -1 });
    });
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [pathname]);

  return null;
}
