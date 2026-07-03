import { PrivateLessonFee } from '@/data/programs';
import { formatCurrency } from '@/lib/utils';

interface FeeTableProps {
  fees: PrivateLessonFee[];
}

export function FeeTable({ fees }: FeeTableProps) {
  return (
    <div className="w-full">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-hidden rounded-3xl border border-brand-neutral/30 shadow-lg">
        <table className="w-full text-left bg-brand-white">
          <thead className="bg-brand-primary text-brand-white uppercase tracking-widest text-sm">
            <tr>
              <th className="px-8 py-6 font-black">Coach Tier</th>
              <th className="px-8 py-6 font-black text-right">Fee</th>
              <th className="px-8 py-6 font-black">Duration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-neutral/20">
            {fees.map((fee, idx) => (
              <tr key={idx} className="transition-colors hover:bg-brand-neutral/5">
                <td className="px-8 py-6 font-black text-brand-primary text-lg uppercase tracking-tight">{fee.role}</td>
                <td className="px-8 py-6 font-mono font-black text-brand-secondary text-right text-2xl tracking-tighter">{formatCurrency(fee.fee)}</td>
                <td className="px-8 py-6 font-bold text-brand-black">{fee.duration.replace('per ', 'Per ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Stack */}
      <div className="md:hidden space-y-4">
        {fees.map((fee, idx) => (
          <div key={idx} className="bg-brand-white p-6 rounded-2xl border border-brand-neutral/30 shadow-md flex flex-col">
            <h4 className="font-black text-brand-primary text-xl mb-4 uppercase tracking-tight">{fee.role}</h4>
            <div className="flex items-end justify-between border-t border-dashed border-brand-neutral/30 pt-4 mt-auto">
              <span className="font-mono font-black text-brand-secondary text-2xl tracking-tighter">{formatCurrency(fee.fee)}</span>
              <span className="font-bold text-brand-black text-sm uppercase tracking-wide bg-brand-neutral/10 px-3 py-1 rounded-md">{fee.duration.replace('per ', 'Per ')}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
