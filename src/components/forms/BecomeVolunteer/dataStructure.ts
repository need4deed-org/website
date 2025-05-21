import { Lang, Volunteer } from "need4deed-sdk";

import { Availability, Selected } from "../types";

export interface VolunteerData {
  opportunityId: string;
  name: string;
  email: string;
  phone: string;
  postcode: string;
  locations: Selected[];
  availability: Availability;
  languagesNative: Selected[];
  languagesFluent: Selected[];
  languagesIntermediate: Selected[];
  activities: Selected[];
  skills: Selected[];
  certOfGoodConduct: boolean | undefined;
  certMeaslesVaccination: boolean | undefined;
  leadFrom: Selected[];
  comments: string;
  consent: boolean | undefined;
  language: Lang;
}

export enum VolunteerArrayDataKeys {
  LOCATIONS = "locations",
  LANGUAGESNATIVE = "languagesNative",
  LANGUAGESFLUENT = "languagesFluent",
  LANGUAGESINTERMEDIATE = "languagesIntermediate",
  ACTIVITIES = "activities",
  SKILLS = "skills",
  LEADFROM = "leadFrom",
}
export type VolunteerDataLists = `${VolunteerArrayDataKeys}`;

export interface VolunteerParsedData extends Volunteer {
  language: Lang;
}
