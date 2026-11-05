import { programs } from "@/data/programs";
import { toTitleCase } from "@/lib/utils";

/** The option every "Book a Free Trial" button pre-selects. */
export const FREE_TRIAL = "Free Trial Session";
export const PRIVATE_LESSONS = "Private Lessons";

/**
 * One list of inquiry types for every enquiry form, so the trial
 * buttons, program cards and forms always agree on the wording.
 */
export const INQUIRY_OPTIONS: string[] = [
  FREE_TRIAL,
  ...programs.map((p) => `${toTitleCase(p.name)} Program`),
  PRIVATE_LESSONS,
  "Pathway Consultation",
  "Something Else",
];

/** Link to the contact form with an inquiry type pre-selected. */
export function contactHref(reason: string): string {
  return `/contact?reason=${encodeURIComponent(reason)}`;
}

/** Program-card label → the matching option in INQUIRY_OPTIONS. */
export function programInquiry(programName: string): string {
  return `${toTitleCase(programName)} Program`;
}
