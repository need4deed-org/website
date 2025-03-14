import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Button } from "../core/button";
import { ContainerProps } from "../styled/containers";

const FooterContainer = styled.div.attrs<ContainerProps>((props) => ({
  id: props.id,
}))<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: var(
    --homepage-volunteering-categories-footer-justify-content
  );
`;

export default function Footer() {
  const { t } = useTranslation();

  return (
    <FooterContainer id="footer-container">
      <Button
        onClick={() => {}}
        text={t("homepage.volunteeringCategoires.footerButton")}
      />
    </FooterContainer>
  );
}
