import {
  TimeSlot,
  VolunteerData,
  VolunteerParsedData,
  Weekday,
} from "./dataStructure";

export function parseFormStateDTO(value: VolunteerData) {
  const data = {} as VolunteerParsedData;
  data.origin_opportunity_id = +value.opportunityId;
  data.full_name = value.name;
  data.email = value.email;
  data.phone = value.phone;
  data.postal_code = +value.postcode;
  data.preffered_berlin_locations = value.locations
    .filter(({ selected }) => selected)
    .map(({ title }) => title);
  data.schedule = value.availability
    .reduce(
      (
        result: {
          weekday: Weekday | "onetime";
          timeSlots: (TimeSlot | "Weekdays" | "Weekends")[];
        }[],
        day,
      ) => {
        const parsedDay = {
          weekday: day.weekday,
          timeSlots: day.timeSlots
            .filter(({ selected }) => selected)
            .map(({ title }) => title),
        };
        if (parsedDay.timeSlots.length) result.push(parsedDay);
        return result;
      },
      [],
    )
    .map(({ weekday, timeSlots }) => `${weekday}:${timeSlots.join(",")}`);
  data.translate_languages = value.languagesIntermediate
    .filter(({ selected }) => selected)
    .map(({ title }) => title);
  data.languages = value.languagesFluent
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
    .join(",");
  data.skills = value.skills
    .filter(({ selected }) => selected)
    .map(({ title }) => title);
  data.schedule_comments = value.comments;
  data.languages_comments = value.comments;
  data.activities_comments = value.comments;
  data.lead_from_comments = String(value.consent);

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
