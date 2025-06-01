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
  const opportunityProps: Opportunity = {
    accompanyingDate: opportunity.time
      ? null
      : new Date(opportunity.accompDate),
    accompanyingInfo: null,
    activities: opportunity.activities.split(","),
    createdAt: new Date(opportunity.createdAt),
    datetime: null,
    id: opportunity.id,
    languages: opportunity.languages.split(","),
    locations: opportunity.location.split(","),
    opportunityType: opportunity.type,
    schedule: opportunity.time,
    skills: [""],
    status: "",
    timeslots: [{ key: "" }],
    title: opportunity.title,
    updatedAt: new Date(opportunity.updatedAt),
    voInformation: opportunity.vo,
    categoryId: opportunity.categoryId,
  };

  const iconName = getIconName(opportunityProps.categoryId as CategoryTitle);

  return (
    <OpportunityCard
      isPage
      iconName={iconName}
      opportunity={opportunityProps}
      onClickHandler={() => onClickHandler && onClickHandler(opportunityProps)}
    />
  );
}
