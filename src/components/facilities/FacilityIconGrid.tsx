"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion-variants";

const FACILITIES = [
  {
    id: "clay",
    label: "Tournament Clay Courts",
    stat: "4",
    unit: "Courts",
    description: "ITF-standard red clay surface for elite training and match play",
    hero: true,
  },
  {
    id: "gymnasium",
    label: "Gymnasium",
    stat: "600",
    unit: "sq ft",
    description: "Strength & conditioning equipped with sports science tools",
    hero: false,
  },
  {
    id: "mini",
    label: "Mini Clay Courts",
    stat: "2",
    unit: "Courts",
    description: "Dedicated development courts for juniors & beginners",
    hero: false,
  },
  {
    id: "shower",
    label: "Shower Room",
    stat: null,
    unit: null,
    description: "Private, fully equipped changing & shower facilities",
    hero: false,
  },
  {
    id: "pantry",
    label: "Pantry",
    stat: null,
    unit: null,
    description: "Hydration station & nutrition support between sessions",
    hero: false,
  },
];

function Card({
  facility,
  index,
  className = "",
}: {
  facility: (typeof FACILITIES)[0];
  index: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: EASE_OUT_EXPO, delay: index * 0.06 }}
      className={`group relative bg-brand-primary rounded-2xl overflow-hidden flex flex-col
        transition-all duration-400 hover:-translate-y-1
        border border-brand-white/10 hover:border-brand-accent/50
        shadow-[0_4px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]
        ${className}`}
    >
      {/* Subtle top accent line — becomes accent on hover */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-brand-white/10 group-hover:bg-brand-accent transition-colors duration-400" />

      <div className="flex flex-col flex-1 p-6 md:p-7">
        {/* Label + description at top */}
        <div className="mb-auto">
          <h3 className={`font-black uppercase text-brand-white tracking-tight leading-tight mb-2
            ${facility.hero ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}>
            {facility.label}
          </h3>
          <p className="text-brand-white/45 text-sm font-medium leading-relaxed group-hover:text-brand-white/65 transition-colors duration-300">
            {facility.description}
          </p>
        </div>

        {/* Stat at bottom */}
        {facility.stat && (
          <div className="mt-6 flex items-baseline gap-2">
            <span className={`font-black text-brand-white leading-none tracking-tighter
              ${facility.hero ? "text-7xl md:text-8xl" : "text-5xl md:text-6xl"}`}>
              {facility.stat}
            </span>
            <span className="text-brand-accent font-black text-sm uppercase tracking-widest">
              {facility.unit}
            </span>
          </div>
        )}

        {/* No-stat: accent dash */}
        {!facility.stat && (
          <div className="mt-6">
            <div className="w-6 h-[3px] bg-brand-accent rounded-full group-hover:w-10 transition-all duration-300" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function FacilityIconGrid() {
  const [clay, gym, mini, shower, pantry] = FACILITIES;

  return (
    // Explicit grid — no auto-rows to avoid overflow
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {/* Row 1: Clay hero (tall, 2 rows) | Gymnasium stacked on top | Mini beneath */}
      {/* Clay: col 1-2, row 1-2 */}
      <div className="col-span-2 md:col-span-1 md:row-span-2" style={{ minHeight: "420px" }}>
        <Card facility={clay} index={0} className="h-full" />
      </div>

      {/* Gymnasium: col 2, row 1 */}
      <div className="col-span-1 md:col-span-2">
        <Card facility={gym} index={1} className="h-full min-h-[190px]" />
      </div>

      {/* Mini Courts: col 3, row 2 */}
      <div className="col-span-1 md:col-span-1">
        <Card facility={mini} index={2} className="h-full min-h-[190px]" />
      </div>

      {/* Row 2 right col: mini (already placed) | we put shower here */}
      <div className="col-span-1 md:col-span-1">
        <Card facility={shower} index={3} className="h-full min-h-[190px]" />
      </div>

      {/* Row 3: Pantry full width */}
      <div className="col-span-2 md:col-span-3">
        <Card facility={pantry} index={4} className="h-full min-h-[120px]" />
      </div>
    </div>
  );
}
