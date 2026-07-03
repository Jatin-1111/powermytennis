import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FacilityIconGrid } from "@/components/facilities/FacilityIconGrid";
import { PerformanceReportsSection } from "@/components/facilities/PerformanceReportsSection";

export const metadata = {
  title: "Facilities",
  description:
    "Explore our state-of-the-art tennis infrastructure and comprehensive performance reporting system.",
};

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-brand-white pb-24">
      {/* Page Header */}
      <div className="bg-brand-primary py-section text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-white via-brand-primary to-brand-primary" />
        <div className="relative z-10 px-4">
          <h1 className="text-hero font-black uppercase tracking-tight text-brand-white mb-6">
            Facilities
          </h1>
          <div className="w-24 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
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
