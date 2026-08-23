"use client";

import Link from "next/link";
import Image from "next/image";
import { coaches } from "@/data/coaches";

export function MeetOurCoachesCTA() {
  return (
    <div className="bg-brand-neutral/5 border-t border-brand-neutral/20">
      <Link
        href="/coaches"
        className="group block md:flex md:items-center md:justify-between px-6 md:px-12 lg:px-20 py-6 md:py-8 gap-4 hover:bg-brand-primary transition-colors duration-500 cursor-pointer"
      >
        {/* Mobile: single column */}
        <div className="flex items-center justify-between md:contents">

          {/* Label + Title */}
          <div className="shrink-0">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary mb-0.5 group-hover:text-brand-accent transition-colors duration-500">
              The Team
            </p>
            <h3 className="text-brand-primary group-hover:text-brand-white font-black uppercase tracking-tight text-lg md:text-2xl transition-colors duration-500">
              Meet Our Coaches
            </h3>
          </div>

          {/* Arrow — visible on all screen sizes */}
          <div className="flex items-center gap-3 shrink-0 md:order-last">
            <span className="hidden lg:block text-xs font-black uppercase tracking-[0.25em] text-brand-black/70 group-hover:text-brand-white/70 transition-colors duration-500">
              View All
            </span>
            <div className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-brand-neutral/30 group-hover:border-brand-accent group-hover:bg-brand-accent flex items-center justify-center transition-all duration-500 shrink-0">
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-brand-black/60 group-hover:text-brand-primary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </div>
        </div>

        {/* Avatars — shown on all sizes, below title on mobile */}
        <div className="flex items-center mt-4 md:mt-0 md:flex-1 md:justify-center gap-3 md:gap-0">
          <div className="flex items-center -space-x-3 xl:-space-x-4">
            {coaches.map((coach, i) => (
              <div
                key={coach.id}
                className="relative w-10 h-10 xl:w-16 xl:h-16 rounded-full border-2 border-brand-neutral/20 group-hover:border-brand-accent/40 overflow-hidden transition-all duration-500 shadow-md bg-brand-primary"
                style={{ zIndex: coaches.length - i, transitionDelay: `${i * 40}ms` }}
              >
                {coach.photoUrl ? (
                  <Image
                    src={coach.photoUrl}
                    alt={coach.name}
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-brand-accent font-black text-sm">
                    {coach.name.charAt(0)}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: count label next to avatars */}
          <span className="lg:hidden text-xs font-bold uppercase tracking-widest text-brand-black/70 group-hover:text-brand-white/70 transition-colors duration-500">
            {coaches.length} Coaches
          </span>

          {/* Desktop: divider + name list */}
          <div className="hidden lg:block w-px h-10 bg-brand-neutral/20 group-hover:bg-brand-white/10 transition-colors duration-500 mx-4 xl:mx-8 shrink-0" />
          <div className="hidden lg:flex flex-col gap-0.5">
            {coaches.slice(0, 3).map((coach) => (
              <p key={coach.id} className="text-xs font-bold text-brand-black/50 group-hover:text-brand-white/50 transition-colors duration-500 uppercase tracking-wider whitespace-nowrap">
                {coach.name.split(" ")[0]}{" "}
                <span className="text-brand-secondary group-hover:text-brand-accent/60 transition-colors duration-500">{coach.role}</span>
              </p>
            ))}
            <p className="text-[10px] font-bold text-brand-black/65 group-hover:text-brand-white/65 transition-colors duration-500 uppercase tracking-widest">
              + {coaches.length - 3} more
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}


