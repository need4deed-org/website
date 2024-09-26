import { FieldApi } from "@tanstack/react-form";

export interface Selected<T> {
  title: T;
  selected: boolean;
}

export enum District {
  MITTE = "Mitte",
  MOABIT = "Moabit",
  WEDDING = "Wedding",
  FRIEDRICHSHAIN = "Friedrichshain",
  KREUZBERG = "Kreuzberg",
  PANKOW = "Pankow",
  PRENZLAUER_BERG = "Prenzlauer Berg",
  WEISSENSEE = "Weißensee",
  CHARLOTTENBURG = "Charlottenburg",
  WILMERSDORF = "Wilmersdorf",
  SPANDAU = "Spandau",
  STEGLITZ = "Steglitz",
  ZEHLENDORF = "Zehlendorf",
  TEMPELHOF = "Tempelhof",
  SCHOENEBERG = "Schöneberg",
  NEUKOELLN = "Neukölln",
  TREPTOW = "Treptow",
  KOEPENICK = "Köpenick",
  MARZAHN = "Marzahn",
  HELLERSDORF = "Hellersdorf",
  LICHTENBERG = "Lichtenberg",
  REINICKENDORF = "Reinickendorf",
  TEGEL = "Tegel",
  RUDOW = "Rudow",
  REMOTELY = "Remotely",
}

export enum Activity {
  DAYCARE = "Daycare",
  PLAYING = "Playing sports with children",
  TEACHING = "Teaching German",
  TRANSLATION = "Translation at Accommodation Centers",
  PHONE = "Phone Translation",
  ACCOMPANYING = "Accompanying to doctors' or government",
  SUPPORT = "Filling out forms",
  ARTS_CRAFTS = "Arts & Crafts",
  GARDENING = "Gardening",
  ONE_DAY = "One-day Volunteering (e.g. Festivals, Cleanups)",
}

export enum Skill {
  WOODWORKING = "Woodworking",
  DRAWING = "Drawing",
  PAINTING = "Painting",
  SEWING = "Sewing",
  KNITTING = "Knitting",
  REPAIRS = "Repairs",
  COOKING = "Cooking",
  TEACHING = "Teaching",
  PROGRAMMING = "Programming",
  PUBLIC_SPEAKING = "Public speaking",
  GARDENING = "Gardening",
  LANDSCAPING = "Landscaping",
  CARPENTRY = "Carpentry",
  DECORATING = "Decorating",
  BIKE_REPAIRS = "Bike repairs",
  PHOTOGRAPHY = "Photography",
  VIDEOGRAPHY = "Videography",
  MAKEUP = "Makeup",
  COPYWRITING = "Copywriting",
  YOGA = "Yoga",
  FITNESS = "Fitness",
  FOOTBALL = "Football",
  BASKETBALL = "Basketball",
  DANCE = "Dance",
  CHESS = "Chess",
  MANAGEMENT = "Management",
  SMM = "SMM",
  MEDIATION = "Mediation",
  EVENT_PLANNING = "Event planning",
  COACHING = "Coaching",
  GUITAR = "Guitar",
  PIANO = "Piano",
  SINGING = "Singing",
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
  timeSlots: Selected<TimeSlot | "Weekdays" | "Weekends">[];
}>;

export enum Language {
  ARABIC = "Arabic",
  ENGLISH = "English",
  GERMAN = "German",
  FARSI = "Farsi",
  TURKISH = "Turkish",
  RUSSIAN = "Russian",
  UKRAINIAN = "Ukrainian",
  KURDISH = "Kurdish",

  ARMENIAN = "Armenian",
  BELARUSIAN = "Belarusian",
  CHECHEN = "Chechen",
  CHINESE = "Chinese",
  CZECH = "Czech",
  DARI = "Dari",
  DUTCH = "Dutch",
  FRENCH = "French",
  GEORGIAN = "Georgian",
  GREEK = "Greek",
  HEBREW = "Hebrew",
  HINDI = "Hindi",
  ITALIAN = "Italian",
  PASHTO = "Pashto",
  POLISH = "Polish",
  PUNJABI = "Punjabi",
  ROMANES = "Romanes",
  SERBIAN = "Serbian",
  SOMALI = "Somali",
  SPANISH = "Spanish",
  SWEDISH = "Swedish",
  URDU = "Urdu",
  VIETNAMESE = "Vietnamese",

  OTHER = "Other",
}

export enum LangUse {
  MAIN = "main",
  OCCASIONAL = "occasional",
}

export enum Lead {
  VOLUNTEERING_PLATFORM = "Volunteering platform",
  SOCIAL_MEDIA = "Social media",
  NEWSLETTER = "A newsletter",
  WEB_SEARCH = "Web search",
  FRIENDS = "Friends",
  VOLUNTEER_FAIR = "Volunteer fair",
  FLYER = "Flyer/Poster",
}

export interface VolunteerData {
  opportunityId: string;
  name: string;
  email: string;
  phone: string;
  postcode: string;
  locations: Selected<District>[];
  availability: Availability;
  languagesFluent: Selected<Language>[];
  languagesIntermediate: Selected<Language>[];
  activities: Selected<Activity>[];
  skills: Selected<Skill>[];
  certOfGoodConduct: boolean | undefined;
  certMeaslesVaccination: boolean | undefined;
  leadFrom: Selected<Lead>[];
  comments: string;
  consent: boolean | undefined;
}

export type VolunteerDataKeys = keyof VolunteerData;
export type VolunteerDataTypes = VolunteerData[VolunteerDataKeys];
export enum VolunteerDataKeysArrays {
  LOCATIONS = "locations",
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
  schedule_comments: string;
  postal_code: number;
  languages_comments: string;
  if_good_conduct_certificate: boolean;
  if_measles_vaccination: boolean;
  activities_comments: string;
  lead_from: string;
  lead_from_comments: string;
  origin_opportunity_id: number;
  schedule: string[];
  preffered_berlin_locations: string[];
  languages: string[];
  activities: string[];
  skills: string[];
  translate_languages: string[];
}

export type FieldApiCustom = FieldApi<
  VolunteerData,
  VolunteerDataKeys,
  undefined,
  undefined,
  VolunteerData[VolunteerDataKeys]
>;
