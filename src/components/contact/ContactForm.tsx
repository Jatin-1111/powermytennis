"use client";

import { useActionState, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/actions/contact";
import { INQUIRY_OPTIONS } from "@/lib/inquiry";

const initialState: ContactFormState = {
  success: false,
};

const labelClass =
  "block text-xs font-black text-brand-secondary mb-2 uppercase tracking-[0.15em]";
const optionalTag = (
  <span className="normal-case tracking-normal font-medium text-brand-black/60">
    {" "}
    (optional)
  </span>
);
const fieldClass =
  "w-full bg-transparent border-2 border-brand-neutral/40 focus:border-brand-primary rounded-xl px-5 py-4 transition-colors outline-none text-brand-primary font-bold placeholder:text-brand-black/45 placeholder:font-medium";

export function ContactForm() {
  const searchParams = useSearchParams();
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  // Pre-select the inquiry type from ?reason= (set by "Book a Free Trial",
  // program cards, etc.). This component sits under a Suspense boundary,
  // so reading search params during render is safe.
  const [picked, setPicked] = useState<string | null>(null);
  const program = picked ?? searchParams.get("reason") ?? "";

  const programOptions = [...INQUIRY_OPTIONS];
  if (program && !programOptions.includes(program)) {
    programOptions.unshift(program);
  }

  const v = state.values;

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
          Request Received
        </h3>
        <p className="text-brand-black text-body-lg">{state.message}</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-8 min-h-11 px-4 text-brand-secondary font-bold hover:underline uppercase tracking-widest text-sm"
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
            Send a Request
          </h3>
          <p className="text-brand-black/70 font-medium text-sm max-w-sm">
            We&rsquo;ll call you back within 24 hours. In a hurry? WhatsApp us
            directly.
          </p>
        </div>

        {state.error && (
          <div
            role="alert"
            className="mb-8 p-4 bg-brand-coral/10 border-l-4 border-brand-coral text-[#9e3328] font-medium rounded-r-lg text-sm"
          >
            {state.error}
          </div>
        )}

        <div className="space-y-6 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className={labelClass}>
                Player / Parent Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                defaultValue={v?.name}
                className={fieldClass}
                placeholder="e.g. Aarav Sharma"
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                autoComplete="tel"
                inputMode="tel"
                pattern="[0-9+\s\-]{10,16}"
                title="A 10-digit mobile number, e.g. 98765 43210"
                defaultValue={v?.phone}
                className={fieldClass}
                placeholder="98765 43210"
              />
            </div>
          </div>

          <div>
            <label htmlFor="program" className={labelClass}>
              What can we help with?
            </label>
            <div className="relative">
              <select
                id="program"
                name="program"
                value={program || v?.program || ""}
                onChange={(e) => setPicked(e.target.value)}
                required
                className={`${fieldClass} appearance-none cursor-pointer pr-12`}
              >
                <option value="" disabled>
                  Choose one…
                </option>
                {programOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <svg
                aria-hidden="true"
                className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none w-5 h-5 text-brand-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email{optionalTag}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              defaultValue={v?.email}
              className={fieldClass}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              Message{optionalTag}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              defaultValue={v?.message}
              className={`${fieldClass} resize-none`}
              placeholder="Player's age, level, or preferred timings"
            />
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
                Send Request
              </span>
              <svg
                className="w-5 h-5 text-brand-white group-hover:translate-x-1 group-hover:text-brand-accent transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          )}
        </button>
      </div>
    </form>
  );
}
