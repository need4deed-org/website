import { useTranslation } from "react-i18next";

import { getImageUrl } from "../../utils/index";
import "./index.css";

const registrationHref =
  "https://docs.google.com/forms/d/e/1FAIpQLSfGnZt8_sT299T8J70ivSjFzJxmD57b8ZBXLX_fZiPKB4fqvg/viewform?usp=dialog";

export default function EventAccompanying() {
  const { t } = useTranslation();
  const volunteerPicStyle = {
    backgroundImage: `url(${getImageUrl("assistance.webp")})`,
  };

  return (
    <div className="n4d-container event-container">
      <h1>{t("eventAccompanying.greeting.title")}</h1>
      <br />
      <br />
      <h6>{t("eventAccompanying.greeting.invite1")}</h6>
      <h6>
        <strong>{t("eventAccompanying.greeting.host")}</strong>
      </h6>
      <h6>15.05.2025</h6>
      <h6>17:00</h6>
      <h6>Elsenstraße 87</h6>
      <h6>E12435 Berlin</h6>
      <img
        src={getImageUrl("N4D-logo-purple-on-transparent-h.webp")}
        height="16"
        alt=""
      />
      <br />
      <br />
      <h6>
        <a href={registrationHref} target="_blank" rel="noreferrer">
          {t("eventAccompanying.greeting.registration1")}
        </a>
      </h6>
      <br />
      <div className="pic-and-text">
        <div className="event-pic" style={volunteerPicStyle} />
        <div>
          <h6>
            <strong>{t("eventAccompanying.main.title1")}</strong>
          </h6>
          <p>{t("eventAccompanying.main.para11")}</p>
          <p>{t("eventAccompanying.main.para12")}</p>
          <p>{t("eventAccompanying.main.para13")}</p>
          <p>{t("eventAccompanying.main.para14")}</p>
          <h6>
            <strong>{t("eventAccompanying.main.title2")}</strong>
          </h6>
          <ul className="bullet-list">
            <li>{t("eventAccompanying.main.para21")}</li>
            <li>{t("eventAccompanying.main.para22")}</li>
            <li>{t("eventAccompanying.main.para23")}</li>
            <li>{t("eventAccompanying.main.para24")}</li>
            <li>{t("eventAccompanying.main.para25")}</li>
            <li>{t("eventAccompanying.main.para26")}</li>
          </ul>
        </div>
      </div>

      <h6>
        <a href={registrationHref} target="_blank" rel="noreferrer">
          {t("eventAccompanying.greeting.registration2")}
        </a>
      </h6>

      <br />
      <h6>{t("eventAccompanying.outro.para1")}</h6>
      <h6>{t("eventAccompanying.outro.para2")}</h6>

      <br />

      <img
        src={getImageUrl("N4D-logo-purple-on-transparent-h.webp")}
        height="16"
        alt=""
      />
      <br />
      <br />
      <span>Elsenstr. 87</span>
      <br />
      <span>12435 Berlin</span>
      <br />
      <span>{t("eventAccompanying.outro.address.floor")}</span>
      <br />
      <span>{t("eventAccompanying.outro.address.lead")}</span>
    </div>
  );
}
