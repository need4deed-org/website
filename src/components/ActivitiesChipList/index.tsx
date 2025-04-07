import styled from "styled-components";
import { ActivitiesContainer } from "../styled/containers";
import { ActivitySpan } from "../styled/text";
import { getActivityBackgroundColor } from "../VolunteeringOpportunities/utils";

interface ActivityTagProps {
  "background-color": string;
}

const ActivityTag = styled.div<ActivityTagProps>`
  border-radius: var(
    --homepage-volunteering-opportunity-activity-tag-border-radius
  );
  padding: var(--homepage-volunteering-opportunity-activity-tag-padding);
  background-color: ${(props) => props["background-color"]};
`;

interface Props {
  activities: string[];
}

export default function ActivitiesChipList({ activities }: Props) {
  return (
    <ActivitiesContainer id="activities-container">
      {activities?.length &&
        activities.map((activity) => (
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
