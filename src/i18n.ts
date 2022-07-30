import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import interfaceEn from 'locales/en/interface.json'
import interfaceZhTw from 'locales/zh-tw/interface.json'

const resources = {
  en: {
    interface: interfaceEn 
  },
  "zh-tw": {
    interface: interfaceZhTw
  }
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json"
    },

    resources,
    fallbackLng: 'en',
    debug: true,
    lng: 'en',

    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });


export default i18n;

