import { ActivitiesContainer } from "../../styled/containers";
import { ActivityTag } from "../../styled/tags";
import { ActivitySpan } from "../../styled/text";
import { getActivityBackgroundColor } from "../../VolunteeringOpportunities/utils";

interface Props {
  activities: string[];
}

export function Activities({ activities }: Props) {
  return (
    <ActivitiesContainer id="activities-container">
      {activities.filter(Boolean).map((activity) => (
        <ActivityTag
          key={activity}
          background-color={getActivityBackgroundColor(activity)}
        >
          <ActivitySpan>{activity.toUpperCase()}</ActivitySpan>
        </ActivityTag>
      ))}
    </ActivitiesContainer>
  );
}

export default Activities;
