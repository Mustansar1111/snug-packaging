"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Scroll to an element smoothly (native smooth scrolling, set in globals.css). */
function scrollToEl(el: HTMLElement) {
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Run once the browser is idle, so animation code never competes with the first paint or a tap. */
function whenIdle(fn: () => void) {
  if ("requestIdleCallback" in window) {
    const id = requestIdleCallback(fn, { timeout: 2500 });
    return () => cancelIdleCallback(id);
  }
  const id = setTimeout(fn, 1200);
  return () => clearTimeout(id);
}

/** True when the element starts below the visible screen, so animating it can't cause a visible jump. */
const belowFold = (el: Element) => el.getBoundingClientRect().top > innerHeight;

/**
 * Site-wide motion. Scrolling is the browser's own (fast and responsive on every phone). Hero text and
 * photos animate with plain CSS (see globals.css). Scroll reveals use GSAP, which is loaded only after the
 * page is idle and only animates sections that are still below the fold, so it never slows the first paint
 * or makes visible content jump. Everything is skipped for visitors who ask for reduced motion.
 */
export function Motion() {
  const pathname = usePathname();

  // On a new page, start at the top.
  useEffect(() => {
    if (location.hash) return;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
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
    let revert: (() => void) | undefined;
    let cancelled = false;
    const cancelIdle = whenIdle(async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        const reveal = (targets: Element[], trigger: Element, vars: gsap.TweenVars, start = "top 90%") => {
          if (!targets.length || !belowFold(trigger)) return;
          gsap.from(targets, { ...vars, scrollTrigger: { trigger, start, once: true } });
        };
        document.querySelectorAll("[data-reveal-group]").forEach((group) =>
          reveal([...group.children], group, { y: 36, rotationX: -8, transformPerspective: 800, duration: 0.8, stagger: 0.06, ease: "power3.out" }),
        );
        const steps = document.querySelector(".steps");
        if (steps) reveal([...document.querySelectorAll(".step .bar")], steps, { scaleX: 0, duration: 0.8, stagger: 0.25, ease: "power2.out" }, "top 80%");
        // Section headings rise in as they scroll into view.
        document.querySelectorAll(".head").forEach((h) => reveal([...h.children], h, { y: 28, duration: 0.9, stagger: 0.08, ease: "power3.out" }, "top 88%"));
        // Spec table rows slide in one by one.
        document.querySelectorAll("[data-reveal-rows]").forEach((t) =>
          reveal([...t.querySelectorAll("tr")], t, { x: -24, duration: 0.6, stagger: 0.07, ease: "power2.out" }, "top 85%"),
        );
        // Single blocks rise in.
        document.querySelectorAll("[data-reveal]").forEach((el) => reveal([el], el, { y: 30, duration: 0.8, ease: "power3.out" }, "top 88%"));
        const track = document.querySelector(".track");
        if (track) gsap.to(track, { xPercent: -50, duration: 40, ease: "none", repeat: -1 });
      });
      ScrollTrigger.refresh();
      revert = () => ctx.revert();
    });
    return () => {
      cancelled = true;
      cancelIdle();
      revert?.();
    };
  }, [pathname]);

  return null;
}
