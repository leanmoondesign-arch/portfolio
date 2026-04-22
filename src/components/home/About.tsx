import { motion } from 'framer-motion';
import { Sparkles, MessageSquare, Activity } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 relative px-6 z-10 bg-primary transition-colors duration-500 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Main Statement */}
          <div className="lg:col-span-12 mb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tight leading-[1.1] mb-4">
                No diseño pantallas, <br />
                <span className="text-gradient">diseño experiencias</span> que resuelven problemas.
              </h2>
            </motion.div>
          </div>

          {/* Core Philosophy Section */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl text-secondary font-light leading-relaxed">
                Mi proceso no empieza con una idea técnica, sino <span className="text-primary font-medium">escuchando a las personas</span>.
                Identifico dónde se frustra el usuario, dónde se traba un equipo y dónde la tecnología se vuelve un obstáculo en lugar de una ayuda.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-8 rounded-3xl bg-secondary border border-primary glass-card"
            >
              <p className="text-lg text-secondary leading-relaxed font-light">
                Soy un Arquitecto de Productos enfocado en la resolución empática de problemas.
                Mi valor reside en un criterio de diseño que identifica puntos de dolor para crear soluciones que realmente ayuden a las personas.
                Utilizo herramientas de UX, diseño y desarrollo, potenciadas con IA, para materializar soluciones que transforman la fricción en fluidez.
              </p>
            </motion.div>
          </div>

          {/* Key Value Propositions */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            <AboutMetric
              icon={MessageSquare}
              title="Resolución Empática"
              desc="Pongo al humano en el centro de cada decisión técnica."
              index={0}
            />
            <AboutMetric
              icon={Sparkles}
              title="IA Native Thinking"
              desc="Uso la IA para acelerar la innovación y optimizar procesos."
              index={1}
            />
            <AboutMetric
              icon={Activity}
              title="Fricción → Fluidez"
              desc="Transformo obstáculos complejos en flujos intuitivos."
              index={2}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

const AboutMetric = ({ icon: Icon, title, desc, index }: { icon: any, title: string, desc: string, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
    className="flex items-start gap-4 p-6 rounded-2xl bg-primary/30 border border-primary hover:border-indigo-500/50 transition-colors group"
  >
    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h4 className="text-primary font-bold mb-1">{title}</h4>
      <p className="text-secondary text-sm font-light leading-snug">{desc}</p>
    </div>
  </motion.div>
);
