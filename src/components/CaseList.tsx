
import { useState } from 'react';
import { cn } from '@/lib/utils';
import CaseCard, { Case } from '@/components/CaseCard';
import Icon from '@/components/ui/icon';

// Моковые данные для кейсов
const mockCases: Case[] = [
  {
    id: "case-1",
    name: "Кейс Хищника",
    price: 500,
    description: "Испытай свою удачу и получи шанс обзавестись легендарными скинами!",
    image: "https://source.unsplash.com/400x300/?case,weapon",
    animal: "wolf",
    rarity: "legendary",
    content: [
      { name: "AWP | Дракон", rarity: "immortal", chance: 0.5 },
      { name: "Нож | Кровавая паутина", rarity: "ancient", chance: 2 },
      { name: "AK-47 | Вулкан", rarity: "mythical", chance: 8 },
      { name: "M4A4 | Азимов", rarity: "legendary", chance: 15 }
    ]
  },
  {
    id: "case-2",
    name: "Кейс Засады",
    price: 250,
    description: "Быстрые и смертоносные скины ждут тебя!",
    image: "https://source.unsplash.com/400x300/?case,pistol",
    animal: "fox",
    rarity: "mythical",
    content: [
      { name: "Desert Eagle | Пламя", rarity: "ancient", chance: 3 },
      { name: "Glock-18 | Градиент", rarity: "legendary", chance: 10 },
      { name: "USP-S | Убийство", rarity: "mythical", chance: 20 },
      { name: "P250 | Ядерная угроза", rarity: "rare", chance: 30 }
    ]
  },
  {
    id: "case-3",
    name: "Кейс Тяжеловеса",
    price: 750,
    description: "Мощное оружие для настоящих зверей!",
    image: "https://source.unsplash.com/400x300/?case,heavy",
    animal: "bear",
    rarity: "immortal",
    content: [
      { name: "Negev | Силовое поле", rarity: "immortal", chance: 1 },
      { name: "M249 | Изумруд", rarity: "rare", chance: 20 },
      { name: "XM1014 | Эфириум", rarity: "mythical", chance: 15 },
      { name: "Нова | Ржавый металл", rarity: "common", chance: 40 }
    ]
  },
  {
    id: "case-4",
    name: "Кейс Мудреца",
    price: 350,
    description: "Скины с мистическим прошлым и удивительной силой.",
    image: "https://source.unsplash.com/400x300/?case,mystical",
    animal: "owl",
    rarity: "rare",
    content: [
      { name: "SSG 08 | Лунный свет", rarity: "mythical", chance: 12 },
      { name: "Famas | Нейронная сеть", rarity: "rare", chance: 25 },
      { name: "Galil AR | Эхо", rarity: "uncommon", chance: 35 },
      { name: "AUG | Акаша", rarity: "legendary", chance: 5 }
    ]
  },
  {
    id: "case-5",
    name: "Кейс Скорости",
    price: 300,
    description: "Стремительные скины для быстрых побед.",
    image: "https://source.unsplash.com/400x300/?case,speed",
    animal: "cheetah",
    rarity: "ancient",
    content: [
      { name: "Mac-10 | Сталкер", rarity: "ancient", chance: 3 },
      { name: "MP9 | Звёздный штурм", rarity: "rare", chance: 20 },
      { name: "UMP-45 | Призрак", rarity: "legendary", chance: 7 },
      { name: "MP7 | Блиц", rarity: "uncommon", chance: 40 }
    ]
  },
  {
    id: "case-6",
    name: "Кейс Королевства",
    price: 600,
    description: "Королевские скины для настоящих властителей поля боя.",
    image: "https://source.unsplash.com/400x300/?case,royal",
    animal: "lion",
    rarity: "immortal",
    content: [
      { name: "Нож | Мраморный градиент", rarity: "immortal", chance: 0.8 },
      { name: "USP-S | Королевский декор", rarity: "legendary", chance: 12 },
      { name: "M4A1-S | Гипербест", rarity: "mythical", chance: 18 },
      { name: "AWP | Электрический улей", rarity: "ancient", chance: 5 }
    ]
  }
];

// Фильтры для кейсов
type FilterOption = 'all' | 'immortal' | 'ancient' | 'legendary' | 'mythical' | 'rare' | 'uncommon' | 'common';

interface FilterButtonProps {
  label: string;
  value: FilterOption;
  currentFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
  color: string;
}

const FilterButton = ({ label, value, currentFilter, onFilterChange, color }: FilterButtonProps) => (
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

export function CaseList() {
  const [filter, setFilter] = useState<FilterOption>('all');
  const [sortOrder, setSortOrder] = useState<'price-asc' | 'price-desc'>('price-asc');
  
  // Фильтрация и сортировка кейсов
  const filteredCases = mockCases
    .filter(c => filter === 'all' || c.rarity === filter)
    .sort((a, b) => {
      if (sortOrder === 'price-asc') return a.price - b.price;
      return b.price - a.price;
    });
  
  return (
    <div className="container mx-auto p-4">
      {/* Заголовок и описание */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple mb-2">
          AnimalDrop Cases
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          Открывай кейсы с крутыми скинами CS2. Каждый кейс представлен уникальным животным со своим характером и редкостью.
        </p>
      </div>
      
      {/* Фильтры и сортировка */}
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
      
      {/* Сетка с кейсами */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCases.map(caseItem => (
          <CaseCard key={caseItem.id} caseData={caseItem} />
        ))}
      </div>
      
      {/* Сообщение, если нет кейсов */}
      {filteredCases.length === 0 && (
        <div className="text-center py-10">
          <p className="text-white/50 text-lg">Кейсы с выбранным фильтром не найдены</p>
        </div>
      )}
    </div>
  );
}

export default CaseList;
