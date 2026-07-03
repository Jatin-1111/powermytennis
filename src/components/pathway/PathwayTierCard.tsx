"use client";

import { PathwayTier } from "@/data/pathway";
import { PathwayModuleTag } from "./PathwayModuleTag";
import { PathwayModuleDetail } from "./PathwayModuleDetail";
import { motion, AnimatePresence } from "framer-motion";
import { EASE_IN_OUT, EASE_OUT_EXPO } from "@/lib/motion-variants";

interface PathwayTierCardProps {
  tier: PathwayTier;
  isExpanded: boolean;
  onToggle: () => void;
}

const tagContainerVariants = {
  idle: {},
  hover: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const tagVariants = {
  idle: { x: 0, y: 0, scale: 1 },
  hover: { 
    x: [0, -4, 0],
    scale: 1.05,
    transition: { 
      duration: 0.4, 
      ease: EASE_OUT_EXPO 
    }
  },
};

export function PathwayTierCard({
  tier,
  isExpanded,
  onToggle,
}: PathwayTierCardProps) {
  return (
    <motion.div 
      initial="idle"
      whileHover="hover"
      className="border border-brand-neutral/20 rounded-2xl bg-brand-white shadow-card-idle overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:border-brand-accent/50 focus-within:ring-2 focus-within:ring-brand-accent focus-within:border-brand-accent group"
    >
      <button
        onClick={onToggle}
        aria-expanded={isExpanded}
        className="w-full px-card py-6 flex flex-col md:flex-row md:items-center justify-between text-left focus:outline-none"
      >
        <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-4 md:mb-0">
          <h3 className="text-h3 md:text-h2 font-black text-brand-primary uppercase tracking-tight group-hover:text-brand-secondary transition-colors duration-300">
            {tier.name}{" "}
            <span className="text-brand-secondary text-body-lg md:text-xl font-bold lowercase tracking-normal opacity-80 group-hover:opacity-100 transition-opacity">
              ({tier.hours})
            </span>
          </h3>
          <span className="text-brand-secondary font-semibold text-sm md:text-body">
            {tier.ageQualifier}
          </span>
        </div>

        <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
          <motion.div 
            variants={tagContainerVariants}
            className="flex -space-x-2"
          >
            {tier.modules.map((modId, idx) => (
              <motion.div key={`${tier.id}-${modId}-${idx}`} variants={tagVariants}>
                <PathwayModuleTag
                  colorId={modId}
                  className="border-2 border-brand-white shadow-sm"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ type: "tween", duration: 0.4, ease: EASE_IN_OUT }}
            className="text-brand-primary flex-shrink-0 bg-brand-neutral/10 p-2 rounded-full group-hover:bg-brand-accent group-hover:text-brand-primary transition-colors duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 9l-7 7-7-7"
              />
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
            transition={{ duration: 0.5, ease: EASE_IN_OUT }}
            className="overflow-hidden bg-brand-neutral/5"
          >
            <div className="px-card pb-6 pt-2 border-t border-brand-neutral/10">
              <PathwayModuleDetail moduleIds={tier.modules} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
