import {
  Lang,
  Opportunity,
  OpportunityType,
  TranslatedIntoType,
} from "need4deed-sdk";

import { Availability, Selected } from "../types";

export interface OpportunityData {
  email: string;
  fullName: string;
  racName: Selected[];
  title: string;
  racPhone: string;
  racAddress: string;
  racPostcode: string;
  opportunityType?: OpportunityType;
  languages: Selected[];
  activitiesAccompanying: Selected[];
  translatedInto?: TranslatedIntoType;
  aaAddress: string;
  aaPostcode: string;
  dateTime?: string;
  refugeeName: string;
  refugeeNumber: string;
  aaInformation: string;
  locations: Selected[];
  schedule: Availability;
  onetimeDateTime?: string;
  activities: Selected[];
  skills: Selected[];
  numberVolunteers: string;
  voInformation: string;
  consent: boolean | undefined;
  language: Lang;
}

export enum OpportunityArrayDataKeys {
  LOCATIONS = "locations",
  LANGUAGES_REFUGE = "languagesRefugee",
  LANGUAGES_TRANSLATION = "languagesTranslation",
  ACTIVITIES = "activities",
  SKILLS = "skills",
  RAC_NAME = "racName",
}
export type OpportunityDataLists = `${OpportunityArrayDataKeys}`;

export interface OpportunityParsedData extends Opportunity {
  language: Lang;
}
