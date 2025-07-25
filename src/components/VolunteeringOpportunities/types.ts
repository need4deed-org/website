import { OpportunityType, TranslatedIntoType } from "need4deed-sdk";

export interface Opportunity {
  accompanyingDate: Date | null;
  accompanyingInfo: string | null;
  accompanyingTranslation: string;
  activities: string[];
  createdAt: Date;
  datetime: string | null;
  id: string;
  languages: string[];
  locations: string[];
  opportunityType: OpportunityType;
  schedule: string | null;
  skills: string[];
  status: string;
  timeslots: Record<string, string>[];
  title: string;
  updatedAt: Date;
  voInformation: string;
  categoryId: number | null;
  category: string;
  lastEditedTimeNotion: Date;
  defaultMainCommunication: string;
}

export interface OpportunityApi {
  accomp_datetime: string | null;
  accomp_information: string | null;
  accomp_translation?: TranslatedIntoType;
  activities: string[];
  berlin_locations: string[];
  created_at: string;
  datetime_str: string | null;
  id: string;
  languages: string[];
  opportunity_type: OpportunityType;
  schedule_str: string | null;
  skills: string[];
  status: string;
  timeslots: Record<string, string>[];
  title: string;
  updated_at: string;
  vo_information: string;
  category_id: number | null;
  category: string;
  last_edited_time_notion: string;
}
