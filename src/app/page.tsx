import type { Metadata } from "next";
import { LaunchBanner } from "@/components/home/LaunchBanner";
import { HeroSection } from "@/components/home/HeroSection";
import { PillarsSnapshot } from "@/components/home/PillarsSnapshot";
import { QuickLinks } from "@/components/home/QuickLinks";
import { TestimonialMarquee } from "@/components/home/TestimonialMarquee";
import { MeetOurCoachesCTA } from "@/components/home/MeetOurCoachesCTA";
import { TrialCTA } from "@/components/home/TrialCTA";

export const metadata: Metadata = {
  title:
    "PowerMyTennis High Performance Academy | Elite Tennis Training in New Chandigarh",
  description:
    "Join PowerMyTennis — New Chandigarh's premier clay-court tennis academy. Expert coaching for juniors and adults across all levels. Book a free trial session today.",
  alternates: {
    canonical: "https://powermytennis.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-white">
      <LaunchBanner />
      <HeroSection />
      <PillarsSnapshot />
      <MeetOurCoachesCTA />
      <TestimonialMarquee />
      <TrialCTA />
      <QuickLinks />
    </main>
  );
}
