"use client";

import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MotionSection, MotionItem } from "@/components/shared/MotionSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AcademyStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax for the images
  const yImage1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      ref={containerRef}
      className="py-section bg-brand-white relative overflow-hidden"
    >
      {/* Decorative noise/texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Text Content - Left Side */}
          <div className="md:col-span-1 lg:col-span-6 relative z-10">
            <MotionSection stagger>
              <MotionItem>
                <div className="text-left mb-12">
                  <span className="text-brand-secondary font-bold uppercase tracking-widest text-sm mb-4 block">
                    Nestled in New Chandigarh
                  </span>
                  <h2 className="text-h2 font-black text-brand-primary uppercase tracking-tight leading-none">
                    How We Fuel <br />
                    <span className="text-brand-accent bg-brand-primary px-4 py-1 inline-block mt-2 transform -rotate-2">
                      Your Dream
                    </span>
                  </h2>
                </div>
              </MotionItem>

              <MotionItem>
                <p className="text-h3 font-medium text-brand-secondary leading-relaxed mb-8 border-l-4 border-brand-accent pl-6">
                  With infrastructure that offers top quality tennis facility,
                  coupled with a strong coaching team, PowerMyTennis envisions
                  becoming a leading Tennis Academy of the region.
                </p>
              </MotionItem>

              <MotionItem>
                <div className="space-y-6 text-brand-black text-body-lg">
                  <p className="leading-relaxed text-pretty">
                    At PowerMyTennis, we strongly believe in imparting{" "}
                    <strong className="text-brand-primary font-bold">
                      Purposeful Coaching
                    </strong>{" "}
                    that helps meet tennis-related aspirations of athletes.
                    These aspirations may range from becoming an Elite Tennis
                    Player to seeking international admissions based on tennis
                    points to becoming a skilled recreational player.
                  </p>
                  <p className="leading-relaxed text-pretty">
                    Focused on tennis specific requirements, we offer a
                    wholistic facility wherein full time athletes may play,
                    rest, eat, study, bathe and change. Talk to our expert team
                    to build a{" "}
                    <strong className="text-brand-primary font-bold">
                      smart and realistic plan for your child
                    </strong>
                    .
                  </p>
                </div>
              </MotionItem>
            </MotionSection>
          </div>

          {/* Image Collage - Right Side */}
          <div className="md:col-span-1 lg:col-span-6 relative h-[480px] md:h-[420px] lg:h-[600px] hidden md:block">
            {/* Image 1: Top Right, Parallax Up */}
            <motion.div
              style={{ y: yImage1, willChange: "transform" }}
              className="absolute top-0 right-0 w-3/4 h-[400px] z-10 shadow-2xl"
              // Custom engineered clip-path for dynamic asymmetry
              initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              whileInView={{
                clipPath: "polygon(5% 0, 100% 5%, 95% 100%, 0 95%)",
              }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=1000&auto=format&fit=crop")',
                }}
              />
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay" />
            </motion.div>

            {/* Image 2: Bottom Left, Parallax Down */}
            <motion.div
              style={{ y: yImage2, willChange: "transform" }}
              className="absolute bottom-0 left-0 w-2/3 h-[300px] z-20 shadow-2xl border-4 border-brand-white"
              initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              whileInView={{
                clipPath: "polygon(0 5%, 95% 0, 100% 95%, 5% 100%)",
              }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=1000&auto=format&fit=crop")',
                }}
              />
              <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>

        {/* Quote Block - Full Width engineered break */}
        <div className="mt-24">
          <MotionSection>
            <MotionItem>
              <div className="relative bg-brand-primary p-12 md:p-16 overflow-hidden rounded-[2.5rem] shadow-2xl group border border-brand-neutral/20">
                {/* Subtle Geometric Pattern Background */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                      backgroundSize: "40px 40px",
                    }}
                  />
                </div>

                <p className="relative z-10 text-h2 md:text-h1 font-black italic text-brand-white text-center leading-tight max-w-4xl mx-auto drop-shadow-md">
                  "In tennis, coaching is the bridge between a player's raw
                  physical ability and their ultimate{" "}
                  <span className="text-brand-accent">on-court potential</span>"
                </p>
              </div>
            </MotionItem>
          </MotionSection>
        </div>

        {/* Director Profile */}
        <div className="mt-16">
          <MotionSection stagger>
            <MotionItem>
              <div className="flex items-center gap-6 mb-8">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-secondary">
                  Meet Our Director
                </span>
                <div className="flex-1 h-[3px] bg-gradient-to-r from-brand-neutral/40 to-transparent rounded-r-full" />
              </div>
            </MotionItem>
            <MotionItem>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Director Card */}
                <div className="flex items-start gap-6 bg-brand-neutral/5 border border-brand-neutral/15 rounded-2xl p-8 hover:border-brand-accent/30 transition-colors duration-300">
                  <div className="w-16 h-16 rounded-full bg-brand-primary text-brand-accent flex items-center justify-center text-lg font-black shrink-0 shadow-md">
                    YR
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-secondary mb-1">
                      Director(Coaching & Development), PowerMyTennis
                    </div>
                    <h3 className="text-xl font-black text-brand-primary uppercase tracking-tight mb-2">
                      Yengkhom Romen Singh
                    </h3>
                    <p className="text-sm font-medium text-brand-black/50 mb-4 leading-relaxed">
                      ITF Level 2 &nbsp;·&nbsp; NIS Certified Coach
                      &nbsp;·&nbsp; Ex-Director, Coaching &amp; Development
                      (CLTA)
                    </p>
                    <p className="text-sm text-brand-black/60 leading-relaxed">
                      With 28+ years of professional coaching experience and a
                      tenure leading coaching development at the national level,
                      Romen's vision is to bring world-standard, purposeful
                      tennis training to northern India.
                    </p>
                  </div>
                </div>

                {/* Mission Card */}
                <div className="flex flex-col justify-center bg-brand-primary rounded-2xl p-8 border border-brand-white/5">
                  <div className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-accent mb-4">
                    Our Mission
                  </div>
                  <p className="text-brand-white font-medium text-lg leading-relaxed">
                    "To nurture champions not just for tennis but for life —
                    through discipline, dedication, and{" "}
                    <span className="text-brand-accent font-black">
                      purposeful coaching
                    </span>
                    ."
                  </p>
                  <div className="mt-6 pt-6 border-t border-brand-white/10 text-brand-white/35 text-xs font-bold uppercase tracking-widest">
                    — Yengkhom Romen Singh, Director
                  </div>
                </div>
              </div>
            </MotionItem>
          </MotionSection>
        </div>
      </Container>
    </section>
  );
}
