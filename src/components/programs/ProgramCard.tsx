"use client";

import { useState } from "react";
import { Program } from "@/data/programs";
import { formatCurrency } from "@/lib/utils";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { motion, AnimatePresence } from "framer-motion";
import { EASE_IN_OUT } from "@/lib/motion-variants";

interface ProgramCardProps {
  program: Program;
  featured?: boolean;
}

export function ProgramCard({ program, featured = false }: ProgramCardProps) {
  const [activeModule, setActiveModule] = useState(0);

  const isPremium = program.id === "high-performance" || program.id === "pro";
  const hasTabs = program.modules && program.modules.length > 1;

  if (featured) {
    // Wide horizontal hero layout for the flagship program
    return (
      <div className="relative group bg-brand-white rounded-[2rem] overflow-hidden border-2 border-brand-accent shadow-[0_24px_64px_-12px_rgba(34,38,27,0.3)] hover:shadow-[0_40px_80px_-20px_rgba(198,217,43,0.35)] transition-all duration-500 ease-out hover:-translate-y-1">
        {/* Subtle glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

        <div className="flex flex-col lg:flex-row">
          {/* Left: Dark header panel */}
          <div className="lg:w-96 flex-shrink-0 bg-brand-primary p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden border-b-4 lg:border-b-0 lg:border-r-4 border-brand-accent">
            {/* Pulsing badge */}
            <div className="absolute top-6 right-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-accent"></span>
              </span>
            </div>

            <div>
              <div className="text-brand-accent text-xs font-black uppercase tracking-[0.3em] mb-4">
                Flagship Program
              </div>
              <h3 className="text-3xl lg:text-4xl font-black uppercase text-brand-white tracking-tight leading-tight mb-6 group-hover:text-brand-accent transition-colors duration-300">
                {program.name}
              </h3>
              <div className="inline-block bg-brand-accent text-brand-primary px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.15em] shadow-md mb-8">
                {program.seats} Seats Available
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-xl font-black text-brand-white/60">₹</span>
                <span className="text-5xl font-black text-brand-white font-mono tracking-tighter">
                  <AnimatedCounter value={program.fee} duration={2} />
                </span>
              </div>
              <div className="text-brand-accent font-bold uppercase tracking-widest text-xs">
                per month
              </div>
            </div>
          </div>

          {/* Right: Content area */}
          <div className="flex-1 p-8 lg:p-10 bg-brand-white">
            {/* Tab switcher */}
            {hasTabs && (
              <div className="flex gap-2 mb-8 bg-brand-neutral/10 p-1.5 rounded-xl w-fit">
                {program.modules!.map((mod, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveModule(idx)}
                    className={`text-xs font-black uppercase tracking-widest py-2.5 px-6 rounded-lg transition-all duration-300 ${
                      activeModule === idx
                        ? "bg-brand-primary text-brand-accent shadow-sm"
                        : "text-brand-secondary hover:text-brand-primary hover:bg-brand-white/70"
                    }`}
                  >
                    {mod.name || `Module ${idx + 1}`}
                  </button>
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Schedule Column */}
              <div>
                <h4 className="text-xs font-black text-brand-secondary uppercase tracking-widest mb-5 flex items-center gap-3">
                  <span className="w-5 h-0.5 bg-brand-accent inline-block"></span>
                  Session Schedule
                </h4>
                <AnimatePresence mode="wait">
                  <motion.ul
                    key={activeModule}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2, ease: EASE_IN_OUT }}
                    className="space-y-0"
                  >
                    {program.modules![activeModule]?.slots.map((slot, sIdx) => (
                      <li key={sIdx} className="flex flex-col text-sm border-l-[3px] border-brand-accent pl-4 py-3 relative">
                        <div className="absolute -left-[9px] top-4 w-3.5 h-3.5 rounded-full bg-brand-white border-2 border-brand-accent shadow-sm" />
                        <span className="font-black text-brand-secondary tracking-tight">{slot.time}</span>
                        <span className="text-brand-black font-medium mt-0.5 leading-snug">{slot.activity}</span>
                      </li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </div>

              {/* Inclusions Column */}
              {program.inclusions && program.inclusions.length > 0 && (
                <div>
                  <h4 className="text-xs font-black text-brand-secondary uppercase tracking-widest mb-5 flex items-center gap-3">
                    <span className="w-5 h-0.5 bg-brand-accent inline-block"></span>
                    Included in Fee
                  </h4>
                  <ul className="space-y-4">
                    {program.inclusions.map((inclusion, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-brand-black group/inc">
                        <div className="p-1.5 bg-brand-accent/20 rounded-full shrink-0 mt-0.5 group-hover/inc:bg-brand-accent transition-all duration-300">
                          <svg className="w-3 h-3 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-bold leading-relaxed">{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard card layout for all other programs
  return (
    <div
      className={`relative group bg-brand-white rounded-[2rem] overflow-hidden flex flex-col h-full transition-all duration-500 ease-out hover:-translate-y-2 ${
        isPremium
          ? "border border-brand-accent/60 shadow-card-hover hover:shadow-[0_32px_64px_-16px_rgba(34,38,27,0.2)]"
          : "border border-brand-neutral/30 shadow-card-idle hover:shadow-card-hover"
      }`}
    >
      {/* Header */}
      <div className="relative z-10 p-7 text-center border-b-4 border-brand-accent bg-brand-primary">
        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-brand-white mb-3 group-hover:text-brand-accent transition-colors duration-300">
          {program.name}
        </h3>
        <div className="inline-block bg-brand-accent text-brand-primary px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.15em] shadow-md">
          {program.seats} Seats Available
        </div>
      </div>

      {/* Fee — fixed min-height so cards with/without courtInfo align */}
      <div className={`relative z-10 py-6 px-7 text-center border-b border-brand-neutral/20 min-h-[120px] flex flex-col items-center justify-center ${isPremium ? "bg-brand-neutral/10" : "bg-brand-neutral/5"}`}>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-2xl font-black text-brand-secondary opacity-70">₹</span>
          <span className="text-5xl font-black text-brand-secondary font-mono tracking-tighter">
            <AnimatedCounter value={program.fee} duration={2} />
          </span>
          <span className="text-brand-secondary font-bold uppercase tracking-widest opacity-60 text-xs ml-1">
            /{program.feeFrequency.replace("per ", "")}
          </span>
        </div>
        {/* Always render — empty span preserves height when no courtInfo */}
        <div className="mt-4 h-[34px] flex items-center justify-center">
          {program.courtInfo ? (
            <p className="text-brand-black font-bold text-xs tracking-widest uppercase bg-brand-white px-4 py-2 rounded-xl border border-brand-neutral/30 shadow-sm">
              {program.courtInfo}
            </p>
          ) : <span />}
        </div>
      </div>

      {/* Schedule Content */}
      <div className="relative z-10 p-7 flex-1 flex flex-col justify-between bg-brand-white">
        {/* Tab switcher for multi-batch programs */}
        {hasTabs && (
          <div className="flex gap-2 mb-6 bg-brand-neutral/10 p-1.5 rounded-xl">
            {program.modules!.map((mod, idx) => (
              <button
                key={idx}
                onClick={() => setActiveModule(idx)}
                className={`flex-1 text-xs font-black uppercase tracking-widest py-2 px-3 rounded-lg transition-all duration-300 ${
                  activeModule === idx
                    ? "bg-brand-primary text-brand-accent shadow-sm"
                    : "text-brand-secondary hover:text-brand-primary hover:bg-brand-white/70"
                }`}
              >
                {mod.name || `Batch ${idx + 1}`}
              </button>
            ))}
          </div>
        )}

        {/* Animated module content */}
        {program.modules && (
          <AnimatePresence mode="wait">
            <motion.ul
              key={activeModule}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: EASE_IN_OUT }}
              className="space-y-0 mb-6"
            >
              {program.modules[activeModule]?.slots.map((slot, sIdx) => (
                <li key={sIdx} className="flex flex-col text-sm border-l-[3px] border-brand-accent pl-4 py-2.5 relative last:pb-0">
                  <div className="absolute -left-[9px] top-3.5 w-3.5 h-3.5 rounded-full bg-brand-white border-2 border-brand-accent shadow-sm" />
                  <span className="font-black text-brand-secondary tracking-tight">{slot.time}</span>
                  <span className="text-brand-black font-medium mt-0.5 leading-snug">{slot.activity}</span>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        )}

        {/* Simple Schedule */}
        {program.simpleSchedule && (
          <div className="mb-6">
            <h4 className="text-xs font-black text-brand-secondary uppercase tracking-widest mb-4 flex items-center gap-3">
              <span className="flex-1 h-[3px] bg-gradient-to-r from-transparent via-brand-neutral/20 to-brand-neutral/60 rounded-r-full"></span>
              Batch Timings
              <span className="flex-1 h-[3px] bg-gradient-to-l from-transparent via-brand-neutral/20 to-brand-neutral/60 rounded-l-full"></span>
            </h4>
            <ul className="space-y-0">
              {program.simpleSchedule.map((slot, idx) => (
                <li key={idx} className="flex flex-col md:flex-row justify-between items-start md:items-center py-3.5 border-b border-brand-neutral/10 last:border-0 hover:bg-brand-neutral/5 transition-colors duration-150 px-2 rounded-lg -mx-2">
                  <span className="font-bold text-brand-primary text-sm whitespace-nowrap mb-0.5 md:mb-0">{slot.time}</span>
                  <span className="text-brand-black font-medium text-sm">{slot.activity}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Inclusions (non-featured cards) */}
        {program.inclusions && program.inclusions.length > 0 && (
          <div className="mt-auto pt-6 border-t-2 border-dashed border-brand-neutral/30">
            <h4 className="text-xs font-black text-brand-secondary uppercase tracking-widest mb-4">
              Included in Fee
            </h4>
            <ul className="space-y-3">
              {program.inclusions.map((inclusion, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-brand-black group/inc">
                  <div className="p-1.5 bg-brand-accent/20 rounded-full shrink-0 mt-0.5 group-hover/inc:bg-brand-accent transition-all duration-300">
                    <svg className="w-3 h-3 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-bold leading-relaxed">{inclusion}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
