import { ReactNode } from 'react';
import { MotionSection, MotionItem } from '@/components/shared/MotionSection';

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
    <MotionSection stagger className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <MotionItem>
        <h2 className={`text-h2 font-black uppercase tracking-tight ${textColors}`}>
          {children}
        </h2>
      </MotionItem>
      {subtitle && (
        <MotionItem>
          <p className={`mt-4 text-body-lg font-medium max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${subtitleColors}`}>
            {subtitle}
          </p>
        </MotionItem>
      )}
    </MotionSection>
  );
}
