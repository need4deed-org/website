/* eslint-disable import/prefer-default-export */
import { Opportunity } from "../VolunteeringOpportunities/types";
import { CardsFilter } from "./types";

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

  return true;
};
