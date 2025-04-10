import { CalendarDots, MapPin, Translate } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { BaseCard, IconDiv } from "../styled/containers";
import { Heading3, Paragraph } from "../styled/text";
import { iconNameMap } from "../VolunteeringCategories/icon";
import { IconName } from "../VolunteeringCategories/types";
import OpportunityCardDetails, { CardDetail } from "./OpportunityCardDetail";
import { Opportunity } from "./types";
import { Activities } from "../core/common";

const charlimit = 160;

const Card = styled(BaseCard)`
  background-color: var(--color-magnolia);
  width: var(--homepage-volunteering-opportunity-card-width);
  padding-top: var(--homepage-volunteering-opportunity-card-padding-top);
  padding-right: var(--homepage-volunteering-opportunity-card-padding-right);
  padding-bottom: var(--homepage-volunteering-opportunity-card-padding-bottom);
  padding-left: var(--homepage-volunteering-opportunity-card-padding-left);
  gap: var(--homepage-volunteering-opportunity-card-gap);
`;

interface OpportunityCardProps extends Opportunity {
  iconName: IconName;
}

export default function OpportunityCard({
  title,
  voInformation,
  iconName,
  languages,
  schedule,
  locations,
  activities,
  accompanyingDate,
}: OpportunityCardProps) {
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
      <Activities activities={activities} />
      <OpportunityCardDetails cardDetails={cardDetails} />
    </Card>
  );
}
