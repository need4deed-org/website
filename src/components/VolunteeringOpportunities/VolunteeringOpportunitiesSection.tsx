import Opportunities from "./Opportunities";
import Footer from "./Footer";
import { FullWidthContainer, SectionContainer } from "../styled/containers";
import Header from "./Header";

export function VolunteeringOpportunitiesSection() {
  return (
    <FullWidthContainer
      id="volunteering-opportunities-fullWidthContainer"
      background-color="var(--color-orchid)"
    >
      <SectionContainer id="volunteering-opportunities-container">
        <Header />
        <Opportunities />
        <Footer />
      </SectionContainer>
    </FullWidthContainer>
  );
}

export default VolunteeringOpportunitiesSection;
