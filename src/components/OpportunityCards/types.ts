export interface CardsFilter {
  searchInput: string;
  accompanying: boolean;
  activityType: ActivityType;
  district: District;
  days: Days;
}

export interface ActivityType {
  childcare: boolean;
  germanLanguageSupport: boolean;
  skillsBasedVolunteering: boolean;
  events: boolean;
  sportsActivities: boolean;
  other: boolean;
}

export interface District {
  charlottenburg: boolean;
  friedrichshain: boolean;
  hellersdorf: boolean;
  köpenick: boolean;
  kreuzberg: boolean;
  lichtenberg: boolean;
  marzahn: boolean;
  mitte: boolean;
  moabit: boolean;
  neukölln: boolean;
  pankow: boolean;
  prenzlauerberg: boolean;
  reinickendorf: boolean;
  rudow: boolean;
  schöneberg: boolean;
  spandau: boolean;
  steglitz: boolean;
  tegel: boolean;
  tempelhof: boolean;
  treptow: boolean;
  wedding: boolean;
  weißensee: boolean;
  wilmersdorf: boolean;
  zehlendorf: boolean;
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
