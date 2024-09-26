import { useTranslation } from "react-i18next";
import { Lang } from "../../config/types";
import useMatchMedia from "../../hooks/useMatchMedia";
import { getMainCtaUrl } from "../../utils";
import "./Main.css";

const urlLogoHorizontal = "/images/N4D-logo-purple-on-transparent-h.png";
const urlLogoStacked = "/images/N4D-logo-purple-on-transparent-s.png";

function Main() {
  const { t, i18n } = useTranslation();
  const isMobile = useMatchMedia("(max-width: 576px)");
  const urlMainCTA = getMainCtaUrl({ lng: i18n.language as Lang });

  return (
    <div className="main-container">
      <div className="main-text-container">
        <img
          src={isMobile ? urlLogoStacked : urlLogoHorizontal}
          alt="NEED 4 DEED"
        />
        <h5>{t("projectIntro.slogan")}</h5>
      </div>

      <button className="n4d-cta main-cta">
        <a href={urlMainCTA}>{t("projectIntro.beVolunteerButton")}</a>
      </button>
    </div>
  );
}

export default Main;
