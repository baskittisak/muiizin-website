import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/en/translation.json";
import translationTH from "../locales/th/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: translationEN,
    },
    th: {
      translations: translationTH,
    },
  },
  detection: {
    order: [
      "querystring",
      "localStorage",
      "cookie",
      "sessionStorage",
      "navigator",
      "htmlTag",
      "path",
      "subdomain",
    ],
  },
  fallbackLng: "en",
  debug: false,
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
