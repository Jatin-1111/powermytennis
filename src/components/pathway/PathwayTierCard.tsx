'use client';

import { PathwayTier } from '@/data/pathway';
import { PathwayModuleTag } from './PathwayModuleTag';
import { PathwayModuleDetail } from './PathwayModuleDetail';
import { motion, AnimatePresence } from 'framer-motion';

interface PathwayTierCardProps {
  tier: PathwayTier;
  isExpanded: boolean;
  onToggle: () => void;
}

export function PathwayTierCard({ tier, isExpanded, onToggle }: PathwayTierCardProps) {
  return (
    <div className="border border-brand-neutral/20 rounded-2xl bg-brand-white shadow-card-idle overflow-hidden transition-all duration-200 hover:shadow-card-hover hover:border-brand-accent/50 focus-within:ring-2 focus-within:ring-brand-accent focus-within:border-brand-accent">
      <button 
        onClick={onToggle}
        aria-expanded={isExpanded}
        className="w-full px-card py-6 flex flex-col md:flex-row md:items-center justify-between text-left focus:outline-none"
      >
        <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-4 md:mb-0">
          <h3 className="text-h3 md:text-h2 font-black text-brand-primary uppercase tracking-tight">
            {tier.name} <span className="text-brand-secondary text-body-lg md:text-xl font-bold lowercase tracking-normal">({tier.hours})</span>
          </h3>
          <span className="text-brand-secondary font-semibold text-sm md:text-body">
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
          
          <motion.div 
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="text-brand-primary flex-shrink-0"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </button>
      
      {/* Expandable content area */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-card pb-6 pt-2">
              <PathwayModuleDetail moduleIds={tier.modules} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
