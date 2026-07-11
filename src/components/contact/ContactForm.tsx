"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/actions/contact";
import { programs } from "@/data/programs";
import { useState, useEffect } from "react";

const initialState: ContactFormState = {
  success: false,
};

export function ContactForm() {
  const searchParams = useSearchParams();
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  // Use state to hold the default value so we avoid hydration mismatch
  const [defaultProgram, setDefaultProgram] = useState("");

  useEffect(() => {
    const reason = searchParams.get("reason");
    if (reason) {
      setDefaultProgram(reason);
    }
  }, [searchParams]);

  // Program options from data
  const programOptions = programs.map((p) => p.name);
  if (!programOptions.includes("Pathway Consultation")) {
    programOptions.unshift("Pathway Consultation");
  }

  if (state.success) {
    return (
      <div className="bg-brand-neutral/10 border-2 border-brand-accent rounded-3xl p-10 text-center shadow-lg h-full flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-20 h-20 bg-brand-accent text-brand-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
          <svg
            className="w-10 h-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-h3 font-black text-brand-primary uppercase tracking-tight mb-4">
          Message Sent!
        </h3>
        <p className="text-brand-black text-body-lg">{state.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-8 text-brand-secondary font-bold hover:underline uppercase tracking-widest text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="bg-brand-white rounded-[2rem] shadow-xl border border-brand-neutral/20 h-full flex flex-col relative overflow-hidden"
    >
      <div className="p-8 md:p-10 lg:p-12 flex-1 flex flex-col">
        <div className="mb-10">
          <h3 className="text-h2 font-black text-brand-primary uppercase tracking-tight mb-2">
            Send Message
          </h3>
          <p className="text-brand-black/50 font-medium text-sm max-w-sm">
            Fill in the details below. We respond within 24 hours — for urgent queries, WhatsApp us directly.
          </p>
        </div>

        {state.error && (
          <div className="mb-8 p-4 bg-brand-coral/10 border-l-4 border-brand-coral text-brand-coral font-medium rounded-r-lg text-sm">
            ERROR: {state.error}
          </div>
        )}

        <div className="space-y-6 flex-1">
          {/* Name & Phone in grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label
                htmlFor="name"
                className="block text-[10px] font-black text-brand-secondary mb-2 uppercase tracking-[0.2em] group-focus-within:text-brand-accent transition-colors"
              >
                Player / Parent Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-transparent border-2 border-brand-neutral/20 focus:border-brand-accent rounded-xl px-5 py-4 transition-all outline-none text-brand-primary font-bold placeholder:text-brand-neutral/50 placeholder:font-medium peer"
                  placeholder="John Doe"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-accent opacity-0 peer-focus:opacity-100 transition-opacity" />
              </div>
            </div>

            <div className="group">
              <label
                htmlFor="phone"
                className="block text-[10px] font-black text-brand-secondary mb-2 uppercase tracking-[0.2em] group-focus-within:text-brand-accent transition-colors"
              >
                Contact Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full bg-transparent border-2 border-brand-neutral/20 focus:border-brand-accent rounded-xl px-5 py-4 transition-all outline-none text-brand-primary font-bold placeholder:text-brand-neutral/50 placeholder:font-medium peer"
                  placeholder="+91 98765 43210"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-accent opacity-0 peer-focus:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>

          <div className="group">
            <label
              htmlFor="email"
              className="block text-[10px] font-black text-brand-secondary mb-2 uppercase tracking-[0.2em] group-focus-within:text-brand-accent transition-colors"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-transparent border-2 border-brand-neutral/20 focus:border-brand-accent rounded-xl px-5 py-4 transition-all outline-none text-brand-primary font-bold placeholder:text-brand-neutral/50 placeholder:font-medium peer"
                placeholder="john@example.com"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-accent opacity-0 peer-focus:opacity-100 transition-opacity" />
            </div>
          </div>

          <div className="group">
            <label
              htmlFor="program"
              className="block text-[10px] font-black text-brand-secondary mb-2 uppercase tracking-[0.2em] group-focus-within:text-brand-accent transition-colors"
            >
              Inquiry Type
            </label>
            <div className="relative">
              <select
                id="program"
                name="program"
                value={defaultProgram}
                onChange={(e) => setDefaultProgram(e.target.value)}
                required
                className="w-full bg-transparent border-2 border-brand-neutral/20 focus:border-brand-accent rounded-xl px-5 py-4 transition-all outline-none text-brand-primary font-bold appearance-none cursor-pointer peer"
              >
                <option value="" disabled className="text-brand-neutral/50 font-medium">
                  Select an inquiry type...
                </option>
                {programOptions.map((opt) => (
                  <option key={opt} value={opt} className="font-bold">
                    {opt}
                  </option>
                ))}
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-brand-neutral peer-focus:text-brand-accent transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="group">
            <label
              htmlFor="message"
              className="block text-[10px] font-black text-brand-secondary mb-2 uppercase tracking-[0.2em] group-focus-within:text-brand-accent transition-colors"
            >
              Your Message
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full bg-transparent border-2 border-brand-neutral/20 focus:border-brand-accent rounded-xl px-5 py-4 transition-all outline-none resize-none text-brand-primary font-bold placeholder:text-brand-neutral/50 placeholder:font-medium peer"
                placeholder="Tell us about your goals..."
              />
              <div className="absolute right-4 top-6 w-1.5 h-1.5 rounded-full bg-brand-accent opacity-0 peer-focus:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="group relative w-full overflow-hidden bg-brand-primary rounded-xl py-5 flex items-center justify-center mt-10 transition-all disabled:opacity-50"
        >
          {/* Button Background slide */}
          <div className="absolute inset-0 bg-brand-secondary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          
          {isPending ? (
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-5 h-5 border-3 border-brand-white border-t-transparent rounded-full animate-spin" />
              <span className="font-black uppercase tracking-[0.2em] text-brand-white text-sm">
                Sending...
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-3 relative z-10">
              <span className="font-black uppercase tracking-[0.2em] text-brand-white text-sm group-hover:text-brand-accent transition-colors duration-300">
                Send Message
              </span>
              <svg
                className="w-5 h-5 text-brand-white group-hover:translate-x-1 group-hover:text-brand-accent transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          )}
        </button>
      </div>
    </form>
  );
}
