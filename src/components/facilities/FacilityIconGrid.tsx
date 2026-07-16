"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion-variants";

import { ShowerHead, Coffee } from "lucide-react";

const FACILITIES = [
  {
    id: "clay",
    label: "Professional Clay Courts",
    stat: "4",
    unit: "Courts",
    icon: null,
    description:
      "ITF-standard red clay surface for elite training and match play",
    hero: true,
  },
  {
    id: "gymnasium",
    label: "Gymnasium",
    stat: "600",
    unit: "sq ft",
    icon: null,
    description: "Strength & conditioning equipped with sports science tools",
    hero: false,
  },
  {
    id: "mini",
    label: "Mini Clay Courts",
    stat: "2",
    unit: "Courts",
    icon: null,
    description: "Dedicated development courts for juniors & beginners",
    hero: false,
  },
  {
    id: "shower",
    label: "Shower Room",
    stat: null,
    unit: null,
    icon: ShowerHead,
    description: "Private, fully equipped changing & shower facilities",
    hero: false,
  },
  {
    id: "pantry",
    label: "Pantry",
    stat: null,
    unit: null,
    icon: Coffee,
    description: "Hydration station & nutrition support between sessions",
    hero: false,
  },
];

function Card({
  facility,
  index,
  className = "",
  bgImage,
}: {
  facility: (typeof FACILITIES)[0];
  index: number;
  className?: string;
  bgImage?: string;
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
      {/* Optional background photo */}
      {bgImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center z-0 scale-105 group-hover:scale-100 transition-transform duration-700"
            style={{ backgroundImage: `url("${bgImage}")` }}
          />
          <div className="absolute inset-0 bg-brand-primary/80 group-hover:bg-brand-primary/70 transition-colors duration-500 z-0" />
        </>
      )}

      {/* Subtle top accent line — becomes accent on hover */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-brand-white/10 group-hover:bg-brand-accent transition-colors duration-400 z-10" />

      <div className="flex flex-col flex-1 p-6 md:p-7 relative z-10">
        {/* Label + description at top */}
        <div className="mb-auto">
          <h3
            className={`font-black uppercase text-brand-white tracking-tight leading-tight mb-2
            ${facility.hero ? "text-h2" : "text-h3"}`}
          >
            {facility.label}
          </h3>
          <p className="text-brand-white/45 text-sm font-medium leading-relaxed group-hover:text-brand-white/65 transition-colors duration-300">
            {facility.description}
          </p>
        </div>

        {/* Stat at bottom */}
        {facility.stat && (
          <div className="mt-6 flex items-baseline gap-2">
            <span
              className={`font-black text-brand-white leading-none tracking-tighter
              ${facility.hero ? "text-h1" : "text-h2"}`}
            >
              {facility.stat}
            </span>
            <span className="text-brand-accent font-black text-sm uppercase tracking-widest">
              {facility.unit}
            </span>
          </div>
        )}

        {/* No-stat: Premium Icon */}
        {!facility.stat && facility.icon && (
          <div className="mt-8 text-brand-white/20 group-hover:text-brand-accent transition-colors duration-500">
            <facility.icon
              className="w-12 h-12 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(198,217,43,0)] group-hover:drop-shadow-[0_0_15px_rgba(198,217,43,0.5)]"
              strokeWidth={1.5}
            />
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
      {/* Tall Hero Column (Left) */}
      <div
        className="col-span-2 md:col-span-1 md:row-span-2"
        style={{ minHeight: "420px" }}
      >
        <Card
          facility={clay}
          index={0}
          className="h-full"
          bgImage="/powermytennis-assets/courts-overview.jpeg"
        />
      </div>

      {/* Middle Column Top */}
      <div className="col-span-1 md:col-span-1">
        <Card facility={gym} index={1} className="h-full min-h-[190px]" />
      </div>

      {/* Right Column Top */}
      <div className="col-span-1 md:col-span-1">
        <Card facility={mini} index={2} className="h-full min-h-[190px]" />
      </div>

      {/* Middle Column Bottom */}
      <div className="col-span-1 md:col-span-1">
        <Card facility={shower} index={3} className="h-full min-h-[190px]" />
      </div>

      {/* Right Column Bottom */}
      <div className="col-span-1 md:col-span-1">
        <Card facility={pantry} index={4} className="h-full min-h-[190px]" />
      </div>
    </div>
  );
}
