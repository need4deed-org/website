import { KeyMap, OpportunityParams, OpportunityType } from "../../config/types";
import useOpportunities from "../../hooks/api/useOpportunities";
import useOpportunitiesFromFile from "../../hooks/api/useOpportunitiesFromFile";
import { mapOpportunity } from "../../utils";
import Announcement from "../Announcement";
import OpportunityCard from "./OpportunityCard";
import "./index.css";

interface Props {
  url: string;
  opportunityParams: OpportunityParams;
  keyMap: KeyMap;
}

const regexHttpSchema = /^(http|https):\/\/.*/;

export default function OpportunityCards({
  url,
  opportunityParams,
  keyMap,
}: Props) {
  const isUrl = url.toLowerCase().match(regexHttpSchema);
  const useOpp = isUrl ? useOpportunities : useOpportunitiesFromFile;
  const { opportunities, loading } = useOpp(url, opportunityParams);

  // Hard coded sorting for 'ACCOMPANYING' page
  if (
    opportunities?.length &&
    opportunityParams.search?.opportunity_type.includes(
      OpportunityType.ACCOMPANYING,
    )
  ) {
    opportunities.sort(
      (a, b) =>
        new Date(a.accomp_datetime).getTime() -
        new Date(b.accomp_datetime).getTime(),
    );
  }

  return opportunities?.length ? (
    <div className="n4d-container opportunity-container">
      {opportunities.map((opportunity) => (
        <OpportunityCard
          // eslint-disable-next-line no-underscore-dangle
          key={opportunity.id || opportunity._id || crypto.randomUUID()}
          opportunity={mapOpportunity(opportunity, keyMap)}
          pre={false}
        />
      ))}
    </div>
  ) : (
    <Announcement copies={loading ? "spinner" : "emptyList"} />
  );
}
