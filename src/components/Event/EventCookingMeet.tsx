import { useTranslation } from "react-i18next";

import { getImageUrl } from "../../utils/index";
import "./index.css";

const smilingFace = "\u{1F60A}"; // modern Unicode code point
const winkingFace = "\u{1F609}";

export default function EventCookingMeet() {
  const { t } = useTranslation();
  const sonyaVolunteePicStyle = {
    backgroundImage: `url(${getImageUrl("cooking-event.webp")})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  };

  return (
    <div className="n4d-container event-container">
      <h1>Cooking Event</h1>
      <br />
      <br />
      <h6>{`${t("eventCooking.greeting.invite")}${smilingFace})`}</h6>
      <br />
      <h6>{t("eventCooking.greeting.when")}</h6>
      <br />
      <div className="pic-and-text">
        <div style={sonyaVolunteePicStyle} />
        <div>
          <h6>{t("eventCooking.main.title")}</h6>
          <p>{t("eventCooking.main.para1")}</p>
          <p>
            {t("eventCooking.main.para2")}
            <p className="volunteerEmail">
              {t("eventCooking.outro.rsvp.email")}
            </p>
          </p>
          <p className="event-timeslot">{t("eventCooking.main.para3")}</p>
          <p>{`${t("eventCooking.main.para4")}${winkingFace})`}</p>
          <p>{t("eventCooking.main.para5")}</p>
          <p>{t("eventCooking.main.para6")}</p>
          <p>{t("eventCooking.main.para7")}</p>
          <p>{t("eventCooking.main.para8")}</p>
        </div>
      </div>

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
      <span>{t("VolunTea.outro.address.floor")}</span>
      <br />
      <span>{t("VolunTea.outro.address.lead")}</span>
    </div>
  );
}
