import {
  maxPLZBerlin,
  maxPLZGermany,
  minPLZBerlin,
  minPLZGermany,
} from "../../config/constants";
import { TypePLZ } from "../../config/types";
import {
  OpportunityData,
  OpportunityParsedData,
} from "./AddOpportunity/dataStructure";
import {
  VolunteerData,
  VolunteerParsedData,
} from "./BecomeVolunteer/dataStructure";
import { TimeSlot, Weekday } from "./types";

export function parseFormStateDTOVolunteer(value: VolunteerData) {
  const mapWeekdaysToNumbers: Record<Weekday | "onetime", number> = {
    onetime: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 7,
  };

  const data = {} as VolunteerParsedData;
  data.origin_opportunity = value.opportunityId
    ? +value.opportunityId
    : undefined;
  data.full_name = value.name;
  data.email = value.email;
  data.phone = value.phone;
  data.postal_code = +value.postcode;
  data.preferred_berlin_locations = value.locations
    .filter(({ selected }) => selected)
    .map(({ title }) => title);
  data.schedule = value.availability.reduce(
    (result: [number, TimeSlot | "weekdays" | "weekends"][], day) => {
      day.timeSlots
        .filter(({ selected }) => selected)
        .forEach(({ title }) => {
          const numDay = mapWeekdaysToNumbers[day.weekday];
          result.push([numDay, title as TimeSlot | "weekdays" | "weekends"]);
        });
      return result;
    },
    [],
  );
  data.intermediate_languages = value.languagesIntermediate
    .filter(({ selected }) => selected)
    .map(({ title }) => title);
  data.fluent_languages = value.languagesFluent
    .filter(({ selected }) => selected)
    .map(({ title }) => title);
  data.native_languages = value.languagesNative
    .filter(({ selected }) => selected)
    .map(({ title }) => title);
  data.activities = value.activities
    .filter(({ selected }) => selected)
    .map(({ title }) => title);
  data.if_good_conduct_certificate = !!value.certOfGoodConduct;
  data.if_measles_vaccination = !!value.certMeaslesVaccination;
  data.lead_from = value.leadFrom
    .filter(({ selected }) => selected)
    .map(({ title }) => title)
    .join(", ");
  data.skills = value.skills
    .filter(({ selected }) => selected)
    .map(({ title }) => title);
  data.comments = value.comments;

  return data;
}

export function parseFormStateDTOOpportunity(value: OpportunityData) {
  return value as unknown as OpportunityParsedData;
}

export function isValidPLZ(code: string, scope: TypePLZ = TypePLZ.BERLIN) {
  const codeNum = parseInt(code, 10);

  if (Number.isNaN(codeNum)) return false;

  if (scope === TypePLZ.GERMANY) {
    return codeNum >= minPLZGermany && codeNum <= maxPLZGermany;
  }
  if (scope === TypePLZ.BERLIN) {
    return codeNum >= minPLZBerlin && codeNum <= maxPLZBerlin;
  }
  return false;
}

export function getTickMark(isTicked: boolean) {
  return isTicked ? "☑" : "◻️";
}

export function getDate(datetime: string) {
  return new Date(datetime);
}
