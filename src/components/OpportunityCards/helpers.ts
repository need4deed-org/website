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

const activityTypeMap: Record<ActivityTypeKeys, string> = {
  childcare: "Childcare",
  germanLanguageSupport: "German Language Support",
  skillsBasedVolunteering: "Skills Based Volunteering",
  events: "Events",
  sportsActivities: "Sport activities",
};

const districtGroupMap: Partial<Record<DistrictKeys, string[]>> = {
  steglitzZehlendorf: ["steglitz", "zehlendorf"],
  treptowKöpenick: ["treptow", "köpenick"],
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

const getSelectedTimeSlots = (daysFilter: Days) => {
  const selectedDays: Partial<Record<DaysKeys, Partial<Day>>> = {};

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

export const filterOpportunity = (
  opportunity: Opportunity,
  filter: CardsFilter,
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
    category,
  } = opportunity;

  const { searchInput, activityType, district, accompanying, days } = filter;

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
  /* TODO: do not calculate selected types in this function, because its doing same thing for every opportunity, time complexity leak */
  const selectedActivityTypes = (
    Object.keys(activityType) as Array<ActivityTypeKeys>
  ).filter((type) => activityType[type]);

  if (selectedActivityTypes.length) {
    if (!category) return false;

    let categoryFound = false;

    for (const selectedType of selectedActivityTypes) {
      if (activityTypeMap[selectedType] === category) {
        categoryFound = true;
        break;
      }
    }

    if (!categoryFound) return false;
  }

  /* Filter District */
  const selectedDistricts = (Object.keys(district) as Array<DistrictKeys>)
    .filter((d) => district[d])
    .map((d) => districtGroupMap[d] || d)
    .flat();

  if (selectedDistricts.length) {
    let districtFound = false;

    for (const d of selectedDistricts) {
      const searchableData = locations.join("").toLowerCase();
      if (searchableData.includes(d)) {
        districtFound = true;
        break;
      }
    }

    if (!districtFound) return false;
  }

  /* Filter Days */
  const selectedTimeSlots = getSelectedTimeSlots(days);

  if (Object.keys(selectedTimeSlots).length) {
    if (!timeslots.length) return false; // If there is no timeslot for an opp, just filter it.

    const searchableTimeSlotsMapData = getSearchableTimeSlotsMap(timeslots);

    let timeslotFound = false;

    for (const selectedDay of Object.keys(
      selectedTimeSlots,
    ) as Array<DaysKeys>) {
      const selectedDayFilter = selectedTimeSlots[selectedDay];
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
