export function isEnumValue<E>(enumObject: object, value: E) {
  return Object.values(enumObject).includes(value);
}
