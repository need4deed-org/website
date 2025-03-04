import styled from "styled-components";
import { IconName } from "./types";
import { iconNameMap } from "./icon";
import { IconDiv } from "../styled/containers";
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
  title: string;
  description: string;
  iconName: IconName;
}

export default function CategoryCard({ title, description, iconName }: Props) {
  return (
    <Card>
      <IconDiv>{iconNameMap[iconName]}</IconDiv>
      <Heading3>{title}</Heading3>
      <Paragraph>{description}</Paragraph>
    </Card>
  );
}
