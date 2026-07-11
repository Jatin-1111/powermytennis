"use client";

import { useActionState, useState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { programs } from "@/data/programs";
import { Container } from "@/components/shared/Container";
import { MotionSection, MotionItem } from "@/components/shared/MotionSection";
import { siteConfig } from "@/data/siteConfig";

const initialState: ContactFormState = { success: false };

export function TrialCTA() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const formattedPhone = siteConfig.phone.replace(/\s+/g, "");
  const whatsappUrl = `https://wa.me/91${formattedPhone}?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20trial%20session%20at%20PowerMyTennis.`;

  const [selectedProgram, setSelectedProgram] = useState("");

  const inputClass =
    "w-full bg-brand-white/5 border border-brand-white/15 focus:border-brand-accent rounded-xl px-5 py-4 transition-all outline-none text-brand-white font-medium placeholder:text-brand-white/30 text-sm";

  return (
    <section className="bg-brand-primary py-section relative overflow-hidden border-y border-brand-accent/10">
      {/* Geometric pinstripe background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(198,217,43,0.08) 30px, rgba(198,217,43,0.08) 32px)`,
        }}
      />
      <div className="absolute inset-0 shadow-[inset_0_0_120px_60px_#22261B] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">

          {/* Left: Copy */}
          <MotionSection stagger>
            <MotionItem>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-white/50">
                  Zero Commitment
                </span>
              </div>
            </MotionItem>

            <MotionItem>
              <h2 className="text-h2 font-black uppercase tracking-tight text-brand-white leading-none mb-6">
                Book a <br />
                <span className="text-brand-accent">Free Trial</span>
              </h2>
            </MotionItem>

            <MotionItem>
              <p className="text-brand-white/60 font-medium text-lg leading-relaxed mb-10 max-w-md text-pretty">
                Bring your child for one complimentary session. Our coaches
                assess their level, explain the right program, and show you our
                training methodology — no strings attached.
              </p>
            </MotionItem>

            <MotionItem>
              <ul className="space-y-4 mb-10">
                {[
                  "Expert evaluation of current skill level",
                  "Personalized program recommendation",
                  "Full tour of our 6 clay court facility",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center mt-0.5 shrink-0">
                      <svg className="w-3 h-3 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-brand-white/75 font-medium text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </MotionItem>

            <MotionItem>
              <div className="flex items-center gap-4 pt-6 border-t border-brand-white/10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-accent font-black text-sm uppercase tracking-widest hover:underline underline-offset-4 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp us instead
                </a>
                <span className="text-brand-white/20 text-xs">or call {siteConfig.phone}</span>
              </div>
            </MotionItem>
          </MotionSection>

          {/* Right: Form */}
          <MotionSection>
            <MotionItem>
              {state.success ? (
                <div className="bg-brand-white/5 border border-brand-accent/30 rounded-[2rem] p-10 text-center flex flex-col items-center justify-center min-h-[400px]">
                  <div className="w-16 h-16 bg-brand-accent text-brand-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-md shadow-brand-accent/30">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-brand-white uppercase tracking-tight mb-3">
                    You&rsquo;re Booked!
                  </h3>
                  <p className="text-brand-white/60 text-sm font-medium max-w-xs">
                    {state.message}
                  </p>
                </div>
              ) : (
                <form
                  action={formAction}
                  className="bg-brand-white/5 border border-brand-white/10 rounded-[2rem] p-8 md:p-10 space-y-5"
                >
                  <input type="hidden" name="message" value="Free trial session inquiry from homepage." />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="trial-name" className="block text-[10px] font-black uppercase tracking-[0.2em] text-brand-white/40 mb-2">
                        Player / Parent Name
                      </label>
                      <input
                        type="text"
                        id="trial-name"
                        name="name"
                        required
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="trial-phone" className="block text-[10px] font-black uppercase tracking-[0.2em] text-brand-white/40 mb-2">
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        id="trial-phone"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="trial-email" className="block text-[10px] font-black uppercase tracking-[0.2em] text-brand-white/40 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="trial-email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="trial-program" className="block text-[10px] font-black uppercase tracking-[0.2em] text-brand-white/40 mb-2">
                      Program of Interest
                    </label>
                    <div className="relative">
                      <select
                        id="trial-program"
                        name="program"
                        required
                        value={selectedProgram}
                        onChange={(e) => setSelectedProgram(e.target.value)}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="" disabled className="bg-brand-primary text-brand-white/50">
                          Select a program...
                        </option>
                        {programs.map((p) => (
                          <option key={p.id} value={p.name} className="bg-brand-primary text-brand-white font-medium">
                            {p.name}
                          </option>
                        ))}
                        <option value="Not sure yet" className="bg-brand-primary text-brand-white font-medium">
                          Not sure yet
                        </option>
                      </select>
                      <svg className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-white/40 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {state.error && (
                    <p className="text-brand-coral text-sm font-medium bg-brand-coral/10 px-4 py-3 rounded-xl border border-brand-coral/20">
                      {state.error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isPending}
                    className="group relative w-full overflow-hidden bg-brand-accent text-brand-primary rounded-xl py-4 flex items-center justify-center mt-2 font-black uppercase tracking-widest text-sm transition-all disabled:opacity-50 hover:shadow-[0_8px_30px_rgba(198,217,43,0.35)]"
                  >
                    <div className="absolute inset-0 bg-brand-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    {isPending ? (
                      <span className="flex items-center gap-3 relative z-10">
                        <span className="w-4 h-4 border-2 border-brand-primary/40 border-t-brand-primary rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-3 relative z-10">
                        Book My Free Trial
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    )}
                  </button>

                  <p className="text-center text-brand-white/25 text-[11px] font-medium">
                    We respond within 24 hours &nbsp;·&nbsp; No commitment required
                  </p>
                </form>
              )}
            </MotionItem>
          </MotionSection>

        </div>
      </Container>
    </section>
  );
}
