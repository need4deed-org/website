import { ReactNode, useState } from "react";
import {
  PaginatedCardsContainer,
  VisibleCardsContainer,
} from "../../styled/containers";
import { ArrowButtons } from "./ArrowButtons";
import { colorMap } from "../../svg/utils";
import { PaginationIndicators } from "./PaginationIndicators";

interface Props {
  cards: ReactNode[];
  arrowButtonColor: keyof typeof colorMap;
  bottomIndicatorColor: keyof typeof colorMap;
  bottomCurrentIndicatorColor: keyof typeof colorMap;
  cardsPerPage?: number;
}

export function PaginatedCards({
  cards,
  arrowButtonColor,
  bottomIndicatorColor,
  bottomCurrentIndicatorColor,
  cardsPerPage = 1,
}: Props) {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const visibleCards = cards.slice(startIndex, endIndex);

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <PaginatedCardsContainer id="paginated-cards-container">
      <ArrowButtons
        currentIndex={currentPage}
        lastIndex={totalPages - 1}
        setCurrentIndex={setCurrentPage}
        color={arrowButtonColor}
      />

      <VisibleCardsContainer id="visible-cards-container">
        {visibleCards}
      </VisibleCardsContainer>

      <PaginationIndicators
        currentPage={currentPage}
        totalPages={totalPages}
        indicatorColor={bottomIndicatorColor}
        currentIndicatorColor={bottomCurrentIndicatorColor}
        goToPage={goToPage}
      />
    </PaginatedCardsContainer>
  );
}

export default PaginatedCards;
