import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { programs } from "@/data/programs";
import { ProgramCard } from "@/components/programs/ProgramCard";
import { DiscountCallout } from "@/components/programs/DiscountCallout";
import { MotionSection, MotionItem } from "@/components/shared/MotionSection";
import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/JsonLd";
import {
  SITE_URL,
  breadcrumbJsonLd,
  organizationRef,
  pageMetadata,
} from "@/lib/seo";

import { toTitleCase } from "@/lib/utils";
import { FREE_TRIAL, contactHref } from "@/lib/inquiry";

export const metadata: Metadata = pageMetadata({
  title: "Tennis Programs, Batch Timings & Fees",
  description:
    "Tennis training programs in New Chandigarh from ₹4,500/month — Orange Ball, Beginner, Intermediate, Tournament, Pro and High Performance. See batch timings, seats and fees, plus a 20% sibling discount.",
  path: "/programs-and-fees",
});

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
            <SectionHeading subtitle="Intense, dynamic and holistic coaching for every level, from first-time juniors to tournament players.">
              Find Your Program
            </SectionHeading>
          </MotionItem>
        </MotionSection>

        {/* Jump links so beginners don't have to scroll past elite programs */}
        <nav
          aria-label="Program groups"
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="#foundation"
            className="flex flex-col items-center justify-center min-h-14 px-6 py-3 rounded-2xl border-2 border-brand-secondary/30 hover:border-brand-secondary text-center transition-colors"
          >
            <span className="text-sm font-black uppercase tracking-widest text-brand-primary">
              Foundation Programs ↓
            </span>
            <span className="text-xs font-medium text-brand-black/70">
              New players &amp; juniors · Orange Ball, Beginner, Intermediate
            </span>
          </a>
          <a
            href="#performance"
            className="flex flex-col items-center justify-center min-h-14 px-6 py-3 rounded-2xl border-2 border-brand-accent/60 hover:border-brand-accent text-center transition-colors"
          >
            <span className="text-sm font-black uppercase tracking-widest text-brand-primary">
              Performance Programs ↓
            </span>
            <span className="text-xs font-medium text-brand-black/70">
              Competitive players · Tournament, Pro, High Performance
            </span>
          </a>
        </nav>

        {/* ── PERFORMANCE TIER GROUP ───────────────────────────────────── */}
        <div id="performance" className="mt-20 md:mt-28 scroll-mt-32">
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
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-secondary mb-2">
                    Not Sure Which Level?
                  </p>
                  <h3 className="text-h2 font-black text-brand-primary uppercase tracking-tight">
                    Start With a Free Trial
                  </h3>
                  <p className="text-brand-black/70 text-sm font-medium mt-2 max-w-md text-pretty">
                    A coach assesses the player&rsquo;s level in one session and
                    recommends the right program. No commitment.
                  </p>
                </div>
                <a
                  href={contactHref(FREE_TRIAL)}
                  className="group relative inline-flex items-center gap-3 bg-brand-primary text-brand-white font-black uppercase tracking-widest text-xs px-8 py-4 rounded-xl overflow-hidden shrink-0 transition-all hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-brand-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10">Book a Free Trial</span>
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
        <div id="foundation" className="mt-20 md:mt-28 scroll-mt-32">
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
      <JsonLd
        data={[
          breadcrumbJsonLd("Programs & Fees", "/programs-and-fees"),
          ...programs.map((p) => ({
            "@context": "https://schema.org",
            "@type": "Course",
            "@id": `${SITE_URL}/programs-and-fees#${p.id}`,
            name: `${toTitleCase(p.name)} Tennis Program`,
            description: `${toTitleCase(p.name)} tennis training program at PowerMyTennis High Performance Academy, New Chandigarh. ${p.seats} seats, ₹${p.fee.toLocaleString("en-IN")} ${p.feeFrequency}.`,
            url: `${SITE_URL}/programs-and-fees`,
            inLanguage: "en",
            provider: organizationRef,
            offers: {
              "@type": "Offer",
              category: "Paid",
              price: p.fee,
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}/programs-and-fees`,
            },
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "Onsite",
              location: organizationRef,
            },
          })),
        ]}
      />
    </main>
  );
}
