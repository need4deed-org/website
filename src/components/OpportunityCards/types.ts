import { Dispatch, SetStateAction } from "react";

export interface CardsFilter {
  searchInput: string;
  accompanying: boolean;
  activityType: Record<string, boolean>;
  district: Record<string, boolean>;
  days: Days;
}

export interface Days {
  monday: Day;
  tuesday: Day;
  wednesday: Day;
  thursday: Day;
  friday: Day;
  saturday: Day;
  sunday: Day;
}

export interface Day {
  morning: boolean;
  afternoon: boolean;
  evening: boolean;
}

export type DaysKeys = keyof Days;
export type DayKeys = keyof Day;

export type SetFilter = Dispatch<SetStateAction<CardsFilter>>;
