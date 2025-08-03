import { CardFilterKeys, CardsFilter } from "../types";

export const defaultFilter: CardsFilter = {
  searchInput: "",
  accompanying: false,
  activityType: {},
  district: {},
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

export const FILTER_KEY = {
  SEARCH_INPUT: "searchInput",
  ACTIVITY_TYPE: "activityType",
  DISTRICT: "district",
  DAYS: "days",
  ACCOMPANYING: "accompanying",
} as const satisfies Record<string, CardFilterKeys>;

export const FILTER_KEY_LIST = Object.values(FILTER_KEY);

export type FilterKey = (typeof FILTER_KEY)[keyof typeof FILTER_KEY];

export const DASH = "-";

export const langQueryParamKey = "language";
