import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Heading1, Heading4 } from "../styled/text";
import { SectionHeaderContainer } from "../styled/containers";

const HeaderContainer = styled(SectionHeaderContainer)`
  gap: var(--homepage-volunteering-categories-header-gap);
`;

function HeadingSection() {
  const { t } = useTranslation();

  return (
    <HeaderContainer id="header-container">
      <Heading4>{t("homepage.testimonials.header")}</Heading4>
      <Heading1>{t("homepage.testimonials.headerParagraph")}</Heading1>
    </HeaderContainer>
  );
}

export default HeadingSection;
