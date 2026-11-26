import type { gsap as GSAP } from "gsap";
import type { ScrollTrigger as ST } from "gsap/ScrollTrigger";

/**
 * Scroll-driven delivery scene for the "How it works" section (markup: DeliveryRoad in sections.tsx).
 * As the section scrolls through the screen, the Snug van drives along the road, each step's stop lights
 * up and its text rises in as the van reaches it, then a box drops onto the doorstep and a tick pops.
 * Scrolling back up plays it in reverse. The idle engine puffs and bob only run while the road is on screen.
 * Called inside Motion's gsap.context, so the tweens are reverted on page change; the returned function
 * undoes the rest.
 */
export function animateDeliveryRoad(gsap: typeof GSAP, ScrollTrigger: typeof ST, belowFold: (el: Element) => boolean) {
  const cleanups: (() => void)[] = [];
  document.querySelectorAll<HTMLElement>(".road").forEach((road) => {
    // Only animate a road that starts below the screen, so nothing visible jumps when this loads.
    if (!belowFold(road)) return;
    const section = road.parentElement!;
    const rig = road.querySelector<HTMLElement>(".rig")!;
    const fill = road.querySelector(".road-fill")!;
    const stops = [...road.querySelectorAll<HTMLElement>(".stop")];
    const steps = [...section.querySelectorAll<HTMLElement>(".step")];
    const wheels = road.querySelectorAll(".wheel");
    const desktop = matchMedia("(min-width: 861px)").matches;
    if (desktop) {
      section.classList.add("road-live");
      cleanups.push(() => section.classList.remove("road-live"));
    }

    // Distance the van travels: from just off the left edge to its parking spot by the house.
    const travel = () => rig.offsetLeft + rig.offsetWidth;
    // Fraction of the drive at which the van's nose reaches a stop.
    const at = (el: HTMLElement) => Math.min(1, (el.offsetLeft + el.offsetWidth / 2) / travel());

    const DRIVE = 8; // timeline units for the drive; the drop and tick follow it
    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: road,
        start: desktop ? "top 88%" : "top 92%",
        end: desktop ? "top 30%" : "top 40%",
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });

    tl.fromTo(rig, { x: () => -travel() }, { x: 0, duration: DRIVE }, 0)
      .fromTo(fill, { scaleX: 0 }, { scaleX: 1, duration: DRIVE }, 0)
      // About two and a half turns of the wheels per 100px.
      .fromTo(wheels, { rotation: 0 }, { rotation: () => travel() * 2.4, transformOrigin: "50% 50%", duration: DRIVE }, 0);

    stops.forEach((stop, i) => {
      const t = at(stop) * DRIVE;
      tl.fromTo(stop.querySelector(".stop-fill"), { scale: 0 }, { scale: 1, duration: 0.35, ease: "back.out(3)" }, t)
        .to(stop, { keyframes: { scale: [1, 1.35, 1] }, duration: 0.5 }, t)
        .fromTo(stop.querySelector(".stop-n"), { color: getComputedStyle(stop).borderTopColor }, { color: "#2a1306", duration: 0.2 }, t);
      // On wide screens each step's text arrives with the van; on phones the steps reveal on their own below.
      const step = steps[i];
      // The hidden start comes from the .road-live class in CSS (a GSAP "from" state gets lost when
      // ScrollTrigger refreshes a scrubbed timeline), so this only tweens towards the visible state.
      if (desktop && step) tl.to(step.children, { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power2.out" }, Math.max(0, t - 0.2));
    });

    // A small brake dip as the van parks, then the box hops onto the doorstep.
    tl.to(rig, { keyframes: { rotation: [0, 2.5, 0] }, transformOrigin: "85% 100%", duration: 0.5 }, DRIVE - 0.15)
      .fromTo(road.querySelector(".parcel"), { y: -26, x: -18, opacity: 0, rotation: -25 }, { y: 0, x: 0, opacity: 1, rotation: 0, duration: 1, ease: "bounce.out" }, DRIVE + 0.1)
      .fromTo(road.querySelector(".house-window"), { opacity: 0.25 }, { opacity: 1, duration: 0.4 }, DRIVE + 0.9)
      .fromTo(road.querySelector(".delivered"), { scale: 0, rotation: -90 }, { scale: 1, rotation: 0, duration: 0.6, ease: "back.out(2.5)" }, DRIVE + 1);

    if (!desktop) {
      steps.forEach((step) =>
        gsap.from(step.children, { y: 22, opacity: 0, duration: 0.7, stagger: 0.08, ease: "power2.out", scrollTrigger: { trigger: step, start: "top 88%", once: true } }),
      );
    }

    // Idle engine: a gentle bob and exhaust puffs, playing only while the road is on screen.
    const idle = gsap.timeline({ paused: true, repeat: -1 });
    idle.to(road.querySelector(".van-body"), { y: -0.8, duration: 0.18, yoyo: true, repeat: 3, ease: "sine.inOut" }, 0);
    road.querySelectorAll(".puffs i").forEach((puff, i) =>
      idle.fromTo(puff, { x: 0, y: 0, scale: 0.4, opacity: 0.9 }, { x: -18, y: -10, scale: 1.6, opacity: 0, duration: 0.75, ease: "power1.out" }, i * 0.25),
    );
    ScrollTrigger.create({ trigger: road, start: "top bottom", end: "bottom top", onToggle: (self) => (self.isActive ? idle.play() : idle.pause()) });
  });
  return () => cleanups.forEach((fn) => fn());
}
