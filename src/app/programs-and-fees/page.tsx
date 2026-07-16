import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { programs } from "@/data/programs";
import { ProgramCard } from "@/components/programs/ProgramCard";
import { DiscountCallout } from "@/components/programs/DiscountCallout";
import { MotionSection, MotionItem } from "@/components/shared/MotionSection";

export const metadata = {
  title: "Programs & Fees",
  description:
    "View schedules, seat availability, and fee structures for all PowerMyTennis training programs — from Orange Ball to High Performance.",
  alternates: {
    canonical: "https://powermytennis.com/programs-and-fees",
  },
};

export default function ProgramsAndFeesPage() {
  // The flagship program gets a featured hero slot
  const highPerformance = programs.find((p) => p.id === "high-performance")!;
  // Second tier: Pro and Tournament side by side
  const secondTier = programs.filter((p) =>
    ["pro", "tournament"].includes(p.id),
  );
  // Development foundation
  const developmentTiers = programs.filter((p) =>
    ["intermediate", "beginner", "orange"].includes(p.id),
  );

  return (
    <main className="min-h-screen bg-brand-white pb-32">
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
                  Train. Progress. Excel.
                </span>
                <div className="w-8 h-[2px] bg-brand-accent" />
              </div>
            </MotionItem>
            <MotionItem>
              <h1 className="text-hero font-black uppercase tracking-tight text-brand-white drop-shadow-lg text-balance">
                Programs & Fees
              </h1>
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
        </MotionSection>

        {/* ── PERFORMANCE TIER GROUP ───────────────────────────────────── */}
        <div className="mt-20 md:mt-28">
          <MotionSection>
            <MotionItem>
              <div className="flex items-center gap-4 mb-10">
                <div className="flex-1 h-[3px] bg-gradient-to-r from-transparent via-brand-accent/40 to-brand-accent rounded-r-full"></div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-accent bg-brand-primary px-5 py-2.5 rounded-full shadow-md">
                  Performance Programs
                </span>
                <div className="flex-1 h-[3px] bg-gradient-to-l from-transparent via-brand-accent/40 to-brand-accent rounded-l-full"></div>
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

        {/* ── MID-PAGE ASSESSMENT CTA ──────────────────────────────────── */}
        <div className="mt-16 md:mt-20">
          <MotionSection>
            <MotionItem>
              <div className="bg-brand-neutral/5 border border-brand-neutral/20 rounded-2xl p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-secondary mb-2">
                    Not Sure Which Level?
                  </p>
                  <h3 className="text-h2 font-black text-brand-primary uppercase tracking-tight">
                    Book a Free Assessment
                  </h3>
                  <p className="text-brand-black/55 text-sm font-medium mt-2 max-w-md text-pretty">
                    Our coaches will evaluate your current level and recommend
                    the right program — no commitment required.
                  </p>
                </div>
                <a
                  href="/contact?reason=Program+Inquiry"
                  className="group relative inline-flex items-center gap-3 bg-brand-primary text-brand-white font-black uppercase tracking-widest text-xs px-8 py-4 rounded-xl overflow-hidden shrink-0 transition-all hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-brand-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10">Contact Us</span>
                  <svg
                    className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </MotionItem>
          </MotionSection>
        </div>

        {/* ── FOUNDATION TIER GROUP ────────────────────────────────────── */}
        <div className="mt-20 md:mt-28">
          <MotionSection>
            <MotionItem>
              <div className="flex items-center gap-4 mb-10">
                <div className="flex-1 h-[3px] bg-gradient-to-r from-transparent via-brand-secondary/40 to-brand-secondary rounded-r-full"></div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-white bg-brand-secondary px-5 py-2.5 rounded-full shadow-md">
                  Foundation Programs
                </span>
                <div className="flex-1 h-[3px] bg-gradient-to-l from-transparent via-brand-secondary/40 to-brand-secondary rounded-l-full"></div>
              </div>
            </MotionItem>
          </MotionSection>

          <MotionSection stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              {developmentTiers.map((program) => (
                <MotionItem key={program.id}>
                  <ProgramCard program={program} />
                </MotionItem>
              ))}
            </div>
          </MotionSection>
        </div>

        {/* ── DISCOUNTS & POLICIES ─────────────────────────────────────── */}
        <div className="mt-20 md:mt-28">
          <MotionSection>
            <MotionItem>
              <DiscountCallout />
            </MotionItem>
          </MotionSection>
        </div>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            programs.map((p) => ({
              "@context": "https://schema.org",
              "@type": "Course",
              name: p.name,
              description: `High performance tennis training program: ${p.name}`,
              provider: {
                "@type": "Organization",
                name: "PowerMyTennis High Performance Academy",
                sameAs: "https://powermytennis.com",
              },
            })),
          ),
        }}
      />
    </main>
  );
}
