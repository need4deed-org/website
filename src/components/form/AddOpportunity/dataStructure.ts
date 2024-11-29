import { OpportunityType } from "../../../config/types";
import { Availability, Selected } from "../types";

export interface OpportunityData {
  email: string;
  fullName: string;
  racName: Selected[];
  title: string;
  phone: string;
  postcode: string;
  locations: Selected[];
  opportunityType?: OpportunityType;
  activities: Selected[];
  appointmentType: Selected[];
  languagesRefugee: Selected[];
  languagesTranslation: Selected[];
  skills: Selected[];
  address: string;
  schedule: Availability;
  dateTime?: string;
  numberVolunteers: number;
  ifTranslationToEnOkay?: boolean;
  voInformation: string;
  refugeeName: string;
  refugeeNumber: string;
  aaInformation: string;
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

export interface OpportunityParsedData {
  email: string;
  comments: string;
}
