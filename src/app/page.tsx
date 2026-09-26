import type { Metadata } from "next";
import { LaunchBanner } from "@/components/home/LaunchBanner";
import { HeroSection } from "@/components/home/HeroSection";
import { PillarsSnapshot } from "@/components/home/PillarsSnapshot";
import { QuickLinks } from "@/components/home/QuickLinks";
import { TestimonialMarquee } from "@/components/home/TestimonialMarquee";
import { MeetOurCoachesCTA } from "@/components/home/MeetOurCoachesCTA";
import { TrialCTA } from "@/components/home/TrialCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "PowerMyTennis | Clay-Court Tennis Academy in New Chandigarh",
  description:
    "PowerMyTennis (Power My Tennis) is a high-performance clay-court tennis academy in New Chandigarh, near Chandigarh, Kharar, Mohali & Ropar. Expert coaching for juniors and adults. Book a free trial.",
  path: "",
  absoluteTitle: true,
});

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
