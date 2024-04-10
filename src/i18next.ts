import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import arTranslation from "../public/locales/ar/translations.json";
import deTranslation from "../public/locales/de/translations.json";
import enTranslation from "../public/locales/en/translations.json";
import faTranslation from "../public/locales/fa/translations.json";
import ruTranslation from "../public/locales/ru/translations.json";
import { Env, Lang } from "./types.ts";

i18next.use(initReactI18next).init({
  lng: Lang.EN,
  fallbackLng: Lang.EN,
  debug: process.env.NODE_ENV === Env.DEVELOP,
  resources: {
    [Lang.EN]: { translation: enTranslation },
    [Lang.DE]: { translation: deTranslation },
    [Lang.AR]: { translation: arTranslation },
    [Lang.FA]: { translation: faTranslation },
    [Lang.RU]: { translation: ruTranslation },
  },
  interpolation: { escapeValue: false },
});

i18next.changeLanguage();
