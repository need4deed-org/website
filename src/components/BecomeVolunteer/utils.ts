import {
  TimeSlot,
  VolunteerData,
  VolunteerParsedData,
  Weekday,
} from "./dataStructure";

export const formData: {
  data: VolunteerParsedData;
} = { data: {} as VolunteerParsedData };

export function parseFormStateDTO(value: VolunteerData) {
  const data = {} as VolunteerParsedData;
  data.name = value.name;
  data.email = value.email;
  data.phone = value.phone;
  data.postcode = value.postcode;
  data.locations = value.locations
    .filter(({ selected }) => selected)
    .map(({ title }) => title);
  data.availability = value.availability.reduce(
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
  );
  data.languagesIntermediate = value.languagesIntermediate
    .filter(({ selected }) => selected)
    .map(({ title }) => title);
  data.languagesFluent = value.languagesFluent
    .filter(({ selected }) => selected)
    .map(({ title }) => title);
  data.activities = value.activities
    .filter(({ selected }) => selected)
    .map(({ title }) => title);
  data.certOfGoodConduct = value.certOfGoodConduct;
  data.certMeaslesVaccination = value.certMeaslesVaccination;
  data.leadFrom = value.leadFrom
    .filter(({ selected }) => selected)
    .map(({ title }) => title);
  data.skills = value.skills
    .filter(({ selected }) => selected)
    .map(({ title }) => title);
  data.comments = value.comments;
  data.consent = value.consent;

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
