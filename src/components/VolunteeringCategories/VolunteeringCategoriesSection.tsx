import styled from "styled-components";
import Header from "./Header";
import Categories from "./Categories";
import Footer from "./Footer";
import { ContainerProps } from "../styled/containers";

// const Section = styled.section

const VolunteeringCategoriesContainer = styled.div.attrs<ContainerProps>(
  (props) => ({
    id: props.id,
  }),
)<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-right: 120px;
  padding-left: 120px;
  gap: 56px;
  background-color: var(--color-magnolia);
`;

export function VolunteeringCategoriesSection() {
  return (
    <VolunteeringCategoriesContainer id="volunteering-categories-container">
      <Header />
      <Categories />
      <Footer />
    </VolunteeringCategoriesContainer>
  );
}

export default VolunteeringCategoriesSection;
