import { EventN4D } from "need4deed-sdk";
import { useTranslation } from "react-i18next";
import PastEventCard from "./PastEventCard/PastEventCard";
import UpcomingEventCard from "./UpcomingEventCard/UpcomingEventCard";

interface Props {
  eventData: EventN4D[];
}
const fallbackPicUrl = "event.webp";

export default function Event({ eventData }: Props) {
  const { t } = useTranslation();

  if (!eventData || eventData.length === 0) {
    return <h4>{t("event.missing")}</h4>;
  }

  const upcomingEvents = eventData.filter((event) => event.active);
  const pastEvents = eventData.filter((event) => !event.active);

  return (
    <div className="n4d-section">
      {upcomingEvents.length > 0 && (
        <section className="upcoming-events">
          {upcomingEvents.map((event) => (
            <UpcomingEventCard
              key={event.id}
              event={event}
              fallbackPicUrl={fallbackPicUrl}
            />
          ))}
        </section>
      )}

      {pastEvents.length > 0 && (
        <section className="past-events">
          {pastEvents.map((event) => (
            <PastEventCard
              key={event.id}
              event={event}
              fallbackPicUrl={fallbackPicUrl}
            />
          ))}
        </section>
      )}
    </div>
  );
}
