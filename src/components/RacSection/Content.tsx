import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { CustomHeading, Heading4 } from "../styled/text";
import { Button } from "../core/button";
import useScreenType from "../../hooks/useScreenType";
import { ScreenTypes } from "../../config/types";

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
          onClick={() => {}} // TODO: click handler will be implemented later
          text={
            isMobile
              ? t("homepage.racSection.buttonSupportMobile")
              : t("homepage.racSection.buttonSupport")
          }
        />
        <Button
          onClick={() => {}} // TODO: click handler will be implemented later
          text={t("homepage.racSection.buttonHowItWorks")}
          backgroundcolor="var(--color-orchid)"
          textColor="var(--color-aubergine)"
        />
      </ButtonsContainer>
    </ContentContainer>
  );
}
