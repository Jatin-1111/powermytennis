import Link from "next/link";

export function LaunchBanner() {
  return (
    <div className="bg-brand-coral py-3 px-4 text-center border-b border-brand-primary/10">
      <p className="text-brand-white font-bold tracking-widest uppercase text-xs md:text-sm">
        Now Enrolling &nbsp;·&nbsp; Admissions Open for All Levels &nbsp;&mdash;&nbsp;{" "}
        <Link
          href="/contact"
          className="underline underline-offset-2 hover:text-brand-accent transition-colors"
        >
          Book Your Free Trial →
        </Link>
      </p>
    </div>
  );
}
