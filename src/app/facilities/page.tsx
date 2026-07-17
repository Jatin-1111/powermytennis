import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FacilityIconGrid } from "@/components/facilities/FacilityIconGrid";
import { PerformanceReportsSection } from "@/components/facilities/PerformanceReportsSection";
import { MotionSection, MotionItem } from "@/components/shared/MotionSection";

export const metadata = {
  title: "Facilities",
  description:
    "Explore PowerMyTennis's state-of-the-art clay tennis courts and comprehensive performance reporting system in New Chandigarh.",
  alternates: {
    canonical: "https://www.powermytennis.com/facilities",
  },
};

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-brand-white pb-24">
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

        {/* Photo Gallery */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-secondary">
              Inside the Academy
            </span>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-brand-neutral/30 to-transparent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {/* Aerial — spans 2 rows on md */}
            <div className="relative col-span-2 md:col-span-1 overflow-hidden rounded-2xl aspect-[4/3] md:aspect-auto md:row-span-2">
              <Image
                src="/powermytennis-assets/courts-aerial.jpeg"
                alt="Aerial view of PowerMyTennis clay courts"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) calc(100vw - 24px), 33vw"
              />
            </div>

            {/* Trophy moment — coach + player at net, faces clearly visible */}
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <Image
                src="/powermytennis-assets/player-trophy-group.jpeg"
                alt="Coach and player celebrating with trophy at the net"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) calc(50vw - 18px), 33vw"
              />
            </div>

            {/* Junior player — charming portrait of young student */}
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <Image
                src="/powermytennis-assets/junior-player-smile.jpeg"
                alt="Junior player on clay court with racket"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) calc(50vw - 18px), 33vw"
              />
            </div>

            {/* Solo trophy — player holding trophies at net */}
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <Image
                src="/powermytennis-assets/player-trophy-solo.jpeg"
                alt="Player holding trophies at the net on clay court"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) calc(50vw - 18px), 33vw"
              />
            </div>

            {/* Court overview — facility shot */}
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <Image
                src="/powermytennis-assets/courts-overview.jpeg"
                alt="PowerMyTennis clay courts with floodlights"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) calc(50vw - 18px), 33vw"
                style={{ objectPosition: "50% 35%" }}
              />
            </div>
          </div>
        </div>

        {/* Section: On the Courts */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-secondary">
              On The Courts
            </span>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-brand-neutral/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Coach portrait — spans 2 rows */}
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-auto md:row-span-2">
              <Image
                src="/powermytennis-assets/coach-portrait-balls.jpeg"
                alt="Head coach on court with tennis balls and city skyline"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right top */}
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <Image
                src="/powermytennis-assets/player-forehand-action.jpeg"
                alt="Player hitting a forehand on clay court"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right bottom */}
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <Image
                src="/powermytennis-assets/player-backhand-action.jpeg"
                alt="Player hitting a backhand on clay court"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Section: Coaching in Progress */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-secondary">
              Coaching in Progress
            </span>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-brand-neutral/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Coach Romen with two junior students — great group coaching moment */}
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <Image
                src="/powermytennis-assets/coach-students-group.jpeg"
                alt="Coach with two junior students on the clay court"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Coach and student holding rackets — 1-on-1 coaching relationship */}
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <Image
                src="/powermytennis-assets/coach-student-rackets.jpeg"
                alt="Coach and student posing with rackets on the clay court"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <PerformanceReportsSection />
      </Container>
    </main>
  );
}
