import { useMemo } from "react"; // Import useMemo
import { useTranslation } from "react-i18next";

import Event from "../components/Event/Event";
import Event831 from "../components/Event/Event831";
import EventAccompanying from "../components/Event/EventAccompanying";
import EventCookingMeet from "../components/Event/EventCookingMeet";
import EventFeed from "../components/Event/EventFeed";
import EventHolidayGift from "../components/Event/EventHolidayGift";
import EventVolunTeaMeet from "../components/Event/EventVolunTeaMeet";
import EventWithKids from "../components/Event/EventWithKids";
import { EventComponentInfo, EventPropType, Lang } from "../config/types";
import useEvents from "./api/useEvents"; // Correct import path if needed

const legacyEvents: EventComponentInfo[] = [
  { component: EventAccompanying, title: "event6" },
  { component: EventWithKids, title: "event5" },
  { component: EventCookingMeet, title: "event4" },
  { component: EventVolunTeaMeet, title: "event3" },
  { component: EventHolidayGift, title: "event2" },
  { component: Event831, title: "event1" },
];

export default function useEventComponents() {
  const { i18n } = useTranslation();
  const [events, isLoading, isError] = useEvents(i18n.language as Lang);

  const eventComponents = useMemo(() => {
    const today = new Date();
    const itemsCurrent: EventComponentInfo[] = [];
    const itemsPast: EventComponentInfo[] = [];

    (events || []).forEach((event) => {
      const item: EventComponentInfo = {
        title: event.menuTitle,
        component: Event as React.FC<EventPropType>,
        eventData: { event },
        active: event.active,
      };
      if (new Date(event.date) < today) {
        itemsPast.push(item);
      } else {
        itemsCurrent.push(item);
      }
    });

    return [
      {
        title: "event.past",
        active: false,
        component: EventFeed as React.FC<EventPropType>,
        eventData: { events: [...itemsPast, ...legacyEvents], active: false },
      } as EventComponentInfo,
      ...itemsCurrent,
    ];
  }, [events]);

  return { eventComponents, isLoading, isError };
}
