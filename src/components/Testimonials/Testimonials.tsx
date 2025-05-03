/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */

import { useTranslation } from "react-i18next";
import { screenSizeThresholds } from "../../config/constants";
import { Lang } from "../../config/types";
import useTestimonials from "../../hooks/api/useTestimonials";
import useResponsive from "../../hooks/useResponsive";
import { PaginatedCards } from "../core/paginatedCards";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const { i18n } = useTranslation();
  const [testimonials] = useTestimonials(i18n.language as Lang);
  const isMobile = useResponsive(screenSizeThresholds.tablet);
  const isTablet = useResponsive(screenSizeThresholds.desktop);

  const cards = testimonials.map((t) => (
    <TestimonialCard {...t} key={t.name} />
  ));

  const cardsPerPage = isMobile ? 1 : isTablet ? 2 : 3;

  return (
    <PaginatedCards
      cards={cards}
      arrowButtonColor="orchid-dark"
      bottomIndicatorColor="orchid-dark"
      bottomCurrentIndicatorColor="aubergine-light"
      cardsPerPage={cardsPerPage}
    />
  );
}
