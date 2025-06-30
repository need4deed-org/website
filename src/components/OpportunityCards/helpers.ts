/* eslint-disable no-restricted-syntax */
import { OpportunityType } from "need4deed-sdk";
import { Opportunity } from "../VolunteeringOpportunities/types";
import { ActivityTypeKeys, CardsFilter, DistrictKeys } from "./types";

const activityTypeGroupMap: Record<ActivityTypeKeys, string[]> = {
  daycare: ["daycare", "daycare 2", "daycare 3"],
  germanLanguageSupport: [],
  skillsBasedVolunteering: ["one-day volunteering", "mentorship"],
  events: [],
  sportsActivities: [],
};

const districtGroupMap: Partial<Record<DistrictKeys, string[]>> = {
  steglitzZehlendorf: ["steglitz", "zehlendorf"],
  treptowKöpenick: ["treptow", "köpenick"],
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
  } = opportunity;

  const { searchInput, activityType, district, accompanying } = filter;

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
    if (!activities?.length) return false;

    const activityTypeComparisonMap: Record<string, number> = {};

    selectedActivityTypes.forEach((type) => {
      const extractedTypes = activityTypeGroupMap[type];

      extractedTypes.forEach((activityTpe) => {
        activityTypeComparisonMap[activityTpe] = 1;
      });
    });

    let activitySeen = false;
    for (const act of activities) {
      if (act && activityTypeComparisonMap[act.toLowerCase()]) {
        activitySeen = true;
        break;
      }
    }

    if (!activitySeen) return false;
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
