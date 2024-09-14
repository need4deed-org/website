import { useEffect, useState } from "react";

import { OpportunityParams } from "../../types";
import {
  getFilter,
  getUrlWithEncodedParams,
  mapToOpportunity,
} from "../../utils";

const regexHttpSchema = RegExp("^(http|https)://.*$");

export default function useOpportunities(
  filePath: string,
  opportunityParams: OpportunityParams,
) {
  const [opportunities, setOpportunities] = useState<
    Array<Record<string, string>>
  >([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isUrl = filePath.toLowerCase().match(regexHttpSchema);
    setLoading(true);
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
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  }, [filePath, opportunityParams]);

  return { opportunities, loading };
}
