import { useTranslation } from "react-i18next";
import useMatchMedia from "../../hooks/useMatchMedia";
import "./Main.css";

const urlLogoHorizontal = "/images/N4D-logo-purple-on-transparent-h.png";
const urlLogoStacked = "/images/N4D-logo-purple-on-transparent-s.png";

function Main() {
  const { t } = useTranslation();
  const isMobile = useMatchMedia("(max-width: 576px)");

  return (
    <div className="main-container">
      <div className="main-text-container">
        <img
          src={isMobile ? urlLogoStacked : urlLogoHorizontal}
          alt="NEED 4 DEED"
        />
        <h5>{t("projectIntro.slogan")}</h5>
      </div>

      <button className="volunteer-cta">
        <a href={t("formLink")} target="_blank" className="volunteer-cta-link">
          {t("projectIntro.beVolunteerButton")}
        </a>{" "}
      </button>
    </div>
  );
}

export default Main;
