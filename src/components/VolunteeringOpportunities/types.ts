export interface Opportunity {
  accompanyingDate: Date | null;
  accompanyingInfo: string | null;
  activities: string[];
  createdAt: Date;
  datetime: string | null;
  id: string;
  languages: string[];
  locations: string[];
  opportunityType: string;
  schedule: string | null;
  skills: string[];
  status: string;
  timeslots: Record<string, string>[];
  title: string;
  updatedAt: Date;
  voInformation: string;
  categoryId: string;
}

export interface OpportunityApi {
  accomp_datetime: string | null;
  accomp_information: string | null;
  activities: string[];
  berlin_locations: string[];
  created_at: string;
  datetime_str: string | null;
  id: string;
  languages: string[];
  opportunity_type: string;
  schedule_str: string | null;
  skills: string[];
  status: string;
  timeslots: Record<string, string>[];
  title: string;
  updated_at: string;
  vo_information: string;
  category_id: string;
}
