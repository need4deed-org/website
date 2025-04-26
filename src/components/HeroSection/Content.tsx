import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { CustomHeading } from "../styled/text";
import { Button } from "../core/button";

const ContentDiv = styled.div`
  display: flex;
  justify-content: end;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: var(--homepage-hero-section-content-container-width);
  height: var(--homepage-hero-section-content-container-height);
`;

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--homepage-hero-section-content-hero-text-container-gap);
`;

const HeroButtonsContainer = styled.div`
  display: flex;
  flex-direction: var(
    --homepage-hero-section-content-hero-button-container-flex-direction
  );
  gap: var(--homepage-hero-section-content-hero-button-container-gap);
`;

export default function HeroContent() {
  const { t } = useTranslation();

  return (
    <ContentDiv>
      <ContentContainer>
        <HeroTextContainer>
          <CustomHeading
            color="var(--homepage-hero-section-content-hero-text-color)"
            fontSize="var(--homepage-hero-section-content-hero-text-fontSize)"
            fontWeight="var(--homepage-hero-section-content-hero-text-fontWeight)"
            letterSpacing="var(--homepage-hero-section-content-hero-text-letterSpacing)"
            lineheight="var(--homepage-hero-section-content-hero-text-lineheight)"
            onClick={() => {}}
          >
            {t("homepage.heroSection.content.heroText")}
          </CustomHeading>
          <CustomHeading
            color="var(--homepage-hero-section-content-hero-text-color)"
            fontSize="var(--homepage-hero-section-content-hero-supporting-text-fontSize)"
            fontWeight="var(--homepage-hero-section-content-hero-supporting-text-fontWeight)"
            letterSpacing="var(--homepage-hero-section-content-hero-supporting-text-letterSpacing)"
            lineheight="var(--homepage-hero-section-content-hero-supporting-text-lineheight)"
            onClick={() => {}}
          >
            {t("homepage.heroSection.content.heroSupportingText")}
          </CustomHeading>
        </HeroTextContainer>

        <HeroButtonsContainer>
          <Button
            onClick={() => {}}
            text={t("homepage.heroSection.content.buttonJoinVolunteer")}
          />
          <Button
            onClick={() => {}}
            text={t("homepage.heroSection.content.buttonJoinRefugeeCenter")}
          />
        </HeroButtonsContainer>
      </ContentContainer>
    </ContentDiv>
  );
}
