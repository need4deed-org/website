import styled from "styled-components";
import { getImageUrl } from "../../utils";
import { ImageWithGradient } from "../core/image";
import { FullWidthContainer, SectionContainer } from "../styled/containers";
import Header from "./Header";
import HeroContent from "./Content";

const CustomDiv = styled(SectionContainer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* display: flex;
  align-items: center; */
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

      <CustomDiv id="hero-section-container">
        <Header />
        <HeroContent />
      </CustomDiv>
    </FullWidthContainer>
  );
}

export default HeroSection;
