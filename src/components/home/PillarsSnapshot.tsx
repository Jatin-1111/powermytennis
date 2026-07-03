import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';

export function PillarsSnapshot() {
  const pillars = [
    { title: 'Technique', description: 'Mastering the fundamental strokes, footwork, and biomechanics for maximum efficiency.' },
    { title: 'Strategy', description: 'Developing court awareness, shot selection, and tactical match-play execution.' },
    { title: 'Fitness', description: 'Enhancing agility, endurance, and tennis-specific power to outlast opponents.' },
    { title: 'Mental', description: 'Building focus, resilience, and a competitive attitude for high-pressure moments.' },
  ];

  return (
    <section className="py-24 bg-brand-white">
      <Container>
        <SectionHeading subtitle="Our Coaching Modules are based on the four pillars of tennis.">
          The Four Pillars
        </SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="p-8 rounded-2xl bg-brand-neutral/10 border border-brand-neutral/30 hover:border-brand-accent/60 hover:bg-brand-neutral/20 transition-all duration-300">
              <div className="h-14 w-14 rounded-full bg-brand-secondary text-brand-accent flex items-center justify-center font-black text-2xl mb-6 shadow-md">
                {index + 1}
              </div>
              <h3 className="text-2xl font-black uppercase text-brand-primary mb-4">{pillar.title}</h3>
              <p className="text-brand-black leading-relaxed font-medium">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
