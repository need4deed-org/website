import useOpportunities from "../../hooks/useOpportunities";
import { KeyMap, OpportunityParams } from "../../types";
import EmptyList from "../EmtyList";
import OpportunityCard from "./OpportunityCard";
import { mapOpportunity } from "./api";
import "./index.css";

interface Props {
  dataFileUrl: string;
  opportunityParams: OpportunityParams;
  keyMap: KeyMap;
}

export default function OpportunityCards({
  dataFileUrl,
  opportunityParams,
  keyMap,
}: Props) {
  const opportunities = useOpportunities(dataFileUrl, opportunityParams);

  return (
    <div className="n4d-container opportunity-container">
      {opportunities.length ? (
        opportunities.map((opportunity, idx) => (
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
