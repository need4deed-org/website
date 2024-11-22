import CookieConsent from "react-cookie-consent";
import { useTranslation } from "react-i18next";

function CookieConsentBanner() {
  const { t } = useTranslation();

  return (
    <CookieConsent
      location="bottom"
      buttonText={t("CookieConsentBanner.accept")}
      declineButtonText={t("CookieConsentBanner.decline")}
      enableDeclineButton
      style={{ background: "#2B373B" }}
      buttonStyle={{
        background: "#4e9815",
        color: "#ffffff",
        fontSize: "16px",
        borderRadius: "3px",
        padding: "5px 20px",
      }}
      declineButtonStyle={{
        background: "#c12828",
        color: "#ffffff",
        fontSize: "16px",
        borderRadius: "3px",
        padding: "5px 20px",
      }}
      expires={365}
    >
      {t("CookieConsentBanner.message")}{" "}
      <a href="/datenschutzerklaerung/" style={{ color: "#ffffff" }}>
        {t("CookieConsentBanner.linkPrivacyPolicy")}
      </a>
    </CookieConsent>
  );
}

export default CookieConsentBanner;
