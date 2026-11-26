import type { gsap as GSAP } from "gsap";
import type { ScrollTrigger as ST } from "gsap/ScrollTrigger";

/**
 * "Finishes" cards (markup: Swatch in proof.tsx). Each swatch acts out its own finish, all in one shared
 * rhythm: the same length (about 1.4s), the same easing family and the same "light passes over it" feel.
 *   Matte: soft light drifts across and is soaked up, no shine.   Gloss: a bright streak sweeps over.
 *   Soft-touch: a fingertip presses the velvet and it springs back.   Foil: the metal shifts and glints.
 *   Spot UV: only the dot rises, shines and sends out a ripple.   Emboss: the logo rises, then presses in.
 *   Window: the product dips and pops up behind the clear film.   Inserts: items drop into their slots.
 * The cards play one after another as the section scrolls in, then again as a slow wave every few seconds
 * while it is on screen. Hovering (or tapping) a card plays it on demand. Every timeline ends exactly on
 * the still picture drawn in CSS, so nothing jumps. Called inside Motion's gsap.context (skipped entirely
 * for reduced motion); the returned function removes the listeners.
 */
export function animateFinishes(gsap: typeof GSAP, ScrollTrigger: typeof ST) {
  const cleanups: (() => void)[] = [];
  const D = 1.4; // one beat: every finish acts within this length
  const SOFT = "sine.inOut"; // light and surfaces
  const LIFT = "power2.out"; // things rising or pressing
  const LAND = "back.out(1.8)"; // things settling into place

  const build: Record<string, (sw: HTMLElement, tl: gsap.core.Timeline) => void> = {
    matte(sw, tl) {
      const light = sw.querySelector(".fx-light");
      tl.to(light, { xPercent: 110, yPercent: 45, scale: 1.25, opacity: 1, duration: D * 0.55, ease: SOFT })
        .to(light, { xPercent: 0, yPercent: 0, scale: 1, opacity: 0.7, duration: D * 0.45, ease: SOFT });
    },
    gloss(sw, tl) {
      tl.fromTo(sw.querySelector(".fx-streak"), { xPercent: 0 }, { xPercent: 880, duration: D * 0.75, ease: "power2.inOut" })
        .to(sw.querySelector(".fx-shine"), { keyframes: { opacity: [1, 0.25, 1] }, duration: D * 0.75, ease: SOFT }, 0);
    },
    soft(sw, tl) {
      const press = sw.querySelector(".fx-press");
      tl.fromTo(press, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: D * 0.35, ease: LIFT })
        .to(press, { scale: 1.25, opacity: 0, duration: D * 0.65, ease: SOFT })
        .fromTo(sw.querySelector(".fx-nap"), { xPercent: -40, opacity: 0 }, { keyframes: { opacity: [0, 1, 0] }, xPercent: 40, duration: D, ease: SOFT }, 0);
    },
    foil(sw, tl) {
      tl.to(sw, { keyframes: { backgroundPosition: ["20% 50%", "85% 50%", "20% 50%"] }, duration: D, ease: SOFT });
      sw.querySelectorAll(".fx-spark").forEach((spark, i) =>
        tl.fromTo(spark, { scale: 0, rotation: 0, opacity: 1 }, { keyframes: { scale: [0, 1, 0] }, rotation: 90, duration: D * 0.45, ease: SOFT }, 0.15 + i * 0.25),
      );
    },
    uv(sw, tl) {
      const dot = sw.querySelector(".fx-dot");
      tl.to(dot, { scale: 1.12, boxShadow: "0 8px 14px rgb(0 0 0 / .4)", duration: D * 0.35, ease: LIFT })
        .fromTo(sw.querySelector(".fx-glint"), { xPercent: 0 }, { xPercent: 600, duration: D * 0.5, ease: "power2.inOut" }, D * 0.15)
        .fromTo(sw.querySelector(".fx-ring"), { scale: 1, opacity: 0.9 }, { scale: 2.4, opacity: 0, duration: D * 0.7, ease: "power1.out", immediateRender: false }, D * 0.3)
        .to(dot, { scale: 1, boxShadow: "0 1px 2px rgb(0 0 0 / .25)", duration: D * 0.5, ease: LAND }, D * 0.6);
    },
    emboss(sw, tl) {
      const letter = sw.querySelector(".fx-letter");
      const raised = "-2px -2px 0 rgb(255 255 255 / 1), 4px 5px 7px rgb(0 0 0 / .28)";
      const pressed = "1px 1px 0 rgb(255 255 255 / 1), -2px -2px 3px rgb(0 0 0 / .26)";
      const rest = "-1px -1px 0 rgb(255 255 255 / 1), 2px 2px 3px rgb(0 0 0 / .22)";
      tl.to(letter, { scale: 1.08, textShadow: raised, duration: D * 0.3, ease: LIFT })
        .to(letter, { scale: 0.95, textShadow: pressed, duration: D * 0.3, ease: "power2.inOut" })
        .to(letter, { scale: 1, textShadow: rest, duration: D * 0.4, ease: LAND });
    },
    window(sw, tl) {
      const product = sw.querySelector(".fx-product");
      tl.to(product, { yPercent: 110, duration: D * 0.3, ease: "power2.in" })
        .to(product, { yPercent: 0, duration: D * 0.5, ease: LAND })
        .fromTo(sw.querySelector(".fx-sheen"), { xPercent: 0 }, { xPercent: 550, duration: D * 0.6, ease: "power2.inOut" }, D * 0.35);
    },
    insert(sw, tl) {
      const items = sw.querySelectorAll(".fx-item");
      tl.to(items, { y: -70, opacity: 0, duration: D * 0.2, ease: "power2.in", stagger: 0.05 })
        .fromTo(items, { y: -70, opacity: 1 }, { y: 0, duration: D * 0.45, ease: LAND, stagger: 0.12, immediateRender: false })
        .to(sw.querySelectorAll(".fx-slot"), { keyframes: { scale: [1, 0.9, 1] }, duration: D * 0.3, ease: SOFT, stagger: 0.12 }, D * 0.35);
    },
  };

  document.querySelectorAll<HTMLElement>("[data-finishes]").forEach((list) => {
    const cards = [...list.querySelectorAll<HTMLElement>("[data-finish]")];
    const tls = cards.map((card) => {
      const tl = gsap.timeline({ paused: true });
      const sw = card.querySelector<HTMLElement>(".sw");
      if (sw) build[card.dataset.finish ?? ""]?.(sw, tl);
      // Hover (mouse) or tap plays the card again, unless it is already playing.
      const play = () => !tl.isActive() && tl.restart();
      card.addEventListener("pointerenter", play);
      card.addEventListener("click", play);
      cleanups.push(() => {
        card.removeEventListener("pointerenter", play);
        card.removeEventListener("click", play);
      });
      return tl;
    });

    // A wave across the cards: on scroll-in, then every few seconds while the section is on screen.
    const wave = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 4 });
    tls.forEach((tl, i) => wave.call(() => !tl.isActive() && tl.restart(), undefined, 0.2 + i * 0.22));
    wave.set({}, {}, 0.2 + tls.length * 0.22 + D); // let the last card finish before the pause
    ScrollTrigger.create({
      trigger: list,
      start: "top 85%",
      end: "bottom 10%",
      onToggle: (self) => (self.isActive ? wave.play() : wave.pause()),
    });
    cleanups.push(() => wave.kill());
  });
  return () => cleanups.forEach((fn) => fn());
}
