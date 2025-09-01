import i18next from "i18next";
import { Lang } from "need4deed-sdk";
import { initReactI18next } from "react-i18next";
import legal from "../locales/de/legal.json";
import deTranslation from "../locales/de/translations.json";
import enTranslation from "../locales/en/translations.json";
import { getQueryParamLang, getStoredLang, setStoredLang } from "../utils";
import { Env } from "./types";

const urlLang = getQueryParamLang();
const storedLang = getStoredLang();
const initialLang = urlLang || storedLang || Lang.EN;

setStoredLang(initialLang);

i18next.use(initReactI18next).init({
  lng: initialLang,
  fallbackLng: Lang.EN,
  debug: process.env.NODE_ENV === Env.DEVELOP,
  resources: {
    [Lang.EN]: { translation: enTranslation, legal },
    [Lang.DE]: { translation: deTranslation, legal },
  },
  interpolation: { escapeValue: false },
});

i18next.changeLanguage();
