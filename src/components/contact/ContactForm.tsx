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
        <h3 className="text-3xl font-black text-brand-primary uppercase tracking-tight mb-4">
          Message Sent!
        </h3>
        <p className="text-brand-black text-lg">{state.message}</p>
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
      className="bg-brand-white p-8 md:p-12 rounded-3xl shadow-2xl border border-brand-neutral/30 h-full"
    >
      <h3 className="text-3xl font-black text-brand-primary uppercase tracking-tight mb-8">
        Send us a message
      </h3>

      {state.error && (
        <div className="mb-8 p-4 bg-brand-coral/10 border-l-4 border-brand-coral text-brand-coral font-medium rounded-r-lg">
          {state.error}
        </div>
      )}

      <div className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-bold text-brand-secondary mb-2 uppercase tracking-widest"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-brand-neutral/10 border-2 border-transparent focus:bg-brand-white focus:border-brand-accent rounded-xl px-5 py-4 transition-all outline-none placeholder:text-brand-primary/50 text-brand-primary font-medium"
            placeholder="John Doe"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-bold text-brand-secondary mb-2 uppercase tracking-widest"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full bg-brand-neutral/10 border-2 border-transparent focus:bg-brand-white focus:border-brand-accent rounded-xl px-5 py-4 transition-all outline-none placeholder:text-brand-primary/50 text-brand-primary font-medium"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-brand-secondary mb-2 uppercase tracking-widest"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-brand-neutral/10 border-2 border-transparent focus:bg-brand-white focus:border-brand-accent rounded-xl px-5 py-4 transition-all outline-none placeholder:text-brand-primary/50 text-brand-primary font-medium"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="program"
            className="block text-sm font-bold text-brand-secondary mb-2 uppercase tracking-widest"
          >
            Program of Interest
          </label>
          <select
            id="program"
            name="program"
            required
            value={defaultProgram}
            onChange={(e) => setDefaultProgram(e.target.value)}
            className="w-full bg-brand-neutral/10 border-2 border-transparent focus:bg-brand-white focus:border-brand-accent rounded-xl px-5 py-4 transition-all outline-none placeholder:text-brand-primary/50 text-brand-primary font-medium appearance-none cursor-pointer"
          >
            <option value="" disabled>
              Select a program...
            </option>
            {programOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-bold text-brand-secondary mb-2 uppercase tracking-widest"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full bg-brand-neutral/10 border-2 border-transparent focus:bg-brand-white focus:border-brand-accent rounded-xl px-5 py-4 transition-all outline-none placeholder:text-brand-primary/50 text-brand-primary font-medium resize-y"
            placeholder="How can we help you?"
          ></textarea>
        </div>
      </div>

      <div className="mt-10">
        <button
          type="submit"
          disabled={isPending}
          className={`w-full inline-flex items-center justify-center font-black px-8 py-5 rounded-full transition-all duration-300 text-center uppercase tracking-widest text-brand-primary shadow-lg hover:shadow-xl hover:-translate-y-1 ${isPending ? "bg-brand-neutral opacity-70 cursor-not-allowed" : "bg-brand-accent hover:bg-[#b0c426]"}`}
        >
          {isPending ? "Sending..." : "Send Inquiry"}
        </button>
      </div>
    </form>
  );
}
