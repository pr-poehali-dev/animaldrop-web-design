
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

// Типы для выпадений
interface DropItem {
  id: number;
  username: string;
  itemName: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'mythical' | 'legendary' | 'ancient' | 'immortal';
  caseName: string;
  avatar: string;
  timestamp: Date;
}

// Моковые данные для демонстрации
const mockDrops: DropItem[] = [
  {
    id: 1,
    username: "WolfHunter",
    itemName: "AWP | Азимов",
    rarity: "immortal",
    caseName: "Кейс Хищника",
    avatar: "https://source.unsplash.com/100x100/?wolf",
    timestamp: new Date()
  },
  {
    id: 2,
    username: "FoxNinja",
    itemName: "Desert Eagle | Пламя",
    rarity: "ancient",
    caseName: "Кейс Засады",
    avatar: "https://source.unsplash.com/100x100/?fox",
    timestamp: new Date(Date.now() - 30000)
  },
  {
    id: 3,
    username: "BearForce",
    itemName: "M249 | Изумруд",
    rarity: "rare",
    caseName: "Кейс Тяжеловеса",
    avatar: "https://source.unsplash.com/100x100/?bear",
    timestamp: new Date(Date.now() - 60000)
  },
  {
    id: 4,
    username: "TigerEye",
    itemName: "Нож Керамбит | Градиент",
    rarity: "legendary",
    caseName: "Кейс Хищника",
    avatar: "https://source.unsplash.com/100x100/?tiger",
    timestamp: new Date(Date.now() - 90000)
  },
  {
    id: 5,
    username: "OwlWisdom",
    itemName: "AK-47 | Вулкан",
    rarity: "mythical",
    caseName: "Кейс Мудреца",
    avatar: "https://source.unsplash.com/100x100/?owl",
    timestamp: new Date(Date.now() - 120000)
  },
];

export function LiveDrops() {
  const [drops, setDrops] = useState<DropItem[]>(mockDrops);
  
  // Имитация появления новых дропов
  useEffect(() => {
    const timer = setInterval(() => {
      // Создаем новый дроп
      const newDrop: DropItem = {
        id: Date.now(),
        username: ["WolfHunter", "FoxNinja", "BearForce", "TigerEye", "OwlWisdom", "EagleEye", "SnakeBite"][Math.floor(Math.random() * 7)],
        itemName: ["AK-47 | Пустынный повстанец", "M4A4 | Кибербезопасность", "AWP | Дракон", "Glock-18 | Градиент", "USP-S | Убийство", "Нож-бабочка | Мраморный градиент"][Math.floor(Math.random() * 6)],
        rarity: ["common", "uncommon", "rare", "mythical", "legendary", "ancient", "immortal"][Math.floor(Math.random() * 7)] as DropItem["rarity"],
        caseName: ["Кейс Хищника", "Кейс Засады", "Кейс Тяжеловеса", "Кейс Мудреца"][Math.floor(Math.random() * 4)],
        avatar: `https://source.unsplash.com/100x100/?animal&random=${Date.now()}`,
        timestamp: new Date()
      };
      
      // Добавляем новый дроп и удаляем старые, если их больше 10
      setDrops(prev => [newDrop, ...prev].slice(0, 10));
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Функция для форматирования времени
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ru-RU', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };
  
  return (
    <div className="w-full px-4 py-6 bg-dark-blue/80 backdrop-blur rounded-xl border border-white/5 mt-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
          <span className="text-neon-blue">LIVE</span> ДРОПЫ
          <span className="animate-pulse bg-red-500 w-2.5 h-2.5 rounded-full"></span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {drops.map((drop) => (
          <div 
            key={drop.id} 
            className={cn(
              "relative flex items-center gap-3 p-3 rounded-lg animate-fade-in", 
              "bg-black/20 hover:bg-black/30 transition-all duration-300",
              drop.id === drops[0]?.id ? "border border-" + drop.rarity : "border border-white/5"
            )}
            style={drop.id === drops[0]?.id ? {"--rarity-color": `var(--${drop.rarity})`} as any : {}}
          >
            {/* Аватар пользователя */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
              <img 
                src={drop.avatar} 
                alt={drop.username}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-grow">
              {/* Имя пользователя */}
              <div className="flex items-center justify-between">
                <p className="font-semibold text-white/90">{drop.username}</p>
                <span className="text-xs text-white/50">{formatTime(drop.timestamp)}</span>
              </div>
              
              {/* Название предмета */}
              <p className={cn(
                "font-bold",
                drop.rarity === 'common' && "text-common",
                drop.rarity === 'uncommon' && "text-uncommon",
                drop.rarity === 'rare' && "text-rare",
                drop.rarity === 'mythical' && "text-mythical",
                drop.rarity === 'legendary' && "text-legendary",
                drop.rarity === 'ancient' && "text-ancient",
                drop.rarity === 'immortal' && "text-immortal"
              )}>
                {drop.itemName}
              </p>
              
              {/* Название кейса */}
              <p className="text-sm text-white/60">из "{drop.caseName}"</p>
            </div>
            
            {drop.id === drops[0]?.id && (
              <div className="absolute -top-1 -right-1 bg-gradient-to-br from-red-500 to-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded shadow-lg">
                NEW!
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveDrops;
