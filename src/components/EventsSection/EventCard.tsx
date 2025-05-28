import { useEffect, useMemo } from "react";
import { EventN4DType, Lang } from "need4deed-sdk";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import useEvents from "../../hooks/api/useEvents";
import { CustomHeading, Heading4 } from "../styled/text";
import { formatDateRange } from "../../utils";
import useScreenType from "../../hooks/useScreenType";
import { ScreenTypes } from "../../config/types";

const charLimitMap: Partial<Record<Lang, number>> = {
  [Lang.EN]: 230,
  [Lang.DE]: 130,
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: var(--homepage-events-section-event-card-width);
  gap: var(--homepage-events-section-event-card-gap);
`;

const EventHeadLine = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  gap: var(--homepage-events-section-event-card-headline-gap);
`;

const EventTitleTag = styled.div`
  padding: var(--homepage-events-section-event-card-event-title-tag-padding);
  border-radius: var(
    --homepage-events-section-event-card-event-title-tag-border-radius
  );
  background-color: var(--color-orchid);
`;

interface Props {
  onEventDataFetch: (eventType: EventN4DType) => void;
}

export default function EventCard({ onEventDataFetch }: Props) {
  const { i18n } = useTranslation();
  const language = i18n.language as Lang;

  const [events, isLoading] = useEvents(language);
  const screenType = useScreenType();
  const isMobile = screenType === ScreenTypes.MOBILE;

  /* events[0]: corresponds to default 'VolunTea' event! */
  const upcomingEvent = useMemo(
    () => events?.find((event) => event.active) || events[0],
    [events],
  );

  useEffect(() => {
    if (upcomingEvent) onEventDataFetch(upcomingEvent.type);
  }, [onEventDataFetch, upcomingEvent]);

  if (isLoading) {
    return (
      <Heading4 color="var(--color-white)">Loading upcoming events...</Heading4>
    );
  }

  if (!upcomingEvent) {
    return (
      <Heading4 color="var(--color-white)">
        No upcoming event available currently.
      </Heading4>
    );
  }

  const { description } = upcomingEvent;
  const charLimit = charLimitMap[language];
  let truncatedDescription = description.replace(/\\n/g, "\n"); // Remove '\n'

  if (isMobile && charLimit && description.length > charLimit)
    truncatedDescription = `${description.slice(0, charLimit)}...`;

  return (
    <Card>
      <EventHeadLine>
        <EventTitleTag>
          <CustomHeading
            fontWeight={700}
            fontSize="24px"
            lineheight="24px"
            color="var(--color-midnight)"
            margin="0px"
          >
            {upcomingEvent.title}
          </CustomHeading>
        </EventTitleTag>

        <Heading4 color="var(--color-white)" margin={0}>
          {formatDateRange(
            new Date(upcomingEvent.date),
            upcomingEvent.dateEnd && new Date(upcomingEvent.dateEnd),
          )}
        </Heading4>
      </EventHeadLine>

      <Heading4 color="var(--color-white)">{truncatedDescription}</Heading4>
    </Card>
  );
}
