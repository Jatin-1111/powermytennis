import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import Link from 'next/link';

export function QuickLinks() {
  const links = [
    {
      title: 'The Coaching Pathway',
      description: 'Explore our skill-based coaching groups from Orange to High Performance.',
      href: '/pathway',
      color: 'bg-brand-secondary',
      hover: 'hover:bg-brand-secondary/90',
      text: 'text-brand-white',
    },
    {
      title: 'Programs & Fees',
      description: 'View schedules, seat availability, and fee structures for all modules.',
      href: '/programs-and-fees',
      color: 'bg-brand-primary',
      hover: 'hover:bg-brand-primary/90',
      text: 'text-brand-white',
    },
    {
      title: 'Coaching Team',
      description: 'Meet our formidable team with 80+ years of cumulative experience.',
      href: '/coaches',
      color: 'bg-brand-accent',
      hover: 'hover:bg-[#b0c426]',
      text: 'text-brand-primary',
    }
  ];

  return (
    <section className="py-24 bg-brand-neutral/20 border-t border-brand-neutral/30">
      <Container>
        <SectionHeading subtitle="Everything you need to evaluate and enroll in our programs.">
          Quick Links
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {links.map((link, idx) => (
            <Link 
              key={idx} 
              href={link.href}
              className={`block p-10 rounded-2xl transition-transform hover:-translate-y-2 shadow-lg ${link.color} ${link.hover} ${link.text}`}
            >
              <h3 className="text-2xl font-black uppercase tracking-wide mb-4">{link.title}</h3>
              <p className="opacity-90 mb-8 font-medium leading-relaxed">{link.description}</p>
              <span className="inline-flex items-center font-bold text-sm uppercase tracking-widest border-b-2 border-current pb-1">
                View Details
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
