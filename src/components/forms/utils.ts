import { TFunction } from "i18next";
import {
  maxPLZBerlin,
  maxPLZGermany,
  minPLZBerlin,
  minPLZGermany,
} from "../../config/constants";
import {
  OpportunityType,
  TranslatedIntoType,
  TypePLZ,
} from "../../config/types";
import { getDateCETtoUTC, haveCommonElements, parseYesNo } from "../../utils";
import {
  OpportunityData,
  OpportunityParsedData,
} from "./AddOpportunity/dataStructure";
import {
  VolunteerData,
  VolunteerParsedData,
} from "./BecomeVolunteer/dataStructure";
import fallbackLists from "./fallbackLists";
import fallbackListsDE from "./fallbackListsDE";
import { Availability, Selected, TimeSlot, Weekday } from "./types";

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

function getSelectedTimeslots(
  state: Availability,
): [number, TimeSlot | "weekdays" | "weekends"][] {
  return state.reduce(
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
}

export function getSelectedTitles(state: Selected[]): string[] {
  return state.filter(({ selected }) => selected).map(({ title }) => title);
}

function getConditionedLanguages(
  languages: string[],
  ifMapToEnglishTitles = false,
) {
  return languages.map((language) => {
    let tmpLanguage = language;

    if (ifMapToEnglishTitles) {
      const idx = fallbackListsDE.languages?.findIndex(
        (item) => item === language,
      );
      tmpLanguage =
        (idx as number) >= 0
          ? fallbackLists.languages[idx as number]
          : tmpLanguage;
    }

    if (tmpLanguage === "Farsi" || tmpLanguage === "Farsi/Dari")
      tmpLanguage = "Persian";

    return tmpLanguage;
  });
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
  data.preferred_berlin_locations = getSelectedTitles(value.locations);
  data.schedule = getSelectedTimeslots(value.availability);
  data.intermediate_languages = getConditionedLanguages(
    getSelectedTitles(value.languagesIntermediate),
  );
  data.fluent_languages = getConditionedLanguages(
    getSelectedTitles(value.languagesFluent),
  );
  data.native_languages = getConditionedLanguages(
    getSelectedTitles(value.languagesNative),
  );
  data.activities = getSelectedTitles(value.activities);
  data.good_conduct_certificate = parseYesNo(value.certOfGoodConduct);
  data.if_measles_vaccination = !!value.certMeaslesVaccination;
  data.lead_from = getSelectedTitles(value.leadFrom).join(", ");
  data.skills = getSelectedTitles(value.skills);
  data.comments = value.comments;

  return data;
}

export function parseFormStateDTOOpportunity(value: OpportunityData) {
  const data = {} as OpportunityParsedData;
  data.title = value.title;
  data.opportunity_type = value.opportunityType || OpportunityType.GENERAL;
  data.vo_information = value.voInformation;
  data.accomp_address = value.aaAddress;
  data.accomp_postcode = value.aaPostcode;
  data.accomp_datetime = getDateCETtoUTC(value.dateTime);
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
  data.berlin_locations = getSelectedTitles(value.locations);
  data.languages =
    value.translatedInto !== TranslatedIntoType.NO_TRANSLATION
      ? getConditionedLanguages(getSelectedTitles(value.languages), true)
      : [];
  data.activities = getSelectedTitles([
    ...value.activities,
    ...value.activitiesAccompanying,
  ]);
  data.skills = getSelectedTitles(value.skills);
  data.timeslots = getSelectedTimeslots(value.schedule);
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

export function getSchedule() {
  const timeSlots: Selected[] = Object.values(TimeSlot).map((timeSlot) => ({
    title: timeSlot,
    selected: false,
  }));
  const schedule: Availability = Object.values(Weekday).map((weekday) => ({
    weekday,
    timeSlots,
  }));
  schedule.push({
    weekday: "onetime",
    timeSlots: [
      { title: "Weekdays", selected: false },
      { title: "Weekends", selected: false },
    ],
  });

  return schedule;
}

export function getAllSelectedFalse(list: string[]): Selected[] {
  return list.map((title) => ({
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
    getSelectedTitles(
      values[
        key as "languagesNative" | "languagesFluent" | "languagesIntermediate"
      ],
    ),
  );
  return haveCommonElements(...languages);
}
