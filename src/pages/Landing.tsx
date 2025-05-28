import { AppContainer } from "../components/styled/containers";
import { VolunteeringCategoriesSection } from "../components/VolunteeringCategories";
import { VolunteeringOpportunitiesSection } from "../components/VolunteeringOpportunities";
import { TestimonialsSection } from "../components/Testimonials";
import { HeroSection } from "../components/HeroSection";
import { RacSection } from "../components/RacSection";
import { FooterPartnersSection } from "../components/FooterPartners";
import { ProcessStepsSection } from "../components/ProcessSteps";
import { EventsSection } from "../components/EventsSection";

export default function Landing() {
  return (
    <AppContainer id="app-container">
      <HeroSection />
      <VolunteeringCategoriesSection />
      <VolunteeringOpportunitiesSection />
      <ProcessStepsSection />
      <EventsSection />
      <TestimonialsSection />
      <RacSection />
      <FooterPartnersSection />
    </AppContainer>
  );
}
