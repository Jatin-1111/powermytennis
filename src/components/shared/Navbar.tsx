'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from './Button';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Pathway', href: '/pathway' },
  { name: 'Programs & Fees', href: '/programs-and-fees' },
  { name: 'Coaches', href: '/coaches' },
  { name: 'Facilities', href: '/facilities' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-brand-white shadow-sm border-b border-brand-neutral/20">
      <div className="mx-auto flex h-20 md:h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 py-2" onClick={closeMenu}>
          <div className="relative h-12 md:h-16 flex items-center">
            <Image 
              src="/powermytennis-logo.jpeg" 
              alt="PowerMyTennis Logo" 
              width={200}
              height={80}
              className="h-full w-auto object-contain rounded"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-brand-accent ${isActive ? 'text-brand-accent' : 'text-brand-primary'}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden md:block">
            <Button href="/contact" variant="primary" className="px-6 py-2.5 text-sm shadow-md border border-brand-neutral/10">
              Contact Us
            </Button>
          </div>
          
          <button 
            type="button" 
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-brand-primary hover:text-brand-accent hover:bg-brand-neutral/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg className="block h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="block h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden bg-brand-white border-t border-brand-neutral/10 shadow-lg absolute w-full">
          <div className="px-4 pt-4 pb-6 space-y-2 sm:px-6 shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-base font-black uppercase tracking-widest ${isActive ? 'bg-brand-accent/20 text-brand-primary' : 'text-brand-primary hover:bg-brand-neutral/10'}`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 px-2 md:hidden">
               <Button href="/contact" variant="primary" className="w-full text-center py-3 shadow-md" onClick={closeMenu}>
                 Contact Us
               </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
