import { Lang, YesNo } from "../../../config/types";
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

export interface VolunteerParsedData {
  origin_opportunity: number | undefined;
  full_name: string;
  phone: string;
  email: string;
  postal_code: number;
  good_conduct_certificate: YesNo;
  if_measles_vaccination: boolean;
  lead_from: string;
  schedule: [number, string][];
  preferred_berlin_locations: string[];
  activities: string[];
  skills: string[];
  native_languages: string[];
  fluent_languages: string[];
  intermediate_languages: string[];
  comments: string;
  language: Lang;
}
