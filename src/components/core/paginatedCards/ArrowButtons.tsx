import { ArrowsButtonContainer } from "../../styled/containers";
import CircleArrow from "../../svg/CircleArrow";
import { colorMap } from "../../svg/utils";

interface Props {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  lastIndex: number;
  color: keyof typeof colorMap;
}

export function ArrowButtons({
  currentIndex,
  setCurrentIndex,
  lastIndex,
  color,
}: Props) {
  const firstIndex = 0;

  return (
    <ArrowsButtonContainer id="arrows-button-container">
      <CircleArrow
        direction="left"
        color={color}
        // color={color}
        isFilled={currentIndex !== firstIndex}
        onClick={
          currentIndex !== firstIndex
            ? () => setCurrentIndex(currentIndex - 1)
            : undefined
        }
      />
      <CircleArrow
        direction="right"
        color={color}
        isFilled={currentIndex !== lastIndex}
        onClick={
          currentIndex !== lastIndex
            ? () => setCurrentIndex(currentIndex + 1)
            : undefined
        }
      />
    </ArrowsButtonContainer>
  );
}

export default ArrowButtons;
