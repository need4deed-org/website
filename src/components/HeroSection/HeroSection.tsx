import styled from "styled-components";
import { getImageUrl } from "../../utils";
import { ImageWithGradient } from "../core/image";
import { FullWidthContainer, SectionContainer } from "../styled/containers";
import Header from "./Header";
import HeroContent from "./Content";

const HeroSectionContainer = styled(SectionContainer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: "790px";
  top: 0;
  left: 50%;
  left: 50%; /* Move the left edge to the horizontal center */
  transform: translateX(-50%); /* Shift it back by half of its own width */
`;

export function HeroSection() {
  const imageUrl = getImageUrl("new-design-hero.webp");
  const gradientClassName = "image-filter-gradient-blue ";

  return (
    <FullWidthContainer id="HeroSection-FWContainer">
      <ImageWithGradient
        imageUrl={imageUrl}
        gradientClass={gradientClassName}
      />

      <HeroSectionContainer id="hero-section-container">
        <Header />
        <HeroContent />
      </HeroSectionContainer>
    </FullWidthContainer>
  );
}

export default HeroSection;
