import { MutableRefObject } from "react";

import { Lang } from "../types";

export function isEnumValue<E>(enumObject: object, value: E) {
  return typeof enumObject === "object"
    ? Object.values(enumObject).includes(value)
    : false;
}

export function getBaseUrl(url: string) {
  const [baseUrl] = url.split("/").slice(3, -1);
  return baseUrl ? "/" + baseUrl : "";
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

const typeToImg = {
  Accompanying: "/images/type-accompanying.jpg",
  Arts: "/images/type-arts.jpg",
  Assistance: "/images/type-assistance.jpg",
  "Clean-up": "/images/type-cleanup.jpg",
  Clothing: "/images/type-cloths.jpg",
  Consulting: "/images/type-assistance.jpg",
  Culture: "/images/type-culture.jpg",
  Daycare: "/images/type-daycare.jpg",
  Gardening: "/images/type-gardening.jpg",
  IT: "/images/type-tutoring.jpg",
  Language: "/images/type-language.jpg",
  Mentorship: "/images/type-mentorship.jpg",
  Reading: "/images/type-assistance.jpg",
  Renovation: "/images/type-renovation.jpg",
  Translation: "/images/type-language.jpg",
  Sports: "/images/type-sports.jpg",
  Tandem: "/images/type-tandem.jpg",
  Tutoring: "/images/type-tutoring.jpg",

  default: "/images/type-assistance.jpg",
};

export function getOpportunityImg(type: string) {
  if (!type || typeof type !== "string") return typeToImg.default;

  const [firstTag] = type.split(",");
  const [typeForImg] = firstTag.split(" ");

  return typeToImg[typeForImg as keyof typeof typeToImg] ?? typeToImg.default;
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
  return isoCodes
    .split(",")
    .map(code => code.trim())
    .map(getLanguageName)
    .join(", ");
}
