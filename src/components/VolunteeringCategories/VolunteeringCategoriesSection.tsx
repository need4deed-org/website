import styled from "styled-components";
import Header from "./Header";
import Categories from "./Categories";
import Footer from "./Footer";
import {
  ContainerProps,
  VolunteeringCategoriesContainer,
} from "../styled/containers";

const FullWidthWrapper = styled.div.attrs<ContainerProps>((props) => ({
  id: props.id,
}))<ContainerProps>`
  width: 100%;
  background-color: var(--color-magnolia);
  align-items: center;
`;

export function VolunteeringCategoriesSection() {
  return (
    <FullWidthWrapper id="volunteering-categories-fullWidthWrapper">
      <VolunteeringCategoriesContainer id="volunteering-categories-container">
        <Header />
        <Categories />
        <Footer />
      </VolunteeringCategoriesContainer>
    </FullWidthWrapper>
  );
}

export default VolunteeringCategoriesSection;
