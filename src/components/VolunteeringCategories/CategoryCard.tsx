import {
  ChatsTeardrop,
  Baby,
  Bicycle,
  CalendarStar,
  PingPong,
  Users,
} from "@phosphor-icons/react";
import styled from "styled-components";
import { IconName } from "../../config/types";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background-color: var(--color-sand);
  gap: 24px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 48px;
  padding-left: 32px;

  @media (min-width: 360px) {
    width: 320px;
    height: 372px;
  }

  @media (min-width: 768px) {
    width: 332px;
    height: 410px;
  }

  @media (min-width: 1440px) {
    width: 378px;
    height: 398px;
  }
`;

const Title = styled.h3`
  font-weight: var(--text-h3-font-weight);
  font-size: var(--text-h3-font-size);
  line-height: var(--text-h3-line-height);
  letter-spacing: var(--text-h3-letter-spacing);
  color: var(--color-midnight);
`;

const Description = styled.p`
  font-weight: var(--text-p-font-weight);
  font-size: var(--text-p-font-size);
  line-height: var(--text-p-line-height);
  letter-spacing: var(--text-p-letter-spacing);
  color: var(--color-midnight);
`;

const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--icon-size);
  height: var(--icon-size);

  svg {
    // Target the SVG inside IconDiv
    width: 100%; // Make the SVG fill the IconDiv
    height: 100%;
    fill: var(--icon-color);
  }
`;

type IconMap = {
  [key in IconName]: JSX.Element;
};

const iconNameMap: IconMap = {
  [IconName.ChatsTeardrop]: <ChatsTeardrop />,
  [IconName.Baby]: <Baby />,
  [IconName.Bicycle]: <Bicycle />,
  [IconName.CalendarStar]: <CalendarStar />,
  [IconName.PingPong]: <PingPong />,
  [IconName.Users]: <Users />,
};

interface Props {
  title: string;
  description: string;
  iconName: IconName;
}

export default function CategoryCard({ title, description, iconName }: Props) {
  return (
    <Card>
      <IconDiv>{iconNameMap[iconName]}</IconDiv>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
}
