export enum Lang {
  EN = "en",
  DE = "de",
  RU = "ru",
  AR = "ar",
  FA = "fa",
  TR = "tr",
}

export enum Env {
  DEVELOP = "develop",
  TEST = "test",
  PRODUCTION = "production",
}

export enum Subpages {
  NOTICE = "impressum",
  DATA_PROTECTION = "datenschutzerklaerung",
  OPPORTUNITIES = "opportunities",
  TRANSLATIONS = "translations",
}

// conjunction between keys and disjunction between possible values are applied
export type FilterTarget = Array<{ key: string; values: Array<string> }>;

export type Opportunity = Record<string, string>;

export type KeyMap = {
  type: string;
  name: string;
  languages: string;
  time: string;
  location: string;
};
