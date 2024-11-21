import { FieldApi } from "@tanstack/react-form";
import { ListsOfOptionsType, YesNo } from "../../config/types";

export interface Selected {
  title: string;
  selected: boolean;
}

export const fallbackLists: ListsOfOptionsType = {
  locations: [
    "Mitte",
    "Moabit",
    "Wedding",
    "Friedrichshain",
    "Kreuzberg",
    "Pankow",
    "Prenzlauer Berg",
    "Weißensee",
    "Charlottenburg",
    "Wilmersdorf",
    "Spandau",
    "Steglitz",
    "Zehlendorf",
    "Tempelhof",
    "Schöneberg",
    "Neukölln",
    "Treptow",
    "Köpenick",
    "Marzahn",
    "Hellersdorf",
    "Lichtenberg",
    "Reinickendorf",
    "Tegel",
    "Rudow",
    "Remotely",
  ],
  activities: [
    "Daycare",
    "Sports",
    "Teaching German",
    "Translation at Accommodation Centers",
    "Accompanying to doctors' or government appointments",
    "Arts & Crafts",
    "Gardening",
    "One-day Volunteering (e.g. Festivals, Cleanups)",
    "Playing board games",
    "Reading books for children",
    "Activities for women",
    "Activities for men",
    "Assist with homework",
    "Sorting clothing",
    "Organizing excursions",
  ],
  skills: [
    "Woodworking",
    "Drawing",
    "Painting",
    "Sewing",
    "Knitting",
    "Repairs",
    "Cooking",
    "Teaching",
    "Programming",
    "Public speaking",
    "Gardening",
    "Landscaping",
    "Carpentry",
    "Decorating",
    "Bike repairs",
    "Photography",
    "Videography",
    "Makeup",
    "Copywriting",
    "Yoga",
    "Fitness",
    "Football",
    "Basketball",
    "Dance",
    "Chess",
    "Management",
    "SMM",
    "Mediation",
    "Event planning",
    "Coaching",
    "Guitar",
    "Piano",
    "Singing",
  ],
  languages: [
    "German",
    "English",
    "Arabic",
    "Farsi",
    "Turkish",
    "Russian",
    "Ukrainian",
    "French",
    "Kurdish",
    "Armenian",
    "Belarusian",
    "Chechen",
    "Chinese",
    "Czech",
    "Dari",
    "Dutch",
    "Georgian",
    "Greek",
    "Hebrew",
    "Hindi",
    "Italian",
    "Pashto",
    "Polish",
    "Punjabi",
    "Romanes",
    "Serbian",
    "Somali",
    "Spanish",
    "Swedish",
    "Urdu",
    "Vietnamese",
    "Other",
  ],
  leads: [
    "Volunteering platform",
    "Social media",
    "A newsletter",
    "Web search",
    "Friends",
    "Volunteer fair",
    "Flyer/Poster",
  ],
};

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
}

export type VolunteerDataKeys = keyof VolunteerData;
export type VolunteerDataTypes = VolunteerData[VolunteerDataKeys];
export enum VolunteerDataKeysArrays {
  LOCATIONS = "locations",
  LANGUAGESNATIVE = "languagesNative",
  LANGUAGESFLUENT = "languagesFluent",
  LANGUAGESINTERMEDIATE = "languagesIntermediate",
  ACTIVITIES = "activities",
  SKILLS = "skills",
  LEADFROM = "leadFrom",
}
export type VolunteerDataLists = `${VolunteerDataKeysArrays}`;

export interface VolunteerParsedData {
  full_name: string;
  phone: string;
  email: string;
  postal_code: number;
  good_conduct_certificate: YesNo;
  if_measles_vaccination: boolean;
  lead_from: string;
  origin_opportunity_id: number | undefined;
  schedule: [number, string][];
  preferred_berlin_locations: string[];
  activities: string[];
  skills: string[];
  native_languages: string[];
  fluent_languages: string[];
  intermediate_languages: string[];
  comments: string;
}

export type FieldApiCustom = FieldApi<
  VolunteerData,
  VolunteerDataKeys,
  undefined,
  undefined,
  VolunteerData[VolunteerDataKeys]
>;
