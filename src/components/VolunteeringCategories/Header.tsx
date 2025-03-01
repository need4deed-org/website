import styled from "styled-components";
import { ContainerProps } from "../styled/containers";
import { Heading2, Paragraph } from "../styled/text";

const HeaderContainer = styled.div.attrs<ContainerProps>((props) => ({
  id: props.id,
}))<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function HeadingSection() {
  return (
    <HeaderContainer id="header-container">
      <Heading2>Ways you can volunteer</Heading2>
      <Paragraph>
        We offer various types of volunteer opportunities with refugee
        accommodation centers, either on a continuous or occasional basis.
      </Paragraph>
    </HeaderContainer>
  );
}

export default HeadingSection;
