import { useTranslation } from "react-i18next";
import OpportunityCard from "./OpportunityCard";
import { Opportunitiy } from "./types";
import { OpportunitiesContainer } from "../styled/containers";
import { IconName } from "../VolunteeringCategories/types";
import useResponsive from "../../hooks/useResponsive";
import { screenSizeThresholds } from "../../config/constants";

interface OpportunityTranslationKeys {
  title: string;
  description: string;
  languages: string;
  scheduleType: string;
  scheduleDates: string;
  activities: string;
}

const initialOpportunities: Partial<Opportunitiy>[] = [
  { iconName: IconName.Baby, district: "Treptown" },
  { iconName: IconName.Users, district: "Berlin" },
  { iconName: IconName.Bicycle, district: "Munih" },
];

function Opportunities() {
  const { t } = useTranslation();
  const isSmallScreen = useResponsive(screenSizeThresholds.desktop);
  const truncateNumber = isSmallScreen ? 2 : 3;

  const translateOpportunity = (index: number): OpportunityTranslationKeys => ({
    title: t(`homepage.volunteeringOpportunities.card${index}.title`),
    description: t(
      `homepage.volunteeringOpportunities.card${index}.description`,
    ),
    languages: t(`homepage.volunteeringOpportunities.card${index}.languages`),
    scheduleType: t(
      `homepage.volunteeringOpportunities.card${index}.schedule.type`,
    ),
    scheduleDates: t(
      `homepage.volunteeringOpportunities.card${index}.schedule.dates`,
    ),
    activities: t(`homepage.volunteeringOpportunities.card${index}.activities`),
  });

  const opportunities: Opportunitiy[] = initialOpportunities.map(
    (opp, index) => {
      const translations = translateOpportunity(index);
      return {
        ...opp,
        title: translations.title,
        description: translations.description,
        languages: translations.languages.split(",").map((e) => e.trim()),
        schedule: {
          type: translations.scheduleType,
          dates: translations.scheduleDates.split(",").map((e) => e.trim()),
        },
        activities: translations.activities.split(",").map((e) => e.trim()),
      } as Opportunitiy;
    },
  );

  return (
    <OpportunitiesContainer id="opportunities-container">
      {opportunities.slice(0, truncateNumber).map((opp) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <OpportunityCard key={opp.title} {...opp} />
      ))}
    </OpportunitiesContainer>
  );
}

export default Opportunities;
