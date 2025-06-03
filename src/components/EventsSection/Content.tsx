import { EventN4DType } from "need4deed-sdk";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Subpages } from "../../config/types";
import { Button } from "../core/button";
import { Heading1 } from "../styled/text";
import EventCard from "./EventCard";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--homepage-events-section-content-container-gap);
`;

const EventContainer = styled.div`
  display: flex;
  flex-direction: var(--homepage-events-section-event-container-flex-direction);
  gap: var(--homepage-events-section-event-container-gap);
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: var(
    --homepage-events-section-button-container-justify-content
  );
`;

interface Props {
  onEventDataFetch: (eventType: EventN4DType) => void;
}

export default function EventsContent({ onEventDataFetch }: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <ContentContainer>
      <Heading1 color="var(--color-white)" margin={0}>
        {t("homepage.events.headLine")}
      </Heading1>

      <EventContainer>
        <EventCard onEventDataFetch={onEventDataFetch} />

        <ButtonContainer>
          <Button
            onClick={() => {
              navigate(`/${Subpages.EVENT_PAGE}`);
            }}
            text={t("homepage.events.button")}
          />
        </ButtonContainer>
      </EventContainer>
    </ContentContainer>
  );
}
