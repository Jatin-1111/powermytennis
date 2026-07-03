"use client";

import { Container } from "@/components/shared/Container";
import { privateLessons } from "@/data/programs";
import { formatCurrency } from "@/lib/utils";
import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion-variants";

export default function PrivateLessonsPage() {
  const chiefCoach = privateLessons.fees.find(f => f.role === "CHIEF COACH");
  const otherFees = privateLessons.fees.filter(f => f.role !== "CHIEF COACH");

  return (
    <main className="min-h-screen bg-brand-white pb-24">
      {/* Page Header */}
      <div className="bg-brand-primary py-section text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-white via-brand-primary to-brand-primary" />
        <div className="relative z-10 px-4">
          <h1 className="text-hero font-black uppercase tracking-tight text-brand-white mb-6">
            Private Lessons
          </h1>
          <div className="w-24 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
        </div>
      </div>

      <Container className="py-16 md:py-24 max-w-6xl">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-6 mb-4">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-secondary">
              1-ON-1 COACHING
            </span>
            <div className="w-12 h-px bg-brand-neutral/30" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-h1 font-black uppercase text-brand-primary tracking-tight leading-tight max-w-2xl">
              Coaching Tiers
            </h2>
            <p className="text-brand-black/60 font-medium md:max-w-xs pb-2 leading-relaxed">
              Personalized attention from our expert coaching team to accelerate your development.
            </p>
          </div>
        </div>

        {/* Asymmetric Pricing Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-24">
          
          {/* FLAGSHIP: Chief Coach (Left Column) */}
          {chiefCoach && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
              className="lg:col-span-5 relative group"
            >
              <div className="bg-brand-primary rounded-[2rem] p-8 md:p-12 h-full flex flex-col justify-between overflow-hidden border border-brand-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(198,217,43,0.15),_transparent_70%)] pointer-events-none" />
                
                <div className="relative z-10 mb-16">
                  <div className="inline-block px-3 py-1 bg-brand-accent/20 text-brand-accent rounded-sm text-xs font-black tracking-widest uppercase mb-8">
                    Flagship
                  </div>
                  <h3 className="text-5xl lg:text-6xl font-black uppercase tracking-tight text-brand-white leading-[0.9]">
                    {chiefCoach.role.replace(" COACH", "")}
                    <span className="block text-brand-white/30 text-3xl lg:text-4xl mt-2">COACH</span>
                  </h3>
                </div>

                <div className="relative z-10">
                  <div className="font-black text-brand-accent text-6xl lg:text-7xl tracking-tighter mb-2">
                    {formatCurrency(chiefCoach.fee)}
                  </div>
                  <div className="text-brand-white/50 font-bold uppercase tracking-[0.2em] text-sm flex items-center gap-4">
                    {chiefCoach.duration.replace("per ", "Per ")}
                    <div className="flex-1 h-px bg-brand-white/20" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* STANDARD MENU: Other Coaches (Right Column Grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {otherFees.map((fee, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: EASE_OUT_EXPO, delay: idx * 0.1 }}
                className="bg-brand-neutral/5 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between border border-brand-neutral/20 hover:border-brand-primary/20 hover:bg-brand-neutral/10 transition-colors group cursor-default"
              >
                <div className="mb-12">
                  <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-brand-primary leading-none group-hover:text-brand-accent transition-colors duration-300">
                    {fee.role}
                  </h3>
                </div>
                
                <div>
                  <div className="font-black text-brand-secondary text-4xl lg:text-5xl tracking-tighter mb-1">
                    {formatCurrency(fee.fee)}
                  </div>
                  <div className="text-brand-black/40 font-bold uppercase tracking-widest text-xs">
                    {fee.duration.replace("per ", "Per ")}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Minimalist Schedule Block */}
        <div className="border-t border-brand-neutral/20 pt-16">
          <div className="flex flex-col md:flex-row gap-16 md:gap-32 justify-center text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
            >
              <div className="text-brand-secondary font-black text-xs uppercase tracking-[0.3em] mb-4">
                Match Days
              </div>
              <div className="text-3xl md:text-4xl font-black text-brand-primary uppercase tracking-tight">
                {privateLessons.matchDays}
              </div>
              <div className="w-12 h-1 bg-brand-accent mx-auto mt-6" />
            </motion.div>

            <div className="hidden md:block w-px bg-brand-neutral/20" />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE_OUT_EXPO, delay: 0.1 }}
            >
              <div className="text-brand-secondary font-black text-xs uppercase tracking-[0.3em] mb-4">
                Off Day
              </div>
              <div className="text-3xl md:text-4xl font-black text-brand-primary uppercase tracking-tight">
                {privateLessons.offDay}
              </div>
              <div className="w-12 h-1 bg-[#F2994A] mx-auto mt-6" />
            </motion.div>

          </div>
        </div>
      </Container>
    </main>
  );
}
