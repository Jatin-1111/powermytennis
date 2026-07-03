import { siteConfig } from "@/data/siteConfig";

export function LaunchBanner() {
  return (
    <div className="bg-brand-coral py-3 px-4 text-center border-b border-brand-primary/10">
      <p className="text-brand-white font-bold tracking-widest uppercase text-xs md:text-sm">
        Sessions begin from {siteConfig.sessionsBeginDate} — Register Today!
      </p>
    </div>
  );
}
