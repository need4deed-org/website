import { YesNo } from "../../config/types";
import { resolveEnumKey } from "../../utils";
import {
  TimeSlot,
  VolunteerData,
  VolunteerParsedData,
  Weekday,
} from "./dataStructure";

export function parseFormStateDTO(value: VolunteerData) {
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
  data.origin_opportunity_id = value.opportunityId
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
    (
      result: [
        number,
        Lowercase<keyof typeof TimeSlot> | "weekdays" | "weekends",
      ][],
      day,
    ) => {
      day.timeSlots
        .filter(({ selected }) => selected)
        .forEach(({ title }) => {
          const numDay = mapWeekdaysToNumbers[day.weekday];
          const timeSlot = numDay
            ? (resolveEnumKey<keyof typeof TimeSlot>(
                TimeSlot,
                title,
              ).toLocaleLowerCase() as Lowercase<keyof typeof TimeSlot>)
            : (title.toLowerCase() as "weekdays" | "weekends");

          result.push([numDay, timeSlot]);
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
  data.good_conduct_certificate = value.certOfGoodConduct
    ? YesNo.YES
    : YesNo.NO;
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

export function isValidPLZ(code: string, scope: string = "Berlin") {
  const codeNum = parseInt(code);

  if (isNaN(codeNum)) return false;

  return scope === "Germany"
    ? codeNum >= 1001 && codeNum <= 95999
    : scope === "Berlin"
      ? codeNum >= 10115 && codeNum <= 14199
      : false;
}
