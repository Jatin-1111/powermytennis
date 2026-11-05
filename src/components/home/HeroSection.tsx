"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { MagneticButton } from "@/components/shared/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

/*
 * Motion direction (adapted from calm "premium brand" prompts):
 * eased motion only, one idea at a time, space to breathe, smooth hand-offs.
 *  1. The court photo settles (slow 1.8s scale-down) — the only long move.
 *  2. Wordmark lines rise out of masks, then a single soft light sweep.
 *  3. A thin accent rule draws in, then tagline and CTAs fade up.
 *  4. On scroll, the photo drifts (parallax) and the copy eases out.
 * Elements marked [data-hero-reveal] are hidden by CSS only when JS is
 * running and the user has not asked for reduced motion (see globals.css),
 * so there is no flash and no-JS / reduced-motion users see everything.
 */
export function HeroSection() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const q = gsap.utils.selector(el);
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(
        q("[data-hero-bg]"),
        { scale: 1.12 },
        { scale: 1, duration: 1.8, ease: "power2.out" },
        0,
      )
        .fromTo(
          q("[data-hero-line]"),
          { yPercent: 110, autoAlpha: 0 },
          { yPercent: 0, autoAlpha: 1, duration: 1, stagger: 0.12 },
          0.15,
        )
        .fromTo(
          q("[data-hero-glint]"),
          { xPercent: -120, autoAlpha: 1 },
          { xPercent: 220, duration: 0.9, ease: "power2.inOut" },
          0.75,
        )
        .set(q("[data-hero-glint]"), { autoAlpha: 0 })
        .fromTo(
          q("[data-hero-rule]"),
          { scaleX: 0, autoAlpha: 1 },
          { scaleX: 1, duration: 0.7, ease: "power3.inOut" },
          0.6,
        )
        .fromTo(
          q("[data-hero-fade]"),
          { y: 18, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.09 },
          0.85,
        );

      // Scroll-linked: photo drifts, copy eases out as the hero leaves.
      const scroll = {
        trigger: el,
        start: "top top",
        end: "bottom top",
        scrub: true,
      };
      gsap.to(q("[data-hero-parallax]"), {
        yPercent: 14,
        ease: "none",
        scrollTrigger: scroll,
      });
      gsap.to(q("[data-hero-copy]"), {
        y: -40,
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: { ...scroll, end: "70% top" },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative bg-brand-primary text-brand-white min-h-[90vh] md:min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image with legibility gradients */}
      <div data-hero-parallax className="absolute inset-0 z-0 will-change-transform">
        <div data-hero-bg className="absolute inset-0 will-change-transform">
          <Image
            src="/hero-clay-court.png"
            alt="PowerMyTennis Academy Training"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        {/* Very dark on the left (behind the copy), fading out to the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent opacity-50" />
      </div>

      <Container className="relative z-10 w-full pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div data-hero-copy className="lg:col-span-7 flex flex-col justify-center text-left">
            <h1 className="font-black uppercase tracking-tight mb-8 leading-none">
              {/* Each line rises out of its own mask */}
              <span className="relative block overflow-hidden pb-[0.06em]">
                <span
                  data-hero-reveal
                  data-hero-line
                  className="block text-brand-white text-[clamp(1.75rem,9vw,4.5rem)] lg:text-hero"
                >
                  Power<span className="text-brand-accent">My</span>Tennis
                </span>
                {/* One soft light sweep across the wordmark */}
                <span
                  aria-hidden="true"
                  data-hero-glint
                  className="pointer-events-none invisible absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent mix-blend-overlay"
                />
              </span>
              <span className="block overflow-hidden mt-3">
                <span
                  data-hero-reveal
                  data-hero-line
                  className="block text-brand-accent text-h3 tracking-[0.08em]"
                >
                  {siteConfig.name.split(" ").slice(1).join(" ")}
                </span>
              </span>
            </h1>

            <span
              aria-hidden="true"
              data-hero-reveal
              data-hero-rule
              className="block h-px w-16 bg-brand-accent origin-left mb-8"
            />

            <p
              data-hero-reveal
              data-hero-fade
              className="text-body-lg text-brand-neutral font-medium max-w-xl mb-12 leading-relaxed"
            >
              {siteConfig.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div data-hero-reveal data-hero-fade className="w-full sm:w-auto">
                <MagneticButton>
                  <Button
                    href="#book-trial"
                    variant="primary"
                    className="w-full sm:w-auto px-10 py-5 shadow-xl hover:shadow-2xl transition-shadow text-sm tracking-widest"
                  >
                    Book a Free Trial
                  </Button>
                </MagneticButton>
              </div>

              <div data-hero-reveal data-hero-fade className="w-full sm:w-auto">
                <MagneticButton intensity={0.1}>
                  <Button
                    href="/pathway"
                    variant="outline-white"
                    className="w-full sm:w-auto px-10 py-5 bg-brand-primary/20 backdrop-blur-sm text-sm tracking-widest"
                  >
                    Explore Pathway
                  </Button>
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Right column left empty so the court shows through */}
          <div className="hidden lg:block lg:col-span-5" />
        </div>
      </Container>
    </section>
  );
}
