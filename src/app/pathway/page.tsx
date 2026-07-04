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

        <div className="mt-20 text-center max-w-4xl mx-auto relative overflow-hidden bg-brand-primary p-12 md:p-16 rounded-[2.5rem] border border-brand-neutral/20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] group">
          {/* Geometric Pattern: Upward Progression Slashes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 transition-opacity duration-700 group-hover:opacity-40">
            {/* Massive upward-right triangle (Growth) */}
            <div className="absolute -bottom-[50%] -left-[10%] w-[120%] h-[150%] bg-brand-secondary transform -rotate-[15deg] origin-bottom-left" />
            {/* Sharp intersecting speed-line */}
            <div className="absolute -top-[20%] right-[10%] w-[10%] h-[200%] bg-brand-accent transform rotate-[35deg]" />
            {/* Subtle secondary speed-line */}
            <div className="absolute -bottom-[20%] right-[30%] w-[5%] h-[150%] bg-brand-white transform rotate-[35deg]" />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-brand-white uppercase tracking-tight mb-6 leading-tight">
              Build a smart & <br/>
              <span className="text-brand-accent">realistic plan</span>
            </h3>
            <p className="text-brand-white/80 mb-10 text-lg md:text-xl max-w-xl mx-auto font-medium">
              Our Coaches assess skill levels at the time of registration and
              recommend the best group fitment for each athlete.
            </p>
            <Button
              href="/contact?reason=Pathway+Consultation"
              variant="primary"
              className="px-10 py-4 text-sm tracking-widest shadow-[0_0_20px_rgba(157,242,40,0.3)] hover:shadow-[0_0_30px_rgba(157,242,40,0.5)]"
            >
              Talk to our expert team
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
