import { OpportunityType } from "../../config/types";
import { IconName } from "../VolunteeringCategories/types";
import { Opportunitiy, OpportunitiyApi } from "./types";

export const getSortedAccompanyingOpps = (
  opportunities: OpportunitiyApi[],
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

const getNearestAccompanyingOpp = (opportunities: OpportunitiyApi[]) => {
  const accompanyingOpps = opportunities.filter(
    (opp) => opp.opportunity_type === OpportunityType.ACCOMPANYING,
  );

  return getSortedAccompanyingOpps(accompanyingOpps)[0];
};

const getNearestVolunteeringOpps = (
  opportunities: OpportunitiyApi[],
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
  opportunities: OpportunitiyApi[] | undefined,
  top: number,
) => {
  if (!opportunities?.length) return [];

  return [
    getNearestAccompanyingOpp(opportunities),
    ...getNearestVolunteeringOpps(opportunities, top - 1),
  ];
};

const mapOpportunity = (opp: OpportunitiyApi) => {
  const newOpp: Opportunitiy = {
    accompanyingDate: opp.accomp_datetime
      ? new Date(opp.accomp_datetime)
      : null,
    accompanyingInfo: opp.accomp_information,
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
  };

  return newOpp;
};

const iconNames = [IconName.Users, IconName.Baby, IconName.Bicycle];

export const getMappedOpportunities = (opps: OpportunitiyApi[]) => {
  return opps.map((opp, index) => ({
    ...mapOpportunity(opp),
    iconName: iconNames[index],
  }));
};

const aubergineColorActivities = [
  "doctors appointment",
  "government office",
  "apartment viewing",
  "school/kindergarten",
  "way/path accompanying",
  "arzttermine",
  "behörde",
  "wohnungsbesichtigung",
  "schule/kindergarten",
  "wegbegleitung",
];

export const getActivityBackgroundColor = (activity: string) => {
  return aubergineColorActivities.includes(activity.toLowerCase())
    ? "var(--color-aubergine-light)"
    : "var(--color-papaya)";
};

export default {};
