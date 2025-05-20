import { Lang } from "need4deed-sdk";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { getFirstThursdayOfMonth, getImageUrl } from "../../utils/index";
import "./index.css";

const registrationHref = "https://forms.gle/hFJTszu4tCoeDRy4A";

export default function EventVolunTeeMeet() {
  const { t } = useTranslation();
  const { lng } = useParams();
  const eventDate = getFirstThursdayOfMonth();
  const eventDateStr = eventDate
    ? eventDate.toLocaleDateString(lng === Lang.EN ? "en-GB" : lng, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    : t("VolunTea.expired");
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
      <h6>{t("VolunTea.greeting.invite")}</h6>
      <h6>{t("VolunTea.greeting.when")}</h6>
      <div className="pic-and-text">
        <div style={sonyaVolunteePicStyle} />
        <div>
          <h6>{t("VolunTea.main.title")}</h6>
          <p>{t("VolunTea.main.para1")}</p>
          <p>{t("VolunTea.main.para2")}</p>
          <p>{t("VolunTea.main.para3")}</p>
          <p>{t("VolunTea.main.para4")}</p>
          <p>{t("VolunTea.main.para5")}</p>
        </div>
      </div>
      <p>
        {t("VolunTea.outro.rsvp.text")}{" "}
        <a href={registrationHref} target="_blank" rel="noreferrer">
          {t("VolunTea.outro.rsvp.link")}
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
        <h6>{eventDateStr}</h6>
        <p>17:00-18:00</p>
      </div>
      <br />
      <br />
      <span>Elsenstr. 87</span>
      <br />
      <span>12435 Berlin</span>
      <br />
      <span>{t("VolunTea.outro.address.floor")}</span>
      <br />
      <span>{t("VolunTea.outro.address.lead")}</span>
    </div>
  );
}
