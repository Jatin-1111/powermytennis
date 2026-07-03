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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          {/* Text Content - Left Side */}
          <div className="lg:col-span-6 relative z-10">
            <MotionSection stagger>
              <MotionItem>
                <div className="text-left mb-12">
                  <span className="text-brand-secondary font-bold uppercase tracking-widest text-sm mb-4 block">
                    Nestled in New Chandigarh
                  </span>
                  <h2 className="text-h2 md:text-h1 font-black text-brand-primary uppercase tracking-tight leading-none">
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
                  <p className="leading-relaxed">
                    At PowerMyTennis, we strongly believe in imparting{" "}
                    <strong className="text-brand-primary font-bold">
                      Purposeful Coaching
                    </strong>{" "}
                    that helps meet tennis-related aspirations of athletes.
                    These aspirations may range from becoming an Elite Tennis
                    Player to seeking international admissions based on tennis
                    points.
                  </p>
                  <p className="leading-relaxed">
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
          <div className="lg:col-span-6 relative h-[600px] hidden md:block">
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
              <div className="relative bg-brand-primary p-12 md:p-16 overflow-hidden rounded-3xl shadow-xl group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                <p className="relative z-10 text-h2 md:text-h1 font-black italic text-brand-white text-center leading-tight max-w-4xl mx-auto">
                  "In tennis, coaching is the bridge between a player's raw
                  physical ability and their ultimate{" "}
                  <span className="text-brand-accent">on-court potential</span>"
                </p>
              </div>
            </MotionItem>
          </MotionSection>
        </div>
      </Container>
    </section>
  );
}
