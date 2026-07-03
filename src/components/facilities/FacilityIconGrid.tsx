import { FacilityIconCard } from './FacilityIconCard';
import { 
  Layout, 
  LayoutGrid, 
  Dumbbell, 
  Bath, 
  Coffee 
} from 'lucide-react';

const FACILITIES = [
  { label: '4 Tournament Clay Courts', icon: <Layout className="w-10 h-10" /> },
  { label: '2 Mini Clay Courts', icon: <LayoutGrid className="w-10 h-10" /> },
  { label: '600 sq ft Gymnasium', icon: <Dumbbell className="w-10 h-10" /> },
  { label: 'Shower Room', icon: <Bath className="w-10 h-10" /> },
  { label: 'Pantry', icon: <Coffee className="w-10 h-10" /> },
];

export function FacilityIconGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {FACILITIES.map((facility, index) => (
        <div key={index} className={index === 3 ? "lg:col-start-2 lg:col-span-1" : ""}>
          <FacilityIconCard icon={facility.icon} label={facility.label} />
        </div>
      ))}
    </div>
  );
}
