import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MotionSection, MotionItem } from "@/components/shared/MotionSection";
import Link from "next/link";

export function QuickLinks() {
  const links = [
    {
      title: "The Coaching Pathway",
      description:
        "Explore our skill-based coaching groups from Orange Ball to High Performance.",
      href: "/pathway",
      color: "bg-brand-secondary",
      text: "text-brand-white",
    },
    {
      title: "Programs & Fees",
      description:
        "View schedules, seat availability, and fee structures for all 6 training modules.",
      href: "/programs-and-fees",
      color: "bg-brand-primary",
      text: "text-brand-white",
    },
    {
      title: "Private Lessons",
      description:
        "One-on-one sessions with our expert coaches, tailored to your pace and goals.",
      href: "/private-lessons",
      color: "bg-brand-accent",
      text: "text-brand-primary",
    },
  ];

  return (
    <section className="py-section-sm md:py-section bg-brand-neutral/10 border-t border-brand-neutral/20">
      <Container>
        <SectionHeading subtitle="Everything you need to evaluate and enroll in our programs.">
          Quick Links
        </SectionHeading>
        <MotionSection
          stagger
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {links.map((link, idx) => (
            <MotionItem key={idx} className="h-full">
              <Link
                href={link.href}
                className={`flex flex-col h-full p-card rounded-2xl shadow-card-idle hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group ${link.color} ${link.text}`}
              >
                <h3 className="text-h3 font-black uppercase tracking-wide mb-element">
                  {link.title}
                </h3>
                <p className="opacity-90 mb-8 font-medium leading-relaxed flex-1">
                  {link.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center font-bold text-sm uppercase tracking-widest border-b-2 border-current pb-1 transition-transform group-hover:translate-x-1">
                    View Details
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </MotionItem>
          ))}
        </MotionSection>
      </Container>
    </section>
  );
}
