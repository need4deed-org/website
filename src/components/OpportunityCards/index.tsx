import { KeyMap, OpportunityParams, OpportunityType } from "../../config/types";
import useOpportunities from "../../hooks/api/useOpportunities";
import { mapOpportunity } from "../../utils";
import Announcement from "../Announcement";
import OpportunityCard from "./OpportunityCard";
import "./index.css";

interface Props {
  dataFileUrl: string;
  opportunityParams: OpportunityParams;
  keyMap: KeyMap;
  type?: OpportunityType;
}

export default function OpportunityCards({
  dataFileUrl,
  opportunityParams,
  keyMap,
  type = OpportunityType.GENERAL,
}: Props) {
  const { opportunities, loading } = useOpportunities(
    dataFileUrl,
    opportunityParams,
  );

  return opportunities.length ? (
    <div className="n4d-container opportunity-container">
      {opportunities
        .filter(opportunity =>
          opportunity.opportunity_type
            ? opportunity.opportunity_type === type
            : true,
        )
        .map((opportunity, idx) => (
          <OpportunityCard
            key={"opp" + idx}
            opportunity={mapOpportunity(opportunity, keyMap)}
            pre={false}
          />
        ))}
    </div>
  ) : (
    <Announcement copies={loading ? "spinner" : "emptyList"} />
  );
}
