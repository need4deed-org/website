import { OpportunityType, TranslatedIntoType } from "need4deed-sdk";

import { TFunction } from "i18next";
import { IconName } from "../VolunteeringCategories/types";
import { Opportunity, OpportunityApi } from "./types";

export const getSortedAccompanyingOpps = (
  opportunities: OpportunityApi[],
  order: "ASC" | "DESC" = "ASC",
) => {
  const sortedOpportunities = [...opportunities]; // Create a copy to avoid mutating the original array

  sortedOpportunities.sort((a, b) => {
    const dateA = a.accomp_datetime
      ? new Date(a.accomp_datetime).getTime()
      : -Infinity;
    const dateB = b.accomp_datetime
      ? new Date(b.accomp_datetime).getTime()
      : -Infinity;

    return order === "ASC" ? dateA - dateB : dateB - dateA;
  });

  return sortedOpportunities;
};

const getNearestAccompanyingOpp = (opportunities: OpportunityApi[]) => {
  const accompanyingOpps = opportunities.filter(
    (opp) => opp.opportunity_type === OpportunityType.ACCOMPANYING,
  );

  return getSortedAccompanyingOpps(accompanyingOpps)[0];
};

const getNearestVolunteeringOpps = (
  opportunities: OpportunityApi[],
  top: number,
) => {
  const volunteeringOpps = opportunities.filter(
    (opp) => opp.opportunity_type === OpportunityType.GENERAL,
  );

  volunteeringOpps.sort(
    (a, b) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
  );

  const mostRecentOpps = [];
  let numOfReqiredOpps = top;
  const seenActivities: string[] = [];

  /* Make sure that selected oppurtunities are from different categories(or activities) with this for loop */
  // eslint-disable-next-line no-restricted-syntax
  for (const opp of volunteeringOpps) {
    let activitySeen = false;
    opp.activities?.forEach((item) => {
      if (seenActivities.includes(item)) activitySeen = true;
    });

    if (!activitySeen) {
      mostRecentOpps.push(opp);

      numOfReqiredOpps -= 1;
      if (!numOfReqiredOpps) break;

      seenActivities.push(...opp.activities);
    }
  }

  return mostRecentOpps;
};

export const getMostPopularOpportunities = (
  opportunities: OpportunityApi[] | undefined,
  top: number,
) => {
  if (!opportunities?.length) return [];

  return [
    getNearestAccompanyingOpp(opportunities),
    ...getNearestVolunteeringOpps(opportunities, top - 1),
  ];
};

const mapOpportunity = (opp: OpportunityApi, t: TFunction) => {
  const accompanyingTranslationMap = {
    [TranslatedIntoType.ENGLISH_OK]: t(
      "homepage.volunteeringOpportunities.accompanyingTranslation.en",
    ),
    [TranslatedIntoType.DEUTSCHE]: t(
      "homepage.volunteeringOpportunities.accompanyingTranslation.de",
    ),
    [TranslatedIntoType.NO_TRANSLATION]: t(
      "homepage.volunteeringOpportunities.accompanyingTranslation.no",
    ),
  };

  const defaultMainCommunication = t(
    "homepage.volunteeringOpportunities.defaultMainCommunication",
  );

  const defaultCategory = t("opportunityPage.filters.other");

  const newOpp: Opportunity = {
    accompanyingDate: opp.accomp_datetime
      ? new Date(opp.accomp_datetime)
      : null,
    accompanyingInfo: opp.accomp_information,
    accompanyingTranslation:
      accompanyingTranslationMap[
        opp.accomp_translation || TranslatedIntoType.NO_TRANSLATION
      ],
    activities: opp.activities,
    createdAt: new Date(opp.created_at),
    datetime: opp.datetime_str,
    id: opp.id,
    languages: opp.languages,
    locations: opp.berlin_locations,
    opportunityType: opp.opportunity_type,
    schedule: opp.schedule_str,
    skills: opp.skills,
    status: opp.status,
    timeslots: opp.timeslots,
    title: opp.title,
    updatedAt: new Date(opp.updated_at),
    voInformation: opp.vo_information,
    categoryId: opp.category_id,
    lastEditedTimeNotion: new Date(opp.last_edited_time_notion),
    defaultMainCommunication,
    category: opp.category || defaultCategory,
  };

  return newOpp;
};

export const getMappedOpportunities = (
  opps: OpportunityApi[],
  t: TFunction,
) => {
  return opps.map((opp) => mapOpportunity(opp, t));
};

export enum CategoryTitle {
  ACCOMPANYING = "6",
  SPORT_ACTIVITIES = "5",
  EVENTS = "4",
  SKILLS_BASED = "3",
  CHILD_CARE = "2",
  DE_LNG_SUPPORT = "1",
}

export function getIconName(category: CategoryTitle) {
  const categoryIconMap = {
    [CategoryTitle.ACCOMPANYING]: IconName.Users,
    [CategoryTitle.SPORT_ACTIVITIES]: IconName.PingPong,
    [CategoryTitle.EVENTS]: IconName.CalendarStar,
    [CategoryTitle.SKILLS_BASED]: IconName.Bicycle,
    [CategoryTitle.CHILD_CARE]: IconName.Baby,
    [CategoryTitle.DE_LNG_SUPPORT]: IconName.ChatsTeardrop,
  };

  return category in categoryIconMap
    ? categoryIconMap[category]
    : categoryIconMap[`${Math.ceil(Math.random() * 6)}` as CategoryTitle]; // random 1..6
}

const aubergineColorActivities = [
  "doctors appointment",
  "government office",
  "apartment viewing",
  "school/kindergarten",
  "way/path accompanying",
  "accompanying",
  "arzttermine",
  "behörde",
  "wohnungsbesichtigung",
  "schule/kindergarten",
  "wegbegleitung",
  "begleitung",
];

export const getActivityBackgroundColor = (activity: string) => {
  return aubergineColorActivities.includes(activity.toLowerCase())
    ? "var(--color-aubergine-light)"
    : "var(--color-papaya)";
};

export const formatAccompanyingDate = (date: Date) => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const dateFormatter = new Intl.DateTimeFormat("en-US", dateOptions);
  const timeFormatter = new Intl.DateTimeFormat("en-US", timeOptions);

  const formattedDatePart: string = dateFormatter.format(date);
  const formattedTimePart: string = timeFormatter.format(date);

  return `${formattedDatePart}, ${formattedTimePart}`;
};

export default {};
