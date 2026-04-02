import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Language, getPrompts, getStylePresets } from '../translations';
import { StylePreset } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.en) => string;
  prompts: ReturnType<typeof getPrompts>;
  presets: StylePreset[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: keyof typeof translations.en) => {
    return translations[language][key] || translations['en'][key];
  };

  const prompts = getPrompts(language);
  const presets = getStylePresets(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, prompts, presets }}>
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