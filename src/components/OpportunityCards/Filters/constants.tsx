import { CardsFilter } from "../types";

/* eslint-disable import/prefer-default-export */
export const defaultFilter: CardsFilter = {
  searchInput: "",
  accompanying: false,
  activityType: {
    daycare: false,
    germanLanguageSupport: false,
    skillsBasedVolunteering: false,
    events: false,
    sportsActivities: false,
  },
};
