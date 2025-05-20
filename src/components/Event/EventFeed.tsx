import { useTranslation } from "react-i18next";
import { EventComponentInfo, EventDataType } from "../../config/types";

interface Props {
  eventData: { events: EventComponentInfo[] };
}

export default function EventFeed({ eventData }: Props) {
  const { t } = useTranslation();
  const { events } = eventData;

  return (
    <div>
      {events ? (
        events.map(
          ({ component: EventComponent, title, eventData: eventDataProp }) => (
            <EventComponent
              key={title}
              eventData={eventDataProp as EventDataType}
            />
          ),
        )
      ) : (
        <div>{t("event.noEvents")}</div>
      )}
    </div>
  );
}
