import { useTranslation } from "react-i18next";
import {
  Scales,
  HandHeart,
  Users,
  Sparkle,
  Gear,
} from "@phosphor-icons/react";
import "./AboutProject.css";

interface Prop {
  wrappingClassName?: string;
}

function AboutProject({ wrappingClassName }: Prop) {
  const { t } = useTranslation();

  return (
    <div className={wrappingClassName || ""}>
      <div id="about-project" className="n4d-container about-project-container">
        <h2>{t("aboutProject.aboutProjectHeading")}</h2>
        <p>{t("aboutProject.aboutProjectSubheading")}</p>

        <h2>{t("values.valuesHeading")}</h2>

        <div className="value-item">
          <div className="value-header">
            <Scales size={24} className="value-icon" />
            <h6>{t("values.equalOpportunityHeading")}</h6>
          </div>
          <p>{t("values.equalOpportunitySubheading")}</p>
        </div>

        <div className="value-item">
          <div className="value-header">
            <HandHeart size={24} className="value-icon" />
            <h6>{t("values.responsibilityHeading")}</h6>
          </div>
          <p>{t("values.responsibilitySubheading")}</p>
        </div>

        <div className="value-item">
          <div className="value-header">
            <Users size={24} className="value-icon" />
            <h6>{t("values.migranToMigranSupportHeading")}</h6>
          </div>
          <p>{t("values.migranToMigranSupportSubheading")}</p>
        </div>

        <div className="value-item">
          <div className="value-header">
            <Sparkle size={24} className="value-icon" />
            <h6>{t("values.activeParticipationHeading")}</h6>
          </div>
          <p>{t("values.activeParticipationSubheading")}</p>
        </div>

        <div className="value-item">
          <div className="value-header">
            <Gear size={24} className="value-icon" />
            <h6>{t("values.technologyHeading")}</h6>
          </div>
          <p>{t("values.technologySubheading")}</p>
        </div>

        <h2>{t("team.teamHeading")}</h2>
        <p>{t("team.teamSubheading")}</p>
      </div>
    </div>
  );
}

export default AboutProject;
