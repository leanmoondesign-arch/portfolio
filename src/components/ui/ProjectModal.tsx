import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, GitBranch, Target, Zap, Lightbulb, Compass, Cpu, CheckCircle, Image as ImageIcon, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { CaseStudy } from '../../types';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: CaseStudy | null;
}

export const ProjectModal = ({ isOpen, onClose, data }: ProjectModalProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [validImages, setValidImages] = useState<string[]>([]);

  // Initialize and synchronize valid images
  useEffect(() => {
    if (data?.images) {
      setValidImages(data.images);
    }
  }, [data]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      document.body.classList.add('modal-open');
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.body.classList.remove('modal-open');
      setActiveImageIndex(0);
      setIsZoomed(false);
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  const handleImageError = (imgUrl: string) => {
    setValidImages((prev) => prev.filter((url) => url !== imgUrl));
    // If the active image fails, reset to first valid image
    if (validImages[activeImageIndex] === imgUrl) {
      setActiveImageIndex(0);
    }
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (validImages.length === 0) return;
    setActiveImageIndex((prev) => (prev + 1) % validImages.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (validImages.length === 0) return;
    setActiveImageIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  };

  return (
    <AnimatePresence>
      {isOpen && data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-6 bg-black/80 backdrop-blur-xl"
          onClick={onClose}
        >
          {/* Zoomed / Lightbox View */}
          <AnimatePresence>
            {isZoomed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 cursor-zoom-out"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomed(false);
                }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomed(false);
                  }}
                  className="absolute top-6 right-6 p-4 rounded-full bg-indigo-500/20 hover:bg-indigo-500/40 text-white backdrop-blur-xl border border-indigo-400/30 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all z-50 group"
                >
                  <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
                </button>

                <div className="relative w-full h-full flex items-center justify-center p-4">
                  <motion.img
                    key={`zoomed-${activeImageIndex}`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="max-w-full max-h-full object-contain"
                    src={data.images![activeImageIndex]}
                    alt={`${data.title} zoomed view`}
                  />

                  {data.images && data.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-6 md:left-12 p-4 rounded-full bg-indigo-500/20 hover:bg-indigo-500/40 text-white backdrop-blur-xl border border-indigo-400/30 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all active:scale-90"
                      >
                        <ChevronLeft className="w-8 h-8" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-6 md:right-12 p-4 rounded-full bg-indigo-500/20 hover:bg-indigo-500/40 text-white backdrop-blur-xl border border-indigo-400/30 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all active:scale-90"
                      >
                        <ChevronRight className="w-8 h-8" />
                      </button>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full h-full md:h-auto md:max-w-6xl bg-primary border-y md:border border-primary md:rounded-3xl shadow-2xl overflow-hidden relative flex flex-col max-h-[100vh] md:max-h-[92vh] transition-colors duration-500"
          >
            {/* Window Top Bar - Fixed Project Navbar */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-primary bg-primary/90 backdrop-blur-xl sticky top-0 z-40 transition-colors duration-500">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 px-1">
                  <span className="h-3 w-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]" />
                  <span className="h-3 w-3 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.3)]" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
                </div>
                <div className="h-5 w-[1px] bg-primary opacity-20" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-indigo-500 uppercase tracking-[0.3em] leading-none mb-1">
                    Project Architecture
                  </span>
                  <span className="text-sm font-bold text-primary tracking-tight leading-none">
                    {data.title}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden md:block text-[10px] font-bold text-secondary uppercase tracking-[0.2em] border border-primary px-4 py-1.5 rounded-full transition-colors duration-500">
                  {data.category}
                </span>
                <button
                  onClick={onClose}
                  className="p-2.5 rounded-xl bg-secondary border border-primary text-secondary hover:text-primary hover:border-indigo-500 transition-all duration-300 group"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth">
              <div className="p-8 md:p-14 md:pt-20">
                {/* Hero Branding */}
                <div className="mb-16">
                  <div className="flex items-center gap-2 mb-4 text-indigo-500 font-mono text-xs tracking-[0.2em] uppercase">
                    <Compass className="w-4 h-4" />
                    <span>Strategic Design</span>
                  </div>
                  <h2 className="text-4xl md:text-7xl font-bold text-primary mb-8 tracking-tighter leading-[1] transition-colors duration-500">
                    {data.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {data.stack.map((tech, i) => (
                      <span key={`${data.id}-tech-${i}`} className="px-3 py-1.5 rounded-lg bg-secondary border border-primary text-[10px] md:text-xs font-bold text-secondary uppercase tracking-widest transition-colors duration-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Images Showcase - Carousel High End */}
                {validImages && validImages.length > 0 && (
                  <section className="mb-24">
                    <div className="flex items-center justify-between mb-14 pt-8">
                      <div className="flex items-center gap-3 text-primary">
                        <ImageIcon className="w-5 h-5" />
                        <h3 className="font-bold uppercase tracking-[0.2em] text-xs">Preview</h3>
                      </div>

                      {validImages.length > 1 && (
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-secondary px-3 tracking-widest">
                            {(activeImageIndex + 1).toString().padStart(2, '0')} / {validImages.length.toString().padStart(2, '0')}
                          </span>
                          <button onClick={prevImage} className="p-2 rounded-lg bg-secondary border border-primary text-secondary hover:text-indigo-500 transition-colors">
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button onClick={nextImage} className="p-2 rounded-lg bg-secondary border border-primary text-secondary hover:text-indigo-500 transition-colors">
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="relative aspect-video md:aspect-[21/9] w-full rounded-3xl overflow-hidden border border-primary bg-secondary/30 group">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`carousel-${activeImageIndex}`}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, ease: "circOut" }}
                          className="w-full h-full relative cursor-zoom-in"
                          onClick={() => setIsZoomed(true)}
                        >
                          {/* Blurred Background to fill aspect ratio gaps */}
                          <img
                            src={validImages[activeImageIndex]}
                            className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-20 scale-110"
                            alt=""
                          />
                          {/* Main Image - No cropping */}
                          <img
                            src={validImages[activeImageIndex]}
                            alt={`${data.title} screenshot ${activeImageIndex + 1}`}
                            className="relative w-full h-full object-contain p-4 md:p-8"
                            onError={() => handleImageError(validImages[activeImageIndex])}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest border border-white/30">
                              <Maximize2 className="w-3 h-3" />
                              Ver en Pantalla Completa
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Thumbnails */}
                    {validImages.length > 1 && (
                      <div className="flex gap-4 mt-8 overflow-x-auto pb-4 custom-scrollbar justify-start md:justify-center">
                        {validImages.map((img, i) => (
                          <button
                            key={`thumb-${i}`}
                            onClick={() => setActiveImageIndex(i)}
                            className={`relative flex-shrink-0 w-24 aspect-video rounded-xl overflow-hidden border-2 transition-all ${activeImageIndex === i ? 'border-indigo-500 scale-105' : 'border-transparent opacity-50 hover:opacity-100'
                              }`}
                          >
                            <img
                              src={img}
                              alt="thumbnail"
                              className="w-full h-full object-contain p-1"
                              onError={() => handleImageError(img)}
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </section>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                  <div className="lg:col-span-8 space-y-16">
                    {/* Vision Section */}
                    {(data.vision || data.summary) && (
                      <section>
                        <div className="flex items-center gap-3 mb-6 text-indigo-500">
                          <Lightbulb className="w-5 h-5" />
                          <h3 className="font-bold uppercase tracking-[0.2em] text-xs">Visión Estratégica</h3>
                        </div>
                        <p className="text-primary text-xl md:text-2xl font-light leading-relaxed transition-colors duration-500 italic border-l-2 border-indigo-500/30 pl-6">
                          "{data.vision || data.summary}"
                        </p>
                      </section>
                    )}

                    {/* Problem / Solution Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <section className="p-8 rounded-3xl bg-secondary/20 border border-primary transition-colors duration-500">
                        <div className="flex items-center gap-3 mb-4 text-red-500/70">
                          <Target className="w-4 h-4" />
                          <h3 className="font-bold uppercase tracking-[0.2em] text-[10px]">Problemática</h3>
                        </div>
                        <p className="text-secondary text-sm leading-relaxed font-light transition-colors duration-500">
                          {data.problem}
                        </p>
                      </section>
                      <section className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 transition-colors duration-500">
                        <div className="flex items-center gap-3 mb-4 text-emerald-500/70">
                          <Zap className="w-4 h-4" />
                          <h3 className="font-bold uppercase tracking-[0.2em] text-[10px]">Solución Arquitectada</h3>
                        </div>
                        <p className="text-secondary text-sm leading-relaxed font-light transition-colors duration-500">
                          {data.solution}
                        </p>
                      </section>
                    </div>

                    {/* Features / Modules */}
                    {data.features && (
                      <section>
                        <div className="flex items-center gap-3 mb-8 text-primary">
                          <Cpu className="w-5 h-5" />
                          <h3 className="font-bold uppercase tracking-[0.2em] text-xs">Funcionalidades Clave</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {data.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 border border-primary transition-colors duration-500 group hover:border-indigo-500/50">
                              <div className="w-8 h-8 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 shrink-0 group-hover:scale-110 transition-transform">
                                <CheckCircle className="w-4 h-4" />
                              </div>
                              <span className="text-sm text-secondary font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {/* Execution / Vibecoding */}
                    {data.execution && (
                      <section>
                        <div className="p-8 rounded-3xl bg-indigo-500/5 border border-indigo-500/20 relative overflow-hidden group transition-colors duration-500">
                          <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Cpu className="w-24 h-24" />
                          </div>
                          <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                            Vibecoding & Ejecución IA
                          </h3>
                          <p className="text-secondary text-sm leading-relaxed font-light relative z-10">
                            {data.execution}
                          </p>
                        </div>
                      </section>
                    )}
                  </div>

                  {/* Sidebar / High Impact Results */}
                  <div className="lg:col-span-4">
                    <div className="p-8 rounded-[2rem] bg-primary border border-primary shadow-xl transition-all duration-500 sticky top-12">
                      <div className="flex items-center gap-3 mb-8 text-emerald-500">
                        <Zap className="w-6 h-6" />
                        <h3 className="font-bold uppercase tracking-[0.2em] text-xs">Impacto & Valor</h3>
                      </div>
                      <ul className="space-y-6">
                        {data.impact?.map((res, i) => (
                          <li key={`${data.id}-res-${i}`} className="flex items-start gap-4 group">
                            <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                            <span className="text-sm text-secondary font-light leading-relaxed transition-colors duration-500 group-hover:text-primary">{res}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-12 flex flex-col gap-4">
                        {data.privacyNotice && (
                          <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 mb-4 transition-colors duration-500">
                            <h4 className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                              <X className="w-3 h-3" />
                              Nota de Privacidad
                            </h4>
                            <p className="text-xs text-secondary leading-relaxed font-light">
                              {data.privacyNotice}
                            </p>
                          </div>
                        )}

                        {data.demo && (
                          <>
                            {typeof data.demo === 'string' && data.demo !== '#' ? (
                              <motion.a
                                href={data.demo}
                                target="_blank"
                                rel="noopener"
                                whileHover={{
                                  scale: 1.02,
                                  boxShadow: "0 10px 40px -10px rgba(99, 102, 241, 0.4)",
                                  filter: "brightness(1.1)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center justify-between p-4 rounded-xl bg-secondary border border-primary text-primary font-bold text-[10px] tracking-widest transition-all hover:border-indigo-500/50"
                              >
                                EXPLORAR PROYECTO
                                <div className="bg-indigo-500/10 p-2 rounded-lg text-indigo-500">
                                  <ExternalLink className="w-4 h-4" />
                                </div>
                              </motion.a>
                            ) : Array.isArray(data.demo) ? (
                              <div className="space-y-3">
                                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest px-1">Links del Ecosistema</span>
                                {data.demo.map((link, idx) => (
                                  <motion.a
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener"
                                    whileHover={{
                                      scale: 1.02,
                                      boxShadow: "0 10px 40px -10px rgba(99, 102, 241, 0.4)",
                                      filter: "brightness(1.1)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center justify-between p-4 rounded-xl bg-secondary border border-primary text-primary font-bold text-[10px] tracking-widest transition-all hover:border-indigo-500/50"
                                  >
                                    {link.label}
                                    <ExternalLink className="w-3.5 h-3.5 text-indigo-500" />
                                  </motion.a>
                                ))}
                              </div>
                            ) : null}
                          </>
                        )}
                        {data.github && data.github !== '#' && (
                          <a href={data.github} target="_blank" rel="noopener" className="flex items-center justify-between p-4 rounded-2xl bg-secondary text-primary font-bold text-xs transition-all hover:bg-primary hover:text-secondary active:scale-[0.98]">
                            REPOSITORIO
                            <GitBranch className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
