import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('language');
      if (saved === 'es' || saved === 'en') return saved;
      return 'es';
    } catch (e) {
      console.error("Error loading language from localStorage", e);
      return 'es';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('language', language);
      document.documentElement.lang = language;
    } catch (e) {
      console.error("Error saving language to localStorage", e);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'es' ? 'en' : 'es'));
  };

  const t = (key: string): any => {
    try {
      const keys = key.split('.');
      let value: any = translations[language];
      
      if (!value) {
        console.warn(`Translations for language "${language}" not found`);
        return key;
      }

      for (const k of keys) {
        if (value === undefined || value === null) break;
        value = value[k];
      }
      
      return value !== undefined && value !== null ? value : key;
    } catch (e) {
      console.error(`Error translating key "${key}"`, e);
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

