import { KeyMap, OpportunityParams } from "../../config/types";
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

const regexHttpSchema = RegExp("^(http|https)://.*$");

export default function OpportunityCards({
  url,
  opportunityParams,
  keyMap,
}: Props) {
  const isUrl = url.toLowerCase().match(regexHttpSchema);
  const useOpp = isUrl ? useOpportunities : useOpportunitiesFromFile;
  const { opportunities, loading } = useOpp(url, opportunityParams);

  return opportunities?.length ? (
    <div className="n4d-container opportunity-container">
      {opportunities.map((opportunity, idx) => (
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
