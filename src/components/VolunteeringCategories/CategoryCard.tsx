import styled from "styled-components";
import { IconName } from "./types";
import { iconNameMap } from "./icon";
import { IconDiv } from "../styled/containers";
import { Heading3, Paragraph } from "../styled/text";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background-color: var(--color-sand);

  @media (min-width: 768px) {
    width: 332px;
    height: 410px;
    padding-top: 28px;
    padding-right: 28px;
    padding-bottom: 48px;
    padding-left: 28px;
  }

  @media (min-width: 1440px) {
    width: 378px;
    height: 398px;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 48px;
    padding-left: 32px;
  }
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
