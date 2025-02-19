import { MutableRefObject } from "react";

import {
  CLOUDFRONT_URL,
  offsetCET,
  offsetLocal,
  timeZone,
} from "../config/constants";
import {
  AlfredOpportunity,
  Env,
  KeyMap,
  Lang,
  Opportunity,
  OpportunityParams,
  Subpages,
  YesNo,
} from "../config/types";

export function pivotArrayToObj(arr: Array<Record<string, unknown>>) {
  const [first] = arr;
  if (typeof first !== "object") return arr;

  const init = Object.keys(first).reduce(
    (obj: Record<string, unknown[]>, key) => ({
      ...obj,
      [key]: [],
    }),
    {},
  );

  return arr.reduce((obj: typeof init, item) => {
    const newObj = { ...obj };
    Object.entries(item).forEach(([key, value]) => {
      newObj[key] = [...(newObj[key] || []), value];
    });
    return newObj;
  }, init);
}

export function isEnumValue<E>(enumObject: object, value: E) {
  return typeof enumObject === "object"
    ? Object.values(enumObject).includes(value)
    : false;
}

export function getBaseUrl(url: string) {
  const [baseUrl] = url.split("/").slice(3, -1);
  return baseUrl ? `/${baseUrl}` : "";
}

export const isRtlLang = (lang: Lang) => [Lang.AR, Lang.FA].includes(lang);
export function setLangDirection(
  containerRef: MutableRefObject<HTMLDivElement | null>,
  lng: Lang,
) {
  if (isEnumValue(Lang, lng)) {
    containerRef?.current?.style.setProperty(
      "--n4d-lang-direction",
      isRtlLang(lng) ? "rtl" : "ltr",
    );
  }
}

export const getImageUrl = (imageName: string): string => {
  return `${CLOUDFRONT_URL}/${imageName}`;
};

const typeToImg = {
  accompanying: getImageUrl("type-accompanying.webp"),
  arts: getImageUrl("type-arts.webp"),
  assistance: getImageUrl("type-assistance.webp"),
  "clean-up": getImageUrl("type-cleanup.webp"),
  clothing: getImageUrl("type-cloths.webp"),
  consulting: getImageUrl("type-assistance.webp"),
  culture: getImageUrl("type-culture.webp"),
  daycare: getImageUrl("type-daycare.webp"),
  gardening: getImageUrl("type-gardening.webp"),
  it: getImageUrl("type-tutoring.webp"),
  language: getImageUrl("type-language.webp"),
  mentorship: getImageUrl("type-mentorship.webp"),
  reading: getImageUrl("type-assistance.webp"),
  renovation: getImageUrl("type-renovation.webp"),
  translation: getImageUrl("type-language.webp"),
  sports: getImageUrl("type-sports.webp"),
  tandem: getImageUrl("type-tandem.webp"),
  tutoring: getImageUrl("type-tutoring.webp"),
  default: getImageUrl("type-assistance.webp"),
};

export function getOpportunityImg(type: string) {
  if (!type || typeof type !== "string") return typeToImg.default;

  const [firstTag] = type.split(",");
  const [typeForImg] = firstTag.split(" ");

  return (
    typeToImg[typeForImg.trim().toLowerCase() as keyof typeof typeToImg] ??
    typeToImg.default
  );
}

export const mapCodeToLanguage = {
  en: "English",
  de: "German",
  ar: "Arabic",
  fa: "Farsi",
  ru: "Russian",
  uk: "Ukrainian",
  tr: "Turkish",
  es: "Spanish",
  ot: "Other",
};

export function isoCodesToNames(isoCodes: string) {
  function getLanguageName(code: string) {
    if (code in mapCodeToLanguage)
      return mapCodeToLanguage[code as keyof typeof mapCodeToLanguage];
    return code;
  }
  try {
    return isoCodes
      .split(",")
      .map((code) => code.trim())
      .map(getLanguageName)
      .join(", ");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return "";
  }
}

export function getFilter(search: OpportunityParams["search"]) {
  return search
    ? (item: Record<string, string>) =>
        Object.entries(search).reduce(
          (target, [searchKey, searchValues]) =>
            target &&
            searchValues.reduce(
              (trg, value) => trg || item[searchKey] === value,
              false,
            ),
          true,
        )
    : () => true;
}

export function mapToOpportunity(opportunity: Record<string, string>) {
  return Object.entries(opportunity).reduce(
    (result: Record<string, string>, [key, value]) => ({
      ...result,
      [key.split(" ")[0].toLowerCase()]: value,
    }),
    {},
  );
}

export function mapOpportunity(opportunity: AlfredOpportunity, keyMap: KeyMap) {
  return Object.entries(keyMap).reduce((mapped: Opportunity, [key, value]) => {
    const path = value.split(".");
    let mappedValue = opportunity;
    path.forEach((opportunityKey) => {
      const nextValue = mappedValue[opportunityKey];
      mappedValue = Array.isArray(nextValue)
        ? pivotArrayToObj(nextValue)
        : nextValue;
    });
    return {
      ...mapped,
      [key]: Array.isArray(mappedValue)
        ? mappedValue.join(", ")
        : (mappedValue as unknown as string),
    };
  }, {});
}

const paramEncoderFnMap = {
  search: (value: unknown) =>
    `search=${encodeURIComponent(JSON.stringify(value))}`,
  primaryKeys: (value: unknown) =>
    `primary_keys=${encodeURIComponent(JSON.stringify(value))}`,
  language: (value: unknown) => `language=${value}`,
};

export function getUrlWithEncodedParams(
  url: string,
  params: OpportunityParams,
) {
  if (!params || typeof params !== "object" || !Object.keys(params).length)
    return url;

  const queryStringParams: string[] = [];

  Object.entries(params).forEach(([key, value]) => {
    const typedKey = key as keyof OpportunityParams;
    const encoderFn = paramEncoderFnMap[typedKey];

    if (value && encoderFn) queryStringParams.push(encoderFn(value));
  });

  return `${url}?${queryStringParams.join("&")}`;
}

interface MainCtaUrl {
  lng: Lang;
  id?: string;
  title?: string;
}
export function getMainCtaUrl({ lng, id = "", title = "" }: MainCtaUrl) {
  return `/${Subpages.BECOME_VOLUNTEER}/${lng}/?id=${id}&title=${title}`;
}

export function getLocale(lang: Lang) {
  if (lang === Lang.EN) return "en-UK";

  return lang;
}

export function getReadableLocalTime(
  timestamp: string,
  locale = getLocale(Lang.EN),
) {
  if (timestamp === null) return null;

  try {
    const dateUTC = new Date(timestamp.replace("+00", "Z"));

    if (Number.isNaN(dateUTC.getDate())) return timestamp;

    const dateFormatter = new Intl.DateTimeFormat(locale, {
      timeZone,
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });

    return dateFormatter.format(dateUTC);
  } catch (error) {
    return "Invalid date";
  }
}

export function parseYesNo(value: boolean | undefined): YesNo {
  if (value) return YesNo.YES;
  return YesNo.NO;
}

export function getFirstThursdayOfMonth(
  today: Date = new Date(),
): Date | undefined {
  const firstThursdaysOf25And26 = [
    new Date(Date.UTC(2025, 0, 2)),
    new Date(Date.UTC(2025, 1, 6)),
    new Date(Date.UTC(2025, 2, 6)),
    new Date(Date.UTC(2025, 3, 3)),
    new Date(Date.UTC(2025, 4, 1)),
    new Date(Date.UTC(2025, 5, 5)),
    new Date(Date.UTC(2025, 6, 3)),
    new Date(Date.UTC(2025, 7, 7)),
    new Date(Date.UTC(2025, 8, 4)),
    new Date(Date.UTC(2025, 9, 2)),
    new Date(Date.UTC(2025, 10, 6)),
    new Date(Date.UTC(2025, 11, 4)),
    new Date(Date.UTC(2026, 0, 1)),
    new Date(Date.UTC(2026, 1, 5)),
    new Date(Date.UTC(2026, 2, 5)),
    new Date(Date.UTC(2026, 3, 2)),
    new Date(Date.UTC(2026, 4, 7)),
    new Date(Date.UTC(2026, 5, 4)),
    new Date(Date.UTC(2026, 6, 2)),
    new Date(Date.UTC(2026, 7, 6)),
    new Date(Date.UTC(2026, 8, 3)),
    new Date(Date.UTC(2026, 9, 1)),
    new Date(Date.UTC(2026, 10, 5)),
    new Date(Date.UTC(2026, 11, 3)),
  ];

  const nextFirstThursday = firstThursdaysOf25And26.find(
    (date) => date >= today,
  );

  return nextFirstThursday;
}

export function consoleLogDeveloperContributionMessage() {
  if (process.env.NODE_ENV === Env.DEVELOP) return;

  const rootStyles = getComputedStyle(document.documentElement);
  const primaryColor = rootStyles.getPropertyValue("--n4d-primary").trim();
  const secondaryColor = rootStyles.getPropertyValue("--n4d-secondary").trim();
  const tertiaryColor = rootStyles.getPropertyValue("--n4d-tertiary").trim();

  /* eslint-disable-next-line no-console  */
  console.log(
    `%cWould you like to help developing our website? %cPlease visit our Gitlab repo! %chttps://gitlab.com/need4deed/website/`,
    `color: ${primaryColor}; font-size: 1rem; font-weight: bold;`,
    `color: ${secondaryColor}; font-size: 1rem;`,
    `color: ${tertiaryColor}; font-size: 1rem; text-decoration: underline;`,
  );
}

/**
 * Converts a date string in Central European Time (CET) to its equivalent
 * in Coordinated Universal Time (UTC). It parses the CET string, constructs a UTC date
 * object using the parsed values, and then adjusts for the time difference between the
 * local timezone and CET before returning the UTC date as an ISO string.
 * @param {string} dateStrCET - The date string in CET format.
 * @returns {string|undefined} The UTC date string in ISO format, or undefined if the input is undefined.
 */
export function getDateCETtoUTC(dateStrCET: string | undefined) {
  if (!dateStrCET) return undefined;

  return new Date(
    new Date(dateStrCET).valueOf() + (offsetLocal - offsetCET),
  ).toISOString();
}

/**
 * Checks if there is at least one common element among multiple arrays.
 *
 * @param {...Array<Array<unknown>>} arrays - A list of arrays to check for common elements.
 * @returns {boolean} - Returns `true` if there is at least one common element, otherwise `false`.
 *
 * @example
 * haveCommonElements([1, 2, 3], [4, 5, 6]) // false
 * haveCommonElements([1, 2, 3], [3, 4, 5]) // true
 */
export function haveCommonElements(...arrays: Array<Array<unknown>>) {
  const combined = new Set(arrays.flat()); // Flatten and put all in a Set
  const totalLength = arrays.reduce((sum, arr) => sum + arr.length, 0);
  return combined.size < totalLength;
}
