import { useQuery } from "@tanstack/react-query";
import { Opportunity, OpportunityParams } from "../../config/types";
import { getUrlWithEncodedParams } from "../../utils";
import { fetchFn } from "./utils";

const staleTime = 1000 * 60 * 60; // 1h

export default function useOpportunities(
  url: string,
  opportunityParams: OpportunityParams,
) {
  const { data: opportunities, isLoading } = useQuery<
    Opportunity[],
    Error,
    Opportunity[],
    string[]
  >({
    queryKey: [
      "opportunities",
      ...(opportunityParams.language ? [opportunityParams.language] : []),
      ...Object.keys(
        opportunityParams?.search ? opportunityParams?.search : {},
      ),
    ],
    queryFn: () =>
      fetchFn<Opportunity[]>({
        url: getUrlWithEncodedParams(url, opportunityParams),
      }),
    staleTime,
  });

  return { opportunities, loading: isLoading };
}
