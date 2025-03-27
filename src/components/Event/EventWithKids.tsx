import { useTranslation } from "react-i18next";

import { getImageUrl } from "../../utils/index";
import "./index.css";

const registrationHref =
  "https://docs.google.com/forms/d/e/1FAIpQLSclIb8buCR50wyjujxuENpWZWYTdbbBlhG6W_3b4GFZFL7u6w/viewform?usp=dialog";

export default function EventWidthKids() {
  const { t } = useTranslation();
  const volunteerPicStyle = {
    backgroundImage: `url(${getImageUrl("v_w_kids.webp")})`,
  };

  return (
    <div className="n4d-container event-container">
      <h1>{t("eventKids.greeting.title")}</h1>
      <br />
      <br />
      <h6>{t("eventKids.greeting.invite1")}</h6>
      <h6>{t("eventKids.greeting.invite2")}</h6>
      <h6>
        <strong>{t("eventKids.greeting.host")}</strong>
      </h6>
      <h6>03.04.2025</h6>
      <h6>17:20</h6>
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
          {t("eventKids.greeting.registration")}
        </a>
      </h6>
      <br />
      <div className="pic-and-text">
        <div className="event-pic" style={volunteerPicStyle} />
        <div>
          <h6>
            <strong>{t("eventKids.main.title")}</strong>
          </h6>
          <ul className="bullet-list">
            <li>{t("eventKids.main.para1")}</li>
            <li>{t("eventKids.main.para2")}</li>
            <li>{t("eventKids.main.para3")}</li>
            <li>{t("eventKids.main.para4")}</li>
            <li>{t("eventKids.main.para5")}</li>
            <li>{t("eventKids.main.para6")}</li>
            <li>{t("eventKids.main.para7")}</li>
          </ul>
        </div>
      </div>

      <span>{t("eventKids.outro.rsvp.text")}</span>
      <h6>
        <a href={registrationHref} target="_blank" rel="noreferrer">
          {t("eventKids.greeting.registration")}
        </a>
      </h6>

      <br />
      <h6>{t("eventKids.outro.para1")}</h6>
      <h6>{t("eventKids.outro.para2")}</h6>

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
      <span>{t("eventKids.outro.address.floor")}</span>
      <br />
      <span>{t("eventKids.outro.address.lead")}</span>
    </div>
  );
}
