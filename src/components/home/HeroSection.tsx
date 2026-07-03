import { siteConfig } from '@/data/siteConfig';
import { Button } from '@/components/shared/Button';
import { Container } from '@/components/shared/Container';

export function HeroSection() {
  return (
    <section className="relative bg-brand-primary text-brand-white py-24 md:py-36 overflow-hidden flex flex-col justify-center min-h-[80vh]">
      {/* Visual background element */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent via-brand-primary to-brand-primary" />
      
      <Container className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 leading-none">
          <span className="block text-brand-accent">{siteConfig.name.split(' ')[0]}</span>
          <span className="block text-3xl md:text-5xl mt-2 tracking-tight">
            {siteConfig.name.split(' ').slice(1).join(' ')}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-brand-neutral font-medium max-w-4xl mx-auto mb-10 leading-relaxed">
          {siteConfig.tagline}
        </p>
        
        <p className="text-lg md:text-xl font-bold mb-12 flex items-center justify-center gap-2 text-brand-white/90 uppercase tracking-widest">
          <svg className="w-6 h-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          At its state-of-the-art academy at {siteConfig.address.city}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Button href="/contact" variant="primary" className="w-full sm:w-auto px-10">
            Book a Trial
          </Button>
          <Button href="/pathway" variant="outline-white" className="w-full sm:w-auto px-10">
            Explore Pathway
          </Button>
        </div>
      </Container>
    </section>
  );
}
