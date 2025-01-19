import { useState } from "react";
import { useTranslation } from "react-i18next";
import { getCookieConsentValue, Cookies } from "react-cookie-consent";
import { useNavigate } from "react-router-dom";

import SwitchButton from "../core/button/SwitchButton/SwitchButton";
import "../forms/index.css";

export default function Cookie() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [cookiePreferences, setCookiePreferences] = useState({
    cookieConsent: getCookieConsentValue("CookieConsent") === "true",

    // Add more cookies here if needed in future.. E.g.
    // cookie2: getCookieConsentValue("cookie2") === "true",
  });

  const handleToggle = (type: keyof typeof cookiePreferences) => {
    setCookiePreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const savePreferences = () => {
    Cookies.set("CookieConsent", cookiePreferences.cookieConsent.toString(), {
      expires: 365,
    });

    // Set more cookies here if needed in future.. E.g.
    // Cookies.set("cookie2", cookiePreferences.cookie2.toString(), {
    //   expires: 365,
    // });

    navigate("/");
  };

  return (
    <div className="n4d-container">
      <h2 className="cookie-manage-title">{t("cookieSettings.title")}</h2>

      <div className="form-container">
        <div className="cookie-item ">
          <p>Google Analytics</p>
          <SwitchButton
            isChecked={cookiePreferences.cookieConsent}
            onToggle={() => handleToggle("cookieConsent")}
            scale={4}
          />
        </div>

        {/* Set more cookies here if needed in future.. E.g. */}
        {/* <div className="cookie-item ">
          <p>Future Cookie</p>
          <SwitchButton
            isChecked={cookiePreferences.cookie2}
            onToggle={() => handleToggle("cookie2")}
            scale={4}
          />
        </div> */}
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
