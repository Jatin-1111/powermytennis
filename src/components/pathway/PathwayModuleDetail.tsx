import { ModuleColorId, pathwayModules } from "@/data/pathway";
import { PathwayModuleTag } from "./PathwayModuleTag";

interface PathwayModuleDetailProps {
  moduleIds: ModuleColorId[];
}

export function PathwayModuleDetail({ moduleIds }: PathwayModuleDetailProps) {
  if (!moduleIds || moduleIds.length === 0) return null;

  return (
    <div className="mt-2 pl-0 md:pl-8 border-l-2 border-brand-neutral/20 ml-2 md:ml-4 pt-2 pb-2">
      <h4 className="text-xs font-bold text-brand-neutral uppercase tracking-widest mb-4">
        Included Modules
      </h4>
      <ul className="space-y-3">
        {moduleIds.map((id, index) => (
          <li key={`${id}-${index}`} className="flex items-center gap-4">
            <PathwayModuleTag colorId={id} size="sm" />
            <span className="text-brand-primary font-medium text-sm md:text-base">
              {pathwayModules[id].name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
