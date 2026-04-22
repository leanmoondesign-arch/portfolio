
export const Footer = () => {
  return (
    <footer className="w-full border-t border-primary py-12 px-6 bg-primary relative z-10 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-bold text-primary tracking-tighter transition-colors duration-500">
            Leandro <span className="text-gradient">Moon</span>
          </span>
          <span className="text-[10px] text-secondary font-bold uppercase tracking-[0.3em] mt-1">
            Digital Product Architect
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 text-primary transition-colors duration-500">
          <span className="font-mono text-[9px] uppercase tracking-[0.4em]">Leandro Moon &copy; 2026</span>
          <div className="hidden md:block h-4 w-[1px] bg-primary/20" />
          <span className="text-[10px] font-mono tracking-widest italic flex items-center gap-2">
            Transformando la fricción en fluidez.
          </span>
        </div>
      </div>
    </footer>
  );
};
