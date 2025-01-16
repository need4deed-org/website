import { MutableRefObject } from "react";

import { CLOUDFRONT_URL } from "../config/constants";
import {
  AlfredOpportunity,
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

export function getUrlWithEncodedParams(
  url: string,
  params: OpportunityParams,
) {
  try {
    if (!("search" in params) && !("primaryKeys" in params)) return url;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return url;
  }

  const search = params.search
    ? `search=${encodeURIComponent(JSON.stringify(params.search))}`
    : "";
  const primaryKeys = params.primaryKeys
    ? `primary_keys=${encodeURIComponent(JSON.stringify(params.primaryKeys))}`
    : "";
  return `${url}?${[...(primaryKeys ? [primaryKeys] : []), ...(search ? [search] : [])].join("&")}`;
}

interface MainCtaUrl {
  lng: Lang;
  id?: string;
  title?: string;
}
export function getMainCtaUrl({ lng, id = "", title = "" }: MainCtaUrl) {
  return `/${Subpages.BECOME_VOLUNTEER}/${lng}/?id=${id}&title=${title}`;
}

export function getReadableTime(timestamp: string, locale = "en-US") {
  if (timestamp === null) return null;

  const date = new Date(timestamp);

  if (Number.isNaN(date.getDate())) return timestamp;

  const formattedDate = date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
}

export function parseYesNo(value: boolean | undefined): YesNo {
  if (value) return YesNo.YES;
  return YesNo.NO;
}

export function getFirstThursdayOfMonth(today: Date = new Date()): Date {
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const firstDayOfMonth = new Date(Date.UTC(currentYear, currentMonth, 1));

  const firstDayDayOfWeek = firstDayOfMonth.getDay();

  let firstThursdayDayOfMonth = 5 - firstDayDayOfWeek;
  if (firstThursdayDayOfMonth <= 0) {
    firstThursdayDayOfMonth += 7;
  }

  // const secondThursdayDayOfMonth = firstThursdayDayOfMonth + 7;

  const firstThursday = new Date(
    Date.UTC(
      currentYear,
      currentMonth,
      firstThursdayDayOfMonth, // secondThursdayDayOfMonth,
    ),
  );

  if (firstThursday < today) {
    return getFirstThursdayOfMonth(
      new Date(Date.UTC(today.getFullYear(), today.getMonth() + 1, 1)),
    );
  }

  return firstThursday;
}
