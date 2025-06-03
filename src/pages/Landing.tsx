import { EventsSection } from "../components/EventsSection";
import { FooterPartnersSection } from "../components/FooterPartners";
import { HeroSection } from "../components/HeroSection";
import PageWrapper from "../components/Layouts/staticPageLayout/PageWrapper";
import { ProcessStepsSection } from "../components/ProcessSteps";
import { RacSection } from "../components/RacSection";
import { AppContainer } from "../components/styled/containers";
import { TestimonialsSection } from "../components/Testimonials";
import { VolunteeringCategoriesSection } from "../components/VolunteeringCategories";
import { VolunteeringOpportunitiesSection } from "../components/VolunteeringOpportunities";

export default function Landing() {
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
}
