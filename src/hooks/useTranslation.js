import { useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = useMemo(() => {
    return (key) => {
      const keys = key.split('.');
      let value = translations[language];

      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) {
          console.warn(`Translation missing for key: ${key} in language: ${language}`);
          return key;
        }
      }

      return value || key;
    };
  }, [language]);

  return { t, language };
};

