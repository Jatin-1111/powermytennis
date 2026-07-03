import { Variants } from 'framer-motion';

// Entrance Animations (Max 600ms)
export const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: 'tween', 
      ease: 'easeOut', 
      duration: 0.5 
    } 
  }
};

export const FADE_IN: Variants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { 
      type: 'tween', 
      ease: 'easeOut', 
      duration: 0.4 
    } 
  }
};

// Container Stagger
export const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08 // ~80ms stagger
    }
  }
};

// Hover Interactions (Max 400ms)
export const HOVER_LIFT = {
  rest: { y: 0, scale: 1, boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' },
  hover: { 
    y: -4, 
    scale: 1.02, 
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    transition: { type: 'tween', ease: 'easeOut', duration: 0.2 } // 200ms
  }
};
