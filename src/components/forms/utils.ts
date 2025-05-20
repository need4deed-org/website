import { TFunction } from "i18next";
import {
  OpportunityType,
  Option,
  OptionId,
  TranslatedIntoType,
} from "need4deed-sdk";

import {
  maxPLZBerlin,
  maxPLZGermany,
  minPLZBerlin,
  minPLZGermany,
} from "../../config/constants";
import {
  getDateLocalTooUTC,
  haveCommonElements,
  parseYesNo,
  range,
} from "../../utils";
import {
  OpportunityData,
  OpportunityParsedData,
} from "./AddOpportunity/dataStructure";
import {
  VolunteerData,
  VolunteerParsedData,
} from "./BecomeVolunteer/dataStructure";
import { Availability, Selected, TimeSlot, TypePLZ } from "./types";

function getSelectedTimeslots(state: Availability): [number, OptionId][] {
  return state.reduce((result: [number, OptionId][], day) => {
    day.timeSlots
      .filter(({ selected }) => selected)
      .forEach(({ id }) => {
        const numDay = day.weekday;
        result.push([numDay, id]);
      });
    return result;
  }, []);
}

export function getSelectedIds(state: Selected[]): OptionId[] {
  return state.filter(({ selected }) => selected).map(({ id }) => id);
}

export function parseFormStateDTOVolunteer(value: VolunteerData) {
  const data = {} as VolunteerParsedData;
  data.origin_opportunity = value.opportunityId
    ? +value.opportunityId
    : undefined;
  data.full_name = value.name;
  data.email = value.email;
  data.phone = value.phone;
  data.postal_code = +value.postcode;
  data.preferred_berlin_locations = getSelectedIds(value.locations);
  data.schedule = getSelectedTimeslots(value.availability);
  data.intermediate_languages = getSelectedIds(value.languagesIntermediate);
  data.fluent_languages = getSelectedIds(value.languagesFluent);
  data.native_languages = getSelectedIds(value.languagesNative);
  data.activities = getSelectedIds(value.activities);
  data.good_conduct_certificate = parseYesNo(value.certOfGoodConduct);
  data.if_measles_vaccination = !!value.certMeaslesVaccination;
  data.lead_from = getSelectedIds(value.leadFrom).join(", ");
  data.skills = getSelectedIds(value.skills);
  data.comments = value.comments;
  data.language = value.language;

  return data;
}

export function parseFormStateDTOOpportunity(value: OpportunityData) {
  const data = {} as OpportunityParsedData;
  data.title = value.title;
  data.opportunity_type = value.opportunityType || OpportunityType.GENERAL;
  data.vo_information = value.voInformation;
  data.accomp_address = value.aaAddress;
  data.accomp_postcode = value.aaPostcode;
  data.accomp_datetime = getDateLocalTooUTC(
    value.opportunityType === OpportunityType.ACCOMPANYING
      ? value.dateTime
      : value.onetimeDateTime,
  );
  data.accomp_name = value.refugeeName;
  data.accomp_phone = value.refugeeNumber;
  data.accomp_information = value.aaInformation;
  data.accomp_translation = value.translatedInto;
  data.rac_email = value.email;
  data.rac_full_name = value.fullName;
  data.rac_phone = value.racPhone;
  data.rac_address = value.racAddress;
  data.rac_plz = value.racPostcode;
  data.volunteers_number = parseInt(value.numberVolunteers, 10);
  data.berlin_locations = getSelectedIds(value.locations);
  data.languages =
    value.translatedInto !== TranslatedIntoType.NO_TRANSLATION
      ? getSelectedIds(value.languages)
      : [];
  data.activities = getSelectedIds([
    ...value.activities,
    ...value.activitiesAccompanying,
  ]);
  data.skills = getSelectedIds(value.skills);
  data.timeslots = getSelectedTimeslots(value.schedule);
  data.language = value.language;

  return data;
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

export function getScheduleState(): Availability {
  const timeSlots: Selected[] = Object.values(TimeSlot)
    .filter(
      (timeSlot) =>
        timeSlot !== TimeSlot.WEEKDAYS && timeSlot !== TimeSlot.WEEKENDS,
    )
    .map((timeSlot) => ({
      id: timeSlot,
      title: { en: timeSlot, de: timeSlot },
      selected: false,
    }));
  const schedule: Availability = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const weekday of range(1, 8)) {
    schedule.push({ weekday, timeSlots });
  }

  schedule.push({
    weekday: 0,
    timeSlots: [
      {
        id: "Weekdays",
        title: { en: "Weekdays", de: "Wochentage" },
        selected: false,
      },
      {
        id: "Weekends",
        title: { en: "Weekends", de: "Wocheenden" },
        selected: false,
      },
    ],
  });

  return schedule;
}

export function getAllSelectedFalse(list: Option[]): Selected[] {
  return list.map(({ id, title }) => ({
    id,
    title,
    selected: false,
  }));
}

export function getTimeslotTitle(
  t: TFunction<"translation", undefined>,
  title: string,
) {
  if (title === "Weekdays" || title === "Weekends") {
    return t(`form.schedule.${title.toLowerCase()}`);
  }

  return title;
}

export function areLanguagesRepeated(values: VolunteerData) {
  const languages = [
    "languagesNative",
    "languagesFluent",
    "languagesIntermediate",
  ].map((key: string) =>
    getSelectedIds(
      values[
        key as "languagesNative" | "languagesFluent" | "languagesIntermediate"
      ],
    ),
  );
  return haveCommonElements(...languages);
}

export function isTimeSlotSelected(state: Availability) {
  return state
    .map(({ timeSlots }) => timeSlots)
    .flat()
    .some(({ selected }) => selected);
}

export function isSelected<T extends { selected: boolean }>(
  items: T[],
  errorMsg: string,
) {
  return items.some(({ selected }) => selected) ? undefined : errorMsg;
}
