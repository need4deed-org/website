import { AlfredOpportunity, KeyMap, Opportunity } from "../../types";

export function mapOpportunity(opportunity: AlfredOpportunity, keyMap: KeyMap) {
  return Object.entries(keyMap).reduce((mapped: Opportunity, [key, value]) => {
    const path = value.split(".");
    let mappedValue = opportunity;
    path.forEach(opportunityKey => {
      const nextValue = mappedValue[opportunityKey];
      mappedValue = Array.isArray(nextValue)
        ? pivotArrayToObj(nextValue)
        : nextValue;
    });
    mapped[key] = Array.isArray(mappedValue)
      ? mappedValue.join(", ")
      : (mappedValue as unknown as string);
    return mapped;
  }, {});
}

function pivotArrayToObj(arr: Record<string, unknown[]>[]) {
  const [first] = arr;
  if (typeof first !== "object") return arr;

  const init = Object.keys(first).reduce(
    (obj: Record<string, unknown[]>, key) => {
      obj[key] = [];
      return obj;
    },
    {},
  );

  return arr.reduce((obj: Record<string, unknown[]>, item) => {
    Object.entries(item).forEach(([key, value]) => {
      obj[key].push(value);
    });
    return obj;
  }, init);
}
