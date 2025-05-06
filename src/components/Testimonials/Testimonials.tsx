/* eslint-disable react/jsx-props-no-spreading */

import { useTranslation } from "react-i18next";
import { Lang, ScreenTypes } from "../../config/types";
import useTestimonials from "../../hooks/api/useTestimonials";
import useScreenType from "../../hooks/useScreenType";
import { PaginatedCards } from "../core/paginatedCards";
import TestimonialCard from "./TestimonialCard";

const cardsPerPageMap = {
  [ScreenTypes.MOBILE]: 1,
  [ScreenTypes.TABLET]: 2,
  [ScreenTypes.DESKTOP]: 3,
};

export default function Testimonials() {
  const { i18n } = useTranslation();
  const [testimonials] = useTestimonials(i18n.language as Lang);
  const screenType = useScreenType();

  const cards = testimonials.map((t) => (
    <TestimonialCard {...t} key={t.name} />
  ));

  return (
    <PaginatedCards
      cards={cards}
      arrowButtonColor="orchid-dark"
      bottomIndicatorColor="orchid-dark"
      bottomCurrentIndicatorColor="aubergine-light"
      cardsPerPage={cardsPerPageMap[screenType]}
    />
  );
}
