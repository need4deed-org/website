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
  ANNOUNCEMENT = "announcement",
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
  RAC_GUIDELINES = "rac-guidelines",
  EVENT_PAGE = "event-page",
}

// conjunction between keys and disjunction between possible values are applied for search
export interface OpportunityParams {
  search?: Record<string, string[]>;
  primaryKeys?: string[];
  language?: Lang;
}

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

export type MenuItemType = [string, (() => void) | string];
