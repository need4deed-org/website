import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { ContainerProps } from "../styled/containers";
import { Heading2, Paragraph } from "../styled/text";

const HeaderContainer = styled.div.attrs<ContainerProps>((props) => ({
  id: props.id,
}))<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: var(--homepage-volunteering-categories-header-gap);
`;

function HeadingSection() {
  const { t } = useTranslation();

  return (
    <HeaderContainer id="header-container">
      <Heading2>{t("homepage.volunteeringCategoires.header")}</Heading2>
      <Paragraph>
        {t("homepage.volunteeringCategoires.headerParagraph")}
      </Paragraph>
    </HeaderContainer>
  );
}

export default HeadingSection;
