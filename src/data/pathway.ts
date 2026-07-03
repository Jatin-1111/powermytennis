export type ModuleColorId =
  | "orange"
  | "peach"
  | "purple"
  | "red"
  | "cyan"
  | "grey"
  | "green"
  | "yellow-green"
  | "dark-green"
  | "pink";

export interface PathwayModule {
  id: ModuleColorId;
  name: string;
}

export const pathwayModules: Record<ModuleColorId, PathwayModule> = {
  orange: { id: "orange", name: "Basics & Technical Correction" },
  peach: { id: "peach", name: "Medium Pace Rallies & Accuracy" },
  purple: { id: "purple", name: "Consistency & Power" },
  red: { id: "red", name: "High-Intensity Hitting" },
  cyan: { id: "cyan", name: "Tactical Match-Play" },
  grey: { id: "grey", name: "Tournament Calendar" },
  green: { id: "green", name: "Functional Fitness" },
  "yellow-green": { id: "yellow-green", name: "Tennis-Specific Fitness" },
  "dark-green": { id: "dark-green", name: "Yoga & Meditation" },
  pink: { id: "pink", name: "Monthly Performance Report" },
};

export interface PathwayTier {
  id: string;
  name: string;
  hours: string;
  ageQualifier: string;
  category: "General Tennis Athlete" | "Full-Time Tennis Athlete";
  modules: ModuleColorId[];
}

export const pathwayTiers: PathwayTier[] = [
  {
    id: "orange-tier",
    name: "Orange",
    hours: "1 hr",
    ageQualifier: "3-8 years",
    category: "General Tennis Athlete",
    modules: ["orange"],
  },
  {
    id: "beginner-tier",
    name: "Beginner",
    hours: "1 hr",
    ageQualifier: "> 8 years",
    category: "General Tennis Athlete",
    modules: ["orange"],
  },
  {
    id: "intermediate-tier",
    name: "Intermediate",
    hours: "1 hr",
    ageQualifier: "8-11 years",
    category: "General Tennis Athlete",
    modules: ["peach"],
  },
  {
    id: "tournament-tier",
    name: "Tournament",
    hours: "1.5 hr",
    ageQualifier: "> 10 Years",
    category: "General Tennis Athlete",
    modules: ["purple", "grey", "cyan"],
  },
  {
    id: "pro-tier",
    name: "Pro",
    hours: "2 hr",
    ageQualifier: "skill level",
    category: "Full-Time Tennis Athlete",
    modules: ["green", "purple", "red", "grey", "cyan"],
  },
  {
    id: "high-performance-tier",
    name: "High Performance",
    hours: "5 hr",
    ageQualifier: "Four sub-groups basis skill level",
    category: "Full-Time Tennis Athlete",
    modules: ["red", "cyan", "grey", "yellow-green", "green", "dark-green"],
  },
];
