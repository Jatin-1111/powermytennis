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
    <div className="w-full h-full min-h-[400px] md:min-h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-white bg-brand-neutral/20 relative">
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?q=New+Chandigarh&key=${apiKey}`}
        title="PowerMyTennis Academy Location"
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
