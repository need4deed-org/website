import { useTranslation } from "react-i18next";
import {
  screenSizeThresholds,
  urlApiOpportunity,
} from "../../config/constants";
import { Lang, OpportunityParams, OpportunityType } from "../../config/types";
import useOpportunities from "../../hooks/api/useOpportunities";
import useResponsive from "../../hooks/useResponsive";
import { OpportunitiesContainer } from "../styled/containers";
import OpportunityCard from "./OpportunityCard";
import { OpportunityApi } from "./types";
import { getMappedOpportunities, getMostPopularOpportunities } from "./utils";

const opportunityParams: OpportunityParams = {
  search: {
    status: ["Volunteers Needed", "Search in process", "Not started"],
    opportunity_type: [OpportunityType.GENERAL, OpportunityType.ACCOMPANYING],
  },
  primaryKeys: ["title", "name"],
};

function Opportunities() {
  const { i18n } = useTranslation();
  const isSmallScreen = useResponsive(screenSizeThresholds.desktop);
  const truncateNumber = isSmallScreen ? 2 : 3;

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

  const mappedOpportunities = getMappedOpportunities(popularOpportunities);

  return (
    <OpportunitiesContainer id="opportunities-container">
      {mappedOpportunities.map((opp) => (
        <OpportunityCard
          key={opp.id}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...opp}
        />
      ))}
    </OpportunitiesContainer>
  );
}

export default Opportunities;
