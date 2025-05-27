import styled from "styled-components";
import { IconDiv } from "../styled/containers";
import { IconName, iconNameMap } from "./icon";
import { Paragraph } from "../styled/text";

interface Props {
  iconName: IconName;
  text: string;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: var(--homepage-process-section-card-last-step-width);
  height: var(--homepage-process-section-card-height);
  border-radius: var(--card-border-radius);
  padding: var(--homepage-process-section-card-padding);
  gap: var(--homepage-process-section-card-gap);
  background-color: var(--color-orchid-light);
`;

export default function LastStepCard({ iconName, text }: Props) {
  return (
    <Card>
      <IconDiv size="var(--homepage-process-section-card-icon-size)">
        {iconNameMap[iconName]}
      </IconDiv>

      <Paragraph
        fontWeight="var(--homepage-process-section-card-info-text-fontWeight)"
        fontSize="var(--homepage-process-section-card-info-text-fontSize)"
        lineheight="var(--homepage-process-section-card-info-text-lineheight)"
        letterSpacing="var(--homepage-process-section-card-info-text-letterSpacing)"
      >
        {text}
      </Paragraph>
    </Card>
  );
}
