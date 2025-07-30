/* eslint-disable no-restricted-syntax */
import { OpportunityType } from "need4deed-sdk";
import { TFunction } from "i18next";
import { Opportunity } from "../VolunteeringOpportunities/types";
import { CardsFilter, Day, DayKeys, Days, DaysKeys } from "./types";
import { TimeSlot, Weekday } from "../forms/types";
import { CategoryTitle } from "../VolunteeringOpportunities/utils";
import { DASH, FILTER_KEY_LIST, FilterKey } from "./Filters/constants";

const dayEnumMap: Record<string, DaysKeys> = {
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday",
  7: "sunday",
};

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
  selectedActivityTypes: string[];
  selectedDistricts: string[];
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

  reducedFilter.selectedActivityTypes = Object.keys(activityType).filter(
    (type) => activityType[type],
  );

  reducedFilter.selectedDistricts = Object.keys(district).filter(
    (d) => district[d],
  );

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
    category,
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
    const categoryFound = selectedActivityTypes.find(
      (aType) => aType === category,
    );

    if (!categoryFound) return false;
  }

  /* Filter District */
  if (selectedDistricts.length) {
    const districtFound = selectedDistricts.find((d) => locations.includes(d));

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
            (slot) => slot === TimeSlot.MORNING || slot === TimeSlot.NOON,
          )
        ) {
          timeslotFound = true;
          break;
        }

        if (
          selectedDayFilter.afternoon &&
          searchableSlotsData.some((slot) => slot === TimeSlot.AFTERNOON)
        ) {
          timeslotFound = true;
          break;
        }

        if (
          selectedDayFilter.evening &&
          searchableSlotsData.some((slot) => slot === TimeSlot.EVENING)
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

const createDefaultFilterFromSet = (set: Set<string>) => {
  const filter: Record<string, boolean> = {};

  for (const key of set) {
    filter[key] = false;
  }

  return filter;
};

const putItemToEnd = <T>(set: Set<T>, item: T) => {
  if (set.has(item)) {
    set.delete(item);
    set.add(item);
  }
};

export const extractCardsFilter = (
  opportunities: Opportunity[],
  t: TFunction,
): Partial<CardsFilter> => {
  const categoriesSet = new Set<string>();
  const districtSet = new Set<string>();

  for (const opp of opportunities) {
    // exclude "accompanying" from category "Activity Type" filters
    if (opp.categoryId !== CategoryTitle.ACCOMPANYING)
      categoriesSet.add(opp.category);

    opp.locations.forEach((l) => districtSet.add(l));
  }

  putItemToEnd(
    categoriesSet,
    t("homepage.volunteeringOpportunities.otherCategory"),
  );

  const activityType = createDefaultFilterFromSet(categoriesSet);
  const district = createDefaultFilterFromSet(districtSet);

  return { activityType, district };
};

export const isObjectEmpty = (obj: object) => Object.keys(obj).length === 0;

export const hasKey = <T extends object>(
  obj: T | null | undefined,
  key: PropertyKey,
): key is keyof T => !!obj && Object.prototype.hasOwnProperty.call(obj, key);

export function serializeFilters(filters: CardsFilter): URLSearchParams {
  const params = new URLSearchParams();

  if (filters.searchInput) {
    params.set("searchInput", filters.searchInput);
  }

  if (filters.accompanying) {
    params.set("accompanying", "true");
  }

  if (filters.activityType) {
    Object.entries(filters.activityType).forEach(([key, value]) => {
      if (value === true) {
        params.append("activityType", key);
      }
    });
  }

  if (filters.district) {
    Object.entries(filters.district).forEach(([key, value]) => {
      if (value === true) {
        params.append("district", key);
      }
    });
  }

  if (filters.days) {
    Object.entries(filters.days).forEach(([day, timeSlots]) => {
      const dayKey = day as Weekday; // safely cast string to enum

      Object.entries(timeSlots as TimeSlot).forEach(([slot, value]) => {
        if (value) {
          params.append("daySlot", `${dayKey}${DASH}${slot}`);
        }
      });
    });
  }

  return params;
}

export function deserializeFilters(
  query: URLSearchParams,
  defaultFilter: CardsFilter,
): CardsFilter {
  const filters: CardsFilter = structuredClone(defaultFilter);

  const search = query.get("searchInput");
  if (search !== null) {
    filters.searchInput = search;
  }

  const accompanying = query.get("accompanying");
  if (accompanying === "true") {
    filters.accompanying = true;
  }

  const activityTypes = query.getAll("activityType");
  activityTypes.forEach((type) => {
    if (hasKey(filters.activityType, type)) {
      filters.activityType[type] = true;
    }
  });

  const districts = query.getAll("district");
  districts.forEach((dist) => {
    if (hasKey(filters.district, dist)) {
      filters.district[dist] = true;
    }
  });

  const daySlots = query.getAll("daySlot");
  daySlots.forEach((slot) => {
    const [day, time] = slot.split("-");
    const dayKey = day as keyof Days;
    const timeKey = time as keyof Day;

    if (filters.days[dayKey] && filters.days[dayKey][timeKey] !== undefined) {
      filters.days[dayKey][timeKey] = true;
    }
  });

  return filters;
}

export const getFilterKeysExcluding = (
  exclude: FilterKey[] = [],
): FilterKey[] => {
  return FILTER_KEY_LIST.filter((key) => !exclude.includes(key));
};
