import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CoachGrid } from "@/components/coaches/CoachGrid";
import { MotionSection, MotionItem } from "@/components/shared/MotionSection";
import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/JsonLd";
import {
  SITE_URL,
  breadcrumbJsonLd,
  organizationRef,
  pageMetadata,
} from "@/lib/seo";
import { coaches } from "@/data/coaches";

export const metadata: Metadata = pageMetadata({
  title: "Tennis Coaches in New Chandigarh",
  description:
    "Meet the PowerMyTennis coaching team — 80+ years of combined experience, led by ITF Level 2 & NIS coach Yengkhom Romen Singh and AITA Level 4 coach Mayank Valecha. Expert tennis coaching in New Chandigarh, Punjab.",
  path: "/coaches",
});

export default function CoachesPage() {
  return (
    <main className="min-h-screen bg-brand-white pb-24">
      <JsonLd
        data={[
          breadcrumbJsonLd("Coaches", "/coaches"),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "PowerMyTennis Coaching Team",
            itemListElement: coaches.map((coach, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Person",
                "@id": `${SITE_URL}/coaches#${coach.id}`,
                name: coach.name,
                jobTitle: coach.role,
                ...(coach.credentials && { description: coach.credentials }),
                ...(coach.photoUrl && { image: `${SITE_URL}${coach.photoUrl}` }),
                worksFor: organizationRef,
              },
            })),
          },
        ]}
      />
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
                  Expert Instruction
                </span>
                <div className="w-8 h-[2px] bg-brand-accent" />
              </div>
            </MotionItem>
            <MotionItem>
              <h1 className="text-hero font-black uppercase tracking-tight text-brand-white drop-shadow-lg text-balance">
                A Formidable Coaching Team
              </h1>
            </MotionItem>
          </MotionSection>
        </div>
      </div>

      <Container className="py-16 md:py-24">
        <SectionHeading subtitle="Our team composition offers a fine balance of youthful energy and decades of coaching experience.">
          Meet The Experts
        </SectionHeading>

        <CoachGrid />
      </Container>
    </main>
  );
}
