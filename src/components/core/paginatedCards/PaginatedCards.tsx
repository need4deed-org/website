import { ReactNode, useState } from "react";
import { PaginatedCardsContainer } from "../../styled/containers";
import { ArrowButtons } from "./ArrowButtons";
import { colorMap } from "../../svg/utils";
import { PaginationIndicators } from "./PaginationIndicators";

interface Props {
  cards: ReactNode[];
  arrowButtonColor: keyof typeof colorMap;
  bottomIndicatorColor: keyof typeof colorMap;
  bottomCurrentIndicatorColor: keyof typeof colorMap;
}

export function PaginatedCards({
  cards,
  arrowButtonColor,
  bottomIndicatorColor,
  bottomCurrentIndicatorColor,
}: Props) {
  const lastIndex = cards.length - 1;
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);

  return (
    <PaginatedCardsContainer id="categories-container">
      <ArrowButtons
        currentIndex={currentCardIndex}
        lastIndex={lastIndex}
        setCurrentIndex={setCurrentCardIndex}
        color={arrowButtonColor}
      />

      {cards[currentCardIndex]}

      <PaginationIndicators
        currentIndex={currentCardIndex}
        lastIndex={lastIndex}
        indicatorColor={bottomIndicatorColor}
        currentIndicatorColor={bottomCurrentIndicatorColor}
      />
    </PaginatedCardsContainer>
  );
}

export default PaginatedCards;
