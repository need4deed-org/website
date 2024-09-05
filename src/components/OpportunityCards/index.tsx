import useOpportunities from "../../hooks/useOpportunities";
import { KeyMap, OpportunityParams, OpportuntyType } from "../../types";
import { mapOpportunity } from "../../utils";
import EmptyList from "../EmtyList";
import OpportunityCard from "./OpportunityCard";
import "./index.css";

interface Props {
  dataFileUrl: string;
  opportunityParams: OpportunityParams;
  keyMap: KeyMap;
  type?: OpportuntyType;
}

export default function OpportunityCards({
  dataFileUrl,
  opportunityParams,
  keyMap,
  type = OpportuntyType.GENERAL,
}: Props) {
  const opportunities = useOpportunities(dataFileUrl, opportunityParams);

  return (
    <div className="n4d-container opportunity-container">
      {opportunities.length ? (
        opportunities
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
          ))
      ) : (
        <EmptyList />
      )}
    </div>
  );
}
