import styled from "styled-components";
import { CalendarDots, MapPin, Translate } from "@phosphor-icons/react";
import { Opportunitiy } from "./types";
import {
  ActivitesContainer,
  BaseCard,
  IconDiv,
  OpportunityDetailsContainer,
} from "../styled/containers";
import { ActivitySpan, Heading3, Paragraph } from "../styled/text";
import { iconNameMap } from "../VolunteeringCategories/icon";

interface ActivityTagProps {
  backgroundColor: string;
}

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

const ActivityTag = styled.div<ActivityTagProps>`
  border-radius: var(
    --homepage-volunteering-opportunity-activity-tag-border-radius
  );
  padding: var(--homepage-volunteering-opportunity-activity-tag-padding);
  background-color: ${(props) => props.backgroundColor};
`;

const papayaColorActivities = ["tutoring", "translate", "unique skills"]; // ... we can add more activity from Figma file
const getActivityBackgroundColor = (activity: string) => {
  return papayaColorActivities.includes(activity)
    ? "var(--color-papaya)"
    : "var(--color-aubergine-light)";
};

const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: var(--homepage-volunteering-opportunity-detail-section-gap);
`;

const DetailHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: var(--homepage-volunteering-opportunity-detail-header-gap);
`;

export default function OpportunityCard({
  title,
  description,
  iconName,
  languages,
  schedule,
  district,
  activities,
}: Opportunitiy) {
  const languagesText = languages.join("; ");
  const datesText = schedule.dates?.join(", ");

  return (
    <Card>
      <IconDiv>{iconNameMap[iconName]}</IconDiv>
      <Heading3>{title}</Heading3>
      <Paragraph>{description}</Paragraph>

      <ActivitesContainer id="activities-container">
        {activities.map((activity) => (
          <ActivityTag backgroundColor={getActivityBackgroundColor(activity)}>
            <ActivitySpan>{activity.toUpperCase()}</ActivitySpan>
          </ActivityTag>
        ))}
      </ActivitesContainer>

      <OpportunityDetailsContainer id="opportunity-details-container">
        <DetailSection>
          <DetailHeader>
            <Translate size={20} color="var(--icon-color)" />
            <Paragraph fontWeight={550}>Languages:</Paragraph>
          </DetailHeader>
          <Paragraph>{languagesText}</Paragraph>
        </DetailSection>

        <DetailSection>
          <DetailHeader>
            <CalendarDots size={20} color="var(--icon-color)" />
            <Paragraph fontWeight={550}>Schedule:</Paragraph>
            <Paragraph>{schedule.type}</Paragraph>
          </DetailHeader>
          <Paragraph>{datesText}</Paragraph>
        </DetailSection>

        <DetailSection>
          <DetailHeader>
            <MapPin size={20} weight="fill" color="var(--icon-color)" />
            <Paragraph fontWeight={550}>District:</Paragraph>
            <Paragraph>{district}</Paragraph>
          </DetailHeader>
        </DetailSection>
      </OpportunityDetailsContainer>
    </Card>
  );
}
