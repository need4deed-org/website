import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Heading4, Paragraph } from "../../styled/text";
import { SwitchButton } from "../../core/button";
import AccordionFilter from "./AccordionFilter";
import { CardsFilter, DayKeys, DaysKeys, SetFilter } from "../types";
import { defaultFilter } from "./constants";

const FiltersContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: var(--opportunities-filters-content-container-width);
  height: auto;
  gap: var(--opportunities-filters-content-container-gap);
  padding: var(--opportunities-filters-content-container-padding);
`;

const AccompanyingFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--opportunities-filters-content-filter-container-gap);
`;

const AccompanyingFilterHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const weekDays = Object.keys(defaultFilter.days) as DaysKeys[];

const daySlots = Object.keys(defaultFilter.days.monday) as DayKeys[];

const daysTranslationMap: Record<DaysKeys, string> = {
  monday: "1",
  tuesday: "2",
  wednesday: "3",
  thursday: "4",
  friday: "5",
  saturday: "6",
  sunday: "0",
};

interface Props {
  filter: CardsFilter;
  setFilter: SetFilter;
}

export default function FiltersContent({ setFilter, filter }: Props) {
  const { t } = useTranslation();
  const { activityType, district } = filter;

  const activityTypeFilterItems = Object.keys(activityType)
    .sort()
    .map((a) => {
      return {
        label: a,
        checked: activityType[a],
        onChange: (checked: boolean) => {
          activityType[a] = checked;

          setFilter((prevFilter) => ({ ...prevFilter, activityType }));
        },
      };
    });

  const districtFilterItems = Object.keys(district)
    .sort()
    .map((d) => {
      return {
        label: d,
        checked: district[d],
        onChange: (checked: boolean) => {
          district[d] = checked;

          setFilter((prevFilter) => ({ ...prevFilter, district }));
        },
      };
    });

  const daysFilterItems = weekDays.map((day) => {
    return {
      label: `${t(`weekdays.${daysTranslationMap[day]}`)}s`,
      items: daySlots.map((daySlot) => {
        return {
          label: t(`opportunityPage.filters.${daySlot}`),
          checked: filter.days[day][daySlot],
          onChange: (checked: boolean) => {
            const { days } = filter;

            days[day][daySlot] = checked;

            setFilter((prevFilter) => ({ ...prevFilter, days }));
          },
        };
      }),
    };
  });

  const accompanyingClickHandler = () => {
    const accompanying = !filter.accompanying;

    setFilter((prevFilter) => ({ ...prevFilter, accompanying }));
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
          fontWeight="var(--opportunities-filters-description-font-weight)"
          fontSize="var(--opportunities-filters-description-font-size)"
          color="var(--color-midnight)"
          lineheight="var(--opportunities-filters-description-font-size)"
        >
          {t("opportunityPage.filters.accompanyingDesc")}
        </Paragraph>
      </AccompanyingFilterContainer>

      <AccordionFilter
        header={t("opportunityPage.filters.activityType")}
        items={activityTypeFilterItems}
      />

      <AccordionFilter
        header={t("opportunityPage.filters.district")}
        items={districtFilterItems}
      />

      <AccordionFilter
        header={t("opportunityPage.filters.days")}
        groupedItems={daysFilterItems}
      />
    </FiltersContentContainer>
  );
}
