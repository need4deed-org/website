import { useTranslation } from "react-i18next";
import "./Main.css";

function Main() {
  const { t } = useTranslation();

  return (
    <div className="main-container">
      <div className="main-text-container">
        <h1>{t("need4deed")}</h1>
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
