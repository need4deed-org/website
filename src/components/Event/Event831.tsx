import { useTranslation } from "react-i18next";
import { getImageUrl } from "../../utils/index";
import "./index.css";

const registrationHref = "";
("https://docs.google.com/forms/d/e/1FAIpQLSe5wRZ0U0wEb_QvRbfuGzM196jRIVflUBC_273wSk2Dl3Gcnw/viewform");

export default function Event831() {
  const { t } = useTranslation();
  const sommerFestPicStyle = {
    backgroundImage: `url(${getImageUrl("event831.webp")})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "unset",
  };

  return (
    <div className="n4d-container event-container">
      <h1>{t("event831.header")}</h1>
      <div className="pic-and-text">
        <div className="sommer-fest-pic" style={sommerFestPicStyle}></div>
        <div>
          <p>{t("event831.paras.para1")}</p>
          <p>{t("event831.paras.para2")}</p>
          <p className="event-timeslot">
            {t("event831.paras.para3.morning.timeslot")}
          </p>
          <p>{t("event831.paras.para3.morning.title1")}</p>
          <p className="event-timeslot">
            {t("event831.paras.para3.day.timeslot")}
          </p>
          <p>{t("event831.paras.para3.day.title1")}</p>
          <p>{t("event831.paras.para3.day.title2")}</p>
          <p>{t("event831.paras.para3.day.title3")}</p>
          <p className="event-timeslot">
            {t("event831.paras.para3.afternoon.timeslot")}
          </p>
          <p>{t("event831.paras.para3.afternoon.title1")}</p>
          <p>{t("event831.paras.para3.afternoon.title2")}</p>
          <p>{t("event831.paras.para3.afternoon.title3")}</p>
          <p className="event-timeslot">
            {t("event831.paras.para3.all.timeslot")}
          </p>
          <p>{t("event831.paras.para3.all.title1")}</p>
          <p>{t("event831.paras.para3.all.title2")}</p>

          <p className="event-location">{t("event831.paras.para4")}</p>
        </div>
      </div>
      <div className="event-rsvp">
        <p>{t("event831.rsvp.invite")}</p>
        <p>
          <a href={registrationHref}>{t("event831.rsvp.registration")}</a>
        </p>
      </div>
      <p>{t("event831.final.feelFree")} </p>
      <img
        src={getImageUrl("N4D-logo-purple-on-transparent-h.webp")}
        height="16"
        alt=""
      />
      <p>{t("event831.final.team")}</p>
    </div>
  );
}
