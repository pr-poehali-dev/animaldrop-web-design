
import { Case } from '@/components/CaseCard';
import CaseCard from '@/components/CaseCard';

interface CaseGridProps {
  cases: Case[];
}

export function CaseGrid({ cases }: CaseGridProps) {
  if (cases.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-white/50 text-lg">Кейсы с выбранным фильтром не найдены</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cases.map(caseItem => (
        <CaseCard key={caseItem.id} caseData={caseItem} />
      ))}
    </div>
  );
}

export default CaseGrid;
