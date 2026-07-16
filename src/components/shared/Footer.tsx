import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-white pt-24 pb-8 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Pre-Footer CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-16 border-b border-brand-white/10 mb-16">
          <h2 className="text-hero font-black uppercase tracking-tighter max-w-2xl">
            Ready to <span className="text-brand-accent">dominate?</span>
          </h2>
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-primary font-black uppercase tracking-widest text-sm rounded-full overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10 group-hover:text-brand-white transition-colors duration-300">
              Contact Us
            </span>
            <div className="absolute inset-0 bg-brand-accent transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
          </Link>
        </div>

        {/* Links Grid (Swiss Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 lg:gap-0 mb-24 border-brand-white/10 lg:border-l">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 lg:px-12 lg:border-r lg:border-brand-white/10 flex flex-col justify-between">
            <div>
              <Link
                href="/"
                className="inline-block -ml-3 mb-8 bg-brand-white p-2 rounded-2xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 origin-left"
              >
                <Image
                  src="/powermytennis-logo.jpeg"
                  alt="PowerMyTennis Logo"
                  width={240}
                  height={80}
                  className="h-16 w-auto object-contain rounded-md"
                />
              </Link>
              <p className="text-brand-white/60 text-sm leading-relaxed mb-8 max-w-sm">
                {siteConfig.tagline}
              </p>
            </div>
            
            <div className="flex gap-4">
              {/* Instagram Icon */}
              <Link href="https://instagram.com/powermytennis" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-brand-white/20 flex items-center justify-center hover:bg-brand-white hover:text-brand-primary transition-colors cursor-pointer group">
                <svg className="w-4 h-4 text-brand-white group-hover:text-brand-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </Link>
              {/* Facebook Icon */}
              <Link href="https://facebook.com/powermytennis" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-brand-white/20 flex items-center justify-center hover:bg-brand-white hover:text-brand-primary transition-colors cursor-pointer group">
                <svg className="w-4 h-4 text-brand-white group-hover:text-brand-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:px-12 lg:border-r lg:border-brand-white/10">
            <h3 className="text-brand-accent font-black uppercase tracking-[0.2em] text-xs mb-8">
              Explore
            </h3>
            <ul className="space-y-4">
              {["About", "Pathway", "Programs & Fees", "Facilities"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/ & /g, "-and-").replace(/ /g, "-")}`}
                    className="text-brand-white/60 hover:text-brand-white hover:translate-x-1 inline-block transition-all text-sm font-bold uppercase tracking-wider"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2 lg:px-12 lg:border-r lg:border-brand-white/10">
            <h3 className="text-brand-accent font-black uppercase tracking-[0.2em] text-xs mb-8">
              Support
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Private Lessons", path: "/private-lessons" },
                { name: "Our Coaches", path: "/coaches" },
                { name: "Academy Policies", path: "/policies" },
                { name: "Contact Us", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-brand-white/60 hover:text-brand-white hover:translate-x-1 inline-block transition-all text-sm font-bold uppercase tracking-wider"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 lg:pl-12">
            <h3 className="text-brand-accent font-black uppercase tracking-[0.2em] text-xs mb-8">
              Contact
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group cursor-default">
                <div className="w-10 h-10 rounded-full bg-brand-white/5 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-primary transition-colors shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-brand-white/80 text-sm font-medium leading-relaxed pt-2">
                  {siteConfig.address.city}
                </span>
              </li>
              <li className="flex items-center gap-4 group cursor-default">
                <div className="w-10 h-10 rounded-full bg-brand-white/5 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-primary transition-colors shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-brand-white/80 text-sm font-medium">
                  {siteConfig.phone}
                </span>
              </li>
              <li className="flex items-center gap-4 group cursor-default">
                <div className="w-10 h-10 rounded-full bg-brand-white/5 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-primary transition-colors shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-brand-white/80 text-sm font-medium">
                  {siteConfig.email}
                </span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Massive Typographic Wordmark */}
      <div className="w-full flex justify-center overflow-hidden pointer-events-none select-none border-t border-brand-white/10 pt-16 pb-4">
        <p aria-hidden="true" className="text-[14vw] font-black uppercase text-brand-white/5 tracking-tighter leading-none">
          PowerMyTennis
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand-white/40">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
