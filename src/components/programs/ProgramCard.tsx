import { Program } from '@/data/programs';
import { formatCurrency } from '@/lib/utils';

interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <div className="bg-brand-white border border-brand-neutral/30 rounded-3xl overflow-hidden shadow-lg flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Header */}
      <div className="bg-brand-primary p-6 md:p-8 text-center relative border-b-4 border-brand-accent">
        <h3 className="text-3xl md:text-4xl font-black uppercase text-brand-white tracking-tight mb-3">
          {program.name}
        </h3>
        <div className="inline-block bg-brand-accent text-brand-primary px-5 py-1.5 rounded-full text-sm font-black uppercase tracking-widest shadow-md">
          {program.seats} Seats Available
        </div>
      </div>
      
      {/* Fee Section */}
      <div className="bg-brand-neutral/10 p-6 md:p-8 text-center border-b border-brand-neutral/20">
        <div className="flex items-baseline justify-center gap-1.5">
          <span className="text-5xl md:text-6xl font-black text-brand-secondary font-mono tracking-tighter">
            {formatCurrency(program.fee)}
          </span>
          <span className="text-brand-black font-bold uppercase tracking-widest opacity-60 text-sm md:text-base">
            /{program.feeFrequency.replace('per ', '')}
          </span>
        </div>
        {program.courtInfo && (
          <p className="mt-4 text-brand-black font-bold text-xs md:text-sm tracking-widest uppercase bg-brand-white inline-block px-4 py-2 rounded-lg border border-brand-neutral/30 shadow-sm">
            {program.courtInfo}
          </p>
        )}
      </div>
      
      {/* Schedule Content */}
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        {/* Simple Schedule */}
        {program.simpleSchedule && (
          <div className="mb-6">
            <h4 className="text-xs font-black text-brand-neutral uppercase tracking-widest mb-4">Batch Timings</h4>
            <ul className="space-y-0">
              {program.simpleSchedule.map((slot, idx) => (
                <li key={idx} className="flex flex-col md:flex-row justify-between items-start md:items-center py-3 border-b border-brand-neutral/20 last:border-0">
                  <span className="font-bold text-brand-primary text-sm whitespace-nowrap mb-1 md:mb-0">{slot.time}</span>
                  <span className="text-brand-black font-medium text-sm md:text-right">{slot.activity}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Modules (For Pro / High Performance) */}
        {program.modules && (
          <div className="mb-6">
            {program.moduleSelectionText && (
              <p className="text-xs font-black text-brand-coral uppercase tracking-widest mb-5 text-center bg-brand-coral/10 py-3 px-4 rounded-xl border border-brand-coral/20">
                {program.moduleSelectionText}
              </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {program.modules.map((mod, idx) => (
                <div key={idx} className="bg-brand-neutral/5 p-5 rounded-2xl border border-brand-neutral/20 h-full">
                  {mod.name && (
                    <h5 className="font-black text-brand-primary mb-4 text-center border-b border-brand-neutral/20 pb-3 tracking-widest uppercase text-sm">
                      {mod.name}
                    </h5>
                  )}
                  <ul className="space-y-3">
                    {mod.slots.map((slot, sIdx) => (
                      <li key={sIdx} className="flex flex-col text-sm border-l-2 border-brand-secondary pl-3">
                        <span className="font-black text-brand-secondary tracking-tight">{slot.time}</span>
                        <span className="text-brand-black font-medium mt-0.5 leading-snug">{slot.activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Inclusions */}
        {program.inclusions && program.inclusions.length > 0 && (
          <div className="mt-auto pt-6 border-t-2 border-dashed border-brand-neutral/30">
            <h4 className="text-xs font-black text-brand-neutral uppercase tracking-widest mb-4">Included in Fee</h4>
            <ul className="space-y-3">
              {program.inclusions.map((inclusion, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-brand-black">
                  <div className="p-1 bg-brand-accent rounded-full shrink-0 mt-0.5 shadow-sm">
                    <svg className="w-3 h-3 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-bold leading-tight">{inclusion}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
