import { policies } from "@/data/programs";

export function DiscountCallout() {
  return (
    <div className="bg-brand-accent/20 border-2 border-brand-accent rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 justify-between shadow-md mb-16">
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-h3 font-black text-brand-primary uppercase tracking-tight mb-3">
          Sibling Discount
        </h3>
        <p className="text-brand-black text-body-lg font-medium leading-relaxed">
          We offer a{" "}
          <strong className="text-brand-primary font-black bg-brand-accent/40 px-2 rounded">
            {policies.siblingDiscountPercentage}% discount
          </strong>{" "}
          on fees for siblings enrolling together.
        </p>
      </div>

      <div className="w-full md:w-0.5 h-px md:h-24 bg-brand-accent" />

      <div className="flex-1 text-center md:text-left">
        <h3 className="text-h3 font-black text-brand-primary uppercase tracking-tight mb-3">
          Registration Policy
        </h3>
        <p className="text-brand-black text-body-lg font-medium leading-relaxed">
          A one-time, non-refundable registration fee of{" "}
          <strong className="text-brand-primary font-black font-mono tracking-tighter">
            ₹{policies.registrationFee.amount}
          </strong>{" "}
          applies to {policies.registrationFee.applicableGroups.join(", ")}{" "}
          groups.
        </p>
        <p className="text-brand-primary font-bold text-sm mt-2 italic bg-brand-white inline-block px-3 py-1 rounded shadow-sm border border-brand-neutral/30">
          * {policies.depositRule}
        </p>
      </div>
    </div>
  );
}
