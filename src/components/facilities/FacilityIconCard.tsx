import { ReactNode } from 'react';

interface FacilityIconCardProps {
  icon: ReactNode;
  label: string;
}

export function FacilityIconCard({ icon, label }: FacilityIconCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-brand-white rounded-3xl shadow-sm border border-brand-neutral/20 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl group h-full">
      <div className="w-20 h-20 bg-brand-neutral/10 rounded-full flex items-center justify-center text-brand-secondary mb-6 group-hover:bg-brand-accent group-hover:text-brand-primary transition-colors duration-300">
        {icon}
      </div>
      <h4 className="text-xl font-black text-brand-primary text-center uppercase tracking-tight leading-tight">
        {label}
      </h4>
    </div>
  );
}
