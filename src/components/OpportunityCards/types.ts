export interface CardsFilter {
  searchInput: string;
  accompanying: boolean;
  activityType: ActivityType;
  district: District;
  germanLevel: GermanLevel;
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
  templehof: boolean;
  treptowKöpenick: boolean;
}

interface GermanLevel {
  none: boolean;
  basicGermanSkills: boolean;
  mediumGermanSkills: boolean;
  advancedGermanSkills: boolean;
  germanMotherTongue: boolean;
}

export type ActivityTypeKeys = keyof ActivityType;
export type DistrictKeys = keyof District;
export type GermanLevelKeys = keyof GermanLevel;
