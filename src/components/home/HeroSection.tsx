"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { MotionSection, MotionItem } from "@/components/shared/MotionSection";
import { MagneticButton } from "@/components/shared/MagneticButton";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Subtle parallax for the image
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative bg-brand-primary text-brand-white min-h-[90vh] md:min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Parallax Image with Gradient Overlay */}
      <motion.div 
        style={{ y, opacity, willChange: "transform, opacity" }} 
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2000&auto=format&fit=crop")',
          }}
        />
        {/* Complex Gradient for legibility - very dark on the left, fading to transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent opacity-50" />
      </motion.div>

      <Container className="relative z-10 w-full pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content Area (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <MotionSection stagger>
              <MotionItem>
                <div className="inline-flex items-center gap-3 mb-6 bg-brand-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-brand-white/10">
                  <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                  <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-white">
                    Elite Training in {siteConfig.address.city}
                  </span>
                </div>
              </MotionItem>

              <MotionItem>
                <h1 className="text-hero font-black uppercase tracking-tight mb-8 leading-none">
                  <span className="block text-brand-white">
                    {siteConfig.name.split(" ")[0]}
                  </span>
                  <span className="block text-brand-accent mt-2">
                    {siteConfig.name.split(" ").slice(1).join(" ")}
                  </span>
                </h1>
              </MotionItem>

              <MotionItem>
                <p className="text-body-lg text-brand-neutral font-medium max-w-xl mb-12 leading-relaxed">
                  {siteConfig.tagline}
                </p>
              </MotionItem>

              <MotionItem>
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <MagneticButton>
                    <Button
                      href="/contact"
                      variant="primary"
                      className="w-full sm:w-auto px-10 py-5 shadow-xl hover:shadow-2xl transition-shadow text-sm tracking-widest"
                    >
                      Book a Trial
                    </Button>
                  </MagneticButton>

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
              </MotionItem>
            </MotionSection>
          </div>

          {/* Right Area (Empty for Asymmetry, allowing image to show through) */}
          <div className="hidden lg:block lg:col-span-5" />
        </div>
      </Container>
    </section>
  );
}
