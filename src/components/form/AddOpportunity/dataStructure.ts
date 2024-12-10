import { OpportunityType, TranslatedIntoType } from "../../../config/types";
import { Availability, Selected, TimeSlot } from "../types";

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
  dateTime?: Date;
  refugeeName: string;
  refugeeNumber: string;
  aaInformation: string;
  locations: Selected[];
  schedule: Availability;
  activities: Selected[];
  skills: Selected[];
  numberVolunteers: number;
  voInformation: string;
  consent: boolean | undefined;
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
  title: string;
  rac_email: string;
  rac_full_name: string;
  rac_phone: string;
  rac_address: string;
  rac_plz: string;
  opportunity_type: OpportunityType;
  accomp_address: string;
  accomp_postcode: string;
  accomp_datetime?: Date;
  accomp_name?: string;
  accomp_phone?: string;
  accomp_information?: string;
  accomp_translatedInto?: TranslatedIntoType;
  berlin_locations?: string[];
  languages: string[];
  activities: string[];
  skills: string[];
  timeslots?: [number, TimeSlot | "weekdays" | "weekends"][];
  vo_information?: string;
}
