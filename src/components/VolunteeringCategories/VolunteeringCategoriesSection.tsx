import Header from "./Header";
import Categories from "./Categories";
import Footer from "./Footer";
import { FullWidthContainer, SectionContainer } from "../styled/containers";

export function VolunteeringCategoriesSection() {
  return (
    <FullWidthContainer
      id="volunteering-categories-fullWidthContainer"
      background-color="var(--color-magnolia)"
    >
      <SectionContainer id="volunteering-categories-container">
        <Header />
        <Categories />
        <Footer />
      </SectionContainer>
    </FullWidthContainer>
  );
}

export default VolunteeringCategoriesSection;
