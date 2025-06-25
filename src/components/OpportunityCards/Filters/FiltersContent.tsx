import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Heading4, Paragraph } from "../../styled/text";
import { SwitchButton } from "../../core/button";
import AccordionFilter from "./AccordionFilter";
import { CardsFilter } from "../types";

const FiltersContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350;
  height: 2155;
  gap: 16px;
  padding-top: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  padding-left: 32px;
`;

const AccompanyingFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AccompanyingFilterHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

interface Props {
  filter: CardsFilter;

  setCardsFilter: (filter: CardsFilter) => void;
}

export default function FiltersContent({ setCardsFilter, filter }: Props) {
  const { t } = useTranslation();
  const [isAccompanyingChecked, setIsAccompanyingChecked] = useState(false);

  const activityTypeFilters = [
    {
      text: "Daycare",
      onChange: (checked: boolean) => {
        const { activityType } = filter;

        if (checked) activityType.push("Daycare");
        else activityType.splice(activityType.indexOf("Daycare"), 1);

        setCardsFilter({
          ...filter,
          activityType,
        });
      },
    },
    {
      text: "German language support",
      onChange: (checked: boolean) => {
        const { activityType } = filter;

        if (checked) activityType.push("German language support");
        else
          activityType.splice(
            activityType.indexOf("German language support"),
            1,
          );

        setCardsFilter({
          ...filter,
          activityType,
        });
      },
    },
  ];

  return (
    <FiltersContentContainer>
      <AccompanyingFilterContainer>
        <AccompanyingFilterHeaderContainer>
          <Heading4 margin={0} color="var(--color-midnight)">
            {t("opportunityPage.accompanying")}
          </Heading4>
          <SwitchButton
            isChecked={isAccompanyingChecked}
            onToggle={() => setIsAccompanyingChecked(!isAccompanyingChecked)}
          />
        </AccompanyingFilterHeaderContainer>

        <Paragraph
          fontWeight={400}
          fontSize="14px"
          color="var(--color-midnight)"
          lineheight="14px"
        >
          {t("opportunityPage.accompanyingDesc")}
        </Paragraph>
      </AccompanyingFilterContainer>

      <AccordionFilter header="Activity Type" items={activityTypeFilters} />
    </FiltersContentContainer>
  );
}
