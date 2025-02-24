import styled from "styled-components";
import { Button } from "../core/button";

const FooterSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export default function Footer() {
  return (
    <FooterSectionContainer>
      <Button
        // eslint-disable-next-line no-console
        onClick={() => console.log("Button clicked")}
        text="See volunteering opportunites"
      />
    </FooterSectionContainer>
  );
}
