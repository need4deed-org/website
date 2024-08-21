import { useEffect, useState } from "react";
import { OpportunityParams } from "../types";

export default function useOpportunities(
  filePath: string,
  opportunityParams: OpportunityParams,
) {
  const [opportunities, setOpportunities] = useState<
    Array<Record<string, string>>
  >([]);

  useEffect(() => {
    const isUrl = filePath.toLowerCase().startsWith("http://");
    fetch(
      isUrl ? getUrlWithEncodedParams(filePath, opportunityParams) : filePath,
    )
      .then(res => res.json())
      .then(data =>
        setOpportunities(
          isUrl
            ? data
            : data
                .filter(getFilter(opportunityParams?.search))
                .map(mapToOpportunity),
        ),
      )
      .catch(console.error);
  }, [filePath, opportunityParams]);

  return opportunities;
}

export function getFilter(search: OpportunityParams["search"]) {
  return search
    ? function (item: Record<string, string>) {
        return Object.entries(search).reduce(
          (target, [searchKey, searchValues]) => {
            return (
              target &&
              searchValues.reduce(
                (trg, value) => trg || item[searchKey] === value,
                false,
              )
            );
          },
          true,
        );
      }
    : function () {
        return true;
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

export function getUrlWithEncodedParams(
  url: string,
  params: OpportunityParams,
) {
  const search = params.search
    ? `search=${encodeURIComponent(JSON.stringify(params.search))}`
    : "";
  const primaryKeys = params.primaryKeys
    ? `primary_keys=${encodeURIComponent(JSON.stringify(params.primaryKeys))}`
    : "";
  return `${url}?${[...(primaryKeys ? [primaryKeys] : []), ...(search ? [search] : [])].join("&")}`;
}
