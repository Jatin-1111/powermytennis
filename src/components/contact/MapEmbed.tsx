import { siteConfig } from "@/data/siteConfig";

export function MapEmbed() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const { lat, lng } = siteConfig.address.coordinates;

  const mapSrc = apiKey
    ? `https://www.google.com/maps/embed/v1/place?q=${lat},${lng}&key=${apiKey}`
    : `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;

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
        <div className="text-[10px] font-bold tracking-widest text-brand-black/65 font-mono">
          {lat.toFixed(4)}° N, {lng.toFixed(4)}° E
        </div>
      </div>

      <div className="flex-1 relative">
        <iframe
          src={mapSrc}
          title="PowerMyTennis Academy Location"
          className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Radar Overlay Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-10 transition-opacity duration-700"
          style={{
            backgroundImage: `linear-gradient(rgba(34,38,27,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,38,27,0.1) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>
    </div>
  );
}
