import styled from "styled-components";
import { useState } from "react";
import {
  ArrowsButtonContainer,
  CategoriesContainerMobile,
  IconDiv,
  IndicatorsContainer,
} from "../styled/containers";
import { Category } from "./types";
import { iconNameMap } from "./icon";
import { Heading3, Paragraph } from "../styled/text";
import Ellipse from "../svg/Ellipse";
import CircleArrow from "../svg/CircleArrow";

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
        <CircleArrow
          direction="left"
          color="orchid-dark"
          isFilled={currentCardIndex !== firstIndex}
          onClick={
            currentCardIndex !== firstIndex
              ? () => setCurrentCardIndex(currentCardIndex - 1)
              : undefined
          }
        />
        <CircleArrow
          direction="right"
          color="orchid-dark"
          isFilled={currentCardIndex !== lastIndex}
          onClick={
            currentCardIndex !== lastIndex
              ? () => setCurrentCardIndex(currentCardIndex + 1)
              : undefined
          }
        />
      </ArrowsButtonContainer>

      <Card>
        <IconDiv>{iconNameMap[iconName]}</IconDiv>
        <Heading3>{title}</Heading3>
        <Paragraph>{description}</Paragraph>
      </Card>

      <IndicatorsContainer id="indicators-container">
        {categories.map((category, index) => (
          <Ellipse
            color={index === currentCardIndex ? "papaya" : "orchid-dark"}
            key={category.title}
          />
        ))}
      </IndicatorsContainer>
    </CategoriesContainerMobile>
  );
}
