import { DeepKeys } from "@tanstack/react-form";

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

export enum Subpages {
  NOTICE = "impressum",
  DATA_PROTECTION = "datenschutzerklaerung",
  AGREEMENT = "vereinbarung",
  BECOME_VOLUNTEER = "become-volunteer",
  THANK_YOU = "thank-you",
  OPPORTUNITIES = "opportunities",
  ACCOMPANYING = "accompanying",
  OPPORTUNITIES_TEST = "0pp4-test",
  ACCOMPANYING_TEST = "4cc0-test",
  EVENT = "event",
  PAST_EVENTS = "past-events",
}

export enum Events {
  EVENT_8_31_24 = "event-8-31-24",
}

export enum OpportunityType {
  GENERAL = "general",
  ACCOMPANYING = "accompanying",
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

export enum ListsOptions {
  LOCATIONS = "locations",
  LANGUAGES = "languages",
  ACTIVITIES = "activities",
  SKILLS = "skills",
  LEADS = "leads",
}
export type ListsOptionsType = `${ListsOptions}`;
