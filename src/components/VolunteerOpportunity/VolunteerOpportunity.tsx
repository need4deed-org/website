import { useTranslation } from "react-i18next";
import "./VolunteerOpportunity.css";
import { getImageUrl } from "../../utils/index";

const carouselInterval = "6000";

interface Props {
  wrappingClassName?: string;
}

function VolunteerOpportunity({ wrappingClassName }: Props) {
  const { i18n, t } = useTranslation();
  const opportuinitiesUrl = `/opportunities/${i18n.language}`;
  return (
    <div
      id="carouselExampleAutoplaying"
      className={`${wrappingClassName} carousel slide volunteer-opportunity-container`}
      data-bs-ride="carousel"
    >
      <div
        id="volunteer-opportunities"
        className="volunteer-opportunity-heading"
      >
        <h2 id="volunteer-opportuinities-section">
          {t("volunteeringProjects.header")}
        </h2>
      </div>
      <div className="carousel-inner n4d-carousel-container">
        <div
          className="n4d-full-space carousel-item"
          data-bs-interval={carouselInterval}
        >
          <div 
            className="translation-img volunteer-opportunity-img"
            style={{ backgroundImage: `url(${getImageUrl("translation.webp")})` }}
          >
            <div className="n4d-full-space volunteer-opportunity-text">
              <h5>{t("volunteeringProjects.translationHeading")}</h5>
              <p>{t("volunteeringProjects.translationSubheading")}</p>
              <a href={opportuinitiesUrl} className="btn btn-light learn-more">
                {t("workingWithRefugees")}
              </a>
            </div>
          </div>
        </div>
        <div
          className="n4d-full-space carousel-item active"
          data-bs-interval={carouselInterval}
        >
          <div 
            className="become-a-mentor-img volunteer-opportunity-img"
            style={{ backgroundImage: `url(${getImageUrl("mentor.webp")})` }}
          >
            <div className="n4d-full-space volunteer-opportunity-text">
              <h5>{t("volunteeringProjects.overComeObstaclesHeading")}</h5>
              <p>{t("volunteeringProjects.overComeObstaclesSubheading")}</p>
              <a href={opportuinitiesUrl} className="btn btn-light learn-more">
                {t("workingWithRefugees")}
              </a>
            </div>
          </div>
        </div>
        <div
          className="n4d-full-space carousel-item"
          data-bs-interval={carouselInterval}
        >
          <div 
            className="child-care-img volunteer-opportunity-img"
            style={{ backgroundImage: `url(${getImageUrl("child-care.webp")})` }}
          >
            <div className="n4d-full-space volunteer-opportunity-text">
              <h5>{t("volunteeringProjects.childCareHeading")}</h5>
              <p>{t("volunteeringProjects.childCareSubheading")}</p>
              <a href={opportuinitiesUrl} className="btn btn-light learn-more">
                {t("workingWithRefugees")}
              </a>
            </div>
          </div>
        </div>
        <div
          className="n4d-full-space carousel-item"
          data-bs-interval={carouselInterval}
        >
          <div 
            className="sport-programmes-img volunteer-opportunity-img"
            style={{ backgroundImage: `url(${getImageUrl("sport-offer.webp")})` }}
          >
            <div className="n4d-full-space volunteer-opportunity-text">
              <h5>{t("volunteeringProjects.sportProgramHeading")}</h5>
              <p>{t("volunteeringProjects.sportProgramSubheading")}</p>
              <a href={opportuinitiesUrl} className="btn btn-light learn-more">
                {t("workingWithRefugees")}
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
