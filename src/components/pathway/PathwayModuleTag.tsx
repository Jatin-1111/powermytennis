import { ModuleColorId } from '@/data/pathway';

interface PathwayModuleTagProps {
  colorId: ModuleColorId;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function PathwayModuleTag({ colorId, size = 'md', className = '' }: PathwayModuleTagProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  };

  const bgClasses: Record<ModuleColorId, string> = {
    'orange': 'bg-module-orange',
    'peach': 'bg-module-peach',
    'purple': 'bg-module-purple',
    'red': 'bg-module-red',
    'cyan': 'bg-module-cyan',
    'grey': 'bg-module-grey',
    'green': 'bg-module-green',
    'yellow-green': 'bg-module-yellow-green',
    'dark-green': 'bg-module-dark-green',
    'pink': 'bg-module-pink'
  };

  return (
    <div 
      className={`rounded-full shadow-sm flex-shrink-0 ${sizeClasses[size]} ${bgClasses[colorId]} ${className}`}
      aria-hidden="true"
    />
  );
}
