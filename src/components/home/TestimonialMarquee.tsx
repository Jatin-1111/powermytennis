"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/shared/Container";
import { Quote } from "lucide-react";

export function TestimonialMarquee() {
  // We duplicate the array to create a seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-brand-primary overflow-hidden border-y border-brand-neutral/10 relative">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="mb-12 relative z-10">
        <div className="flex items-center gap-6 mb-4">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-secondary">
            Success Stories
          </span>
          <div className="flex-1 h-[3px] bg-gradient-to-l from-transparent via-brand-neutral/20 to-brand-neutral/60 rounded-l-full" />
        </div>
        <h2 className="text-h1 font-black uppercase text-brand-white tracking-tight leading-none">
          Proven Results.
        </h2>
      </Container>

      {/* Marquee Wrapper */}
      <div className="relative w-full flex overflow-hidden z-10">
        {/* Left/Right Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-brand-primary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-brand-primary to-transparent z-10" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
          className="flex gap-6 md:gap-8 px-3 md:px-4 shrink-0 hover:[animation-play-state:paused]"
        >
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div
              key={`${testimonial.id}-${idx}`}
              className="w-[300px] md:w-[420px] shrink-0 bg-brand-neutral/5 border border-brand-neutral/20 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-brand-accent/40 transition-colors duration-500 relative overflow-hidden"
            >
              {/* Subtle accent line at the top */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent/0 via-brand-accent/0 to-brand-accent/0 group-hover:from-brand-accent/50 group-hover:via-brand-accent group-hover:to-brand-accent/50 transition-all duration-700 opacity-0 group-hover:opacity-100" />
              
              <div className="mb-8">
                <Quote className="w-8 h-8 text-brand-secondary/40 mb-6 group-hover:text-brand-accent transition-colors duration-500" />
                <p className="text-brand-white/80 font-medium leading-relaxed md:text-lg">
                  "{testimonial.quote.split(testimonial.highlight || "").map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && testimonial.highlight && (
                        <span className="text-brand-white font-black">{testimonial.highlight}</span>
                      )}
                    </span>
                  ))}"
                </p>
              </div>

              <div>
                <div className="w-10 h-px bg-brand-neutral/30 mb-4 group-hover:bg-brand-accent/50 group-hover:w-16 transition-all duration-500" />
                <h4 className="text-brand-white font-bold uppercase tracking-widest text-sm">
                  {testimonial.authorName}
                </h4>
                <p className="text-brand-accent text-xs font-bold uppercase tracking-widest mt-1">
                  {testimonial.authorRole}
                </p>
                {testimonial.program && (
                  <p className="text-brand-white/30 text-[10px] font-bold uppercase tracking-widest mt-1">
                    {testimonial.program}
                  </p>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
