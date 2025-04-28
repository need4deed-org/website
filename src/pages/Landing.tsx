import { useTranslation } from "react-i18next";
import { AppContainer } from "../components/styled/containers";

import { VolunteeringCategoriesSection } from "../components/VolunteeringCategories";
import { Lang } from "../config/types";
import { VolunteeringOpportunitiesSection } from "../components/VolunteeringOpportunities";
import { TestimonialsSection } from "../components/Testimonials";
import RacSection from "../components/RacSection/RacSection";

// TODO: This is a temporary component, will be deleted.
function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <div style={{ position: "fixed", top: 0 }}>
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value={Lang.EN}>English</option>
        <option value={Lang.DE}>Deutsch</option>
      </select>
    </div>
  );
}

export default function Landing() {
  return (
    <AppContainer id="app-container">
      <LanguageSelector />
      <VolunteeringCategoriesSection />
      <VolunteeringOpportunitiesSection />
      <TestimonialsSection />
      <RacSection />
    </AppContainer>
  );
}
