import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export function ComingSoon() {
  return (
    <div className="min-h-screen bg-brand-primary flex flex-col items-center justify-center p-6 relative overflow-hidden text-brand-white">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-white via-brand-primary to-brand-primary" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/30 rounded-full blur-[100px]" />

      <div className="relative z-10 flex flex-col items-center max-w-3xl text-center space-y-12 w-full">
        <div className="bg-brand-white p-5 rounded-2xl shadow-2xl">
          <Image
            src="/powermytennis-logo.jpeg"
            alt="PowerMyTennis Logo"
            width={240}
            height={90}
            className="h-16 w-auto object-contain rounded-lg"
            priority
          />
        </div>

        <div className="space-y-6">
          <div className="inline-block bg-brand-accent/20 text-brand-accent px-4 py-1.5 rounded-full font-black text-xs md:text-sm uppercase tracking-widest border border-brand-accent/30">
            {siteConfig.address.city}
          </div>
          <h1 className="text-hero font-black uppercase tracking-tight leading-none text-brand-white text-balance">
            Something <span className="text-brand-accent">Powerful</span> Is
            Coming
          </h1>
          <p className="text-body-lg text-brand-neutral max-w-2xl mx-auto font-medium">
            We are putting the finishing touches on our high-performance tennis
            academy platform. Get ready to elevate your game.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-8">
          <a
            href={`https://wa.me/91${siteConfig.phone.replace(/\s+/g, "")}?text=${encodeURIComponent("Hi, I'm interested in PowerMyTennis Academy!")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-accent text-brand-primary px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp Us
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="bg-brand-white/10 text-brand-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-brand-white/20 transition-colors border border-brand-white/20 flex items-center justify-center gap-2"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}
