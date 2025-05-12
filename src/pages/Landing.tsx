import { AppContainer } from "../components/styled/containers";
import { VolunteeringCategoriesSection } from "../components/VolunteeringCategories";
import { VolunteeringOpportunitiesSection } from "../components/VolunteeringOpportunities";
import { TestimonialsSection } from "../components/Testimonials";
import { HeroSection } from "../components/HeroSection";

export default function Landing() {
  return (
    <AppContainer id="app-container">
      <HeroSection />
      <VolunteeringCategoriesSection />
      <VolunteeringOpportunitiesSection />
      <TestimonialsSection />
    </AppContainer>
  );
}
