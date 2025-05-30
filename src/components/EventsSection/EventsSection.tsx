import styled from "styled-components";
import { EventN4DType } from "need4deed-sdk";
import { useState } from "react";
import {
  FullWidthContainer,
  OverlayingSectionContainer,
} from "../styled/containers";

import { getImageUrl } from "../../utils";
import { ImageWithGradient } from "../core/image";
import useScreenType from "../../hooks/useScreenType";
import { ScreenTypes } from "../../config/types";
import EventsContent from "./Content";

const EventsSectionContainer = styled(OverlayingSectionContainer)`
  height: var(--homepage-events-section-container-height);
  justify-content: center;
  align-items: center;
  gap: var(--homepage-events-section-content-container-gap);
`;

const imageNamesMap: Record<EventN4DType, Record<ScreenTypes, string>> = {
  [EventN4DType.PARTY]: {
    mobile: "events1-bg-mobile.webp",
    tablet: "events1-bg-tablet.webp",
    desktop: "events1-bg-desktop.webp",
  },
  [EventN4DType.WORKSHOP]: {
    mobile: "events2-bg-mobile.webp",
    tablet: "events2-bg-tablet.webp",
    desktop: "events2-bg-desktop.webp",
  },
};

export function EventsSection() {
  const screenType = useScreenType();
  const [imageUrl, setImageUrl] = useState(
    getImageUrl(imageNamesMap[EventN4DType.PARTY][screenType]), // Selecting the party image as a default background
  );

  const onEventDataFetch = (eventType: EventN4DType) => {
    if (eventType && eventType !== EventN4DType.PARTY)
      setImageUrl(getImageUrl(imageNamesMap[eventType][screenType]));
  };

  const gradientClassName = "image-filter-gradient-blue ";

  return (
    <FullWidthContainer id="Events-Section-FWContainer">
      <ImageWithGradient
        imageUrl={imageUrl}
        gradientClass={gradientClassName}
        height="var(--homepage-events-section-container-height)"
      />

      <EventsSectionContainer id="events-section-container">
        <EventsContent onEventDataFetch={onEventDataFetch} />
      </EventsSectionContainer>
    </FullWidthContainer>
  );
}

export default EventsSection;
