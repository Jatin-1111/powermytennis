import { siteConfig } from "@/data/siteConfig";

export function MapEmbed() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="w-full h-full min-h-[400px] md:min-h-[600px] bg-brand-neutral/10 flex flex-col items-center justify-center text-center p-8 border-4 border-dashed border-brand-neutral/30 rounded-3xl shadow-inner">
        <svg
          className="w-16 h-16 text-brand-neutral mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-brand-primary font-black uppercase tracking-widest text-lg">
          Map Embed Disabled
        </p>
        <p className="text-brand-black mt-2 font-medium">
          Missing NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in .env.local
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px] rounded-[2rem] overflow-hidden shadow-xl border border-brand-neutral/20 bg-brand-white flex flex-col relative group">
      
      {/* Map Technical Header */}
      <div className="bg-brand-neutral/5 border-b border-brand-neutral/20 px-6 py-3 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary">
            Academy Location
          </span>
        </div>
        <div className="text-[10px] font-bold tracking-widest text-brand-neutral font-mono">
          {siteConfig.address.coordinates.lat.toFixed(4)}° N, {siteConfig.address.coordinates.lng.toFixed(4)}° E
        </div>
      </div>

      <div className="flex-1 relative">
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?q=${siteConfig.address.coordinates.lat},${siteConfig.address.coordinates.lng}&key=${apiKey}`}
          title="PowerMyTennis Academy Location"
          className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
        {/* Radar Overlay Grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-10 transition-opacity duration-700"
          style={{
            backgroundImage: `linear-gradient(rgba(34,38,27,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,38,27,0.1) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        />
      </div>
    </div>
  );
}
