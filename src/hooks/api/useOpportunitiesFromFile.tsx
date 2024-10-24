import { useEffect, useState } from "react";

import { Opportunity, OpportunityParams } from "../../config/types";
import { getFilter, mapToOpportunity } from "../../utils";

export default function useOpportunitiesFromFile(
  filePath: string,
  opportunityParams: OpportunityParams,
) {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(filePath)
      .then(res => res.json())
      .then(data =>
        setOpportunities(
          data
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
