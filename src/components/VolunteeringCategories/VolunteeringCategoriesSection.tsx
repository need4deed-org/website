import styled from "styled-components";
import Header from "./Header";
import Categories from "./Categories";
import Footer from "./Footer";
import { ContainerProps } from "../styled/containers";

const FullWidthWrapper = styled.div`
  width: 100%;
  background-color: var(--color-magnolia);
  align-items: center;
`;

const VolunteeringCategoriesContainer = styled.div.attrs<ContainerProps>(
  (props) => ({
    id: props.id,
  }),
)<ContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: var(--color-magnolia);
  margin: 0 auto; // Center it horizontally

  /* Responsive Grid (using the same breakpoints as index.css) */
  @media (min-width: 360px) {
    padding: 48px 20px;
    gap: 16px;
  }

  @media (min-width: 768px) {
    padding: 64px 40px;
    gap: 48px;
  }

  @media (min-width: 1440px) {
    padding: 100px 120px;
    gap: 56px;
    max-width: var(--max-width-section);
  }
`;

export function VolunteeringCategoriesSection() {
  return (
    <FullWidthWrapper>
      <VolunteeringCategoriesContainer id="volunteering-categories-container">
        <Header />
        <Categories />
        <Footer />
      </VolunteeringCategoriesContainer>
    </FullWidthWrapper>
  );
}

export default VolunteeringCategoriesSection;
