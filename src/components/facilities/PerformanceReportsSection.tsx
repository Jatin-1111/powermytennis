"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion-variants";

const objective = [
  { label: "Radar Tracking", detail: "Real-time ball trajectory & spin data" },
  { label: "Serve Speed Analysis", detail: "Radar-measured velocity per delivery" },
  { label: "Fitness Screening", detail: "VO₂ max, agility & strength benchmarks" },
];

const subjective = [
  { label: "Attitude & Behavior", detail: "On-court demeanor and coachability" },
  { label: "Focus & Concentration", detail: "Mental engagement across session duration" },
  { label: "Mental Strength", detail: "Resilience under competitive pressure" },
  { label: "Tactical Play", detail: "Match pattern recognition & execution" },
];

function ReportPanel({
  title,
  subtitle,
  items,
  dotColor,
  index,
}: {
  title: string;
  subtitle: string;
  items: { label: string; detail: string }[];
  dotColor: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: EASE_OUT_EXPO, delay: index * 0.1 }}
      className="bg-brand-primary rounded-2xl overflow-hidden border border-brand-white/10"
    >
      {/* Panel header */}
      <div className="px-7 pt-7 pb-5 border-b border-brand-white/10">
        <div className="text-xs font-black text-brand-white/30 uppercase tracking-[0.25em] mb-2">
          {subtitle}
        </div>
        <h3 className="text-h3 font-black uppercase text-brand-white tracking-tight">
          {title}
        </h3>
      </div>

      {/* Items */}
      <ul>
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.1 + i * 0.07 }}
            className="group/item flex items-start gap-4 px-7 py-4 border-b border-brand-white/10 last:border-0
              hover:bg-brand-white/5 transition-colors duration-200 cursor-default"
          >
            <div
              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
              style={{ backgroundColor: dotColor, boxShadow: `0 0 8px ${dotColor}` }}
            />
            <div>
              <div className="text-base font-bold text-brand-white leading-snug group-hover/item:text-brand-accent transition-colors duration-200">
                {item.label}
              </div>
              <div className="text-xs font-medium text-brand-white/35 mt-0.5 leading-relaxed">
                {item.detail}
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export function PerformanceReportsSection() {
  return (
    <div className="mt-20">
      {/* Divider + label */}
      <div className="flex items-center gap-5 mb-10">
        <div className="flex-1 h-[3px] bg-gradient-to-r from-transparent via-brand-neutral/20 to-brand-neutral/60 rounded-r-full" />
        <span className="text-xs font-black uppercase tracking-[0.28em] text-brand-secondary">
          Athlete Intelligence
        </span>
        <div className="flex-1 h-[3px] bg-gradient-to-l from-transparent via-brand-neutral/20 to-brand-neutral/60 rounded-l-full" />
      </div>

      {/* Heading block */}
      <div className="mb-10">
        <h2 className="text-h2 font-black uppercase text-brand-primary tracking-tight leading-tight">
          Performance Reports
        </h2>
        <p className="text-brand-black/55 font-medium mt-3 max-w-lg leading-relaxed text-pretty">
          High Performance athletes receive a monthly progress report and quarterly fitness screening — covering both measurable and qualitative performance metrics.
        </p>
      </div>

      {/* Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <ReportPanel
          title="Objective"
          subtitle="Data-driven metrics"
          items={objective}
          dotColor="#C6D92B"
          index={0}
        />
        <ReportPanel
          title="Subjective"
          subtitle="Coach-assessed qualities"
          items={subjective}
          dotColor="#F2994A"
          index={1}
        />
      </div>
    </div>
  );
}
