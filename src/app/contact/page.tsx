import { Suspense } from 'react';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ContactForm } from '@/components/contact/ContactForm';
import { MapEmbed } from '@/components/contact/MapEmbed';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'Contact Us | PowerMyTennis High Performance Academy',
  description: 'Get in touch with PowerMyTennis Academy to book a trial or inquire about our programs.',
};

export default function ContactPage() {
  const formattedPhone = siteConfig.phone.replace(/\s+/g, '');
  const whatsappUrl = `https://wa.me/91${formattedPhone}`;
  
  return (
    <main className="min-h-screen bg-brand-white pb-24">
      {/* Page Header */}
      <div className="bg-brand-primary py-24 md:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-white via-brand-primary to-brand-primary" />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-brand-white mb-6">
            Get In Touch
          </h1>
          <div className="w-24 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
        </div>
      </div>

      <Container className="py-16 md:py-24 max-w-7xl">
        <SectionHeading subtitle="Reach out to our expert team to build a smart and realistic plan for your child.">
          Contact The Academy
        </SectionHeading>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-12">
          <div className="order-2 lg:order-1 flex flex-col h-full gap-8">
            <div className="bg-brand-neutral/10 p-8 rounded-3xl border border-brand-neutral/20 shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-start justify-between">
               <div className="text-center sm:text-left">
                 <h4 className="font-black text-brand-primary uppercase tracking-widest text-lg mb-2">Call Us</h4>
                 <p className="text-brand-black text-lg font-medium tracking-wide">{siteConfig.phone}</p>
               </div>
               <div className="flex gap-4">
                 <a href={`tel:+91${formattedPhone}`} className="w-14 h-14 rounded-full bg-brand-primary text-brand-white flex items-center justify-center hover:bg-brand-secondary transition-colors shadow-md">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                   </svg>
                 </a>
                 <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-brand-accent text-brand-primary flex items-center justify-center hover:bg-[#b0c426] transition-colors shadow-md">
                   <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                   </svg>
                 </a>
               </div>
            </div>
            
            <div className="bg-brand-neutral/10 p-8 rounded-3xl border border-brand-neutral/20 shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-start justify-between">
               <div className="text-center sm:text-left">
                 <h4 className="font-black text-brand-primary uppercase tracking-widest text-lg mb-2">Email Us</h4>
                 <p className="text-brand-black text-lg font-medium tracking-wide">{siteConfig.email}</p>
               </div>
               <div className="flex gap-4">
                 <a href={`mailto:${siteConfig.email}`} className="w-14 h-14 rounded-full bg-brand-primary text-brand-white flex items-center justify-center hover:bg-brand-secondary transition-colors shadow-md">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                   </svg>
                 </a>
               </div>
            </div>
            
            <div className="flex-1 mt-6">
               <MapEmbed />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 h-full">
            <Suspense fallback={
              <div className="bg-brand-neutral/10 p-12 rounded-3xl animate-pulse h-[600px] flex flex-col items-center justify-center border border-brand-neutral/20">
                <div className="w-16 h-16 border-4 border-brand-accent border-t-transparent rounded-full animate-spin mb-6"></div>
                <p className="text-brand-primary font-black tracking-widest uppercase text-xl">Loading Form...</p>
              </div>
            }>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </Container>
    </main>
  );
}
