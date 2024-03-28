import "./AboutProject.css";
import { useTranslation } from "react-i18next";

function AboutProject() {
  const { t } = useTranslation();

  return (
    <div className="about-project-container">
      <h2>{t("aboutProject.aboutProjectHeading")}</h2>
      <p>{t("aboutProject.aboutProjectSubheading")}</p>

      <h2>{t("values.valuesHeading")}</h2>

      <h6>{t("values.equalOpportunityHeading")}</h6>
      <p>{t("values.equalOpportunitySubheading")}</p>

      <h6>{t("values.responsibilityHeading")}</h6>
      <p>{t("values.responsibilitySubheading")}</p>

      <h6>{t("values.migranToMigranSupportHeading")}</h6>
      <p>{t("values.migranToMigranSupportSubheading")}</p>

      <h6>{t("values.activeParticipationHeading")}</h6>
      <p>{t("values.activeParticipationSubheading")}</p>

      <h6>{t("values.technologyHeading")}</h6>
      <p>{t("values.technologySubheading")}</p>
    </div>
  );
}

export default AboutProject;
