import { useState } from "react";
import { useTranslation } from "react-i18next";
import { getCookieConsentValue, Cookies } from "react-cookie-consent";
import { useNavigate } from "react-router-dom";

import CookieItem from "./CookieItem";
import "../forms/index.css";

interface ICookie {
  name: string;
  description: string;
}

const cookies: ICookie[] = [
  { name: "CookieConsent", description: "Google Analytics" },
];

const initializeCookiePreferences = (): Record<ICookie["name"], boolean> =>
  cookies.reduce((preferences, cookie) => {
    const consentValue = getCookieConsentValue(cookie.name) === "true";
    return { ...preferences, [cookie.name]: consentValue };
  }, {});

export default function Cookie() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [cookiePreferences, setCookiePreferences] = useState<
    Record<ICookie["name"], boolean>
  >(initializeCookiePreferences());

  const handleToggle = (type: keyof typeof cookiePreferences) => {
    setCookiePreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const savePreferences = () => {
    Object.entries(cookiePreferences).forEach(([name, value]) => {
      Cookies.set(name, value.toString(), { expires: 365 });
    });

    navigate("/");
  };

  return (
    <div className="n4d-container">
      <h2 className="cookie-manage-title">{t("cookieSettings.title")}</h2>

      <div className="form-container">
        {cookies.map(({ name, description }) => (
          <CookieItem
            isChecked={cookiePreferences[name]}
            onToggle={() => handleToggle(name)}
            label={description}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={savePreferences}
        className="centered-button"
      >
        {t("cookieSettings.saveButton")}
      </button>
    </div>
  );
}
