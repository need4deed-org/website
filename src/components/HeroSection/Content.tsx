import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { CustomHeading } from "../styled/text";
import { Button } from "../core/button";

const ContentContainer = styled.div`
  display: flex;
  justify-content: end;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 680px;
  height: 485px;
`;

const HeroTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const HeroButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export default function HeroContent() {
  const { t } = useTranslation();

  return (
    <ContentContainer>
      <ContentDiv>
        <HeroTextDiv>
          <CustomHeading
            color="white"
            fontSize="48px"
            fontWeight={600}
            letterSpacing="0.1px"
            lineheight="48px"
            onClick={() => {}}
          >
            {t("homepage.heroSection.content.heroText")}
          </CustomHeading>
          <CustomHeading
            color="white"
            fontSize="24px"
            fontWeight={500}
            letterSpacing="0.25px"
            lineheight="24px"
            onClick={() => {}}
          >
            {t("homepage.heroSection.content.heroSupportingText")}
          </CustomHeading>
        </HeroTextDiv>

        <HeroButtonsDiv>
          <Button
            onClick={() => {}}
            text={t("homepage.heroSection.content.buttonJoinVolunteer")}
          />
          <Button
            onClick={() => {}}
            text={t("homepage.heroSection.content.buttonJoinRefugeeCenter")}
          />
        </HeroButtonsDiv>
      </ContentDiv>
    </ContentContainer>
  );
}
