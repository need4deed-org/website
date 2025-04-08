import { IndicatorsContainer } from "../../styled/containers";
import Ellipse from "../../svg/Ellipse";
import { colorMap } from "../../svg/utils";

interface Props {
  currentIndex: number;
  lastIndex: number;
  indicatorColor: keyof typeof colorMap;
  currentIndicatorColor: keyof typeof colorMap;
}

export function PaginationIndicators({
  currentIndex,
  lastIndex,
  indicatorColor,
  currentIndicatorColor,
}: Props) {
  const indexArray = Array.from({ length: lastIndex + 1 }, (_, index) => index);

  return (
    <IndicatorsContainer id="indicators-container">
      {indexArray.map((index) => (
        <Ellipse
          color={
            index === currentIndex ? currentIndicatorColor : indicatorColor
          }
          key={index}
        />
      ))}
    </IndicatorsContainer>
  );
}

export default PaginationIndicators;
