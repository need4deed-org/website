import styled from "styled-components";
import { getImageUrl } from "../../utils";
import { ImageWithGradient } from "../core/image";
import {
  FullWidthContainer,
  OverlayingSectionContainer,
} from "../styled/containers";
import Header from "./Header";
import HeroContent from "./Content";
import useScreenType from "../../hooks/useScreenType";
import { ScreenTypes } from "../../config/types";

const HeroSectionContainer = styled(OverlayingSectionContainer)`
  height: var(--homepage-hero-section-container-height);
  gap: var(--homepage-hero-section-container-gap);
`;

const imageNames: Record<ScreenTypes, string> = {
  mobile: "hero_mobile.webp",
  tablet: "hero_tablet.webp",
  desktop: "new-design-hero.webp",
};

export function HeroSection() {
  const screenType = useScreenType();
  const imageUrl = getImageUrl(imageNames[screenType]);
  const gradientClassName = "image-filter-gradient-blue ";

  return (
    <FullWidthContainer id="HeroSection-FWContainer">
      <ImageWithGradient
        imageUrl={imageUrl}
        gradientClass={gradientClassName}
        height="var(--homepage-hero-section-container-height)"
      />

      <HeroSectionContainer id="hero-section-container">
        <Header />
        <HeroContent />
      </HeroSectionContainer>
    </FullWidthContainer>
  );
}

export default HeroSection;
