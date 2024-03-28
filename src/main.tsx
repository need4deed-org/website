import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "../public/locales/en/translations.json";
import deTranslation from "../public/locales/de/translations.json";
import arTranslation from "../public/locales/ar/translations.json";
import faTranslation from "../public/locales/fa/translations.json";
import ruTranslation from "../public/locales/ru/translations.json";

i18next.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  debug: true,
  resources: {
    en: { translation: enTranslation },
    de: { translation: deTranslation },
    ar: { translation: arTranslation },
    fa: { translation: faTranslation },
    ru: { translation: ruTranslation },
  },
  interpolation: { escapeValue: false },
});

i18next.changeLanguage();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
