import { useTranslation } from "react-i18next";
import OpportunityCard from "./OpportunityCard";
import { OpportunitiesContainer } from "../styled/containers";
import useResponsive from "../../hooks/useResponsive";
import {
  screenSizeThresholds,
  urlApiOpportunity,
} from "../../config/constants";
import useOpportunities from "../../hooks/api/useOpportunities";
import { Lang, OpportunityParams, OpportunityType } from "../../config/types";
import { OpportunitiyApi } from "./types";
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

  const opportunitiesRaw = (opportunities ||
    []) as unknown as OpportunitiyApi[];

  const popularOpportunities = getMostPopularOpportunities(
    opportunitiesRaw,
    truncateNumber,
  );

  const mappedOpportunities = getMappedOpportunities(popularOpportunities);

  return (
    <OpportunitiesContainer id="opportunities-container">
      {mappedOpportunities.map((opp) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <OpportunityCard key={opp.id} {...opp} />
      ))}
    </OpportunitiesContainer>
  );
}

export default Opportunities;
