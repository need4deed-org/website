import { EventN4D } from "need4deed-sdk";
import { useTranslation } from "react-i18next";

import { Lang } from "../../config/types";
import { getImageUrl, getTimeFrameString } from "../../utils";

interface Props {
  eventData: { event: EventN4D };
}

const fallbackPicUrl = "event.webp";

export default function Event({ eventData }: Props) {
  const { event } = eventData;
  const {
    i18n: { language },
    t,
  } = useTranslation();

  if (!event) {
    return <h4>{t("event.missing")}</h4>;
  }

  // return <pre>{JSON.stringify(event, null, 4)}</pre>;

  return (
    <div className="n4d-container event-container">
      <h2>{event.title}</h2>
      <h6>{event.subTitle}</h6>
      <h6>
        <strong>{event.hostName}</strong>
      </h6>
      {event.time && (
        <h6>
          <strong>{event.time}</strong>
        </h6>
      )}

      {event.date && (
        <h6>
          {getTimeFrameString(language as Lang, event.date, event.dateEnd)}
        </h6>
      )}

      <h6 className="with-linebreaks">{event.locationComment}</h6>
      <img
        src={getImageUrl("N4D-logo-purple-on-transparent-h.webp")}
        height="16"
        alt=""
      />
      <h6 className="with-linebreaks">{event.address.replace(/\\n/g, "\n")}</h6>
      <p>
        <a href={event.locationLink} target="_blank" rel="noreferrer">
          {t("event.locationLink")}
        </a>
      </p>
      <h6>
        {t("event.rsvp")}:{" "}
        <a href={event.linkRSVP} target="_blank" rel="noreferrer">
          {t("event.registration")}
        </a>
      </h6>
      <div className="pic-and-text">
        <div
          className="event-pic"
          style={{
            backgroundImage: `url(${getImageUrl(event.pic || fallbackPicUrl)})`,
          }}
        />
        <div>
          <h6 className="with-linebreaks">
            {event.description.replace(/\\n/g, "\n")}
          </h6>
          <h6 className="with-linebreaks m-0">{event.additionalTitle}</h6>
          <ul>
            {event.additionalInfo &&
              event.additionalInfo.map((info) => (
                <li key={info}>
                  <h6 className="with-linebreaks m-0">{info}</h6>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
