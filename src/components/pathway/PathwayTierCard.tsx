'use client';

import { PathwayTier } from '@/data/pathway';
import { PathwayModuleTag } from './PathwayModuleTag';
import { PathwayModuleDetail } from './PathwayModuleDetail';

interface PathwayTierCardProps {
  tier: PathwayTier;
  isExpanded: boolean;
  onToggle: () => void;
}

export function PathwayTierCard({ tier, isExpanded, onToggle }: PathwayTierCardProps) {
  return (
    <div className="border border-brand-neutral/30 rounded-2xl bg-brand-white shadow-sm overflow-hidden transition-all duration-200 hover:border-brand-accent/50 focus-within:ring-2 focus-within:ring-brand-accent focus-within:border-brand-accent">
      <button 
        onClick={onToggle}
        aria-expanded={isExpanded}
        className="w-full px-6 py-5 flex flex-col md:flex-row md:items-center justify-between text-left focus:outline-none"
      >
        <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-4 md:mb-0">
          <h3 className="text-xl md:text-2xl font-black text-brand-primary uppercase tracking-tight">
            {tier.name} <span className="text-brand-neutral text-lg md:text-xl font-bold lowercase tracking-normal">({tier.hours})</span>
          </h3>
          <span className="text-brand-secondary font-semibold text-sm md:text-base">
            {tier.ageQualifier}
          </span>
        </div>
        
        <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
          <div className="flex -space-x-2">
            {tier.modules.map((modId, idx) => (
              <PathwayModuleTag 
                key={`${tier.id}-${modId}-${idx}`} 
                colorId={modId} 
                className="border-2 border-brand-white shadow-sm"
              />
            ))}
          </div>
          
          <div className="text-brand-primary flex-shrink-0 transition-transform duration-300" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>
      
      {/* Expandable content area */}
      <div 
        className={`px-6 transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100 pb-5' : 'max-h-0 opacity-0 overflow-hidden'}`}
        aria-hidden={!isExpanded}
      >
        <PathwayModuleDetail moduleIds={tier.modules} />
      </div>
    </div>
  );
}
