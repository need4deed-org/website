import styled from "styled-components";
import { Heading4, Paragraph } from "../styled/text";
import { IconDiv, NumberingDiv } from "../styled/containers";
import { IconName, iconNameMap } from "./icon";
import BulletDash from "../svg/BulletDash";

interface Props {
  index: number;
  iconName: IconName;
  infoTexts: string[];
  title: string;
  week: string;
}

const Card = styled.div`
  display: flex;
  flex-direction: var(--homepage-process-section-card-flex-direction);
  width: var(--homepage-process-section-card-width);
  min-width: var(--homepage-process-section-card-width);
  height: var(--homepage-process-section-card-height);
  border-radius: var(--card-border-radius);
  padding: var(--homepage-process-section-card-padding);
  gap: var(--homepage-process-section-card-gap);
  background-color: var(--color-magnolia);
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: var(--homepage-process-section-card-header-flex-direction);
  align-items: center;
  gap: var(--homepage-process-section-card-header-gap);
`;

const CardWeekDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  padding: var(--homepage-process-section-card-week-div-padding);
  border-radius: var(--homepage-process-section-card-week-div-radius);
  background-color: var(--color-orchid-dark);
`;

const CardInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--homepage-process-section-card-info-div-gap);
`;

const CardInfoHeadLineDiv = styled.div`
  display: flex;
  align-items: center;
  gap: var(--homepage-process-section-card-info-headline-div-gap);
`;

const CardInfoBulletDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: var(
    --homepage-process-section-card-info-bullet-div-padding-left
  );
`;

const CardInfoTextDiv = styled.div`
  display: flex;
  gap: var(--homepage-process-section-card-info-text-div-gap);
`;

export default function StepCard({
  index,
  iconName,
  infoTexts,
  title,
  week,
}: Props) {
  const bulletDashColor =
    infoTexts.length === 1 ? "var(--color-magnolia)" : undefined;

  return (
    <Card>
      <CardHeader>
        <CardWeekDiv>
          <Heading4 color="var(--color-aubergine)" margin={0}>
            {week}
          </Heading4>
        </CardWeekDiv>
        <IconDiv size="var(--homepage-process-section-card-icon-size)">
          {iconNameMap[iconName]}
        </IconDiv>
      </CardHeader>

      <CardInfoDiv>
        <CardInfoHeadLineDiv>
          <NumberingDiv>
            <Heading4 margin={0}>{index}</Heading4>
          </NumberingDiv>

          <Heading4 margin={0}>{title}</Heading4>
        </CardInfoHeadLineDiv>

        {infoTexts.map((text) => (
          <CardInfoTextDiv key={text}>
            <CardInfoBulletDiv>
              <BulletDash color={bulletDashColor} />
            </CardInfoBulletDiv>
            <Paragraph
              fontWeight="var(--homepage-process-section-card-info-text-fontWeight)"
              fontSize="var(--homepage-process-section-card-info-text-fontSize)"
              lineheight="var(--homepage-process-section-card-info-text-lineheight)"
              letterSpacing="var(--homepage-process-section-card-info-text-letterSpacing)"
            >
              {text}
            </Paragraph>
          </CardInfoTextDiv>
        ))}
      </CardInfoDiv>
    </Card>
  );
}
