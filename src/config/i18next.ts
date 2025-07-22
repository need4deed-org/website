import i18next from "i18next";
import { Lang } from "need4deed-sdk";
import { initReactI18next } from "react-i18next";
import legal from "../../public/locales/de/legal.json";
import deTranslation from "../../public/locales/de/translations.json";
import enTranslation from "../../public/locales/en/translations.json";
import { getStoredLang } from "../utils";
import { Env } from "./types";

i18next.use(initReactI18next).init({
  lng: getStoredLang() || Lang.EN,
  fallbackLng: Lang.EN,
  debug: process.env.NODE_ENV === Env.DEVELOP,
  resources: {
    [Lang.EN]: { translation: enTranslation, legal },
    [Lang.DE]: { translation: deTranslation, legal },
  },
  interpolation: { escapeValue: false },
});

i18next.changeLanguage();
