export function isEnumValue<E>(enumObject: object, value: E) {
  return Object.values(enumObject).includes(value);
}

export function getBaseUrl(url: string) {
  const [baseUrl] = url.split("/").slice(3, -1);
  return baseUrl ? "/" + baseUrl : "";
}
