import Image from "next/image";
import { Coach } from "@/data/coaches";

interface CoachCardProps {
  coach: Coach;
}

export function CoachCard({ coach }: CoachCardProps) {
  // Extract initials for the placeholder if photo is missing
  const initials = coach.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="flex flex-col bg-brand-white rounded-3xl overflow-hidden shadow-lg border border-brand-neutral/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group h-full">
      {/* Photo Area */}
      <div className="h-72 w-full bg-brand-neutral/30 flex items-center justify-center relative overflow-hidden">
        {coach.photoUrl ? (
          <Image
            src={coach.photoUrl}
            alt={`Photo of ${coach.name}, ${coach.role}`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div
            className="w-full h-full bg-brand-primary flex items-center justify-center text-brand-white transition-transform duration-500 group-hover:scale-105"
            aria-label={`Placeholder photo for ${coach.name}`}
          >
            <span className="text-h1 font-black text-brand-neutral">
              {initials}
            </span>
          </div>
        )}

        {/* Role Badge */}
        <div className="absolute bottom-4 left-4 bg-brand-accent text-brand-primary px-5 py-2 rounded-full font-black text-xs md:text-sm uppercase tracking-widest shadow-md">
          {coach.role}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col flex-1 bg-brand-neutral/5">
        <h3 className="text-h3 font-black text-brand-primary mb-6 tracking-tight">
          {coach.name}
        </h3>

        <div className="space-y-4 flex-1">
          {coach.credentials && (
            <div className="flex items-start gap-4">
              <div className="mt-0.5 p-1.5 bg-brand-secondary/10 rounded-lg shrink-0">
                <svg
                  className="w-5 h-5 text-brand-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <p className="text-brand-black leading-relaxed font-medium">
                {coach.credentials}
              </p>
            </div>
          )}

          {coach.experience && (
            <div className="flex items-start gap-4">
              <div className="mt-0.5 p-1.5 bg-brand-secondary/10 rounded-lg shrink-0">
                <svg
                  className="w-5 h-5 text-brand-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-brand-black font-bold text-body-lg">
                {coach.experience}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
