import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import arTranslation from "../../public/locales/ar/translations.json";
import legal from "../../public/locales/de/legal.json";
import deTranslation from "../../public/locales/de/translations.json";
import enTranslation from "../../public/locales/en/translations.json";
import faTranslation from "../../public/locales/fa/translations.json";
import ruTranslation from "../../public/locales/ru/translations.json";
import trTranslation from "../../public/locales/tr/translations.json";
import { Env, Lang } from "./types";

i18next.use(initReactI18next).init({
  lng: Lang.EN,
  fallbackLng: Lang.EN,
  debug: process.env.NODE_ENV === Env.DEVELOP,
  resources: {
    [Lang.EN]: { translation: enTranslation, legal },
    [Lang.DE]: { translation: deTranslation, legal },
    [Lang.AR]: { translation: arTranslation, legal },
    [Lang.FA]: { translation: faTranslation, legal },
    [Lang.RU]: { translation: ruTranslation, legal },
    [Lang.TR]: { translation: trTranslation, legal },
  },
  interpolation: { escapeValue: false },
});

i18next.changeLanguage();
