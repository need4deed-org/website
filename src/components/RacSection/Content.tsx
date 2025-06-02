import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ScreenTypes, Subpages } from "../../config/types";
import useScreenType from "../../hooks/useScreenType";
import { Button } from "../core/button";
import { CustomHeading, Heading4 } from "../styled/text";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--homepage-rac-section-content-container-gap);
`;

const HeadLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--homepage-rac-section-content-headLine-container-gap);
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: var(
    --homepage-rac-section-content-buttons-container-flex-direction
  );
  gap: var(--homepage-rac-section-content-buttons-container-gap);
`;

export default function RacContent() {
  const { t } = useTranslation();
  const screenType = useScreenType();
  const navigate = useNavigate();
  const isMobile = screenType === ScreenTypes.MOBILE;

  return (
    <ContentContainer>
      <HeadLineContainer>
        <Heading4 color="var(--color-white)">
          {t("homepage.racSection.headLine1").toUpperCase()}
        </Heading4>
        <CustomHeading
          color="var(--color-white)"
          fontWeight="var(--homepage-rac-section-content-headLine2-fontWeight)"
          fontSize="var(--homepage-rac-section-content-headLine2-fontSize)"
          lineheight="var(--homepage-rac-section-content-headLine2-lineheight)"
          letterSpacing="var(--homepage-rac-section-content-headLine2-letterSpacing)"
        >
          {t("homepage.racSection.headLine2")}
        </CustomHeading>
      </HeadLineContainer>

      <ButtonsContainer>
        <Button
          onClick={() => {
            navigate(`/${Subpages.OPPORTUNITY_FORM}`);
          }}
          text={
            isMobile
              ? t("homepage.racSection.buttonSupportMobile")
              : t("homepage.racSection.buttonSupport")
          }
        />
        <Button
          onClick={() => {
            navigate(`/${Subpages.RAC_GUIDELINES}`);
          }}
          text={t("homepage.racSection.buttonHowItWorks")}
          backgroundcolor="var(--color-orchid)"
          textColor="var(--color-aubergine)"
        />
      </ButtonsContainer>
    </ContentContainer>
  );
}
