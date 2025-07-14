import { ReactNode, useState } from "react";
import {
  NextVisibleCardContainer,
  OverlayingVisibleCardsContainer,
  PaginatedCardsContainer,
  VisibleCardsContainer,
} from "../../styled/containers";
import { ArrowButtons } from "./ArrowButtons";
import { colorMap } from "../../svg/utils";
import { PaginationIndicators } from "./PaginationIndicators";
import useSwipe from "../../../hooks/useSwipe";

interface Props {
  cards: ReactNode[];
  arrowButtonColor: keyof typeof colorMap;
  bottomIndicatorColor: keyof typeof colorMap;
  bottomCurrentIndicatorColor: keyof typeof colorMap;
  cardsPerPage?: number;
  isOverlayingCards?: boolean;
}

export function PaginatedCards({
  cards,
  arrowButtonColor,
  bottomIndicatorColor,
  bottomCurrentIndicatorColor,
  cardsPerPage = 1,
  isOverlayingCards = false,
}: Props) {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages =
    Math.ceil(cards.length / cardsPerPage) - (isOverlayingCards ? 1 : 0);
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const visibleCards = cards.slice(startIndex, endIndex);

  const nextCardElement = cards[endIndex];

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const { onTouchStart, onTouchEnd } = useSwipe(
    () => setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev)),
    () => setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev)),
  );

  return (
    <PaginatedCardsContainer
      id="paginated-cards-container"
      {...{ onTouchStart, onTouchEnd }}
    >
      <ArrowButtons
        currentIndex={currentPage}
        lastIndex={totalPages - 1}
        setCurrentIndex={setCurrentPage}
        color={arrowButtonColor}
      />

      {isOverlayingCards ? (
        <OverlayingVisibleCardsContainer id="overlaying-visible-cards-container">
          {visibleCards}
          {endIndex === totalPages ? (
            nextCardElement
          ) : (
            <NextVisibleCardContainer>
              {nextCardElement}
            </NextVisibleCardContainer>
          )}
        </OverlayingVisibleCardsContainer>
      ) : (
        <VisibleCardsContainer id="visible-cards-container">
          {visibleCards}
        </VisibleCardsContainer>
      )}

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
