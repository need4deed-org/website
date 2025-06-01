import styled from "styled-components";
import { ScreenTypes } from "../../config/types";
import useScreenType from "../../hooks/useScreenType";
import { getImageUrl } from "../../utils";
import { ImageWithGradient } from "../core/image";
import { Header } from "../HeaderNew";
import {
  FullWidthContainer,
  OverlayingSectionContainer,
} from "../styled/containers";
import HeroContent from "./Content";
import { N4DHeaderLogo } from "./logos/N4DLogo";

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
  const isBurgerMenu = screenType === ScreenTypes.MOBILE;

  return (
    <FullWidthContainer id="HeroSection-FWContainer">
      <ImageWithGradient
        imageUrl={imageUrl}
        gradientClass={gradientClassName}
        height="var(--homepage-hero-section-container-height)"
      />

      <HeroSectionContainer id="hero-section-container">
        <Header
          logo={<N4DHeaderLogo />}
          isBurgerMenu={isBurgerMenu}
          height="var(--homepage-hero-section-header-height)"
          menuItemColor="var(--color-white)"
          burgerMenuItemColor="var(--color-midnight)"
        />

        <HeroContent />
      </HeroSectionContainer>
    </FullWidthContainer>
  );
}

export default HeroSection;
