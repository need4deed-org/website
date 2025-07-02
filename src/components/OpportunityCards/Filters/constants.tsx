import { CardsFilter } from "../types";

/* eslint-disable import/prefer-default-export */
export const defaultFilter: CardsFilter = {
  searchInput: "",
  accompanying: false,
  activityType: {
    childcare: false,
    germanLanguageSupport: false,
    skillsBasedVolunteering: false,
    events: false,
    sportsActivities: false,
    other: false,
  },
  district: {
    charlottenburg: false,
    friedrichshain: false,
    hellersdorf: false,
    köpenick: false,
    kreuzberg: false,
    lichtenberg: false,
    marzahn: false,
    mitte: false,
    moabit: false,
    neukölln: false,
    pankow: false,
    prenzlauerberg: false,
    reinickendorf: false,
    rudow: false,
    schöneberg: false,
    spandau: false,
    steglitz: false,
    tegel: false,
    tempelhof: false,
    treptow: false,
    wedding: false,
    weißensee: false,
    wilmersdorf: false,
    zehlendorf: false,
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
