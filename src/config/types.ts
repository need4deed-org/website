import { DeepKeys } from "@tanstack/react-form";

export interface IncludeClassName {
  className?: string;
}

export type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "date"
  | "datetime-local"
  | "month"
  | "time"
  | "week"
  | "search"
  | "tel"
  | "url"
  | "color"
  | "checkbox"
  | "radio"
  | "file"
  | "range"
  | "hidden";

export enum Lang {
  EN = "en",
  DE = "de",
  RU = "ru",
  AR = "ar",
  FA = "fa",
  TR = "tr",
  ES = "es",
}

export enum Env {
  DEVELOP = "develop",
  TEST = "test",
  PRODUCTION = "production",
}

export enum YesNo {
  YES = "Yes",
  NO = "No",
}

export enum Subpages {
  NOTICE = "impressum",
  DATA_PROTECTION = "datenschutzerklaerung",
  AGREEMENT = "vereinbarung",
  GUIDELINES = "guidelines",
  BECOME_VOLUNTEER = "become-volunteer",
  ANNOUNCEMENT = "announcement",
  OPPORTUNITIES = "opportunities",
  ACCOMPANYING = "accompanying",
  OPPORTUNITIES_TEST = "0pp4-test",
  ACCOMPANYING_TEST = "4cc0-test",
  EVENT = "event",
  PAST_EVENTS = "past-events",
  ADD_OPPORTUNITY = "add-opportunity",
  COOKIES = "cookies",
  FAQS = "faqs",
}

export enum Events {
  EVENT_8_31_24 = "event-8-31-24",
}

export enum OpportunityType {
  GENERAL = "volunteering",
  ACCOMPANYING = "accompanying",
}

export enum TranslatedIntoType {
  DEUTSCHE = "deutsche",
  ENGLISH_OK = "englishOk",
  NO_TRANSLATION = "noTranslation",
}

// conjunction between keys and disjunction between possible values are applied for seach
export interface OpportunityParams {
  search?: Record<string, string[]>;
  primaryKeys?: string[];
}

export type Opportunity = Record<string, string>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AlfredOpportunity = Record<string, any>;

export type KeyMap = {
  id: string;
  type: string;
  name: string;
  languages: string;
  time: string;
  location: string;
  vo?: string;
};

// copied from tanstack internals
export type PrefixFromDepth<
  T extends string | number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TDepth extends any[],
> = TDepth["length"] extends 0 ? T : `.${T}`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PrefixObjectAccessor<T extends object, TDepth extends any[]> = {
  [K in keyof T]-?: K extends string | number
    ?
        | PrefixFromDepth<K, TDepth>
        | `${PrefixFromDepth<K, TDepth>}${DeepKeys<T[K], [TDepth]>}`
    : never;
}[keyof T];

export enum HttpMethod {
  GET = "GET",
  HEAD = "HEAD",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  TRACE = "TRACE",
  OPTIONS = "OPTIONS",
  CONNECT = "CONNECT",
  PATCH = "PATCH",
}
