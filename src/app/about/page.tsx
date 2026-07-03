import { AcademyStory } from "@/components/about/AcademyStory";
import { LocationAccessibility } from "@/components/about/LocationAccessibility";

export const metadata = {
  title: "About",
  description:
    "Learn about the vision and location of PowerMyTennis Academy in New Chandigarh.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-white">
      {/* Page Header */}
      <div className="bg-brand-primary py-section text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-white via-brand-primary to-brand-primary" />
        <div className="relative z-10">
          <h1 className="text-hero font-black uppercase tracking-tight text-brand-white mb-6">
            About The Academy
          </h1>
          <div className="w-24 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
        </div>
      </div>

      <AcademyStory />
      <LocationAccessibility />
    </main>
  );
}
