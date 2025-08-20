import { EventN4D } from "need4deed-sdk";
import { useTranslation } from "react-i18next";

import { formatDateRange, getImageUrl } from "../../utils";

interface Props {
  eventData: EventN4D[]; // array of EventType
}
const fallbackPicUrl = "event.webp";

export default function Event({ eventData }: Props) {
  const { t } = useTranslation();

  if (eventData.length === 0) {
    return <h4>{t("event.missing")}</h4>;
  }

  const pastEvent = eventData.filter((event) => !event.active);
  // const upcomingEvent = eventData.filter((event) => event.active); // Uncomment if you want to display upcoming events as well

  return (
    <>
      {pastEvent.map((event: EventN4D) => {
        const eventStatus = event.active ? t("event.active") : t("event.past");
        return (
          <div className="n4d-container event-container">
            <div className="pic-and-text">
              <div
                className="event-pic"
                style={{
                  backgroundImage: `url(${getImageUrl(event.pic || fallbackPicUrl)})`,
                }}
              />
              <div className="event-text">
                <div className="event-status">
                  <p>{eventStatus}</p>
                </div>
                <h2>{event.title}</h2>
                <h6>{event.subTitle}</h6>

                {event.date && (
                  <div className="event-date">
                    <h6>
                      {formatDateRange(
                        new Date(event.date),
                        event.dateEnd && new Date(event.dateEnd),
                      )}
                    </h6>
                  </div>
                )}
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
      })}
    </>
  );
}
