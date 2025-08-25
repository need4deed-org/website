import { EventN4D } from "need4deed-sdk";
import { useTranslation } from "react-i18next";
import { formatDateRange, getImageUrl } from "../../../utils";
import styles from "./UpcomingEventCard.module.css";
import { Button } from "../../core/button";

interface UpcomingEventCardProps {
  event: EventN4D;
  fallbackPicUrl: string;
}

function UpcomingEventCard({ event, fallbackPicUrl }: UpcomingEventCardProps) {
  const { t } = useTranslation();

  const eventStatus = event.active
    ? t("homepage.events.headLine")
    : t("event.past");

  const [street, cityZip, floor] = event.address.split("\\n");
  const formattedAddress = `${street}, ${floor}`;

  return (
    <div className={`n4d-container ${styles.eventContainer}`}>
      <div className={styles.eventContent}>
        <div className={styles.eventStatus}>
          <p>{eventStatus}</p>
        </div>
        <h2 className={styles.eventTitle}>{event.title}</h2>
        <h6 className={styles.eventSubtitle}>{event.subTitle}</h6>

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

        <div className={styles.eventAddress}>
          <h6>{formattedAddress}</h6>
          <h6 className={styles.cityZip}>{cityZip}</h6>
        </div>

        <h6 className={styles.locationComment}>{event.locationComment}</h6>
        <div
          className={styles.eventImage}
          style={{
            backgroundImage: `url(${getImageUrl(event.pic || fallbackPicUrl)})`,
          }}
        />
        <div className={styles.eventDescription}>
          <h6>{event.description.replace(/\\n/g, "\n")}</h6>
        </div>
        <h6 className={styles.additionalTitle}>{event.additionalTitle}</h6>
        <ul className={styles.additionalInfoList}>
          {event.additionalInfo &&
            event.additionalInfo.map((info) => (
              <li key={info} className={styles.additionalInfoItem}>
                <h6>{info}</h6>
              </li>
            ))}
        </ul>
      </div>
      <div className={styles.eventActions}>
        <Button
          onClick={() =>
            window.open(event.linkRSVP, "_blank", "noopener,noreferrer")
          }
          text={t("eventAccompanying.greeting.registration2")}
        />
      </div>
    </div>
  );
}

export default UpcomingEventCard;
