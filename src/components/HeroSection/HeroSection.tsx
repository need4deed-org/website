import styled from "styled-components";
import { getImageUrl } from "../../utils";
import { ImageWithGradient } from "../core/image";
import { FullWidthContainer, SectionContainer } from "../styled/containers";
import Header from "./Header";
import HeroContent from "./Content";

const HeroSectionContainer = styled(SectionContainer)`
  position: absolute;
  width: 100%;
  height: var(--homepage-hero-section-container-height);
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export function HeroSection() {
  const imageUrl = getImageUrl("new-design-hero.webp");
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
