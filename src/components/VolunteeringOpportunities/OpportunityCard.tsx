import styled from "styled-components";
import { CalendarDots, MapPin, Translate } from "@phosphor-icons/react";
import { Opportunitiy } from "./types";
import { BaseCard, ContainerProps, IconDiv } from "../styled/containers";
import { ActivitySpan, Heading3, Paragraph } from "../styled/text";
import { iconNameMap } from "../VolunteeringCategories/icon";

// TODO: display - flex direction - border radius - background color are same but media changes
// Create a common Card div to use it throuhout the project for cards.
// const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   border-radius: 24px;
//   background-color: var(--color-magnolia);

//   @media (min-width: 360px) {
//     width: 320px;
//     /* height: 496px; // TODO: this height is not enough always for long schedule dates. discuss about it */
//     height: fit-content; // Temporary solution
//     padding-top: 24px;
//     padding-right: 24px;
//     padding-bottom: 40px;
//     padding-left: 24px;
//     gap: 16px;
//   }

//   @media (min-width: 768px) {
//     width: 332px;
//     height: 612px; // TODO: this height is not enough always for long schedule dates. discuss about it */
//     padding-top: 28px;
//     padding-right: 28px;
//     padding-bottom: 48px;
//     padding-left: 28px;
//     gap: 20px;
//   }

//   @media (min-width: 1440px) {
//     width: 372px;
//     height: 620px; // TODO: this height is not enough always for long schedule dates. discuss about it */
//     padding-top: 32px;
//     padding-right: 32px;
//     padding-bottom: 48px;
//     padding-left: 32px;
//     gap: 24px;
//   }
// `;

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

const ActivitesContainer = styled.div.attrs<ContainerProps>((props) => ({
  id: props.id,
}))<ContainerProps>`
  display: grid;
  width: fit-content;
  justify-content: left;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 8px;
`;

interface ActivityTagProps {
  backgroundColor: string;
}

const ActivityTag = styled.div<ActivityTagProps>`
  border-radius: 4px;
  background-color: var(--color-papaya);
  padding: 6px 8px;
  background-color: ${(props) => props.backgroundColor};
`;

const papayaColorActivities = ["tutoring", "translate", "unique skills"]; // ... we can add more activity from Figma file
const getActivityBackgroundColor = (activity: string) => {
  return papayaColorActivities.includes(activity)
    ? "var(--color-papaya)"
    : "var(--color-aubergine-light)";
};

// TODO: move @media values into index css
const OpportunityDetailsContainer = styled.div.attrs<ContainerProps>(
  (props) => ({
    id: props.id,
  }),
)<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: left;

  @media (min-width: 360px) {
    gap: 12px;
  }

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 4px;
`;

const DetailHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 8px;
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
