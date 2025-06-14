/* eslint-disable import/prefer-default-export */
import { Opportunity } from "../VolunteeringOpportunities/types";
import { CardsFilter } from "./types";

export const filterOpportunity = (
  opportunity: Opportunity,
  cardsFilter: CardsFilter,
) => {
  const { title } = opportunity;

  const searchInputLowerCased = cardsFilter.searchInput.toLocaleLowerCase();

  if (
    searchInputLowerCased &&
    !title.toLocaleLowerCase().includes(searchInputLowerCased)
  )
    return false;

  return true;
};
