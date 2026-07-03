import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CoachGrid } from "@/components/coaches/CoachGrid";

export const metadata = {
  title: "Coaching Team",
  description:
    "Meet our formidable coaching team with 80+ years of cumulative coaching experience.",
};

export default function CoachesPage() {
  return (
    <main className="min-h-screen bg-brand-white pb-24">
      {/* Page Header */}
      <div className="bg-brand-primary py-section text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-white via-brand-primary to-brand-primary" />
        <div className="relative z-10 px-4">
          <h1 className="text-hero font-black uppercase tracking-tight text-brand-white mb-6">
            A Formidable
            <br className="md:hidden" /> Coaching Team
          </h1>
          <div className="w-24 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
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
