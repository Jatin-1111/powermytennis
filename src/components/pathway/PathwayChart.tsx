"use client";

import { useState } from "react";
import { pathwayTiers, PathwayTier } from "@/data/pathway";
import { PathwayTierCard } from "./PathwayTierCard";
import { MotionSection, MotionItem } from "@/components/shared/MotionSection";

export function PathwayChart() {
  const [expandedTierId, setExpandedTierId] = useState<string | null>(null);

  const toggleTier = (id: string) => {
    setExpandedTierId((current) => (current === id ? null : id));
  };

  // Brochure has High Performance at the top, Orange at the bottom.
  // Our data is ordered bottom-to-top, so we reverse it for rendering.
  const generalTiers = pathwayTiers
    .filter((t) => t.category === "General Tennis Athlete")
    .reverse();
  const fullTimeTiers = pathwayTiers
    .filter((t) => t.category === "Full-Time Tennis Athlete")
    .reverse();

  const renderTierGroup = (title: string, tiers: PathwayTier[], isOffset: boolean) => (
    // Replaced horizontal stagger with vertical offset for cleaner alignment
    <div className={`flex flex-col md:flex-row gap-4 md:gap-8 mb-12 md:mb-16 relative ${isOffset ? 'md:mt-16' : ''}`}>
      {/* Desktop Category Label */}
      <div className="hidden md:flex md:w-48 shrink-0 items-center justify-center border-r-2 border-dashed border-brand-accent/40 pr-8">
        <h3
          className="text-h3 font-black text-brand-secondary text-center leading-tight uppercase tracking-widest bg-brand-white p-4 shadow-sm border border-brand-neutral/20 rounded-2xl rotate-[-2deg]"
          aria-label={title}
        >
          {title.split(" ").map((word, i) => (
            <span key={i} className="block" aria-hidden="true">
              {word}
            </span>
          ))}
        </h3>
      </div>

      {/* Mobile Category Header */}
      <div className="md:hidden bg-brand-primary py-4 px-4 rounded-xl shadow-md mb-4 mt-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <h3 className="text-sm font-black text-brand-accent text-center uppercase tracking-widest relative z-10">
          {title}
        </h3>
      </div>

      {/* Tier Rows */}
      <MotionSection stagger className="flex-1 flex flex-col gap-5 w-full">
        {tiers.map((tier) => (
          <MotionItem key={tier.id} className="w-full">
            {/* Clean alignment, relying on premium hover states for dynamism rather than jagged edges */}
            <div className="transform transition-transform duration-500 md:hover:-translate-x-2 w-full">
              <PathwayTierCard
                tier={tier}
                isExpanded={expandedTierId === tier.id}
                onToggle={() => toggleTier(tier.id)}
              />
            </div>
          </MotionItem>
        ))}
      </MotionSection>
    </div>
  );

  return (
    <div className="relative flex max-w-5xl mx-auto w-full py-8">
      {/* Y-Axis Arrow (Desktop Only) */}
      <div className="hidden md:flex w-16 shrink-0 relative mr-6 flex-col items-center py-4">
        {/* Arrow head */}
        <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[24px] border-b-brand-accent z-10 drop-shadow-md" />
        {/* Arrow shaft */}
        <div className="w-2 bg-gradient-to-t from-brand-secondary via-brand-secondary to-brand-accent flex-1 rounded-b-full shadow-inner" />

        {/* Rotated Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap bg-brand-white px-4 py-2 rounded-full shadow-md border border-brand-neutral/20 z-20">
          <span className="text-brand-primary font-black uppercase tracking-widest text-sm tracking-[0.25em]">
            Progression
          </span>
        </div>
      </div>

      <div className="flex-1 w-full">
        {renderTierGroup("Full-Time Tennis Athlete", fullTimeTiers, false)}
        {renderTierGroup("General Tennis Athlete", generalTiers, true)}
      </div>
    </div>
  );
}
