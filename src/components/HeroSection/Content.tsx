import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Subpages } from "../../config/types";
import { Button } from "../core/button";
import { CustomHeading } from "../styled/text";

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
  const navigate = useNavigate();

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
            onClick={() => {}} // TODO: click handler will be implemented later
          >
            {t("homepage.heroSection.content.heroText")}
          </CustomHeading>
          <CustomHeading
            color="var(--homepage-hero-section-content-hero-text-color)"
            fontSize="var(--homepage-hero-section-content-hero-supporting-text-fontSize)"
            fontWeight="var(--homepage-hero-section-content-hero-supporting-text-fontWeight)"
            letterSpacing="var(--homepage-hero-section-content-hero-supporting-text-letterSpacing)"
            lineheight="var(--homepage-hero-section-content-hero-supporting-text-lineheight)"
            onClick={() => {}} // TODO: click handler will be implemented later
          >
            {t("homepage.heroSection.content.heroSupportingText")}
          </CustomHeading>
        </HeroTextContainer>

        <HeroButtonsContainer>
          <Button
            onClick={() => {
              navigate(`/${Subpages.VOLUNTEER_FORM}`);
            }}
            text={t("homepage.heroSection.content.buttonJoinVolunteer")}
          />
          <Button
            onClick={() => {}} // TODO: click handler will be implemented later
            text={t("homepage.heroSection.content.buttonJoinRefugeeCenter")}
          />
        </HeroButtonsContainer>
      </ContentContainer>
    </ContentDiv>
  );
}
