import { N4DEvent } from "need4deed-sdk";
import { useTranslation } from "react-i18next";

import { Lang } from "../../config/types";
import { getImageUrl, getTimeFrameString } from "../../utils";

interface Props {
  eventData: { event: N4DEvent };
}

const fallbackPicUrl = "event.webp";

export default function Event({ eventData }: Props) {
  const { event } = eventData;
  const { i18n, t } = useTranslation();

  if (!event) {
    return <h4>{t("event.missing")}</h4>;
  }

  return <pre>{JSON.stringify(event, null, 4)}</pre>;

  return (
    <div className="n4d-container event-container">
      <h2>{event.title}</h2>
      <h6>{event.subtitle}</h6>
      <h6>
        <strong>{event.host}</strong>
      </h6>
      <h6>
        {getTimeFrameString(i18n.language as Lang, event.date, event.dateEnd)}
      </h6>
      <h6 className="with-linebreaks">{event.locationAddress}</h6>
      <p>
        <a href={event.locationLink} target="_blank" rel="noreferrer">
          {t("event.locationLink")}
        </a>
      </p>
      <img
        src={getImageUrl("N4D-logo-purple-on-transparent-h.webp")}
        height="16"
        alt=""
      />
      <h6>
        <a href={event.registrationLink} target="_blank" rel="noreferrer">
          {t("event.registration")}
        </a>
      </h6>
      <div className="pic-and-text">
        <div
          className="event-pic"
          style={{
            backgroundImage: `url(${getImageUrl(event.picLink || fallbackPicUrl)})`,
          }}
        />
        <h6 className="with-linebreaks">{event.description}</h6>
      </div>
    </div>
  );
}
