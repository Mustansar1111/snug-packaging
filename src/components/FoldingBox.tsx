"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const SPEC = "Mailer box · 9 × 6 × 3.5 in · E-flute";

/** Hero animation: a flat dieline folds itself into a printed Musa mailer box. */
export function FoldingBox() {
  const stage = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState(SPEC);

  useEffect(() => {
    const root = stage.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const q = (sel: string) => root.querySelector<HTMLElement>(sel)!;
    const tilt = q(".tilt");
    const spin = q(".spin");

    const ctx = gsap.context(() => {
      gsap.set([".front", ".back", ".left", ".right", ".lid"], { rotationX: 0, rotationY: 0 });
      gsap.set(tilt, { rotationX: 0, scale: 0.62 });
      gsap.set(spin, { rotationZ: 0 });
      root.classList.add("dieline");
      setLabel("Your dieline, cut to your exact size");

      gsap
        .timeline({ delay: 0.5, defaults: { ease: "power3.inOut" } })
        .to(tilt, { rotationX: 58, scale: 1, duration: 1.2 })
        .to(spin, { rotationZ: -36, duration: 1.2 }, "<")
        .call(() => {
          root.classList.remove("dieline");
          setLabel("Folding…");
        })
        .to(".left", { rotationY: 90, duration: 0.7 })
        .to(".right", { rotationY: -90, duration: 0.7 }, "<.1")
        .to(".front", { rotationX: 90, duration: 0.7 }, "<.15")
        .to(".back", { rotationX: -90, duration: 0.7 }, "<.1")
        .to(".lid", { rotationX: -90, duration: 0.9, ease: "back.out(1.4)" })
        .call(() => setLabel(SPEC))
        .to(spin, { rotationZ: 324, duration: 2.4, ease: "power2.inOut" })
        .add(() => {
          gsap.to(tilt, { y: -10, duration: 2.2, ease: "sine.inOut", yoyo: true, repeat: -1 });
          gsap.to(spin, { rotationZ: "+=360", duration: 28, ease: "none", repeat: -1 });
        });
    }, root);

    const move = (e: PointerEvent) => {
      const r = root.getBoundingClientRect();
      const dx = (e.clientX - r.left) / r.width - 0.5;
      const dy = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(tilt, { rotationX: 58 - dy * 14, rotationY: dx * 14, duration: 0.6, overwrite: "auto" });
    };
    const leave = () => gsap.to(tilt, { rotationX: 58, rotationY: 0, duration: 0.8 });
    root.addEventListener("pointermove", move);
    root.addEventListener("pointerleave", leave);

    return () => {
      root.removeEventListener("pointermove", move);
      root.removeEventListener("pointerleave", leave);
      ctx.revert();
    };
  }, []);

  return (
    <div className="stage" ref={stage} aria-hidden="true">
      <div className="tilt">
        <div className="spin">
          <div className="bottom">
            <div className="face front">
              <div className="print">musa</div>
            </div>
            <div className="face back">
              <div className="face lid">
                <div className="print">
                  <div>
                    musa<small>YOUR BRAND HERE</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="face left" />
            <div className="face right" />
          </div>
        </div>
      </div>
      <span className="label">{label}</span>
    </div>
  );
}
