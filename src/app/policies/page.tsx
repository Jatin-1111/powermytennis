import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { policies, privateLessons } from "@/data/programs";
import { MotionSection, MotionItem } from "@/components/shared/MotionSection";

export const metadata = {
  title: "Policies",
  description:
    "Registration, fee deposit, and scheduling policies for PowerMyTennis Academy.",
};

export default function PoliciesPage() {
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
                  Rules & Guidelines
                </span>
                <div className="w-8 h-[2px] bg-brand-accent" />
              </div>
            </MotionItem>
            <MotionItem>
              <h1 className="text-hero font-black uppercase tracking-tight text-brand-white drop-shadow-lg">
                Academy Policies
              </h1>
            </MotionItem>
          </MotionSection>
        </div>
      </div>

      <Container className="py-16 md:py-24 max-w-3xl">
        <SectionHeading subtitle="Important information regarding registration, deposits, and scheduling.">
          Academy Rules & Policies
        </SectionHeading>

        <div className="space-y-10 mt-12">
          {/* Registration Policy */}
          <div className="bg-brand-neutral/10 p-10 md:p-12 rounded-3xl border border-brand-neutral/20 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-black text-brand-primary uppercase tracking-tight mb-6 flex items-center gap-4">
              <div className="p-2 bg-brand-accent rounded-xl">
                <svg
                  className="w-6 h-6 text-brand-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              Registration Fee
            </h3>
            <p className="text-brand-black text-lg leading-relaxed font-medium">
              A registration fee of{" "}
              <strong className="font-black text-brand-primary bg-brand-neutral/20 px-2 py-0.5 rounded">
                ₹{policies.registrationFee.amount}
              </strong>{" "}
              is applicable to athletes joining the following groups:{" "}
              <span className="font-bold text-brand-secondary">
                {policies.registrationFee.applicableGroups.join(", ")}
              </span>
              .
            </p>
            <div className="mt-8 bg-brand-coral/10 text-brand-primary px-5 py-3 rounded-xl inline-block font-black text-sm tracking-widest uppercase border border-brand-coral/20">
              {policies.registrationFee.note}
            </div>
          </div>

          {/* Deposit Policy */}
          <div className="bg-brand-neutral/10 p-10 md:p-12 rounded-3xl border border-brand-neutral/20 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-black text-brand-primary uppercase tracking-tight mb-6 flex items-center gap-4">
              <div className="p-2 bg-brand-accent rounded-xl">
                <svg
                  className="w-6 h-6 text-brand-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              Fee Deposit
            </h3>
            <p className="text-brand-black text-xl leading-relaxed font-bold">
              {policies.depositRule}.
            </p>
          </div>

          {/* Scheduling Policy */}
          <div className="bg-brand-neutral/10 p-10 md:p-12 rounded-3xl border border-brand-neutral/20 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-black text-brand-primary uppercase tracking-tight mb-8 flex items-center gap-4">
              <div className="p-2 bg-brand-accent rounded-xl">
                <svg
                  className="w-6 h-6 text-brand-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              Scheduling
            </h3>
            <ul className="space-y-6 text-lg">
              <li className="flex flex-col sm:flex-row justify-between sm:items-end border-b-2 border-dashed border-brand-neutral/30 pb-4">
                <span className="font-bold text-brand-secondary uppercase tracking-widest text-sm mb-2 sm:mb-0">
                  Match Days
                </span>
                <span className="font-black text-brand-primary text-2xl uppercase tracking-tight">
                  {privateLessons.matchDays}
                </span>
              </li>
              <li className="flex flex-col sm:flex-row justify-between sm:items-end pt-2">
                <span className="font-bold text-brand-secondary uppercase tracking-widest text-sm mb-2 sm:mb-0">
                  Academy Off Day
                </span>
                <span className="font-black text-brand-coral text-2xl uppercase tracking-tight">
                  {privateLessons.offDay}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </main>
  );
}
