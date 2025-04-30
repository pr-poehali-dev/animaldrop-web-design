
import { cn } from '@/lib/utils';

export type FilterOption = 'all' | 'immortal' | 'ancient' | 'legendary' | 'mythical' | 'rare' | 'uncommon' | 'common';

export interface FilterButtonProps {
  label: string;
  value: FilterOption;
  currentFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
  color: string;
}

export function FilterButton({ label, value, currentFilter, onFilterChange, color }: FilterButtonProps) {
  return (
    <button
      onClick={() => onFilterChange(value)}
      className={cn(
        "px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300",
        "border",
        currentFilter === value 
          ? `bg-${color}/20 border-${color} text-${color}` 
          : "bg-transparent border-white/10 text-white/60 hover:bg-white/5"
      )}
    >
      {label}
    </button>
  );
}

export default FilterButton;
