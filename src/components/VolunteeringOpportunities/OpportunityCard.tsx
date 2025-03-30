import styled from "styled-components";
import { CalendarDots, MapPin, Translate } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { Opportunitiy } from "./types";
import { ActivitesContainer, BaseCard, IconDiv } from "../styled/containers";
import { ActivitySpan, Heading3, Paragraph } from "../styled/text";
import { iconNameMap } from "../VolunteeringCategories/icon";
import { IconName } from "../VolunteeringCategories/types";
import { getActivityBackgroundColor } from "./utils";
import OpportunityCardDetails, { CardDetail } from "./OpportunityCardDetail";

const charlimit = 160;

const Card = styled(BaseCard)`
  background-color: var(--color-magnolia);
  width: var(--homepage-volunteering-opportunity-card-width);
  height: var(--homepage-volunteering-opportunity-card-height);
  padding-top: var(--homepage-volunteering-opportunity-card-padding-top);
  padding-right: var(--homepage-volunteering-opportunity-card-padding-right);
  padding-bottom: var(--homepage-volunteering-opportunity-card-padding-bottom);
  padding-left: var(--homepage-volunteering-opportunity-card-padding-left);
  gap: var(--homepage-volunteering-opportunity-card-gap);
`;
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

export default function OpportunityCard({
  title,
  voInformation,
  iconName,
  languages,
  schedule,
  locations,
  activities,
  accompanyingDate,
}: Opportunitiy & { iconName: IconName }) {
  const { t } = useTranslation();

  const languagesText = languages.join("; ");
  const district = locations.join(",");
  const scheduleAsStr =
    accompanyingDate?.toDateString().split(" ").slice(0, 3).join(" ") ||
    schedule ||
    "";

  const titleLen = title?.length || 0;
  const totalTitleInfoLen = titleLen + (voInformation?.length || 0);

  let truncatedVoInformation = null;
  if (totalTitleInfoLen > charlimit)
    truncatedVoInformation = `${voInformation.slice(0, charlimit - titleLen)}...`;

  const cardDetails: CardDetail[] = [
    {
      icon: <Translate size={20} color="var(--icon-color)" />,
      headerText: t(`homepage.volunteeringOpportunities.languages`),
      bodyText: languagesText,
    },
    {
      icon: <CalendarDots size={20} color="var(--icon-color)" />,
      headerText: t(`homepage.volunteeringOpportunities.schedule`),
      bodyText: scheduleAsStr,
    },
    {
      icon: <MapPin size={20} weight="fill" color="var(--icon-color)" />,
      headerText: t(`homepage.volunteeringOpportunities.district`),
      bodyText: district,
    },
  ];

  return (
    <Card>
      <IconDiv>{iconNameMap[iconName]}</IconDiv>
      <Heading3>{title}</Heading3>
      <Paragraph>{truncatedVoInformation || voInformation}</Paragraph>
      <ActivitesContainer id="activities-container">
        {activities.map((activity) => (
          <ActivityTag
            key={activity}
            background-color={getActivityBackgroundColor(activity)}
          >
            <ActivitySpan>{activity.toUpperCase()}</ActivitySpan>
          </ActivityTag>
        ))}
      </ActivitesContainer>

      <OpportunityCardDetails cardDetails={cardDetails} />
    </Card>
  );
}
