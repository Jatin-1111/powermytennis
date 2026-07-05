import { Suspense } from "react";
import { Container } from "@/components/shared/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with PowerMyTennis Academy to book a trial or inquire about our programs.",
};

export default function ContactPage() {
  const formattedPhone = siteConfig.phone.replace(/\s+/g, "");
  const whatsappUrl = `https://wa.me/91${formattedPhone}`;

  return (
    <main className="min-h-screen bg-brand-white pb-24">
      {/* Dark Premium Header */}
      <div className="bg-brand-primary py-32 text-center relative overflow-hidden border-b border-brand-accent/20">
        <div 
          className="absolute inset-0 overflow-hidden pointer-events-none opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(198, 217, 43, 0.4) 40px, rgba(198, 217, 43, 0.4) 42px)`
          }}
        />
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(10,12,13,1)] pointer-events-none" />
        
        <div className="relative z-10 px-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-brand-accent" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-white/70">
              Contact Information
            </span>
            <div className="w-8 h-[2px] bg-brand-accent" />
          </div>
          <h1 className="text-hero font-black uppercase tracking-tight text-brand-white mb-6 drop-shadow-lg">
            Get In Touch
          </h1>
          <p className="text-brand-white/60 font-medium text-lg max-w-xl mx-auto">
            Reach out to our expert team to build a smart and realistic plan for your child.
          </p>
        </div>
      </div>

      <Container className="py-16 md:py-24 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-4">
          <div className="order-2 lg:order-1 flex flex-col h-full gap-6">
            
            {/* Contact Info Card: Call Us */}
            <div className="group relative bg-brand-white border border-brand-neutral/20 p-8 hover:-translate-y-1 hover:border-brand-accent transition-all duration-300 shadow-sm hover:shadow-md cursor-default overflow-hidden flex flex-col sm:flex-row gap-6 items-center sm:items-start justify-between">
              {/* Active Edge Indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-brand-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />
              
              <div className="text-center sm:text-left flex-1 pl-2">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                  <div className="w-2 h-2 rounded-sm bg-brand-accent/30 group-hover:bg-brand-accent transition-colors duration-300" />
                  <span className="text-[10px] font-black tracking-[0.25em] uppercase text-brand-black/30 group-hover:text-brand-primary transition-colors">
                    CONTACT : PHONE
                  </span>
                </div>
                <h3 className="font-black text-brand-primary uppercase tracking-widest text-2xl mb-1">
                  Call Us
                </h3>
                <p className="text-brand-black/70 text-lg font-medium tracking-wide font-mono">
                  {siteConfig.phone}
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href={`tel:+91${formattedPhone}`}
                  aria-label="Call Us"
                  className="w-14 h-14 bg-brand-primary text-brand-white flex items-center justify-center hover:bg-brand-secondary transition-colors shadow-sm relative group/btn overflow-hidden"
                >
                  <div className="absolute inset-0 bg-brand-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                  <svg className="w-5 h-5 relative z-10 group-hover/btn:text-brand-primary transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Us"
                  className="w-14 h-14 bg-brand-accent text-brand-primary flex items-center justify-center hover:bg-[#b0c426] transition-colors shadow-sm relative group/btn overflow-hidden"
                >
                  <svg className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover/btn:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Info Card: Email Us */}
            <div className="group relative bg-brand-white border border-brand-neutral/20 p-8 hover:-translate-y-1 hover:border-brand-accent transition-all duration-300 shadow-sm hover:shadow-md cursor-default overflow-hidden flex flex-col sm:flex-row gap-6 items-center sm:items-start justify-between">
              {/* Active Edge Indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-brand-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />
              
              <div className="text-center sm:text-left flex-1 pl-2">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                  <div className="w-2 h-2 rounded-sm bg-brand-accent/30 group-hover:bg-brand-accent transition-colors duration-300" />
                  <span className="text-[10px] font-black tracking-[0.25em] uppercase text-brand-black/30 group-hover:text-brand-primary transition-colors">
                    CONTACT : EMAIL
                  </span>
                </div>
                <h3 className="font-black text-brand-primary uppercase tracking-widest text-2xl mb-1">
                  Email Us
                </h3>
                <p className="text-brand-black/70 text-lg font-medium tracking-wide font-mono">
                  {siteConfig.email}
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  aria-label="Email Us"
                  className="w-14 h-14 bg-brand-primary text-brand-white flex items-center justify-center hover:bg-brand-secondary transition-colors shadow-sm relative group/btn overflow-hidden"
                >
                  <div className="absolute inset-0 bg-brand-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                  <svg className="w-5 h-5 relative z-10 group-hover/btn:text-brand-primary transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            <Suspense fallback={<div className="h-48 bg-brand-neutral/10 animate-pulse border border-brand-neutral/20" />}>
              <MapEmbed />
            </Suspense>
          </div>

          {/* Form Column */}
          <div className="order-1 lg:order-2">
            <Suspense fallback={<div className="h-[600px] bg-brand-neutral/10 rounded-3xl animate-pulse" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </Container>
    </main>
  );
}
