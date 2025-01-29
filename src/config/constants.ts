export const urlApi =
  import.meta.env.VITE_API_URL ?? "http://localhost:8000/api";

export const googleAnalyticsId = "G-5RG5NQ12YS";

export const urlApiVolunteer = `${urlApi}/volunteer/`;
export const urlApiOpportunity = `${urlApi}/opportunity/`;
export const CLOUDFRONT_URL = "https://d2nwrdddg8skub.cloudfront.net/images";

export const showEvent = true;

export const eightDays = 1000 * 60 * 60 * 24 * 8;

export const minPLZGermany = 1067;
export const maxPLZGermany = 99998;

export const minPLZBerlin = 10115;
export const maxPLZBerlin = 14199;

export const phoneRegEx =
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;

const positives = ["1", "YES", "Yes", "yes", "TRUE", "True", "true"];
export const FF = {
  NEW_FORMS_VOLUNTEER: positives.includes(
    import.meta.env.VITE_FF_NEW_FORMS_VOLUNTEER,
  ),
  NEW_FORMS_OPPORTUNITY: positives.includes(
    import.meta.env.VITE_FF_NEW_FORMS_OPPORTUNITY,
  ),
};

export const timeZone = import.meta.env.VITE_TZ || "Europe/Berlin";

export const offsetCET = -60 * 60 * 1000; // CET to UTC in ms
export const offsetLocal = new Date().getTimezoneOffset() * 60 * 1000; // Local TZ to UTC in ms
