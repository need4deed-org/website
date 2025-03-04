import styled from "styled-components";
import { useState } from "react";
import {
  ArrowsButtonContainer,
  CategoriesContainerMobile,
  IconDiv,
  IndicatorsContainer,
} from "../styled/containers";
import RightOrchidDarkFilled from "../svg/RightOrchidDarkFilled";
import LeftOrchidDarkFilled from "../svg/LeftOrchidDarkFilled";
import LeftOrchid from "../svg/LeftOrchid";
import RightOrchid from "../svg/RightOrchid";
import EllipsePapaya from "../svg/EllipsePapaya";
import EllipseOrchid from "../svg/EllipseOrchid";
import { Category } from "./types";
import { iconNameMap } from "./icon";
import { Heading3, Paragraph } from "../styled/text";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--card-border-radius);
  background-color: var(--color-sand);
  width: var(--homepage-volunteering-category-card-width);
  height: var(--homepage-volunteering-category-card-height);
  padding-top: var(--homepage-volunteering-category-card-padding-top);
  padding-right: var(--homepage-volunteering-category-card-padding-right);
  padding-bottom: var(--homepage-volunteering-category-card-padding-bottom);
  padding-left: var(--homepage-volunteering-category-card-padding-left);
  gap: var(--homepage-volunteering-category-card-gap);
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
    <CategoriesContainerMobile id="categories-container-mobile">
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
            onClick={() => {
              setCurrentCardIndex(currentCardIndex + 1);
            }}
          />
        )}
      </ArrowsButtonContainer>

      <Card>
        <IconDiv>{iconNameMap[iconName]}</IconDiv>
        <Heading3>{title}</Heading3>
        <Paragraph>{description}</Paragraph>
      </Card>

      <IndicatorsContainer id="indicators-container">
        {categories.map((category, index) =>
          index === currentCardIndex ? (
            <EllipsePapaya key={category.title} />
          ) : (
            <EllipseOrchid key={category.title} />
          ),
        )}
      </IndicatorsContainer>
    </CategoriesContainerMobile>
  );
}
