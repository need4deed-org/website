import useOpportunities from "../../hooks/useOpportunities";
import { FilterTarget, KeyMap, Opportunity } from "../../types";
import OpportunityCard from "./OpportunityCard";
import "./index.css";

function mapOpportunity(opportunity: Opportunity, keyMap: KeyMap) {
  return Object.keys(opportunity).reduce((mapped: Opportunity, key: string) => {
    const mappedKeyValue = Object.entries(keyMap).find(
      ([, value]) => value === key,
    );
    if (mappedKeyValue) mapped[mappedKeyValue[0]] = opportunity[key];
    else mapped[key] = opportunity[key];
    return mapped;
  }, {});
}

interface Props {
  dataFileUrl: string;
  filterTarget: FilterTarget;
  keyMap: KeyMap;
}

export default function OpportunityCards({
  dataFileUrl,
  filterTarget,
  keyMap,
}: Props) {
  const opportunities = useOpportunities(dataFileUrl, filterTarget);

  return (
    <div className="opportunity-container">
      {opportunities.map((opportunity, idx) => (
        <OpportunityCard
          key={"opp" + idx}
          opportunity={mapOpportunity(opportunity, keyMap)}
        />
      ))}
    </div>
  );
}
