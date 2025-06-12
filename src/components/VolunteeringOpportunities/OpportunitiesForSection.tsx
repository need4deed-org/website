import { Lang, OpportunityType } from "need4deed-sdk";
import { useTranslation } from "react-i18next";

import { urlApiOpportunity } from "../../config/constants";
import { OpportunityParams, ScreenTypes } from "../../config/types";
import useOpportunities from "../../hooks/api/useOpportunities";
import useScreenType from "../../hooks/useScreenType";
import { OpportunitiesContainer } from "../styled/containers";
import OpportunityCard from "./OpportunityCard";
import { OpportunityApi } from "./types";
import {
  CategoryTitle,
  getIconName,
  getMappedOpportunities,
  getMostPopularOpportunities,
} from "./utils";

const opportunityParams: OpportunityParams = {
  search: {
    status: ["Volunteers Needed", "Search in process", "Not started"],
    opportunity_type: [OpportunityType.GENERAL, OpportunityType.ACCOMPANYING],
  },
  primaryKeys: ["title", "name"],
};

export default function OpportunitiesForSection() {
  const { i18n, t } = useTranslation();
  const screenType = useScreenType();

  const truncateNumber = screenType === ScreenTypes.DESKTOP ? 3 : 2;

  // Set language for API request
  opportunityParams.language = i18n.language as Lang;

  const { opportunities } = useOpportunities(
    urlApiOpportunity,
    opportunityParams,
  );

  const opportunitiesRaw = (opportunities || []) as unknown as OpportunityApi[];

  const popularOpportunities = getMostPopularOpportunities(
    opportunitiesRaw,
    truncateNumber,
  );

  const mappedOpportunities = getMappedOpportunities(popularOpportunities, t);

  return (
    <OpportunitiesContainer id="opportunities-container">
      {mappedOpportunities.map((opp) => (
        <OpportunityCard
          key={opp.id}
          iconName={getIconName(opp.categoryId as CategoryTitle)}
          opportunity={opp}
        />
      ))}
    </OpportunitiesContainer>
  );
}
