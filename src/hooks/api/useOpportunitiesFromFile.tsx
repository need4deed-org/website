import { useEffect, useState } from "react";

import { OpportunityParams } from "../../config/types";
import { getFilter, mapToOpportunity } from "../../utils";

type Opportunity = Record<string, string>;

export default function useOpportunitiesFromFile(
  filePath: string,
  opportunityParams: OpportunityParams,
) {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(filePath)
      .then((res) => res.json())
      .then((data) =>
        setOpportunities(
          data
            .filter(getFilter(opportunityParams?.search))
            .map(mapToOpportunity),
        ),
      )
      // eslint-disable-next-line no-console
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  }, [filePath, opportunityParams]);

  return { opportunities, loading };
}
