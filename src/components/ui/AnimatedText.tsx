import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  // If the text has html tags like <bold>, we can parse it
  html?: boolean;
}

export const AnimatedText = ({ text, className = "", html = false }: AnimatedTextProps) => {
  // Manejamos un html simple para <bold> tags u otros
  const renderContent = (content: string) => {
    if (!html) return content;
    
    // Convertimos <bold>texto</bold> a <span className="font-bold">texto</span>
    const parts = content.split(/(<bold>.*?<\/bold>)/g);
    return (
      <>
        {parts.map((part, i) => {
          if (part.startsWith('<bold>') && part.endsWith('</bold>')) {
            return <span key={i} className="text-primary font-semibold">{part.replace(/<\/?bold>/g, '')}</span>;
          }
          return <span key={i}>{part}</span>;
        })}
      </>
    );
  };

  return (
    <span className="relative inline-block">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={text}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`inline-block ${className}`}
        >
          {renderContent(text)}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
