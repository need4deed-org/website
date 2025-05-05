import { useTranslation } from "react-i18next";
import { urlApiOpportunity } from "../../config/constants";
import {
  Lang,
  OpportunityParams,
  OpportunityType,
  ScreenTypes,
} from "../../config/types";
import useOpportunities from "../../hooks/api/useOpportunities";
import { OpportunitiesContainer } from "../styled/containers";
import OpportunityCard from "./OpportunityCard";
import { OpportunityApi } from "./types";
import { getMappedOpportunities, getMostPopularOpportunities } from "./utils";
import useScreenType from "../../hooks/useScreenType";

const opportunityParams: OpportunityParams = {
  search: {
    status: ["Volunteers Needed", "Search in process", "Not started"],
    opportunity_type: [OpportunityType.GENERAL, OpportunityType.ACCOMPANYING],
  },
  primaryKeys: ["title", "name"],
};

function Opportunities() {
  const { i18n } = useTranslation();
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
