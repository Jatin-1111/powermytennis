import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { privateLessons } from '@/data/programs';
import { FeeTable } from '@/components/programs/FeeTable';

export const metadata = {
  title: 'Private Lessons | PowerMyTennis High Performance Academy',
  description: 'View fee charts and schedules for one-on-one private tennis lessons.',
};

export default function PrivateLessonsPage() {
  return (
    <main className="min-h-screen bg-brand-white pb-24">
      {/* Page Header */}
      <div className="bg-brand-primary py-24 md:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-white via-brand-primary to-brand-primary" />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-brand-white mb-6">
            Private Lessons
          </h1>
          <div className="w-24 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
        </div>
      </div>

      <Container className="py-16 md:py-24 max-w-4xl">
        <SectionHeading subtitle="Personalized one-on-one attention from our expert coaching team.">
          Fee Chart For One Player
        </SectionHeading>
        
        <div className="mb-12">
          <FeeTable fees={privateLessons.fees} />
        </div>
        
        {/* Match Days / Off Day block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-brand-neutral/10 border border-brand-neutral/30 rounded-3xl p-8 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-brand-primary text-brand-accent flex items-center justify-center shrink-0 shadow-md">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="font-black text-brand-neutral uppercase tracking-widest text-sm mb-1">Match Days</h4>
              <p className="font-black text-brand-primary text-xl uppercase tracking-tight">{privateLessons.matchDays}</p>
            </div>
          </div>
          
          <div className="bg-brand-coral/10 border border-brand-coral/30 rounded-3xl p-8 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-brand-coral text-brand-white flex items-center justify-center shrink-0 shadow-md">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-black text-brand-coral uppercase tracking-widest text-sm mb-1">Off Day</h4>
              <p className="font-black text-brand-primary text-xl uppercase tracking-tight">{privateLessons.offDay}</p>
            </div>
          </div>
        </div>
      </Container>
      
    </main>
  );
}
