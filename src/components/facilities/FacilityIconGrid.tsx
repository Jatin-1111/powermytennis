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
    <div className="flex flex-wrap justify-center gap-8">
      {FACILITIES.map((facility, index) => (
        <div key={index} className="flex flex-col w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
          <div className="flex-1 w-full flex">
            <FacilityIconCard icon={facility.icon} label={facility.label} />
          </div>
        </div>
      ))}
    </div>
  );
}
