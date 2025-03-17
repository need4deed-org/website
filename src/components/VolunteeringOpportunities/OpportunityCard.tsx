import styled from "styled-components";
import { CalendarDots, MapPin, Translate } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
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
  "background-color": string;
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
  background-color: ${(props) => props["background-color"]};
`;

const aubergineColorActivities = [
  "doctors appointment",
  "government office",
  "apartment viewing",
  "school/kindergarten",
  "way/path accompanying",
  "arzttermin",
  "behörde",
  "wohnungsbesichtigung",
  "schule/kindergarten",
  "wegbegleitung",
];
const getActivityBackgroundColor = (activity: string) => {
  return aubergineColorActivities.includes(activity)
    ? "var(--color-aubergine-light)"
    : "var(--color-papaya)";
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
  const { t } = useTranslation();

  const languagesText = languages.join("; ");
  const datesText = schedule.dates?.join(", ");

  return (
    <Card>
      <IconDiv>{iconNameMap[iconName]}</IconDiv>
      <Heading3>{title}</Heading3>
      <Paragraph>{description}</Paragraph>

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

      <OpportunityDetailsContainer id="opportunity-details-container">
        <DetailSection>
          <DetailHeader>
            <Translate size={20} color="var(--icon-color)" />
            <Paragraph fontWeight={550}>
              {t(`homepage.volunteeringOpportunities.languages`)}:
            </Paragraph>
          </DetailHeader>
          <Paragraph>{languagesText}</Paragraph>
        </DetailSection>

        <DetailSection>
          <DetailHeader>
            <CalendarDots size={20} color="var(--icon-color)" />
            <Paragraph fontWeight={550}>
              {t(`homepage.volunteeringOpportunities.schedule`)}:
            </Paragraph>
            <Paragraph>{schedule.type}</Paragraph>
          </DetailHeader>
          <Paragraph>{datesText}</Paragraph>
        </DetailSection>

        <DetailSection>
          <DetailHeader>
            <MapPin size={20} weight="fill" color="var(--icon-color)" />
            <Paragraph fontWeight={550}>
              {t(`homepage.volunteeringOpportunities.district`)}:
            </Paragraph>
            <Paragraph>{district}</Paragraph>
          </DetailHeader>
        </DetailSection>
      </OpportunityDetailsContainer>
    </Card>
  );
}
