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
  district: {
    lichtenberg: false,
    mitte: false,
    neukölln: false,
    pankow: false,
    steglitzZehlendorf: false,
    templehof: false,
    treptowKöpenick: false,
  },
  germanLevel: {
    none: false,
    basicGermanSkills: false,
    mediumGermanSkills: false,
    advancedGermanSkills: false,
    germanMotherTongue: false,
  },
  days: {
    monday: {
      morning: false,
      afternoon: false,
      evening: false,
    },
    tuesday: {
      morning: false,
      afternoon: false,
      evening: false,
    },
    wednesday: {
      morning: false,
      afternoon: false,
      evening: false,
    },
    thursday: {
      morning: false,
      afternoon: false,
      evening: false,
    },
    friday: {
      morning: false,
      afternoon: false,
      evening: false,
    },
    saturday: {
      morning: false,
      afternoon: false,
      evening: false,
    },
    sunday: {
      morning: false,
      afternoon: false,
      evening: false,
    },
  },
};
