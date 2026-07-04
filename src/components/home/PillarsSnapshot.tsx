"use client";

import { Container } from "@/components/shared/Container";
import { MotionSection, MotionItem } from "@/components/shared/MotionSection";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion-variants";

const pillars = [
  {
    num: "01",
    title: "Technique",
    description:
      "Mastering the fundamental strokes, footwork, and biomechanics for maximum efficiency.",
  },
  {
    num: "02",
    title: "Strategy",
    description:
      "Developing court awareness, shot selection, and tactical match-play execution.",
  },
  {
    num: "03",
    title: "Fitness",
    description:
      "Enhancing agility, endurance, and tennis-specific power to outlast opponents.",
  },
  {
    num: "04",
    title: "Mental",
    description:
      "Building focus, resilience, and a competitive attitude for high-pressure moments.",
  },
];

export function PillarsSnapshot() {
  return (
    <section className="bg-brand-neutral/5 relative overflow-hidden">
      {/* Angled top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-32 bg-brand-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}
      />

      <Container className="relative z-10 pt-24">
        {/* Stats Bar */}
        <MotionSection
          stagger
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-b border-brand-neutral/20 pb-16"
        >
          {[
            { value: 80, suffix: "+", label: "Years Experience" },
            { value: 4, suffix: "", label: "Clay Courts" },
            { value: 20, suffix: "+", label: "Athletes Trained" },
            { value: 1, suffix: "", label: "Premium Location" },
          ].map((stat, i) => (
            <MotionItem key={i}>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-h1 font-black text-brand-primary mb-2 flex items-baseline">
                  <AnimatedCounter value={stat.value} duration={2} />
                  {stat.suffix && (
                    <span className="text-brand-accent ml-1">{stat.suffix}</span>
                  )}
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-brand-secondary">
                  {stat.label}
                </p>
              </div>
            </MotionItem>
          ))}
        </MotionSection>

        {/* Section label + heading — contained */}
        <div className="flex items-center gap-6 mb-4">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-secondary">
            Our Coaching Framework
          </span>
          <div className="flex-1 h-[3px] bg-gradient-to-l from-transparent via-brand-neutral/20 to-brand-neutral/60 rounded-l-full" />
        </div>
        <h2 className="text-h1 font-black uppercase text-brand-primary tracking-tight mb-12">
          The Four Pillars
        </h2>
      </Container>

      {/* Editorial rows — full-bleed to page edges */}
      <div className="border-t border-brand-neutral/20 mb-16">
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO, delay: index * 0.08 }}
            className="group relative border-b border-brand-neutral/20 overflow-hidden cursor-default"
          >
            {/* Slide-in dark fill */}
            <div className="absolute inset-0 bg-brand-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />

            {/* Content — inside Container to stay aligned with rest of page */}
            <Container className="relative z-10">
              <div className="flex items-center gap-0 py-8 md:py-10">

                {/* Number */}
                <div className="w-16 md:w-20 flex-shrink-0">
                  <span className="text-xs font-black tracking-[0.2em] text-brand-secondary/50 group-hover:text-brand-white/30 transition-colors duration-500">
                    {pillar.num}
                  </span>
                </div>

                {/* Large title */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-black uppercase tracking-tight leading-none text-brand-primary group-hover:text-white transition-colors duration-500"
                    style={{ fontSize: "clamp(2.2rem, 5.5vw, 5rem)" }}
                  >
                    {pillar.title}
                  </h3>
                </div>

                {/* Accent dot */}
                <div className="hidden md:block px-10 flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-neutral/30 group-hover:bg-brand-accent group-hover:shadow-[0_0_14px_rgba(198,217,43,0.7)] transition-all duration-500" />
                </div>

                {/* Description — right-aligned, fixed width on desktop */}
                <div className="hidden md:block w-80 xl:w-96 flex-shrink-0">
                  <p className="text-sm font-medium text-brand-black/50 group-hover:text-brand-white/75 transition-colors duration-500 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>

              {/* Mobile description — below title */}
              <p className="md:hidden text-sm font-medium text-brand-black/60 group-hover:text-brand-white/75 transition-colors duration-500 leading-relaxed pb-6 -mt-2">
                {pillar.description}
              </p>
            </Container>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
