import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { PathwayChart } from "@/components/pathway/PathwayChart";
import { MotionSection, MotionItem } from "@/components/shared/MotionSection";

export const metadata = {
  title: "Coaching Pathway",
  description:
    "Explore the PowerMyTennis skill-based coaching groups from Orange to High Performance.",
};

export default function PathwayPage() {
  return (
    <main className="min-h-screen bg-brand-white pb-24">
      {/* Page Header */}
      <div className="bg-brand-primary py-section text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-white via-brand-primary to-brand-primary" />
        <div className="relative z-10 px-4">
          <MotionSection>
            <MotionItem>
              <h1 className="text-hero font-black uppercase tracking-tight text-brand-white mb-6">
                Coaching Pathway
              </h1>
            </MotionItem>
            <MotionItem>
              <div className="w-24 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
            </MotionItem>
          </MotionSection>
        </div>
      </div>

      <Container className="py-16 md:py-24">
        <SectionHeading subtitle="Select a group to see the included skill modules.">
          Interactive Coaching Progression
        </SectionHeading>

        <PathwayChart />

        <div className="mt-20 text-center max-w-2xl mx-auto bg-brand-neutral/10 p-10 rounded-3xl border border-brand-neutral/20 shadow-md">
          <h3 className="text-2xl font-black text-brand-primary uppercase tracking-tight mb-4">
            Build a smart and realistic plan
          </h3>
          <p className="text-brand-black mb-8 text-lg">
            Our Coaches assess skill levels at the time of registration and
            recommend the best group fitment for each athlete.
          </p>
          <Button
            href="/contact?reason=Pathway+Consultation"
            variant="primary"
            className="px-10"
          >
            Talk to our expert team
          </Button>
        </div>
      </Container>
    </main>
  );
}
