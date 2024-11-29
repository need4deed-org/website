export interface Selected {
  title: string;
  selected: boolean;
}

export enum Weekday {
  MONDAY = "monday",
  TUESDAY = "tuesday",
  WEDNESDAY = "wednesday",
  THURSDAY = "thursday",
  FRIDAY = "friday",
  SATURDAY = "saturday",
  SUNDAY = "sunday",
}

export enum TimeSlot {
  MORNING = "08-11",
  NOON = "11-14",
  AFTERNOON = "14-17",
  EVENING = "17-20",
}

export type Availability = Array<{
  weekday: Weekday | "onetime";
  timeSlots: Selected[];
}>;
