import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-white';
  className?: string;
  onClick?: () => void;
}

export function Button({ href, children, variant = 'primary', className = '', onClick }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-bold px-8 py-3.5 rounded-full transition-all duration-200 text-center uppercase tracking-wide text-sm';
  
  const variants = {
    primary: 'bg-brand-accent text-brand-primary hover:bg-[#b0c426] shadow-md hover:shadow-lg',
    secondary: 'bg-brand-secondary text-brand-white hover:bg-[#283818] shadow-md hover:shadow-lg',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-white',
    'outline-white': 'border-2 border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-primary shadow-[0_0_15px_rgba(255,255,255,0.1)]'
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
