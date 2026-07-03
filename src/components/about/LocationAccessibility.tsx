import { siteConfig } from '@/data/siteConfig';
import { Container } from '@/components/shared/Container';
import { MotionSection, MotionItem } from '@/components/shared/MotionSection';

export function LocationAccessibility() {
  return (
    <section className="py-section-sm md:py-section bg-brand-neutral/10 border-t border-brand-neutral/20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <MotionSection stagger>
            <MotionItem>
              <h2 className="text-h2 font-black text-brand-primary uppercase tracking-tight mb-6">
                Accessible to the TriCity
              </h2>
            </MotionItem>
            
            <MotionItem>
              <p className="text-body-lg text-brand-black mb-10 leading-relaxed font-medium">
                PowerMyTennis is accessible to TriCity residents through major roads from <span className="font-bold text-brand-secondary">{siteConfig.address.accessibleFrom.join(', ')}</span>.
              </p>
            </MotionItem>
            
            <MotionItem>
              <div className="bg-brand-white p-card rounded-2xl border border-brand-neutral/30 shadow-card-idle mb-8">
                <h3 className="font-black uppercase text-h3 text-brand-secondary mb-3 flex items-center tracking-wide">
                  <svg className="w-6 h-6 mr-3 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Academy Location
                </h3>
                <p className="text-brand-black text-body-lg">{siteConfig.address.city}</p>
              </div>
            </MotionItem>
          </MotionSection>
          
          <MotionSection delay={0.2} className="h-[500px] w-full rounded-3xl overflow-hidden shadow-card-hover bg-brand-neutral/50 relative border-4 border-brand-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27435.539824637653!2d76.6715694!3d30.7629671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff3cbfa775d73%3A0x8ba6f3bc5b4d7f5f!2sNew%20Chandigarh%2C%20Punjab!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              title={`Map of ${siteConfig.address.city}`}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MotionSection>
        </div>
      </Container>
    </section>
  );
}
