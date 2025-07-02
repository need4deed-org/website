/* eslint-disable no-restricted-syntax */
import { OpportunityType } from "need4deed-sdk";
import { Opportunity } from "../VolunteeringOpportunities/types";
import {
  ActivityTypeKeys,
  CardsFilter,
  Day,
  DayKeys,
  Days,
  DaysKeys,
  DistrictKeys,
} from "./types";

const activityTypeCategoryIdMap: Record<ActivityTypeKeys, number | null> = {
  childcare: 2,
  germanLanguageSupport: 1,
  skillsBasedVolunteering: 3,
  events: 4,
  sportsActivities: 5,
  other: null,
};

const dayEnumMap: Record<string, DaysKeys> = {
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday",
  7: "sunday",
};

enum Slot {
  MORNING = "08-11",
  NOON = "11-14",
  AFTERNOON = "14-17",
  EVENING = "17-20",
}

const getSearchableTimeSlotsMap = (timeslots: Record<string, string>[]) => {
  const timeslotsMap: Partial<Record<DaysKeys, string[]>> = {};

  for (const timeslotObj of timeslots) {
    const day = dayEnumMap[timeslotObj.day];

    if (timeslotsMap[day]) timeslotsMap[day].push(timeslotObj.time_slot);
    else timeslotsMap[day] = [timeslotObj.time_slot];
  }

  return timeslotsMap;
};

interface SelectedDays extends Partial<Record<DaysKeys, Partial<Day>>> {}

const getSelectedDays = (daysFilter: Days) => {
  const selectedDays: SelectedDays = {};

  for (const day of Object.keys(daysFilter) as Array<DaysKeys>) {
    const dayFilter = daysFilter[day];

    for (const daySlot of Object.keys(dayFilter) as Array<DayKeys>) {
      const isSelected = dayFilter[daySlot];

      if (isSelected) {
        if (selectedDays[day]) selectedDays[day][daySlot] = isSelected;
        else {
          selectedDays[day] = { [daySlot]: isSelected };
        }
      }
    }
  }

  return selectedDays;
};

interface ReducedFilter
  extends Pick<CardsFilter, "searchInput" | "accompanying"> {
  selectedActivityTypes: ActivityTypeKeys[];
  selectedDistricts: DistrictKeys[];
  selectedDays: SelectedDays;
}

export const reduceFilter = ({
  searchInput,
  accompanying,
  activityType,
  district,
  days,
}: CardsFilter) => {
  const reducedFilter: Partial<ReducedFilter> = {
    searchInput,
    accompanying,
  };

  reducedFilter.selectedActivityTypes = (
    Object.keys(activityType) as Array<ActivityTypeKeys>
  ).filter((type) => activityType[type]);

  reducedFilter.selectedDistricts = (
    Object.keys(district) as Array<DistrictKeys>
  ).filter((d) => district[d]);

  reducedFilter.selectedDays = getSelectedDays(days);

  return reducedFilter as ReducedFilter;
};

export const filterOpportunity = (
  opportunity: Opportunity,
  reducedFilter: ReducedFilter,
) => {
  const {
    title,
    activities,
    languages,
    accompanyingTranslation,
    defaultMainCommunication,
    locations,
    opportunityType,
    timeslots,
    categoryId,
  } = opportunity;

  const {
    searchInput,
    accompanying,
    selectedActivityTypes,
    selectedDistricts,
    selectedDays,
  } = reducedFilter;

  /* Filter Search Bar */
  if (searchInput) {
    const siLowerCased = searchInput.toLowerCase();
    const searchableData =
      title +
      activities.join("") +
      languages.join("") +
      accompanyingTranslation +
      defaultMainCommunication;
    if (!searchableData.toLowerCase().includes(siLowerCased)) return false;
  }

  /* Filter Accompanying Switch */
  if (accompanying && opportunityType !== OpportunityType.ACCOMPANYING)
    return false;

  /* Filter Activity Type */
  if (selectedActivityTypes.length) {
    let categoryFound = false;

    for (const selectedType of selectedActivityTypes) {
      if (activityTypeCategoryIdMap[selectedType] === categoryId) {
        categoryFound = true;
        break;
      }
    }

    if (!categoryFound) return false;
  }

  /* Filter District */
  if (selectedDistricts.length) {
    let districtFound = false;

    for (const d of selectedDistricts) {
      const searchableData = locations
        .join("")
        .toLowerCase()
        .replace(/\s/g, "");

      if (searchableData.includes(d)) {
        districtFound = true;
        break;
      }
    }

    if (!districtFound) return false;
  }

  /* Filter Days */
  if (Object.keys(selectedDays).length) {
    if (!timeslots.length) return false; // If there is no timeslot for an opp, just filter it.

    const searchableTimeSlotsMapData = getSearchableTimeSlotsMap(timeslots);

    let timeslotFound = false;

    for (const selectedDay of Object.keys(selectedDays) as Array<DaysKeys>) {
      const selectedDayFilter = selectedDays[selectedDay];
      const searchableSlotsData = searchableTimeSlotsMapData[selectedDay];

      if (selectedDayFilter && searchableSlotsData) {
        if (
          selectedDayFilter.morning &&
          searchableSlotsData.some(
            (slot) => slot === Slot.MORNING || slot === Slot.NOON,
          )
        ) {
          timeslotFound = true;
          break;
        }

        if (
          selectedDayFilter.afternoon &&
          searchableSlotsData.some((slot) => slot === Slot.AFTERNOON)
        ) {
          timeslotFound = true;
          break;
        }

        if (
          selectedDayFilter.evening &&
          searchableSlotsData.some((slot) => slot === Slot.EVENING)
        ) {
          timeslotFound = true;
          break;
        }
      }
    }

    if (!timeslotFound) return false;
  }

  return true;
};

export const getClearFilter = (filter: object) => {
  const newFilter: Record<string, string | boolean | object> = {};

  for (const [key, val] of Object.entries(filter)) {
    if (typeof val === "boolean") newFilter[key] = false;
    else if (typeof val === "string") newFilter[key] = "";
    else if (typeof val === "object") newFilter[key] = getClearFilter(val);
    else throw new Error("Unsupported type to clear the filter");
  }

  return newFilter;
};
