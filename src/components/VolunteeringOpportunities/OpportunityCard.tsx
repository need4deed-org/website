import {
  CalendarDotsIcon as CalendarDots,
  MapPinIcon as MapPin,
  TranslateIcon as Translate,
} from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { ScreenTypes } from "../../config/types";
import useScreenType from "../../hooks/useScreenType";
import { Activities } from "../core/common";
import { BaseCard, IconDiv } from "../styled/containers";
import { Heading3, Paragraph } from "../styled/text";
import { iconNameMap } from "../VolunteeringCategories/icon";
import { IconName } from "../VolunteeringCategories/types";
import OpportunityCardDetails, { CardDetail } from "./OpportunityCardDetail";
import { Opportunity } from "./types";

interface CardProps extends React.CSSProperties {}

const Card = styled(BaseCard)<CardProps>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "var(--color-magnolia)"};
  width: ${({ width }) =>
    width || "var(--homepage-volunteering-opportunity-card-width)"};
  height: ${({ height }) =>
    height || "var(--homepage-volunteering-opportunity-card-height)"};
  padding-top: var(--homepage-volunteering-opportunity-card-padding-top);
  padding-right: var(--homepage-volunteering-opportunity-card-padding-right);
  padding-bottom: var(--homepage-volunteering-opportunity-card-padding-bottom);
  padding-left: var(--homepage-volunteering-opportunity-card-padding-left);
  gap: var(--homepage-volunteering-opportunity-card-gap);
`;

interface Props extends React.CSSProperties {
  opportunity: Opportunity;
  iconName: IconName;
  vo?: boolean;
  onClickHandler?: (opportunity: Opportunity) => void;
  CTAs?: ({
    flexDirection,
    opportunity,
  }: React.CSSProperties & { opportunity: Opportunity }) => React.ReactNode;
}

export default function OpportunityCard({
  opportunity,
  iconName,
  onClickHandler,
  width,
  height,
  backgroundColor,
  vo = false,
  CTAs = undefined,
}: Props) {
  const { t } = useTranslation();
  const screenType = useScreenType();

  const {
    title,
    languages,
    schedule,
    locations,
    activities,
    accompanyingDate,
    voInformation,
  } = opportunity;

  const languagesText = languages.join(", ");
  const district = locations.join(", ");
  const scheduleAsStr =
    accompanyingDate?.toDateString().split(" ").slice(0, 3).join(" ") ||
    schedule ||
    "";

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
    <Card
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      onClick={() => onClickHandler && onClickHandler(opportunity)}
    >
      <IconDiv>{iconNameMap[iconName]}</IconDiv>
      <Heading3>{title}</Heading3>
      {vo && <Paragraph>{voInformation}</Paragraph>}
      <Activities activities={activities} />
      <OpportunityCardDetails cardDetails={cardDetails} />
      {CTAs && (
        <CTAs
          flexDirection={screenType === ScreenTypes.MOBILE ? "column" : "row"}
          opportunity={opportunity}
        />
      )}
    </Card>
  );
}
