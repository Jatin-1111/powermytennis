import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FacilityIconGrid } from "@/components/facilities/FacilityIconGrid";
import { PerformanceReportsSection } from "@/components/facilities/PerformanceReportsSection";
import { MotionSection, MotionItem } from "@/components/shared/MotionSection";

export const metadata = {
  title: "Facilities",
  description:
    "Explore our state-of-the-art tennis infrastructure and comprehensive performance reporting system.",
};

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-brand-white pb-24">
      {/* Dark Premium Header */}
      <div className="bg-brand-primary py-32 text-center relative overflow-hidden border-b border-brand-accent/20">
        <div 
          className="absolute inset-0 overflow-hidden pointer-events-none opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(198, 217, 43, 0.4) 40px, rgba(198, 217, 43, 0.4) 42px)`
          }}
        />
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(10,12,13,1)] pointer-events-none" />
        
        <div className="relative z-10 px-4">
          <MotionSection>
            <MotionItem>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-8 h-[2px] bg-brand-accent" />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-white/70">
                  Infrastructure
                </span>
                <div className="w-8 h-[2px] bg-brand-accent" />
              </div>
            </MotionItem>
            <MotionItem>
              <h1 className="text-hero font-black uppercase tracking-tight text-brand-white drop-shadow-lg">
                Facilities
              </h1>
            </MotionItem>
          </MotionSection>
        </div>
      </div>

      <Container className="py-16 md:py-24 max-w-6xl">
        <SectionHeading subtitle="Experience top-tier training on our premium surfaces equipped with modern amenities.">
          State-Of-The-Art Infrastructure
        </SectionHeading>

        <div className="mt-12">
          <FacilityIconGrid />
        </div>

        <PerformanceReportsSection />
      </Container>
    </main>
  );
}
