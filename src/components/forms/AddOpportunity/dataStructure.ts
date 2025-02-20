import {
  Lang,
  OpportunityType,
  TranslatedIntoType,
} from "../../../config/types";
import { Availability, OptionId, Selected } from "../types";

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
  accomp_datetime?: string;
  accomp_name?: string;
  accomp_phone?: string;
  accomp_information?: string;
  accomp_translation?: TranslatedIntoType;
  berlin_locations?: OptionId[];
  languages: OptionId[];
  activities: OptionId[];
  skills: OptionId[];
  timeslots?: [number, OptionId][];
  volunteers_number: number;
  vo_information?: string;
  language: Lang;
}
