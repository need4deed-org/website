import { useQuery } from "@tanstack/react-query";
import { N4DEvent } from "need4deed-sdk";

import { urlApiEvent } from "../../config/constants";
import { Lang } from "../../config/types";
import fetchFn from "./utils";

const staleTime = 1000 * 60 * 60 * 24; // 1d

export default function useEvents(
  language: Lang,
  fromFile: string = "",
): [N4DEvent[], boolean, boolean] {
  const {
    data: events,
    isLoading,
    isError,
  } = useQuery<N4DEvent[], Error, N4DEvent[], string[]>({
    queryKey: ["testimonials", language],
    queryFn: () =>
      fetchFn<N4DEvent[]>({
        url: fromFile
          ? `/data/${language}/${fromFile}`
          : `${urlApiEvent}?language=${language}`,
      }),
    staleTime,
  });

  if (isError) {
    // eslint-disable-next-line no-console
    console.error("Error fetching events");
  }

  return [events || [], isLoading, isError];
}
