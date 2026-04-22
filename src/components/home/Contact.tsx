import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ExternalLink, FileText, CheckCircle2, Loader2 } from 'lucide-react';
import cvPath from '../../assets/Moon_Leandro_2026.pdf';

export const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Simulamos el envío (Target: leanmoon148@gmail.com)
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSending(false);
    setIsSent(true);

    // Reset tras 5 segundos
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section id="contact" className="py-32 relative px-6 z-10 bg-primary transition-colors duration-500 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[var(--accent-primary)]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Side: Strategic Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 text-[var(--accent-primary)] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                Inquiry
              </div>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-primary transition-colors duration-500">
                <span className="text-gradient">Hablemos.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-10">
              <div className="space-y-3">
                <p className="text-secondary text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-500">Based in</p>
                <p className="text-xl text-primary font-light transition-colors duration-500">Buenos Aires, Argentina</p>
              </div>

              <div className="space-y-3">
                <p className="text-secondary text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-500">Professional Focus</p>
                <p className="text-sm text-primary font-light leading-relaxed transition-colors duration-500 max-w-sm">
                  Digital Product Architecture & AI Solutions Strategy. Soluciones con impacto real, mediante diseño empático.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-secondary text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-500">Ideal Fit</p>
                <p className="text-sm text-primary font-light leading-relaxed transition-colors duration-500 max-w-sm">
                  Compañías forward-thinking que busquen perfiles integrales para materializar soluciones reales mediante criterio de diseño y ejecución potenciada por IA.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="https://www.linkedin.com/in/leanmoon/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-secondary border border-primary text-xs text-primary font-bold hover:bg-primary transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href={cvPath}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 text-xs text-[var(--accent-primary)] font-bold hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-300"
              >
                <FileText className="w-4 h-4" />
                Ver CV
              </a>
            </div>
          </motion.div>

          {/* Right Side: Simple Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            <div className="p-8 md:p-12 rounded-[3.5rem] bg-secondary border border-primary glass shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Mail className="w-32 h-32 text-primary" />
              </div>

              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest ml-1">Tu Email</label>
                    <input
                      required
                      type="email"
                      placeholder="hola@empresa.com"
                      className="w-full px-6 py-4 rounded-2xl bg-primary/40 border border-primary focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all text-primary placeholder:text-secondary/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest ml-1">Tu Nombre</label>
                    <input
                      required
                      type="text"
                      placeholder="Nombre Apellido"
                      className="w-full px-6 py-4 rounded-2xl bg-primary/40 border border-primary focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all text-primary placeholder:text-secondary/30"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-primary uppercase tracking-widest ml-1">A qué te gustaría dar fluidez?</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Contame brevemente tu desafío..."
                    className="w-full px-6 py-4 rounded-2xl bg-primary/40 border border-primary focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all text-primary placeholder:text-secondary/30 resize-none"
                  />
                </div>

                <button
                  disabled={isSending || isSent}
                  type="submit"
                  className="w-full py-5 rounded-2xl bg-[var(--accent-primary)] text-white font-bold text-xs tracking-widest uppercase hover:brightness-110 active:scale-[0.98] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Enviando...
                    </>
                  ) : isSent ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      Mensaje Enviado
                    </>
                  ) : (
                    "Enviar Mensaje"
                  )}
                </button>
              </form>

              {/* Success Notification Overlay */}
              <AnimatePresence>
                {isSent && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute inset-0 z-50 flex items-center justify-center p-8 bg-black/40 backdrop-blur-sm"
                  >
                    <div className="bg-secondary p-8 rounded-[2.5rem] border border-[var(--accent-primary)] text-center space-y-4 shadow-2xl max-w-xs">
                      <div className="w-16 h-16 bg-[var(--accent-primary)]/10 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8 text-[var(--accent-primary)]" />
                      </div>
                      <h3 className="text-xl font-bold text-primary">¡Mensaje enviado!</h3>
                      <p className="text-sm text-secondary font-light leading-relaxed">
                        Mensaje enviado correctamente. Me pondré en contacto a la brevedad.
                      </p>
                      <button
                        onClick={() => setIsSent(false)}
                        className="text-[10px] font-bold text-[var(--accent-primary)] uppercase tracking-widest hover:underline"
                      >
                        Cerrar
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
