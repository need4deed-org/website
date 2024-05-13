import { useTranslation } from "react-i18next";
import "./VolunteerOpportunity.css";

const carouselInterval = "6000";

function VolunteerOpportunity() {
  const { i18n, t } = useTranslation();
  const opportuinitiesUrl = `/opportunities/${i18n.language}`;

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide volunteer-opportunity-container"
      data-bs-ride="carousel"
    >
      <div
        id="volunteer-opportunities"
        className="volunteer-opportunity-heading"
      >
        <h3 id="volunteer-opportuinities-section">
          {t("workingWithRefugees")}
        </h3>
      </div>
      <div className="carousel-inner n4d-carousel-container">
        <div
          className="n4d-full-space carousel-item active"
          data-bs-interval={carouselInterval}
        >
          <div className="become-a-mentor-img volunteer-opportunity-img">
            <div className="n4d-full-space volunteer-opportunity-text">
              <h5>{t("volunteeringProjects.overComeObstaclesHeading")}</h5>
              <p>{t("volunteeringProjects.overComeObstaclesSubheading")}</p>
              <a href={opportuinitiesUrl} className="btn btn-light learn-more">
                {t("learnMoreButton")}
              </a>
            </div>
          </div>
        </div>
        <div
          className="n4d-full-space carousel-item"
          data-bs-interval={carouselInterval}
        >
          <div className="child-care-img volunteer-opportunity-img">
            <div className="n4d-full-space volunteer-opportunity-text">
              <h5>{t("volunteeringProjects.childCareHeading")}</h5>
              <p>{t("volunteeringProjects.childCareSubheading")}</p>
              <a href={opportuinitiesUrl} className="btn btn-light learn-more">
                {t("learnMoreButton")}
              </a>
            </div>
          </div>
        </div>
        <div
          className="n4d-full-space carousel-item"
          data-bs-interval={carouselInterval}
        >
          <div className="sport-programmes-img volunteer-opportunity-img">
            <div className="n4d-full-space volunteer-opportunity-text">
              <h5>{t("volunteeringProjects.sportProgramHeading")}</h5>
              <p>{t("volunteeringProjects.sportProgramSubheading")}</p>
              <a href={opportuinitiesUrl} className="btn btn-light learn-more">
                {t("learnMoreButton")}
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </div>
  );
}

export default VolunteerOpportunity;
