export const urlApi =
  import.meta.env.VITE_API_URL ?? "http://localhost:8000/api";

export const googleAnalyticsId = "G-5RG5NQ12YS";

export const urlApiVolunteer = `${urlApi}/volunteer/`;
export const urlApiOpportunity = `${urlApi}/opportunity/`;
export const urlApiAuthEmailDomain = `${urlApi}/auth-email-domain/`;
export const urlApiTestimonial = `${urlApi}/testimonial/`;
export const urlApiEvent = `${urlApi}/event/`;
export const CLOUDFRONT_URL = "https://d2nwrdddg8skub.cloudfront.net/images";

const positives = ["1", "YES", "Yes", "yes", "TRUE", "True", "true"];

export const showEvent = import.meta.env.VITE_SHOW_EVENT in positives;

export const eightDays = 1000 * 60 * 60 * 24 * 8;

export const minPLZGermany = 1067;
export const maxPLZGermany = 99998;

export const minPLZBerlin = 10115;
export const maxPLZBerlin = 14199;

export const phoneRegEx =
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;

export const FF = {
  NEW_FORMS_VOLUNTEER: positives.includes(
    import.meta.env.VITE_FF_NEW_FORMS_VOLUNTEER,
  ),
  NEW_FORMS_OPPORTUNITY: positives.includes(
    import.meta.env.VITE_FF_NEW_FORMS_OPPORTUNITY,
  ),
  NEW_DESIGN_WEBSITE: positives.includes(
    import.meta.env.VITE_FF_NEW_DESIGN_WEBSITE,
  ),
};

export const timeZone = import.meta.env.VITE_TZ || "Europe/Berlin";

export const screenSizeThresholds = {
  tablet: 768,
  desktop: 1440,
};
