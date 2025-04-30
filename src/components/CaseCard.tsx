
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

// Определение типа кейса
export interface Case {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  animal: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'mythical' | 'legendary' | 'ancient' | 'immortal';
  content: {
    name: string;
    rarity: 'common' | 'uncommon' | 'rare' | 'mythical' | 'legendary' | 'ancient' | 'immortal';
    chance: number;
  }[];
}

interface CaseCardProps {
  caseData: Case;
}

export function CaseCard({ caseData }: CaseCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "relative group cs-rarity-border rounded-xl overflow-hidden transition-all duration-300", 
        "bg-gradient-to-b from-[#14202e] to-[#0d1620]",
        "transform hover:scale-[1.02] hover:-translate-y-1"
      )}
      style={{"--rarity-color": `var(--${caseData.rarity})`} as any}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Блик на карточке */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Основное содержимое карточки */}
      <div className="p-4">
        {/* Изображение кейса и животного */}
        <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
          <div className={cn(
            "absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out",
            isHovered ? "opacity-0 scale-90" : "opacity-100 scale-100"
          )}>
            <img 
              src={caseData.image} 
              alt={caseData.name}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1620] to-transparent"></div>
          </div>
          
          <div className={cn(
            "absolute inset-0 bg-gradient-to-br from-dark-blue/80 to-dark-blue flex items-center justify-center transition-all duration-700 ease-in-out cyberpunk-grid",
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-110"
          )}>
            <img 
              src={`https://source.unsplash.com/300x300/?${caseData.animal}`} 
              alt={caseData.animal}
              className={cn(
                "w-3/4 h-3/4 object-cover rounded-lg transition-all duration-700 animate-float",
                "drop-shadow-[0_0_15px_rgba(var(--color-value),0.7)]"
              )}
              style={{ "--color-value": caseData.rarity === "immortal" ? "228,174,57" : "75,71,255" } as any}
            />
          </div>
        </div>
        
        {/* Информация о кейсе */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-display font-bold text-white mb-1">{caseData.name}</h3>
          <p className="text-sm text-white/60 text-center mb-3 line-clamp-2">{caseData.description}</p>
          
          {/* Содержимое кейса (показываем при наведении) */}
          <div className={cn(
            "transition-all duration-500 ease-in-out overflow-hidden",
            isHovered ? "max-h-24 opacity-100 mb-4" : "max-h-0 opacity-0"
          )}>
            <p className="text-sm font-semibold text-white/80 mb-2">Содержит:</p>
            <div className="flex flex-wrap justify-center gap-1">
              {caseData.content.map((item, idx) => (
                <span 
                  key={idx} 
                  className={cn(
                    "px-2 py-0.5 text-xs rounded-full",
                    "text-" + item.rarity,
                    "border border-" + item.rarity + "/30",
                    "bg-" + item.rarity + "/10"
                  )}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
          
          {/* Цена и кнопка открытия */}
          <div className="w-full mt-auto">
            <Button 
              className={cn(
                "w-full py-5 flex items-center justify-between gap-4",
                "bg-gradient-to-r transition-all duration-300",
                caseData.rarity === "common" && "from-common/40 to-common hover:bg-common",
                caseData.rarity === "uncommon" && "from-uncommon/40 to-uncommon hover:bg-uncommon",
                caseData.rarity === "rare" && "from-rare/40 to-rare hover:bg-rare",
                caseData.rarity === "mythical" && "from-mythical/40 to-mythical hover:bg-mythical",
                caseData.rarity === "legendary" && "from-legendary/40 to-legendary hover:bg-legendary",
                caseData.rarity === "ancient" && "from-ancient/40 to-ancient hover:bg-ancient",
                caseData.rarity === "immortal" && "from-immortal/40 to-immortal hover:bg-immortal",
              )}
            >
              <span className="font-bold text-white">
                {caseData.price} ₽
              </span>
              <span className="flex items-center gap-1 font-semibold">
                ОТКРЫТЬ
                <Icon name="Unlock" size={16} className="text-white" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseCard;
