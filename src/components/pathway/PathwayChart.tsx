'use client';

import { useState } from 'react';
import { pathwayTiers, PathwayTier } from '@/data/pathway';
import { PathwayTierCard } from './PathwayTierCard';

export function PathwayChart() {
  const [expandedTierId, setExpandedTierId] = useState<string | null>(null);

  const toggleTier = (id: string) => {
    setExpandedTierId(current => current === id ? null : id);
  };

  // Brochure has High Performance at the top, Orange at the bottom.
  // Our data is ordered bottom-to-top, so we reverse it for rendering.
  const generalTiers = pathwayTiers.filter(t => t.category === 'General Tennis Athlete').reverse();
  const fullTimeTiers = pathwayTiers.filter(t => t.category === 'Full-Time Tennis Athlete').reverse();

  const renderTierGroup = (title: string, tiers: PathwayTier[]) => (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6 md:mb-10 relative">
      {/* Desktop Category Label */}
      <div className="hidden md:flex md:w-48 shrink-0 items-center justify-center border-r-2 border-dashed border-brand-neutral/40 pr-8">
        <h3 className="text-xl font-bold text-brand-secondary text-center leading-tight">
          {title.split(' ').map((word, i) => (
            <span key={i} className="block">{word}</span>
          ))}
        </h3>
      </div>
      
      {/* Mobile Category Header */}
      <div className="md:hidden bg-brand-neutral/20 py-3 px-4 rounded-xl border border-brand-neutral/30 mb-2 mt-4 shadow-sm">
        <h3 className="text-sm font-black text-brand-secondary text-center uppercase tracking-widest">{title}</h3>
      </div>
      
      {/* Tier Rows */}
      <div className="flex-1 flex flex-col gap-4">
        {tiers.map(tier => (
          <PathwayTierCard 
            key={tier.id}
            tier={tier}
            isExpanded={expandedTierId === tier.id}
            onToggle={() => toggleTier(tier.id)}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative flex max-w-5xl mx-auto w-full">
      {/* Y-Axis Arrow (Desktop Only) */}
      <div className="hidden lg:flex w-16 shrink-0 relative mr-4 flex-col items-center py-4">
        {/* Arrow head */}
        <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-brand-secondary z-10" />
        {/* Arrow shaft */}
        <div className="w-1.5 bg-brand-secondary flex-1 rounded-b-full shadow-sm" />
        
        {/* Rotated Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap">
          <span className="text-brand-secondary font-black uppercase tracking-widest text-sm opacity-90 tracking-[0.2em]">
            Coaching Progression
          </span>
        </div>
      </div>

      <div className="flex-1 w-full">
        {renderTierGroup('Full-Time Tennis Athlete', fullTimeTiers)}
        {renderTierGroup('General Tennis Athlete', generalTiers)}
      </div>
    </div>
  );
}
