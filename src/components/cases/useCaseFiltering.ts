
import { useState, useMemo } from 'react';
import { FilterOption } from './FilterButton';
import { Case } from '@/components/CaseCard';

export function useCaseFiltering(cases: Case[]) {
  const [filter, setFilter] = useState<FilterOption>('all');
  const [sortOrder, setSortOrder] = useState<'price-asc' | 'price-desc'>('price-asc');
  
  // Фильтрация и сортировка кейсов
  const filteredCases = useMemo(() => {
    return cases
      .filter(c => filter === 'all' || c.rarity === filter)
      .sort((a, b) => {
        if (sortOrder === 'price-asc') return a.price - b.price;
        return b.price - a.price;
      });
  }, [cases, filter, sortOrder]);
  
  return {
    filter,
    setFilter,
    sortOrder,
    setSortOrder,
    filteredCases
  };
}

export default useCaseFiltering;
