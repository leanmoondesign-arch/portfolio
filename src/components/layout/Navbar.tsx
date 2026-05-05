import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, House, Briefcase, Zap, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { AnimatedText } from '../ui/AnimatedText';

export const Navbar = () => {
  const [isMoon, setIsMoon] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const { language, toggleLanguage, t } = useLanguage();

  // Efecto para manejar el cambio de tema en el DOM
  useEffect(() => {
    if (isMoon) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
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
              whileTap={{ scale: 0.85 }}
              animate={{ 
                boxShadow: isMoon 
                  ? [
                      "0 0 4px rgba(99, 102, 241, 0.15)", 
                      "0 0 24px rgba(99, 102, 241, 0.45)", 
                      "0 0 4px rgba(99, 102, 241, 0.15)"
                    ]
                  : [
                      "0 0 4px rgba(245, 158, 11, 0.15)", 
                      "0 0 24px rgba(245, 158, 11, 0.45)", 
                      "0 0 4px rgba(245, 158, 11, 0.15)"
                    ]
              }}
              transition={{ 
                boxShadow: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className={`relative p-2 rounded-xl border transition-all duration-500 flex items-center justify-center w-11 h-11 cursor-pointer ${isMoon
                ? 'bg-indigo-500/15 border-indigo-500/40 text-indigo-400'
                : 'bg-amber-500/15 border-amber-500/40 text-amber-400'
                }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMoon ? (
                  <motion.div
                    key="moon"
                    initial={{ y: 10, opacity: 0, rotate: 45 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -10, opacity: 0, rotate: -45 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Moon className="w-5 h-5 fill-current" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ y: 10, opacity: 0, rotate: -45 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -10, opacity: 0, rotate: 45 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Sun className="w-5 h-5 fill-current" />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Animated glow ring */}
              <motion.div 
                className={`absolute inset-0 rounded-xl border-2 ${isMoon ? 'border-indigo-400' : 'border-amber-400'}`}
                animate={{ opacity: [0.15, 0.5, 0.15] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-bold tracking-tight text-primary transition-colors duration-500 hover:opacity-80"
            >
              Leandro <span className="text-gradient">Moon</span>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavItem href="#hero"><AnimatedText text={t('nav.about')} /></NavItem>
            <NavItem href="#about"><AnimatedText text={t('nav.workflow')} /></NavItem>
            <NavItem href="#projects"><AnimatedText text={t('nav.projects')} /></NavItem>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 p-2 px-3 rounded-lg bg-secondary/50 border border-primary transition-all duration-300 hover:border-indigo-500/50"
            >
              <AnimatePresence mode="wait" initial={false}>
                {language === 'es' ? (
                  <motion.div
                    key="es"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-sm">🇦🇷</span>
                    <span className="text-xs font-bold text-primary tracking-widest">ES</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="en"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-sm">🇺🇸</span>
                    <span className="text-xs font-bold text-primary tracking-widest">EN</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Desktop Contact Button */}
            <a href="#contact" className="hidden md:flex px-4 py-2 text-sm font-medium bg-transparent hover:bg-secondary text-primary rounded-lg border border-primary transition-all active:scale-95 duration-500">
              <AnimatedText text={t('nav.contact')} />
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
        <div className="navbar-glass rounded-[2rem] px-8 py-4 flex items-center justify-between pointer-events-auto border border-primary shadow-2xl transition-colors duration-500">
          <MobileNavItem href="#hero" icon={<House className="w-5 h-5" />} label={t('nav.about')} />
          <MobileNavItem href="#about" icon={<Zap className="w-5 h-5" />} label={t('nav.workflow')} />
          <MobileNavItem href="#projects" icon={<Briefcase className="w-5 h-5" />} label={t('nav.projects')} />
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
      <AnimatedText text={label} />
    </span>
  </a>
);
