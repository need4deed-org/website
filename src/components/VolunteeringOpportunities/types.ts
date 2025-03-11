import { Category } from "../VolunteeringCategories/types";

interface Schedule {
  type: string;
  dates?: string[];
}

export interface Opportunitiy extends Category {
  languages: string[];
  schedule: Schedule;
  district: string;
  activities: string[];
}
