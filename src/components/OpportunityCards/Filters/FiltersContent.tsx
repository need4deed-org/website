import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Heading4, Paragraph } from "../../styled/text";
import { SwitchButton } from "../../core/button";
import AccordionFilter from "./AccordionFilter";
import { ActivityTypeKeys, CardsFilter } from "../types";
import { defaultFilter } from "./constants";

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
  setFilter: (filter: CardsFilter) => void;
}

const activityTypes = Object.keys(
  defaultFilter.activityType,
) as ActivityTypeKeys[];

export default function FiltersContent({ setFilter, filter }: Props) {
  const { t } = useTranslation();

  const activityTypeFilterItems = activityTypes.map((activity) => {
    return {
      label: t(`opportunityPage.filters.${activity}`),
      checked: filter.activityType[activity],
      onChange: (checked: boolean) => {
        const { activityType } = filter;
        activityType[activity] = checked;

        setFilter({ ...filter, activityType });
      },
    };
  });

  const accompanyingClickHandler = () => {
    const accompanying = !filter.accompanying;
    setFilter({ ...filter, accompanying });
  };

  return (
    <FiltersContentContainer>
      <AccompanyingFilterContainer>
        <AccompanyingFilterHeaderContainer>
          <Heading4 margin={0} color="var(--color-midnight)">
            {t("opportunityPage.filters.accompanying")}
          </Heading4>
          <SwitchButton
            isChecked={filter.accompanying}
            onToggle={accompanyingClickHandler}
          />
        </AccompanyingFilterHeaderContainer>

        <Paragraph
          fontWeight={400}
          fontSize="14px"
          color="var(--color-midnight)"
          lineheight="14px"
        >
          {t("opportunityPage.filters.accompanyingDesc")}
        </Paragraph>
      </AccompanyingFilterContainer>

      <AccordionFilter
        header={t("opportunityPage.filters.activityType")}
        items={activityTypeFilterItems}
      />
    </FiltersContentContainer>
  );
}
