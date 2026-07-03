export function PerformanceReportsSection() {
  return (
    <div className="bg-brand-primary rounded-3xl p-8 md:p-12 lg:p-16 text-brand-white shadow-2xl relative overflow-hidden mt-24">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-brand-accent via-transparent to-transparent" />
      
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-brand-accent mb-12 text-center">
          Performance Reports
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Objective Parameters */}
          <div className="bg-brand-white/5 border border-brand-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm shadow-inner hover:bg-brand-white/10 transition-colors">
            <h3 className="text-2xl font-black uppercase tracking-widest text-brand-white mb-8 pb-4 border-b border-brand-white/20 flex items-center gap-4">
              <div className="p-2 bg-brand-white/10 rounded-lg">
                <svg className="w-6 h-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              Objective
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-5">
                <div className="w-4 h-4 bg-brand-accent rounded-full shrink-0 shadow-[0_0_10px_var(--color-brand-accent)]" />
                <span className="text-xl font-medium tracking-wide">Radar Tracking</span>
              </li>
              <li className="flex items-center gap-5">
                <div className="w-4 h-4 bg-brand-accent rounded-full shrink-0 shadow-[0_0_10px_var(--color-brand-accent)]" />
                <span className="text-xl font-medium tracking-wide">Serve Speed Analysis</span>
              </li>
              <li className="flex items-center gap-5">
                <div className="w-4 h-4 bg-brand-accent rounded-full shrink-0 shadow-[0_0_10px_var(--color-brand-accent)]" />
                <span className="text-xl font-medium tracking-wide">Fitness Screening</span>
              </li>
            </ul>
          </div>

          {/* Subjective Parameters */}
          <div className="bg-brand-white/5 border border-brand-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm shadow-inner hover:bg-brand-white/10 transition-colors">
            <h3 className="text-2xl font-black uppercase tracking-widest text-brand-white mb-8 pb-4 border-b border-brand-white/20 flex items-center gap-4">
              <div className="p-2 bg-brand-white/10 rounded-lg">
                <svg className="w-6 h-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              Subjective
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-5">
                <div className="w-4 h-4 bg-[#F2994A] rounded-full shrink-0 shadow-[0_0_10px_#F2994A]" />
                <span className="text-xl font-medium tracking-wide">Attitude & Behavior</span>
              </li>
              <li className="flex items-center gap-5">
                <div className="w-4 h-4 bg-[#F2994A] rounded-full shrink-0 shadow-[0_0_10px_#F2994A]" />
                <span className="text-xl font-medium tracking-wide">Focus & Concentration</span>
              </li>
              <li className="flex items-center gap-5">
                <div className="w-4 h-4 bg-[#F2994A] rounded-full shrink-0 shadow-[0_0_10px_#F2994A]" />
                <span className="text-xl font-medium tracking-wide">Mental Strength</span>
              </li>
              <li className="flex items-center gap-5">
                <div className="w-4 h-4 bg-[#F2994A] rounded-full shrink-0 shadow-[0_0_10px_#F2994A]" />
                <span className="text-xl font-medium tracking-wide">Tactical Play</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
