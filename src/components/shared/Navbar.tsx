"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./Button";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "About", href: "/about" },
  { name: "Pathway", href: "/pathway" },
  { name: "Programs & Fees", href: "/programs-and-fees" },
  { name: "Private Lessons", href: "/private-lessons" },
  { name: "Coaches", href: "/coaches" },
  { name: "Facilities", href: "/facilities" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // If on home page and at the top, push navbar down to clear the LaunchBanner
  const topPositionClass = isHome && !isScrolled ? "top-[60px] md:top-[64px]" : "top-4 md:top-6";

  return (
    <header className={`fixed left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[95%] md:max-w-6xl z-50 transition-all duration-500 ease-out ${topPositionClass}`}>
      <div className="relative flex h-16 md:h-20 items-center justify-between px-4 sm:px-6 lg:px-8 bg-brand-white/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-brand-white/40 rounded-2xl md:rounded-full transition-all duration-300">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 py-2"
          onClick={closeMenu}
        >
          <div className="relative h-10 md:h-12 flex items-center">
            <Image
              src="/powermytennis-logo.jpeg"
              alt="PowerMyTennis Logo"
              width={160}
              height={60}
              className="h-full w-auto object-contain rounded"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-xs font-black uppercase tracking-widest rounded-full transition-all duration-300 ${
                  isActive 
                    ? "bg-brand-primary text-brand-white shadow-md" 
                    : "text-brand-primary hover:bg-brand-neutral/10"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden md:block">
            <Button
              href="/contact"
              variant="primary"
              className="px-6 py-2.5 text-xs tracking-widest uppercase font-black shadow-md border border-brand-neutral/10 rounded-full"
            >
              Contact Us
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-full text-brand-primary hover:bg-brand-neutral/10 focus:outline-none transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <span className="sr-only">
              {isOpen ? "Close main menu" : "Open main menu"}
            </span>
            <div className="w-6 h-6 relative flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[1px]" : "-translate-y-1"}`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100 mt-1"}`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[1px] absolute" : "translate-y-1 mt-1"}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Floating Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-brand-white/95 backdrop-blur-2xl border border-brand-neutral/20 shadow-2xl rounded-2xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1 sm:px-6 flex flex-col">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-colors ${
                      isActive 
                        ? "bg-brand-primary text-brand-white" 
                        : "text-brand-primary hover:bg-brand-neutral/10"
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-6 px-2 md:hidden">
                <Button
                  href="/contact"
                  variant="primary"
                  className="w-full text-center py-4 rounded-xl text-sm tracking-widest font-black uppercase shadow-lg"
                  onClick={closeMenu}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
