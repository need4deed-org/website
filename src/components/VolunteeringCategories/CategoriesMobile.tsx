import styled from "styled-components";
import { useState } from "react";
import { ContainerProps } from "../styled/containers";
import RightOrchidDarkFilled from "../svg/RightOrchidDarkFilled";
import LeftOrchidDarkFilled from "../svg/LeftOrchidDarkFilled";
import LeftOrchid from "../svg/LeftOrchid";
import RightOrchid from "../svg/RightOrchid";
import EllipsePapaya from "../svg/EllipsePapaya";
import EllipseOrchid from "../svg/EllipseOrchid";
import { Description, IconDiv, Title } from "./CategoryCard";
import { Category } from "./types";
import { iconNameMap } from "./icon";

const CategoriesContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--color-magnolia);
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background-color: var(--color-sand);

  width: 320px;
  height: 372px;
  padding-top: 24px;
  padding-right: 24px;
  padding-bottom: 48px;
  padding-left: 24px;
`;

const ArrowsButtonContainer = styled.div.attrs<ContainerProps>((props) => ({
  id: props.id,
}))<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`;

const IndicatorsContainer = styled.div.attrs<ContainerProps>((props) => ({
  id: props.id,
}))<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

interface Props {
  categories: Category[];
}

export default function CategoriesMobile({ categories }: Props) {
  const firstIndex = 0;
  const lastIndex = categories.length - 1;
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(firstIndex);
  const { title, description, iconName } = categories[currentCardIndex];

  return (
    <CategoriesContainerMobile>
      <ArrowsButtonContainer id="arrows-button-container">
        {currentCardIndex === firstIndex ? (
          <LeftOrchid />
        ) : (
          <LeftOrchidDarkFilled
            onClick={() => setCurrentCardIndex(currentCardIndex - 1)}
          />
        )}
        {currentCardIndex === lastIndex ? (
          <RightOrchid />
        ) : (
          <RightOrchidDarkFilled
            onClick={() => setCurrentCardIndex(currentCardIndex + 1)}
          />
        )}
      </ArrowsButtonContainer>

      <Card>
        <IconDiv>{iconNameMap[iconName]}</IconDiv>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Card>

      <IndicatorsContainer id="indicators-container">
        {categories.map((_, index) =>
          index === currentCardIndex ? <EllipsePapaya /> : <EllipseOrchid />,
        )}
      </IndicatorsContainer>
    </CategoriesContainerMobile>
  );
}
