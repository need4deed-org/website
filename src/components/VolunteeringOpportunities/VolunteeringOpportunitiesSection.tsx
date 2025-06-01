import { FullWidthContainer, SectionContainer } from "../styled/containers";
import Footer from "./Footer";
import Header from "./Header";
import OpportunitiesForSection from "./OpportunitiesForSection";

export function VolunteeringOpportunitiesSection() {
  return (
    <FullWidthContainer
      id="volunteering-opportunities-fullWidthContainer"
      background-color="var(--color-orchid)"
    >
      <SectionContainer id="volunteering-opportunities-container">
        <Header />
        <OpportunitiesForSection />
        <Footer />
      </SectionContainer>
    </FullWidthContainer>
  );
}

export default VolunteeringOpportunitiesSection;
