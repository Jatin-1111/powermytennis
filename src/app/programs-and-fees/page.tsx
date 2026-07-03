import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { programs } from "@/data/programs";
import { ProgramCard } from "@/components/programs/ProgramCard";
import { DiscountCallout } from "@/components/programs/DiscountCallout";
import { MotionSection, MotionItem } from "@/components/shared/MotionSection";

export const metadata = {
  title: "Programs & Fees",
  description:
    "View schedules, seat availability, and fee structures for all PowerMyTennis modules.",
};

export default function ProgramsAndFeesPage() {
  // The flagship program gets a featured hero slot
  const highPerformance = programs.find((p) => p.id === "high-performance")!;
  // Second tier: Pro and Tournament side by side
  const secondTier = programs.filter((p) =>
    ["pro", "tournament"].includes(p.id)
  );
  // Development foundation
  const developmentTiers = programs.filter((p) =>
    ["intermediate", "beginner", "orange"].includes(p.id)
  );

  return (
    <main className="min-h-screen bg-brand-white pb-32">
      {/* Page Header */}
      <div className="bg-brand-primary py-section text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_rgba(198,217,43,0.15)_0%,_transparent_70%)] pointer-events-none" />
        <div className="relative z-10 px-4">
          <MotionSection>
            <MotionItem>
              <span className="inline-block text-brand-accent font-black text-xs uppercase tracking-[0.35em] mb-6">
                Train. Progress. Excel.
              </span>
            </MotionItem>
            <MotionItem>
              <h1 className="text-hero font-black uppercase tracking-tight text-brand-white mb-6">
                Programs & Fees
              </h1>
            </MotionItem>
            <MotionItem>
              <div className="w-24 h-1.5 bg-brand-accent mx-auto rounded-full shadow-lg shadow-brand-accent/20"></div>
            </MotionItem>
          </MotionSection>
        </div>
      </div>

      <Container className="py-16 md:py-24 relative">
        <MotionSection>
          <MotionItem>
            <SectionHeading subtitle="Intense, dynamic & wholistic coaching modules designed for every level.">
              Ace The Court
            </SectionHeading>
          </MotionItem>
          <MotionItem>
            <DiscountCallout />
          </MotionItem>
        </MotionSection>

        {/* ── PERFORMANCE TIER GROUP ───────────────────────────────────── */}
        <div className="mt-20 md:mt-28">
          <MotionSection>
            <MotionItem>
              <div className="flex items-center gap-4 mb-10">
                <div className="flex-1 h-px bg-gradient-to-r from-brand-accent to-transparent"></div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-accent bg-brand-primary px-5 py-2.5 rounded-full shadow-md">
                  Performance Programs
                </span>
                <div className="flex-1 h-px bg-gradient-to-l from-brand-accent to-transparent"></div>
              </div>
            </MotionItem>
          </MotionSection>

          {/* Row 1: High Performance full-width hero */}
          <MotionSection>
            <MotionItem>
              <div className="mb-8 md:mb-10">
                <ProgramCard program={highPerformance} featured />
              </div>
            </MotionItem>
          </MotionSection>

          {/* Row 2: Pro + Tournament side by side — no items-start so they match heights */}
          <MotionSection stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {secondTier.map((program) => (
                <MotionItem key={program.id}>
                  <ProgramCard program={program} />
                </MotionItem>
              ))}
            </div>
          </MotionSection>
        </div>

        {/* ── FOUNDATION TIER GROUP ────────────────────────────────────── */}
        <div className="mt-20 md:mt-28">
          <MotionSection>
            <MotionItem>
              <div className="flex items-center gap-4 mb-10">
                <div className="flex-1 h-px bg-gradient-to-r from-brand-secondary to-transparent"></div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-white bg-brand-secondary px-5 py-2.5 rounded-full shadow-md">
                  Foundation Programs
                </span>
                <div className="flex-1 h-px bg-gradient-to-l from-brand-secondary to-transparent"></div>
              </div>
            </MotionItem>
          </MotionSection>

          <MotionSection stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {developmentTiers.map((program) => (
                <MotionItem key={program.id}>
                  <ProgramCard program={program} />
                </MotionItem>
              ))}
            </div>
          </MotionSection>
        </div>
      </Container>
    </main>
  );
}
