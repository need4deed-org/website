import styled from "styled-components";
import { Paragraph } from "../styled/text";
import { OpportunityDetailsContainer } from "../styled/containers";

const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: var(--homepage-volunteering-opportunity-detail-section-gap);
`;

const DetailHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: var(--homepage-volunteering-opportunity-detail-header-gap);
`;

export interface CardDetail {
  icon: JSX.Element;
  headerText: string;
  bodyText: string;
}

interface Props {
  cardDetails: CardDetail[];
}

export default function OpportunityCardDetails({ cardDetails }: Props) {
  return (
    <OpportunityDetailsContainer id="opportunity-details-container">
      {cardDetails.map((d) => (
        <DetailSection key={d.headerText}>
          <DetailHeader>
            {d.icon}
            <Paragraph fontWeight={550}>{d.headerText}:</Paragraph>
          </DetailHeader>

          <Paragraph>{d.bodyText}</Paragraph>
        </DetailSection>
      ))}
    </OpportunityDetailsContainer>
  );
}
