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
  OPPORTUNITIES = "opportunities",
  OPPORTUNITIES_TEST = "f47ac8e3b925d1f5",
  ACCOMPANYING = "accompanying",
  EVENT = "event",
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
