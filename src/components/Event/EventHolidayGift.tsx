import { useTranslation } from "react-i18next";
import { getImageUrl } from "../../utils/index";
import "./index.css";

const donationHref =
  "https://www.betterplace.org/en/projects/143838-holiday-gifts-for-refugee-children-in-berlin";
const registrationHref = "https://forms.gle/4PUF3bSiB1UzMSok7";

export default function EventHolidayGift() {
  const { t } = useTranslation();
  const holidayGiftPicStyle = {
    backgroundImage: `url(${getImageUrl("type-daycare.webp")})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  };

  return (
    <div className="n4d-container event-container">
      <h1>{t("eventHolidayGift.header")}</h1>
      <div className="pic-and-text">
        <div style={holidayGiftPicStyle} />
        <div>
          <p>{t("eventHolidayGift.paras.para1")}</p>
          <p>{t("eventHolidayGift.paras.para2")}</p>
        </div>
      </div>
      <div className="event-donate">
        <p>
          {t("eventHolidayGift.donate.money.invite")}{" "}
          <a href={donationHref} target="_blank" rel="noreferrer">
            {t("eventHolidayGift.donate.money.where")}
          </a>
        </p>
        <p style={{ whiteSpace: "pre-line" }}>
          {t("eventHolidayGift.donate.things.invite")}
          {t("eventHolidayGift.donate.things.where")}
        </p>
        <p>
          {t("eventHolidayGift.donate.wrapping.invite")}{" "}
          <a href={registrationHref} target="_blank" rel="noreferrer">
            {t("eventHolidayGift.donate.wrapping.registration")}
          </a>
        </p>
      </div>
      <p>{t("eventHolidayGift.final.feelFree")} </p>
      <img
        src={getImageUrl("N4D-logo-purple-on-transparent-h.webp")}
        height="16"
        alt=""
      />
      <p>{t("eventHolidayGift.final.team")}</p>
    </div>
  );
}
