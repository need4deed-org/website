import { useTranslation } from "react-i18next";
import { AppContainer } from "../components/styled/containers";

import Testimonials from "../components/Testimonials";
import { VolunteeringCategoriesSection } from "../components/VolunteeringCategories";
import { VolunteeringOpportunitiesSection } from "../components/VolunteeringOpportunities";
import { Lang } from "../config/types";

// TODO: This is a temporary component, will be deleted.
function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <div>
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
      <Testimonials />
    </AppContainer>
  );
}
