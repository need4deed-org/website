import { useQuery } from "@tanstack/react-query";
import { EventN4D } from "need4deed-sdk";

import { urlApiEvent } from "../../config/constants";
import { Lang } from "../../config/types";
import fetchFn from "./utils";

const staleTime = 1000 * 60 * 60 * 24; // 1d

export default function useEvents(
  language: Lang,
  fromFile: string = "",
): [EventN4D[], boolean, boolean] {
  const {
    data: events,
    isLoading,
    isError,
  } = useQuery<EventN4D[], Error, EventN4D[], string[]>({
    queryKey: ["testimonials", language],
    queryFn: () =>
      fetchFn<EventN4D[]>({
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
