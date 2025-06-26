export interface CardsFilter {
  searchInput: string;
  accompanying: boolean;
  activityType: ActivityType;
}

export interface ActivityType {
  daycare: boolean;
  germanLanguageSupport: boolean;
  skillsBasedVolunteering: boolean;
  events: boolean;
  sportsActivities: boolean;
}

export type ActivityTypeKeys = keyof ActivityType;
