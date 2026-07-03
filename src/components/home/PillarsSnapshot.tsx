import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { MotionSection, MotionItem } from '@/components/shared/MotionSection';

export function PillarsSnapshot() {
  const pillars = [
    { title: 'Technique', description: 'Mastering the fundamental strokes, footwork, and biomechanics for maximum efficiency.' },
    { title: 'Strategy', description: 'Developing court awareness, shot selection, and tactical match-play execution.' },
    { title: 'Fitness', description: 'Enhancing agility, endurance, and tennis-specific power to outlast opponents.' },
    { title: 'Mental', description: 'Building focus, resilience, and a competitive attitude for high-pressure moments.' },
  ];

  return (
    <section className="py-section-sm md:py-section bg-brand-white">
      <Container>
        <SectionHeading subtitle="Our Coaching Modules are based on the four pillars of tennis.">
          The Four Pillars
        </SectionHeading>
        
        <MotionSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <MotionItem key={index} className="h-full">
              <div className="h-full flex flex-col p-card rounded-2xl bg-brand-neutral/5 border border-brand-neutral/20 hover:shadow-card-hover transition-all duration-200">
                <div className="h-14 w-14 rounded-full bg-brand-secondary text-brand-accent flex items-center justify-center font-black text-h3 mb-element shadow-sm">
                  {index + 1}
                </div>
                <h3 className="text-h3 font-black uppercase text-brand-primary mb-4">{pillar.title}</h3>
                <p className="text-body text-brand-black/80 font-medium leading-relaxed">{pillar.description}</p>
              </div>
            </MotionItem>
          ))}
        </MotionSection>
      </Container>
    </section>
  );
}
