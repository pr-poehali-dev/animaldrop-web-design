
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

// Определение типа элемента навигации
interface NavItem {
  icon: string;
  label: string;
  path: string;
  color: string;
}

// Создание массива элементов навигации
const navItems: NavItem[] = [
  { icon: 'Package', label: 'Кейсы', path: '/', color: 'neon-blue' },
  { icon: 'Sparkles', label: 'Апгрейд', path: '/upgrade', color: 'neon-pink' },
  { icon: 'FileContract', label: 'Контракты', path: '/contracts', color: 'neon-purple' },
  { icon: 'User', label: 'Профиль', path: '/profile', color: 'neon-green' },
  { icon: 'Gift', label: 'Бонусы', path: '/bonus', color: 'neon-yellow' },
];

export function NavigationBar() {
  const [balance, setBalance] = useState(1000);
  
  return (
    <header className="w-full bg-dark-blue border-b border-[#1a2e47] sticky top-0 z-50 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* Логотип */}
          <Link to="/" className="flex items-center gap-2 relative group">
            <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center animate-pulse-glow" style={{"--glow-color": "#9D00FF"} as any}>
              <span className="text-2xl font-display font-bold text-white">A</span>
            </div>
            <div className="text-white font-display font-bold">
              <span className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                Animal<span className="text-white">Drop</span>
              </span>
            </div>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple group-hover:w-full transition-all duration-300"></div>
          </Link>
          
          {/* Основная навигация */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 rounded-md transition-all duration-200",
                  "hover:bg-white/5",
                  "relative overflow-hidden group"
                )}
              >
                <Icon 
                  name={item.icon}
                  className={cn(
                    "text-white/70 group-hover:text-" + item.color,
                    "transition-all duration-300"
                  )}
                  size={18}
                />
                <span className="font-semibold text-white/80 group-hover:text-white transition-colors duration-300">
                  {item.label}
                </span>
                <div className={cn(
                  "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5",
                  "bg-" + item.color,
                  "group-hover:w-[80%] transition-all duration-300"
                )}></div>
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Блок баланса и пополнения */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5 bg-white/5 rounded-lg px-4 py-2 border border-white/10">
            <Icon name="Coins" className="text-immortal" size={18} />
            <span className="font-semibold text-white">{balance.toLocaleString()} ₽</span>
          </div>
          <Button className="bg-gradient-to-r from-neon-green to-neon-blue hover:brightness-110 transition-all duration-300 text-white shadow-lg shadow-neon-blue/20">
            Пополнить
          </Button>
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;
