import { AcademyStory } from "@/components/about/AcademyStory";
import { LocationAccessibility } from "@/components/about/LocationAccessibility";
import { MotionSection, MotionItem } from "@/components/shared/MotionSection";

export const metadata = {
  title: "About The Academy",
  description:
    "Learn about the vision, coaching philosophy, and location of PowerMyTennis High Performance Academy in New Chandigarh.",
  alternates: {
    canonical: "https://powermytennis.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-white">
      {/* Dark Premium Header */}
      <div className="bg-brand-primary py-32 text-center relative overflow-hidden border-b border-brand-accent/20">
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(198, 217, 43, 0.4) 40px, rgba(198, 217, 43, 0.4) 42px)`,
          }}
        />
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(10,12,13,1)] pointer-events-none" />

        <div className="relative z-10 px-4">
          <MotionSection>
            <MotionItem>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-8 h-[2px] bg-brand-accent" />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-white/70">
                  Our Story
                </span>
                <div className="w-8 h-[2px] bg-brand-accent" />
              </div>
            </MotionItem>
            <MotionItem>
              <h1 className="text-hero font-black uppercase tracking-tight text-brand-white drop-shadow-lg text-balance">
                About The Academy
              </h1>
            </MotionItem>
          </MotionSection>
        </div>
      </div>

      <AcademyStory />
      <LocationAccessibility />
    </main>
  );
}
