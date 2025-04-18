import { useQuery } from "@tanstack/react-query";

import { urlApiTestimonial } from "../../config/constants";
import { Lang, Testimonial } from "../../config/types";
import fetchFn from "./utils";

const staleTime = 1000 * 60 * 60 * 24; // 1d

export default function useTestimonials(
  language: Lang,
): [Testimonial[], boolean, boolean] {
  const {
    data: testimonials,
    isLoading,
    isError,
  } = useQuery<Testimonial[], Error, Testimonial[], string[]>({
    queryKey: ["testimonials", language],
    queryFn: () =>
      fetchFn<Testimonial[]>({
        url: `${urlApiTestimonial}?language=${language}`,
      }),
    staleTime,
  });

  if (isError) {
    // eslint-disable-next-line no-console
    console.error("Error fetching testimonials");
  }

  return [testimonials || [], isLoading, isError];
}
