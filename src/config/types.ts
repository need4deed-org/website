import { DeepKeys } from "@tanstack/react-form";
import { EventN4D, Lang } from "need4deed-sdk";
import React from "react";

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
  NOTICE = "old/impressum",
  DATA_PROTECTION = "old/datenschutzerklaerung",
  AGREEMENT = "old/vereinbarung",
  GUIDELINES = "old/guidelines",
  BECOME_VOLUNTEER = "old/become-volunteer",
  ANNOUNCEMENT = "old/announcement",
  OPPORTUNITIES = "old/opportunities",
  ACCOMPANYING = "old/accompanying",
  OPPORTUNITIES_TEST = "old/0pp4-test",
  ACCOMPANYING_TEST = "old/4cc0-test",
  EVENT = "old/event",
  EVENTS = "old/events",
  PAST_EVENTS = "old/past-events",
  ADD_OPPORTUNITY = "old/add-opportunity",
  COOKIES = "old/cookies",
  FAQS = "old/faqs",
  OLD = "old",
  FAQ = "faq",
  ABOUT = "about",
  LEGAL_NOTICE = "legal-notice",
  DATA_PRIVACY = "data-privacy",
  VPA = "vpa",
  OPPORTUNITY_CARDS = "opportunity-cards",
  OPPORTUNITY_FORM = "opportunity-form",
  OPPORTUNITY_FORM_LEGACY = "add-opportunity",
  VOLUNTEER_FORM = "volunteer-form",
}

export enum Events {
  EVENT_8_31_24 = "event-8-31-24",
}

// conjunction between keys and disjunction between possible values are applied for search
export interface OpportunityParams {
  search?: Record<string, string[]>;
  primaryKeys?: string[];
  language?: Lang;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AlfredOpportunity = Record<string, any>;

export type KeyMap = {
  id: string;
  type?: string;
  name?: string;
  languages: string;
  time: string;
  location: string;
  vo?: string;
  categoryId?: string;
  title?: string;
  activities?: string;
  createdAt?: string;
  updatedAt?: string;
  accompDate?: string;
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

export interface EventComponentInfo {
  title: string;
  component: React.FC<EventPropType | object>;
  eventData?: EventPropType;
  active?: boolean;
}

export type EventDataType =
  | { event: EventN4D }
  | { events: EventComponentInfo[] };

export type EventPropType = { eventData: EventDataType } | object;

export enum ScreenTypes {
  MOBILE = "mobile",
  TABLET = "tablet",
  DESKTOP = "desktop",
}

export type FooterLink = [string, string];
