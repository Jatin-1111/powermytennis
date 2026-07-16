"use client";

import Link from "next/link";
import Image from "next/image";
import { coaches } from "@/data/coaches";

export function MeetOurCoachesCTA() {
  return (
    <div className="bg-brand-neutral/5 border-t border-brand-neutral/20">
      <Link
        href="/coaches"
        className="group flex items-center justify-between px-6 md:px-12 lg:px-20 py-6 md:py-8 gap-6 md:gap-12 hover:bg-brand-primary transition-colors duration-500 cursor-pointer"
      >
        {/* Left: Label */}
        <div className="shrink-0 hidden sm:block">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary mb-1 group-hover:text-brand-accent transition-colors duration-500">
            The Team
          </p>
          <h3 className="text-brand-primary group-hover:text-brand-white font-black uppercase tracking-tight text-xl md:text-2xl transition-colors duration-500 whitespace-nowrap">
            Meet Our Coaches
          </h3>
        </div>

        {/* Center: Coach Avatars */}
        <div className="flex items-center flex-1 justify-center">
          {/* Stacked avatars */}
          <div className="flex items-center -space-x-4">
            {coaches.slice(0, 5).map((coach, i) => (
              <div
                key={coach.id}
                className="relative w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-brand-neutral/20 group-hover:border-brand-accent/40 overflow-hidden transition-all duration-500 shadow-md"
                style={{
                  zIndex: coaches.length - i,
                  transitionDelay: `${i * 40}ms`,
                }}
              >
                {coach.photoUrl ? (
                  <Image
                    src={coach.photoUrl}
                    alt={coach.name}
                    fill
                    className="object-cover object-top scale-100 group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-brand-primary flex items-center justify-center text-brand-accent font-black text-lg">
                    {coach.name.charAt(0)}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-brand-neutral/20 group-hover:bg-brand-white/10 transition-colors duration-500 mx-8 shrink-0" />

          {/* Coach names list */}
          <div className="hidden md:flex flex-col gap-0.5">
            {coaches.slice(0, 3).map((coach) => (
              <p
                key={coach.id}
                className="text-xs font-bold text-brand-black/50 group-hover:text-brand-white/50 transition-colors duration-500 uppercase tracking-wider whitespace-nowrap"
              >
                {coach.name.split(" ")[0]}{" "}
                <span className="text-brand-secondary group-hover:text-brand-accent/60 transition-colors duration-500">
                  {coach.role}
                </span>
              </p>
            ))}
            <p className="text-[10px] font-bold text-brand-black/30 group-hover:text-brand-white/30 transition-colors duration-500 uppercase tracking-widest">
              + {coaches.length - 3} more
            </p>
          </div>
        </div>

        {/* Right: Arrow CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="hidden lg:block text-xs font-black uppercase tracking-[0.25em] text-brand-black/40 group-hover:text-brand-white/40 transition-colors duration-500">
            View All
          </span>
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-brand-neutral/20 group-hover:border-brand-accent group-hover:bg-brand-accent flex items-center justify-center transition-all duration-500">
            <svg
              className="w-4 h-4 md:w-5 md:h-5 text-brand-primary group-hover:text-brand-primary transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}
