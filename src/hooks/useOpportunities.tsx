import { useEffect, useState } from "react";
import { FilterTarget } from "../types";

export default function useOpportunities(
  filePath: string,
  filterTarget: FilterTarget,
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
