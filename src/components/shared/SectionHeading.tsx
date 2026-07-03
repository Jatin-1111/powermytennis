import { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  isDark?: boolean;
}

export function SectionHeading({ 
  children, 
  subtitle, 
  align = 'center', 
  className = '', 
  isDark = false 
}: SectionHeadingProps) {
  const textColors = isDark ? 'text-brand-white' : 'text-brand-secondary';
  const subtitleColors = isDark ? 'text-brand-neutral' : 'text-brand-primary';

  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-black uppercase tracking-tight ${textColors}`}>
        {children}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg md:text-xl font-medium max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${subtitleColors}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
