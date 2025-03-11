import styled from "styled-components";
import { Button } from "../core/button";
import { ContainerProps } from "../styled/containers";

// TODO: Same Footer container used in Volunteering categories so use them from one place
const FooterContainer = styled.div.attrs<ContainerProps>((props) => ({
  id: props.id,
}))<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export default function Footer() {
  return (
    <FooterContainer id="footer-container">
      <Button onClick={() => {}} text="See volunteering opportunites" />
    </FooterContainer>
  );
}
