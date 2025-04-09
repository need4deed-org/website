import { IndicatorsContainer } from "../../styled/containers";
import Ellipse from "../../svg/Ellipse";
import { colorMap } from "../../svg/utils";

interface Props {
  currentPage: number;
  totalPages: number;
  indicatorColor: keyof typeof colorMap;
  currentIndicatorColor: keyof typeof colorMap;
  goToPage: (pageNumber: number) => void;
}

export function PaginationIndicators({
  currentPage,
  totalPages,
  indicatorColor,
  currentIndicatorColor,
  goToPage,
}: Props) {
  const pageArray = Array.from({ length: totalPages }, (_, index) => index);

  return (
    <IndicatorsContainer id="indicators-container">
      {pageArray.map((page) => (
        <Ellipse
          color={page === currentPage ? currentIndicatorColor : indicatorColor}
          key={page}
          onClick={() => goToPage(page)}
        />
      ))}
    </IndicatorsContainer>
  );
}

export default PaginationIndicators;
