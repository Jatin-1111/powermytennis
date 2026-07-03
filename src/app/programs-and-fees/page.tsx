import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { programs } from '@/data/programs';
import { ProgramCard } from '@/components/programs/ProgramCard';
import { DiscountCallout } from '@/components/programs/DiscountCallout';

export const metadata = {
  title: 'Programs & Fees | PowerMyTennis High Performance Academy',
  description: 'View schedules, seat availability, and fee structures for all PowerMyTennis modules.',
};

export default function ProgramsAndFeesPage() {
  return (
    <main className="min-h-screen bg-brand-white pb-24">
      {/* Page Header */}
      <div className="bg-brand-primary py-24 md:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-white via-brand-primary to-brand-primary" />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-brand-white mb-6">
            Programs & Fees
          </h1>
          <div className="w-24 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
        </div>
      </div>

      <Container className="py-16 md:py-24">
        <SectionHeading subtitle="Intense, dynamic & wholistic coaching modules designed for every level.">
          Ace The Court
        </SectionHeading>
        
        <DiscountCallout />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </Container>
      
    </main>
  );
}
