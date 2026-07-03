import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { MotionSection, MotionItem } from '@/components/shared/MotionSection';

export function AcademyStory() {
  return (
    <section className="py-section-sm md:py-section bg-brand-white">
      <Container className="max-w-4xl">
        <SectionHeading subtitle="Nestled in the heart of New Chandigarh">
          How We Fuel Your Dream!
        </SectionHeading>
        
        <MotionSection stagger className="prose prose-lg md:prose-xl mx-auto text-brand-black space-y-8">
          <MotionItem>
            <p className="text-h3 font-medium text-brand-secondary leading-relaxed text-center mb-12">
              With infrastructure that offers top quality tennis facility, coupled with a strong coaching team, PowerMyTennis envisions becoming a leading Tennis Academy of the region.
            </p>
          </MotionItem>
          
          <MotionItem>
            <p className="text-body-lg leading-relaxed">
              At PowerMyTennis, we strongly believe in imparting <strong className="text-brand-primary">Purposeful Coaching</strong> that helps meet tennis-related aspirations of athletes. These aspirations may range from becoming an Elite Tennis Player to seeking international admissions based on tennis points to becoming a skilled recreational player.
            </p>
          </MotionItem>
          
          <MotionItem>
            <div className="p-card my-12 bg-brand-primary text-brand-white rounded-3xl shadow-card-idle hover:shadow-card-hover transition-shadow duration-300">
              <p className="text-h2 md:text-h1 font-black italic text-brand-accent text-center mb-0 leading-tight">
                "In tennis, coaching is the bridge between a player's raw physical ability and their ultimate on-court potential"
              </p>
            </div>
          </MotionItem>

          <MotionItem>
            <p className="text-body-lg leading-relaxed">
              Our mission is led by a strong coaching team with 80+ years of cumulative coaching experience. Our team composition offers a fine balance of youthful energy and decades of coaching experience. 
            </p>
          </MotionItem>
          
          <MotionItem>
            <p className="text-body-lg leading-relaxed">
              Focused on tennis specific requirements, PowerMyTennis offers a wholistic facility wherein full time athletes may play, rest, eat, study, bathe and change. Talk to our expert team to build a <strong className="text-brand-primary">smart and realistic plan for your child</strong>.
            </p>
          </MotionItem>
        </MotionSection>
      </Container>
    </section>
  );
}
