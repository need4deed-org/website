export interface CardsFilter {
  searchInput: string;
  accompanying: boolean;
  activityType: ActivityType;
  district: District;
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

export type ActivityTypeKeys = keyof ActivityType;
export type DistrictKeys = keyof District;
