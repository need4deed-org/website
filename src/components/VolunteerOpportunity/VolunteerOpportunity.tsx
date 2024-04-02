import { useTranslation } from "react-i18next";
import "./VolunteerOpportunity.css";

function VolunteerOpportunity() {
  const { t } = useTranslation();

  return (
    <section id="volunteer-opportunities">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide volunteer-opportunity-container"
        data-bs-ride="carousel"
      >
        <div className="volunteer-opportunity-heading">
          <h3>{t("workingWithRefugees")}</h3>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="6000">
            <div className="become-a-mentor-img volunteer-opportunity-img">
              <div className="volunteer-opportunity-text">
                <h5>{t("volunteeringProjects.overComeObstaclesHeading")}</h5>
                <p>{t("volunteeringProjects.overComeObstaclesSubheading")}</p>
                <a href="#" className="btn btn-light learn-more">
                  {t("learnMoreButton")}
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="6000">
            <div className="child-care-img volunteer-opportunity-img">
              <div className="volunteer-opportunity-text">
                <h5>{t("volunteeringProjects.childCareHeading")}</h5>
                <p>{t("volunteeringProjects.childCareSubheading")}</p>
                <a href="#" className="btn btn-light learn-more">
                  {t("learnMoreButton")}
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="6000">
            <div className="sport-programmes-img volunteer-opportunity-img">
              <div className="volunteer-opportunity-text">
                <h5>{t("volunteeringProjects.sportProgramHeading")}</h5>
                <p>{t("volunteeringProjects.sportProgramSubheading")}</p>
                <a href="#" className="btn btn-light learn-more">
                  {t("learnMoreButton")}
                </a>
              </div>
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
    </section>
  );
}

export default VolunteerOpportunity;
