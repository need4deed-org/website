import { useTranslation } from "react-i18next";
import styled from "styled-components";
import useScreenType from "../../hooks/useScreenType";
import { IconName } from "./icon";
import StepCard from "./StepCard";
import { PaginatedCards } from "../core/paginatedCards";
import { ScreenTypes } from "../../config/types";
import { Heading1 } from "../styled/text";
import LastStepCard from "./LastStepCard";

export interface Step {
  iconName: IconName;
  title: string;
  infoTexts: string[];
  week: string;
}

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Steps() {
  const screenType = useScreenType();
  const { t } = useTranslation();

  const cardsPerPage = screenType === ScreenTypes.TABLET ? 2 : 1;

  const steps: Step[] = [
    {
      iconName: IconName.ListChecks,
      title: t("homepage.processSteps.steps.1.title"),
      week: t("homepage.processSteps.steps.1.week"),
      infoTexts: [
        t("homepage.processSteps.steps.1.infoText1"),
        t("homepage.processSteps.steps.1.infoText2"),
      ],
    },
    {
      iconName: IconName.Notepad,
      title: t("homepage.processSteps.steps.2.title"),
      week: t("homepage.processSteps.steps.2.week"),
      infoTexts: [
        t("homepage.processSteps.steps.2.infoText1"),
        t("homepage.processSteps.steps.2.infoText2"),
      ],
    },
    {
      iconName: IconName.Strategy,
      title: t("homepage.processSteps.steps.3.title"),
      week: t("homepage.processSteps.steps.3.week"),
      infoTexts: [t("homepage.processSteps.steps.3.infoText1")],
    },
    {
      iconName: IconName.ShootingStar,
      title: t("homepage.processSteps.steps.4.title"),
      week: t("homepage.processSteps.steps.4.week"),
      infoTexts: [t("homepage.processSteps.steps.4.infoText1")],
    },
    {
      iconName: IconName.AddressBook,
      title: t("homepage.processSteps.steps.5.title"),
      week: t("homepage.processSteps.steps.5.week"),
      infoTexts: [t("homepage.processSteps.steps.5.infoText1")],
    },
    {
      iconName: IconName.HandHeart,
      title: t("homepage.processSteps.steps.6.title"),
      week: t("homepage.processSteps.steps.6.week"),
      infoTexts: [t("homepage.processSteps.steps.6.infoText1")],
    },
  ];

  const cards = steps.map((step, index) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StepCard key={step.title} index={index + 1} {...step} />
  ));

  cards.push(
    <LastStepCard
      iconName={IconName.Sparkle}
      text={t("homepage.processSteps.steps.lastStep.text")}
    />,
  );

  return (
    <StepsContainer>
      <Heading1>{t("homepage.processSteps.stepsHeadline")}</Heading1>
      <PaginatedCards
        cardsPerPage={cardsPerPage}
        cards={cards}
        arrowButtonColor="orchid"
        bottomIndicatorColor="magnolia"
        bottomCurrentIndicatorColor="aubergine-light"
        isOverlayingCards={screenType === ScreenTypes.DESKTOP}
      />
    </StepsContainer>
  );
}
