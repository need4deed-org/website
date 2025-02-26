import styled from "styled-components";
import { Button } from "../core/button";
import { ContainerProps } from "../styled/containers";

const FooterContainer = styled.div.attrs<ContainerProps>((props) => ({
  id: props.id,
}))<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export default function Footer() {
  return (
    <FooterContainer id="footer-container">
      <Button
        // eslint-disable-next-line no-console
        onClick={() => console.log("Button clicked")}
        text="See volunteering opportunites"
      />
    </FooterContainer>
  );
}
