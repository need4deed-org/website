export interface CardsFilter {
  searchInput: string;
  accompanying: boolean;
  activityType: ActivityType;
  district: District;
  days: Days;
}

export interface ActivityType {
  daycare: boolean;
  germanLanguageSupport: boolean;
  skillsBasedVolunteering: boolean;
  events: boolean;
  sportsActivities: boolean;
}

export interface District {
  lichtenberg: boolean;
  mitte: boolean;
  neukölln: boolean;
  pankow: boolean;
  steglitzZehlendorf: boolean;
  tempelhof: boolean;
  treptowKöpenick: boolean;
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

export type ActivityTypeKeys = keyof ActivityType;
export type DistrictKeys = keyof District;
export type DaysKeys = keyof Days;
export type DayKeys = keyof Day;
