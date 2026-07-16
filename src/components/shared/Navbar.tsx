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
  const topPositionClass =
    isHome && !isScrolled ? "top-[60px] md:top-[64px]" : "top-4 md:top-6";

  return (
    <header
      className={`fixed left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[95%] md:max-w-6xl z-50 transition-all duration-500 ease-out ${topPositionClass}`}
    >
      <div className="relative flex h-20 md:h-24 items-center justify-between px-4 sm:px-6 lg:px-8 bg-brand-white/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-brand-white/40 rounded-2xl md:rounded-full transition-all duration-300">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 py-2"
          onClick={closeMenu}
        >
          <div className="relative h-14 md:h-20 flex items-center hover:scale-105 transition-transform duration-300 origin-left">
            <Image
              src="/powermytennis-logo.jpeg"
              alt="PowerMyTennis Logo"
              width={240}
              height={80}
              className="h-full w-auto object-contain rounded"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center lg:gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative lg:px-3 xl:px-4 py-2 text-xs font-black uppercase tracking-widest rounded-full transition-all duration-300 ${
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
              className="lg:px-4 xl:px-6 py-2.5 text-xs tracking-widest uppercase font-black shadow-md border border-brand-neutral/10 rounded-full"
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
              <span
                className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[1px]" : "-translate-y-1"}`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100 mt-1"}`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[1px] absolute" : "translate-y-1 mt-1"}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Floating Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="lg:hidden absolute top-full left-0 right-0 mt-3 bg-brand-white/98 backdrop-blur-2xl border border-brand-neutral/20 shadow-2xl rounded-2xl overflow-hidden"
          >
            {/* Accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-accent" />

            <div className="px-5 pt-5 pb-6 sm:px-7 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, type: "spring", stiffness: 300, damping: 26 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-4 px-4 py-4 rounded-xl text-sm font-black uppercase tracking-widest transition-all duration-200 group ${
                        isActive
                          ? "bg-brand-primary text-brand-white shadow-md"
                          : "text-brand-primary hover:bg-brand-neutral/10 hover:pl-6"
                      }`}
                      onClick={closeMenu}
                    >
                      {/* Active indicator dot */}
                      <span
                        className={`shrink-0 w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                          isActive
                            ? "bg-brand-accent"
                            : "bg-brand-neutral/40 group-hover:bg-brand-accent"
                        }`}
                      />
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Divider */}
              <div className="my-3 h-px bg-brand-neutral/20" />

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.06 + 0.05, type: "spring", stiffness: 280, damping: 24 }}
              >
                <Button
                  href="/contact"
                  variant="primary"
                  className="w-full text-center py-4 rounded-xl text-sm tracking-widest font-black uppercase shadow-lg"
                  onClick={closeMenu}
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
