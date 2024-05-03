import { MutableRefObject } from "react";

import { Lang } from "../types";

export function isEnumValue<E>(enumObject: object, value: E) {
  return Object.values(enumObject).includes(value);
}

export function getBaseUrl(url: string) {
  const [baseUrl] = url.split("/").slice(3, -1);
  return baseUrl ? "/" + baseUrl : "";
}

export function setJustification(
  containerRef: MutableRefObject<HTMLDivElement | null>,
  lng: Lang,
) {
  if ([Lang.AR, Lang.FA].includes(lng)) {
    containerRef?.current?.style.setProperty("--n4d-lang-direction", "rtl");
  } else {
    containerRef?.current?.style.setProperty("--n4d-lang-direction", "ltr");
  }
}
