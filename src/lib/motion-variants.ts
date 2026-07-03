import { Variants } from "framer-motion";

// Premium Engineered Easings
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];
export const EASE_IN_OUT = [0.65, 0, 0.35, 1];

// Entrance Animations (Max 600ms)
export const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: EASE_OUT_EXPO,
      duration: 0.6,
    },
  },
};

export const FADE_IN: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: EASE_OUT_EXPO,
      duration: 0.5,
    },
  },
};

// Container Stagger
export const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 100ms stagger
    },
  },
};

// Hover Interactions (Max 400ms)
export const HOVER_LIFT = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow:
      "0 2px 8px -2px rgb(34 38 27 / 0.08), 0 1px 4px -1px rgb(34 38 27 / 0.04)",
  },
  hover: {
    y: -6,
    scale: 1.01,
    boxShadow:
      "0 32px 64px -16px rgb(34 38 27 / 0.25), 0 16px 32px -8px rgb(34 38 27 / 0.15)",
    transition: { type: "tween", ease: EASE_OUT_EXPO, duration: 0.3 },
  },
};
