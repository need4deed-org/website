import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Heading1 } from "../styled/text";
import Video from "./Video";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--homepage-process-section-header-gap);
`;

export default function Header() {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <Heading1>{t("homepage.processSteps.headline")}</Heading1>
      <Video />
    </HeaderContainer>
  );
}
