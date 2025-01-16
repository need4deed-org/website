import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { getFirstThursdayOfMonth, getImageUrl } from "../../utils/index";
import "./index.css";

const registrationHref = "https://forms.gle/hFJTszu4tCoeDRy4A";
const dateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};

export default function EventVolunTeeMeet() {
  const { t } = useTranslation();
  const { lng } = useParams();
  const eventDate = getFirstThursdayOfMonth();
  const sonyaVolunteePicStyle = {
    backgroundImage: `url(${getImageUrl("sonya-voluntee.webp")})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  };

  return (
    <div className="n4d-container event-container">
      <h1>VolunTea</h1>
      <br />
      <br />
      <h6>{t("eventVolunTee.greeting.invite")}</h6>
      <h6>{t("eventVolunTee.greeting.when")}</h6>
      <div className="pic-and-text">
        <div style={sonyaVolunteePicStyle} />
        <div>
          <h6>{t("eventVolunTee.main.title")}</h6>
          <p>{t("eventVolunTee.main.para1")}</p>
          <p>{t("eventVolunTee.main.para2")}</p>
          <p>{t("eventVolunTee.main.para3")}</p>
          <p>{t("eventVolunTee.main.para4")}</p>
          <p>{t("eventVolunTee.main.para5")}</p>
        </div>
      </div>
      <p>
        {t("eventVolunTee.outro.rsvp.text")}{" "}
        <a href={registrationHref} target="_blank" rel="noreferrer">
          {t("eventVolunTee.outro.rsvp.link")}
        </a>
      </p>
      <img
        src={getImageUrl("N4D-logo-purple-on-transparent-h.webp")}
        height="16"
        alt=""
      />
      <br />
      <br />
      <div className="event-lines-together">
        <p>{t("weekdays.4")}</p>
        <h6>{eventDate.toLocaleDateString(lng, dateOptions)}</h6>
        <p>17:00-18:00</p>
      </div>
      <br />
      <br />
      <span>Elsenstr. 87</span>
      <br />
      <span>12435 Berlin</span>
      <br />
      <span>{t("eventVolunTee.outro.address.floor")}</span>
      <br />
      <span>{t("eventVolunTee.outro.address.lead")}</span>
    </div>
  );
}
