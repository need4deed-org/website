import {
  CalendarDotsIcon as CalendarDots,
  MapPinIcon as MapPin,
  TranslateIcon as Translate,
} from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { OpportunityType } from "need4deed-sdk";
import { ScreenTypes } from "../../config/types";
import useScreenType from "../../hooks/useScreenType";
import { Activities } from "../core/common";
import { BaseCard, IconDiv } from "../styled/containers";
import { Heading3, Paragraph } from "../styled/text";
import { iconNameMap } from "../VolunteeringCategories/icon";
import { IconName } from "../VolunteeringCategories/types";
import OpportunityCardDetails, { CardDetail } from "./OpportunityCardDetail";
import { Opportunity } from "./types";
import { formatAccompanyingDate } from "./utils";

export const defaultMainCommunication = "English, German";
interface CardProps extends React.CSSProperties {
  enableHoverEffect?: boolean;
}

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

  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;

  ${({ enableHoverEffect }) =>
    enableHoverEffect &&
    `
    cursor: pointer;
    &:hover {
      background-color:var(--color-orchid-subtle)
      }

  `}
`;

const LanguagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--homepage-volunteering-opportunity-details-languages-gap);
`;

const LanguageDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--homepage-volunteering-opportunity-details-languages-gap);
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
  enableHoverEffect?: boolean;
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
  enableHoverEffect,
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
    opportunityType,
    accompanyingTranslation,
  } = opportunity;

  const languagesText = languages.join(", ");

  const languagesComponent = (
    <LanguagesContainer>
      {opportunityType === OpportunityType.GENERAL ? (
        <LanguageDetailContainer>
          <Paragraph fontWeight={400}>
            {t("homepage.volunteeringOpportunities.mainCommunication")}:
          </Paragraph>
          <Paragraph>{defaultMainCommunication}</Paragraph>
        </LanguageDetailContainer>
      ) : (
        <LanguageDetailContainer>
          <Paragraph fontWeight={400}>
            {t("homepage.volunteeringOpportunities.translationTo")}:
          </Paragraph>
          <Paragraph>{accompanyingTranslation}</Paragraph>
        </LanguageDetailContainer>
      )}

      <LanguageDetailContainer>
        <Paragraph fontWeight={400}>
          {t("homepage.volunteeringOpportunities.residentsSpeak")}:
        </Paragraph>
        <Paragraph>{languagesText}</Paragraph>
      </LanguageDetailContainer>
    </LanguagesContainer>
  );

  const district = locations.join(", ");
  const scheduleAsStr =
    (accompanyingDate && formatAccompanyingDate(accompanyingDate)) ||
    schedule ||
    "";

  const cardDetails: CardDetail[] = [
    {
      icon: <Translate size={20} color="var(--icon-color)" />,
      headerText: t(`homepage.volunteeringOpportunities.languages`),
      bodyTextComponent: languagesComponent,
    },
    {
      icon: <CalendarDots size={20} color="var(--icon-color)" />,
      headerText: accompanyingDate
        ? t(`homepage.volunteeringOpportunities.dateOfAppointment`)
        : t(`homepage.volunteeringOpportunities.schedule`),
      bodyTextComponent: <Paragraph>{scheduleAsStr}</Paragraph>,
    },
    {
      icon: <MapPin size={20} weight="fill" color="var(--icon-color)" />,
      headerText: t(`homepage.volunteeringOpportunities.district`),
      bodyTextComponent: <Paragraph>{district}</Paragraph>,
    },
  ];

  return (
    <Card
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      onClick={() => onClickHandler && onClickHandler(opportunity)}
      enableHoverEffect={enableHoverEffect}
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
