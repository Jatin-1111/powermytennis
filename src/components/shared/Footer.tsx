import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="bg-brand-primary border-t-4 border-brand-accent text-brand-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-block mb-6 bg-brand-white p-2 rounded-xl shadow-sm hover:opacity-90 transition-opacity"
            >
              <Image
                src="/powermytennis-logo.jpeg"
                alt="PowerMyTennis Logo"
                width={180}
                height={70}
                className="h-12 w-auto object-contain rounded-md"
              />
            </Link>
            <p className="text-brand-neutral text-sm leading-relaxed mb-6 pr-4">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-brand-accent font-black uppercase tracking-widest text-sm mb-6">
              Explore
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-brand-neutral hover:text-brand-white transition-colors text-sm font-medium"
                >
                  About The Academy
                </Link>
              </li>
              <li>
                <Link
                  href="/pathway"
                  className="text-brand-neutral hover:text-brand-white transition-colors text-sm font-medium"
                >
                  Coaching Pathway
                </Link>
              </li>
              <li>
                <Link
                  href="/programs-and-fees"
                  className="text-brand-neutral hover:text-brand-white transition-colors text-sm font-medium"
                >
                  Programs & Fees
                </Link>
              </li>
              <li>
                <Link
                  href="/facilities"
                  className="text-brand-neutral hover:text-brand-white transition-colors text-sm font-medium"
                >
                  Facilities
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-brand-accent font-black uppercase tracking-widest text-sm mb-6">
              Support
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/private-lessons"
                  className="text-brand-neutral hover:text-brand-white transition-colors text-sm font-medium"
                >
                  Private Lessons
                </Link>
              </li>
              <li>
                <Link
                  href="/coaches"
                  className="text-brand-neutral hover:text-brand-white transition-colors text-sm font-medium"
                >
                  Our Coaches
                </Link>
              </li>
              <li>
                <Link
                  href="/policies"
                  className="text-brand-neutral hover:text-brand-white transition-colors text-sm font-medium"
                >
                  Academy Policies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-brand-neutral hover:text-brand-white transition-colors text-sm font-medium"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-brand-accent font-black uppercase tracking-widest text-sm mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-brand-neutral shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-brand-neutral text-sm">
                  {siteConfig.address.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-brand-neutral shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-brand-neutral text-sm">
                  {siteConfig.phone}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-brand-neutral shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-brand-neutral text-sm">
                  {siteConfig.email}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-neutral/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-brand-neutral">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>Powered by Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
