import { getOpportunityForGrid } from "../../utils";
import OpportunityCard from "./OpportunityCard";
import { Opportunity } from "./types";
import { CategoryTitle, getIconName } from "./utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  opportunity: Record<string, string>;
  onClickHandler?: (opportunity: Opportunity) => void;
}

export default function OpportunityCardForGrid({
  opportunity,
  onClickHandler,
}: Props) {
  const opportunityProps: Opportunity = getOpportunityForGrid(opportunity);

  const iconName = getIconName(opportunityProps.categoryId as CategoryTitle);

  return (
    <OpportunityCard
      width="var(--page-opportunity-card-width)"
      height="var(--page-opportunity-card-height)"
      iconName={iconName}
      opportunity={opportunityProps}
      onClickHandler={() => onClickHandler && onClickHandler(opportunityProps)}
    />
  );
}
