"use client";

import { ReactNode, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Section-to-section transition: the next section rises into place from a
 * slightly inset, rounded "card" and opens to full bleed — a soft
 * dissolve-style hand-off instead of a hard cut. 0.9s, plays once.
 * Only the shell moves; text inside is never clipped once settled.
 */
export function SectionReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        el,
        { clipPath: "inset(4% 3% 0% 3% round 28px)", y: 48 },
        {
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          clearProps: "clipPath,transform",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        },
      );
    });

    return () => mm.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
