/* eslint-disable import/prefer-default-export */
import { Opportunity } from "../VolunteeringOpportunities/types";
import { CardsFilter } from "./types";

// const activityTypeGroupMap = {
//   Daycare: ["DayCare", "DayCare-2", "DayCare-3"],
// };

export const filterOpportunity = (
  opportunity: Opportunity,
  cardsFilter: CardsFilter,
) => {
  const {
    title,
    activities,
    languages,
    accompanyingTranslation,
    defaultMainCommunication,
  } = opportunity;
  const { searchInput } = cardsFilter;

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

  // if (cardsFilter.activityType.length) {
  //   const filterActivities = new Set();

  //   cardsFilter.activityType.forEach((type: string) =>
  //     filterActivities.add(activityTypeGroupMap[type]),
  //   );

  //   const hasIntersection = activities.some((a) => filterActivities.has(a));

  //   if (!hasIntersection) return false;
  // }

  return true;
};
