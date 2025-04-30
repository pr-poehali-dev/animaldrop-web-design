
import { Case } from '@/components/CaseCard';
import CaseHeader from '@/components/cases/CaseHeader';
import CaseFilters from '@/components/cases/CaseFilters';
import CaseGrid from '@/components/cases/CaseGrid';
import { mockCases } from '@/components/cases/mockData';
import { useCaseFiltering } from '@/components/cases/useCaseFiltering';

export function CaseList() {
  const { 
    filter, 
    setFilter, 
    sortOrder, 
    setSortOrder, 
    filteredCases 
  } = useCaseFiltering(mockCases);
  
  return (
    <div className="container mx-auto p-4">
      <CaseHeader />
      <CaseFilters 
        filter={filter}
        setFilter={setFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <CaseGrid cases={filteredCases} />
    </div>
  );
}

export default CaseList;
