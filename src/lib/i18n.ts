import i18n from 'i18next';


// Import translation files
import enTranslation from '../locales/en/translation.json';
import hiTranslation from '../locales/hi/translation.json';
import mrTranslation from '../locales/mr/translation.json';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: enTranslation,
  },
  hi: {
    translation: hiTranslation,
  },
  mr: {
    translation: mrTranslation,
  },
};

// Only initialize on client side
if (typeof window !== 'undefined') {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en', // default language
      fallbackLng: 'en', // fallback language
      debug: process.env.NODE_ENV === 'development',
      
      interpolation: {
        escapeValue: false, // React already does escaping
      },
      
      // Language detection
      detection: {
        order: ['localStorage', 'navigator', 'htmlTag'],
        caches: ['localStorage'],
      },
      
      // Namespace configuration
      defaultNS: 'translation',
      ns: ['translation'],
      
      // React specific options
      react: {
        useSuspense: false,
      },
    });
}

export default i18n;
