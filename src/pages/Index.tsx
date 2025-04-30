
import NavigationBar from '@/components/NavigationBar';
import CaseList from '@/components/CaseList';
import LiveDrops from '@/components/LiveDrops';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-blue">
      <NavigationBar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <CaseList />
          <LiveDrops />
        </div>
      </main>
      
      <footer className="bg-black/30 border-t border-white/5 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                <span className="text-xl font-display font-bold text-white">A</span>
              </div>
              <span className="text-lg font-display font-bold text-white">
                Animal<span className="text-neon-blue">Drop</span>
              </span>
            </div>
            
            <nav className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">Условия использования</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">Политика конфиденциальности</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">Поддержка</a>
            </nav>
            
            <div className="text-white/40 text-sm">
              © 2025 AnimalDrop. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
