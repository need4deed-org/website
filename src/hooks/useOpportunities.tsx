import { useEffect, useState } from "react";

// conjunction between keys and disjunction between possible values are applied
export type FilterTarget = Array<{ key: string; values: Array<string> }>;

const defaultFilterTarget = [
  { key: "Priority", values: ["hign", "medium"] },
  { key: "Status", values: ["Volunteers Needed"] },
];
export default function useOpportunities(
  filePath: string = "/data/opportunities.json",
  filterTarget: FilterTarget = defaultFilterTarget,
) {
  const [opportunities, setOpportunities] = useState<
    Array<Record<string, string>>
  >([]);

  useEffect(() => {
    fetch(filePath)
      .then(res => res.json())
      .then(data =>
        setOpportunities(
          data.filter(getFilter(filterTarget)).map(mapToOpportunity),
        ),
      )
      .catch(console.error);
  }, [filePath, filterTarget]);

  return opportunities;
}

export function getFilter(target: FilterTarget) {
  return function (item: Record<string, string>) {
    return target.reduce(
      (trg, el) =>
        trg &&
        el.values.reduce((vls, value) => vls || item[el.key] === value, false),
      true,
    );
  };
}

export function mapToOpportunity(opportunity: Record<string, string>) {
  return Object.entries(opportunity).reduce(
    (result: Record<string, string>, [key, value]) => {
      const newKey = key.split(" ")[0].toLowerCase();
      result[newKey] = value;
      return result;
    },
    {},
  );
}
