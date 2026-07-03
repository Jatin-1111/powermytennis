import { LaunchBanner } from "@/components/home/LaunchBanner";
import { HeroSection } from "@/components/home/HeroSection";
import { PillarsSnapshot } from "@/components/home/PillarsSnapshot";
import { QuickLinks } from "@/components/home/QuickLinks";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-white">
      <LaunchBanner />
      <HeroSection />
      <PillarsSnapshot />
      <QuickLinks />
    </main>
  );
}
