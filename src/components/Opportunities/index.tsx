import useOpportunities from "../../hooks/useOpportunities";
import Opportunity from "./Opportunity";
import "./index.css";

export default function Opportunities() {
  const opportunities = useOpportunities();

  return (
    <div className="opportunity-container">
      {opportunities.map((opportunity, idx) => (
        <Opportunity key={"opp" + idx} opportunity={opportunity} />
      ))}
    </div>
  );
}
