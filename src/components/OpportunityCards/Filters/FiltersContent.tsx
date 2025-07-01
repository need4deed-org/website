import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Heading4, Paragraph } from "../../styled/text";
import { SwitchButton } from "../../core/button";
import AccordionFilter from "./AccordionFilter";
import {
  ActivityTypeKeys,
  CardsFilter,
  DayKeys,
  DaysKeys,
  DistrictKeys,
} from "../types";
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

const activityTypes = Object.keys(
  defaultFilter.activityType,
) as ActivityTypeKeys[];

const districts = Object.keys(defaultFilter.district) as DistrictKeys[];

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
  setFilter: (filter: CardsFilter) => void;
}

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

  const districtFilterItems = districts.map((d) => {
    return {
      label: t(`opportunityPage.filters.${d}`),
      checked: filter.district[d],
      onChange: (checked: boolean) => {
        const { district } = filter;
        district[d] = checked;

        setFilter({ ...filter, district });
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

            setFilter({ ...filter, days });
          },
        };
      }),
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
