
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, User, Briefcase, Zap, Mail } from 'lucide-react';

export const Navbar = () => {
  const [isMoon, setIsMoon] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  // Efecto para manejar el cambio de tema en el DOM
  useEffect(() => {
    if (isMoon) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [isMoon]);

  // Efecto para ocultar navbar en el fondo de la web
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Ocultar si estamos muy cerca del final (ej. 100px)
      const isAtBottom = (windowHeight + scrollTop) >= (documentHeight - 100);
      setIsVisible(!isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4"
      >
        <div className="max-w-6xl mx-auto navbar-glass rounded-2xl px-4 md:px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.button
              onClick={() => setIsMoon(!isMoon)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative p-2 rounded-lg border transition-all duration-300 flex items-center justify-center w-10 h-10 ${isMoon
                ? 'bg-indigo-500/10 border-indigo-500/20 shadow-[0_0_15px_-3px_rgba(99,102,241,0.2)]'
                : 'bg-amber-500/10 border-amber-500/20 shadow-[0_0_15px_-3px_rgba(245,158,11,0.2)]'
                }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMoon ? (
                  <motion.div
                    key="moon"
                    initial={{ y: 20, opacity: 0, rotate: 45, scale: 0.5 }}
                    animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ y: -20, opacity: 0, rotate: -45, scale: 0.5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Moon className="w-5 h-5 text-indigo-400 fill-indigo-400/20" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ y: 20, opacity: 0, rotate: -45, scale: 0.5 }}
                    animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ y: -20, opacity: 0, rotate: 45, scale: 0.5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Sun className="w-5 h-5 text-amber-400 fill-amber-400/20" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-bold tracking-tight text-primary transition-colors duration-500 hover:opacity-80"
            >
              Leandro <span className="text-gradient">Moon</span>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavItem href="#about">About</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#stack">AI Stack</NavItem>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Contact Button */}
            <a href="#contact" className="hidden md:flex px-4 py-2 text-sm font-medium bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-primary rounded-lg border border-primary transition-all active:scale-95 duration-500">
              Contactar
            </a>
            
            {/* Mobile Contact Icon */}
            <a href="#contact" className="md:hidden p-2.5 rounded-xl bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 text-[var(--accent-primary)] transition-all active:scale-90">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom App Bar */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: isVisible ? 0 : 120 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden fixed bottom-6 left-4 right-4 z-50 pointer-events-none"
      >
        <div className="navbar-glass rounded-[2rem] px-8 py-4 flex items-center justify-between pointer-events-auto border border-white/10 shadow-2xl">
          <MobileNavItem href="#about" icon={<User className="w-5 h-5" />} label="About" />
          <MobileNavItem href="#projects" icon={<Briefcase className="w-5 h-5" />} label="Projects" />
          <MobileNavItem href="#stack" icon={<Zap className="w-5 h-5" />} label="AI Stack" />
        </div>
      </motion.nav>
    </>
  );
};

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-secondary hover:text-indigo-400 dark:hover:text-indigo-300 transition-colors text-sm font-medium duration-500"
  >
    {children}
  </a>
);

const MobileNavItem = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a href={href} className="flex flex-col items-center gap-1 text-secondary group px-3">
    <div className="p-1 group-hover:text-[var(--accent-primary)] active:scale-90 transition-all duration-300">
      {icon}
    </div>
    <span className="text-[9px] uppercase font-bold tracking-[0.1em] opacity-50 group-hover:opacity-100 transition-opacity">
      {label}
    </span>
  </a>
);
