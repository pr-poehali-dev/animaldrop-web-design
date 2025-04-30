
import { useState } from 'react';
import Icon from '@/components/ui/icon';
import FilterButton, { FilterOption } from './FilterButton';

interface CaseFiltersProps {
  filter: FilterOption;
  setFilter: (filter: FilterOption) => void;
  sortOrder: 'price-asc' | 'price-desc';
  setSortOrder: (order: 'price-asc' | 'price-desc') => void;
}

export function CaseFilters({ filter, setFilter, sortOrder, setSortOrder }: CaseFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        <FilterButton
          label="Все кейсы"
          value="all"
          currentFilter={filter}
          onFilterChange={setFilter}
          color="white"
        />
        <FilterButton
          label="Immortal"
          value="immortal"
          currentFilter={filter}
          onFilterChange={setFilter}
          color="immortal"
        />
        <FilterButton
          label="Ancient"
          value="ancient"
          currentFilter={filter}
          onFilterChange={setFilter}
          color="ancient"
        />
        <FilterButton
          label="Legendary"
          value="legendary"
          currentFilter={filter}
          onFilterChange={setFilter}
          color="legendary"
        />
        <FilterButton
          label="Mythical"
          value="mythical"
          currentFilter={filter}
          onFilterChange={setFilter}
          color="mythical"
        />
      </div>
      
      <button
        onClick={() => setSortOrder(order => order === 'price-asc' ? 'price-desc' : 'price-asc')}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
      >
        <span className="text-white/80">Цена</span>
        <Icon
          name={sortOrder === 'price-asc' ? 'ArrowUp' : 'ArrowDown'}
          size={16}
          className="text-white/80"
        />
      </button>
    </div>
  );
}

export default CaseFilters;
