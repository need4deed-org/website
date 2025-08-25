import { EventN4D } from "need4deed-sdk";
import { useTranslation } from "react-i18next";
import { formatDateRange, getImageUrl } from "../../../utils";
import styles from "./PastEventCard.module.css";

interface PastEventCardProps {
  event: EventN4D;
  fallbackPicUrl: string;
}

function PastEventCard({ event, fallbackPicUrl }: PastEventCardProps) {
  const { t } = useTranslation();
  const eventStatus = event.active
    ? t("homepage.events.headLine")
    : t("event.past");

  return (
    <div className={`n4d-container ${styles.pastEventCard}`}>
      <div className={styles.eventContent}>
        <div
          className={styles.eventImage}
          style={{
            backgroundImage:
              `url(${getImageUrl(event.pic || fallbackPicUrl)})` as string,
          }}
        />
        <div className={styles.eventDetails}>
          <div className={styles.eventStatus}>
            <p>{eventStatus}</p>
          </div>
          <h2 className={styles.eventTitle}>{event.title}</h2>

          {event.date && (
            <div className={styles.eventDate}>
              <h6>
                {formatDateRange(
                  new Date(event.date),
                  event.dateEnd && new Date(event.dateEnd),
                )}
              </h6>
            </div>
          )}
          <h6 className={styles.eventDescription}>{event.shortDescription}</h6>
        </div>
      </div>
    </div>
  );
}

export default PastEventCard;
