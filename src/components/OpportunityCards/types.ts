export interface CardsFilter {
  searchInput: string;
  accompanying: boolean;
  activityType: ActivityType;
  district: District;
  germanLevel: GermanLevel;
  days: Days;
}

export interface ActivityType {
  daycare: boolean;
  germanLanguageSupport: boolean;
  skillsBasedVolunteering: boolean;
  events: boolean;
  sportsActivities: boolean;
}

interface District {
  lichtenberg: boolean;
  mitte: boolean;
  neukölln: boolean;
  pankow: boolean;
  steglitzZehlendorf: boolean;
  tempelhof: boolean;
  treptowKöpenick: boolean;
}

interface GermanLevel {
  none: boolean;
  basicGermanSkills: boolean;
  mediumGermanSkills: boolean;
  advancedGermanSkills: boolean;
  germanMotherTongue: boolean;
}

interface Days {
  monday: Day;
  tuesday: Day;
  wednesday: Day;
  thursday: Day;
  friday: Day;
  saturday: Day;
  sunday: Day;
}

interface Day {
  morning: boolean;
  afternoon: boolean;
  evening: boolean;
}

export type ActivityTypeKeys = keyof ActivityType;
export type DistrictKeys = keyof District;
export type GermanLevelKeys = keyof GermanLevel;
export type DaysKeys = keyof Days;
export type DayKeys = keyof Day;
