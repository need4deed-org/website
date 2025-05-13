import styled from "styled-components";
import {
  FullWidthContainer,
  OverlayingSectionContainer,
} from "../styled/containers";

import { getImageUrl } from "../../utils";
import { ImageWithGradient } from "../core/image";
import useScreenType from "../../hooks/useScreenType";
import { ScreenTypes } from "../../config/types";
import RacContent from "./Content";

const RacSectionContainer = styled(OverlayingSectionContainer)`
  height: var(--homepage-rac-section-container-height);
  justify-content: center;
  align-items: center;
`;

const imageNames: Record<ScreenTypes, string> = {
  mobile: "rac-mobile.webp",
  tablet: "rac-tablet.webp",
  desktop: "new-design-rac.webp",
};

export function RacSection() {
  const screenType = useScreenType();
  const imageUrl = getImageUrl(imageNames[screenType]);
  const gradientClassName = "image-filter-gradient-blue ";

  return (
    <FullWidthContainer id="RACSection-FWContainer">
      <ImageWithGradient
        imageUrl={imageUrl}
        gradientClass={gradientClassName}
        height="var(--homepage-rac-section-container-height)"
      />

      <RacSectionContainer id="rac-section-container">
        <RacContent />
      </RacSectionContainer>
    </FullWidthContainer>
  );
}

export default RacSection;
