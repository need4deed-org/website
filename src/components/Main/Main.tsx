import "./Main.css";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();

  return (
    <div className="main-container">
      <div className="main-text-container">
        <h1 className="heading">{t("need4deed")}</h1>
        <h5 className="slogan">{t("projectIntro.slogan")}</h5>
      </div>

      <button className="volunteer-cta">
        {/* TODO: Add link to translation because there are two different surveys: German and English */}
        <a
          href="https://docs.google.com/forms/d/1qWcRXmyNPtuUJ4xQ9IEIOEYklyMO696AEGn4LoK_Tj4/viewform?edit_requested=true"
          className="volunteer-cta-link"
        >
          {t("projectIntro.beVolunteerButton")}
        </a>{" "}
      </button>
    </div>
  );
}

export default Main;
