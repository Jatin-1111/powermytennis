export interface ScheduleSlot {
  time: string;
  activity: string;
}

export interface ModuleOption {
  name?: string;
  slots: ScheduleSlot[];
}

export interface Program {
  id: string;
  name: string;
  seats: number;
  fee: number;
  feeFrequency: string;
  courtInfo?: string;
  moduleSelectionText?: string;
  modules?: ModuleOption[];
  simpleSchedule?: ScheduleSlot[];
  inclusions?: string[];
}

export interface PrivateLessonFee {
  role: string;
  fee: number;
  duration: string;
}

export interface PrivateLessonsInfo {
  fees: PrivateLessonFee[];
  matchDays: string;
  offDay: string;
}

export interface PolicyInfo {
  siblingDiscountPercentage: number;
  registrationFee: {
    amount: number;
    applicableGroups: string[];
    note: string;
  };
  depositRule: string;
}

export const programs: Program[] = [
  {
    id: "high-performance",
    name: "HIGH PERFORMANCE",
    seats: 18,
    fee: 22000,
    feeFrequency: "per month",
    moduleSelectionText: "PLAYER NEEDS TO PICK ONE OF THE TWO MODULES",
    modules: [
      {
        name: "MODULE 1",
        slots: [
          { time: "6:30 AM", activity: "DYNAMIC WARM UP" },
          { time: "7:00 AM", activity: "DRILLS, RALLIES & POINTS" },
          { time: "9:30 AM", activity: "BREAK & REST IN GYM" },
          { time: "10:00 AM", activity: "FITNESS SESSION" },
          { time: "11:00 AM", activity: "END OF SESSION" },
        ],
      },
      {
        name: "MODULE 2",
        slots: [
          { time: "6:30 AM", activity: "DYNAMIC WARM UP" },
          { time: "7:00 AM", activity: "DRILLS, RALLIES & POINTS" },
          { time: "8:30 AM", activity: "END OF SESSION" },
          { time: "5:00 PM", activity: "DRILLS, RALLIES & POINTS" },
          { time: "6:00 PM", activity: "FITNESS SESSION" },
          { time: "7:00 PM", activity: "END OF SESSION" },
        ],
      },
    ],
    inclusions: [
      "Monthly Parent-Coach Meeting",
      "Monthly Progress Report",
      "Detailed 3-Month Coaching Plan",
      "Quarterly Fitness Screening Report",
      "Co-planned Tournament Calendar",
    ],
  },
  {
    id: "pro",
    name: "PRO",
    seats: 10,
    fee: 12500,
    feeFrequency: "per month",
    moduleSelectionText: "PLAYER NEEDS TO PICK ONE OF THE TWO MODULES",
    modules: [
      {
        name: "BATCH 1",
        slots: [
          { time: "6:30 AM", activity: "DYNAMIC WARM UP" },
          { time: "7:00 AM", activity: "DRILLS, RALLIES & POINTS" },
          { time: "8:30 AM", activity: "END OF SESSION" },
        ],
      },
      {
        name: "BATCH 2",
        slots: [
          { time: "7:30 AM", activity: "DYNAMIC WARM UP" },
          { time: "8:00 AM", activity: "DRILLS, RALLIES & POINTS" },
          { time: "9:30 AM", activity: "END OF SESSION" },
        ],
      },
    ],
  },
  {
    id: "tournament",
    name: "TOURNAMENT",
    seats: 10,
    fee: 12500,
    feeFrequency: "per month",
    simpleSchedule: [
      { time: "4:00 PM TO 5:30 PM", activity: "FIRST BATCH" },
      { time: "5:30 PM TO 7:00 PM", activity: "SECOND BATCH" },
    ],
  },
  {
    id: "intermediate",
    name: "INTERMEDIATE",
    seats: 18,
    fee: 8000,
    feeFrequency: "per month",
    simpleSchedule: [
      { time: "4:00 PM", activity: "FIRST BATCH" },
      { time: "5:00 PM", activity: "SECOND BATCH" },
      { time: "6:00 PM", activity: "THIRD BATCH" },
    ],
  },
  {
    id: "beginner",
    name: "BEGINNER",
    seats: 18,
    fee: 6000,
    feeFrequency: "per month",
    courtInfo: "REGULAR COURTS (FIVE DAYS A WEEK)",
    simpleSchedule: [
      { time: "4:00 PM", activity: "FIRST BATCH" },
      { time: "5:00 PM", activity: "SECOND BATCH" },
      { time: "6:00 PM", activity: "THIRD BATCH" },
    ],
  },
  {
    id: "orange",
    name: "ORANGE",
    seats: 42,
    fee: 4500,
    feeFrequency: "per month",
    courtInfo: "MINI COURTS (FIVE DAYS A WEEK)",
    simpleSchedule: [
      { time: "4:00 PM", activity: "FIRST & SECOND BATCH" },
      { time: "5:00 PM", activity: "THIRD & FOURTH BATCH" },
      { time: "6:00 PM", activity: "FIFTH & SIXTH BATCH" },
    ],
  },
];

export const privateLessons: PrivateLessonsInfo = {
  fees: [
    { role: "CHIEF COACH", fee: 2500, duration: "per 1.5 hour" },
    { role: "SENIOR COACH", fee: 1250, duration: "per hour" },
    { role: "ASSTT. COACH", fee: 750, duration: "per hour" },
    { role: "FITNESS COACH", fee: 750, duration: "per hour" },
    { role: "HIRE A HITTER", fee: 1000, duration: "per hour" },
  ],
  matchDays: "TWO DAYS IN A WEEK",
  offDay: "MONDAY",
};

export const policies: PolicyInfo = {
  siblingDiscountPercentage: 20,
  registrationFee: {
    amount: 1000,
    applicableGroups: ["Tournament", "Intermediate", "Beginner", "Orange"],
    note: "one-time, non-refundable",
  },
  depositRule: "Quarterly fee deposit except First Month",
};
