import { Lang } from "../../config/types";

export enum ListsOfOptions {
  LOCATIONS = "locations",
  LANGUAGES = "languages",
  ACTIVITIES = "activities",
  ACTIVITIES_ACCOMPANYING = "activitiesAccompanying",
  SKILLS = "skills",
  LEADS = "leads",
}

export type ListsOfOptionsType = Record<ListsOfOptions, Option[]>;

export enum FormType {
  VOLUNTEER = "volunteer",
  OPPORTUNITY = "opportunity",
}

export enum TypePLZ {
  BERLIN = "Berlin",
  GERMANY = "Germany",
}

export type OptionTitle = Partial<{
  [key in Lang]: string;
}>;

export type OptionId = string | number;
export interface Option {
  id: OptionId;
  title: OptionTitle;
}

export interface Selected {
  id: OptionId;
  title: OptionTitle;
  selected: boolean;
}

export enum Weekday {
  MONDAY = "monday",
  TUESDAY = "tuesday",
  WEDNESDAY = "wednesday",
  THURSDAY = "thursday",
  FRIDAY = "friday",
  SATURDAY = "saturday",
  SUNDAY = "sunday",
  OCCASIONAL = "onetime",
}

export enum TimeSlot {
  MORNING = "08-11",
  NOON = "11-14",
  AFTERNOON = "14-17",
  EVENING = "17-20",
  WEEKDAYS = "weekdays",
  WEEKENDS = "weekends",
}

export type Availability = Array<{
  weekday: number;
  timeSlots: Selected[];
}>;
