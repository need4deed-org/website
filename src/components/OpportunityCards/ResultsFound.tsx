import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Heading4, Paragraph } from "../styled/text";

const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--opportunities-header-result-gap);
  gap: var(--opportunities-header-result-padding);
`;

interface Props {
  numOfOpportunities: number;
}

export default function ResultsFound({ numOfOpportunities }: Props) {
  const { t } = useTranslation();

  return (
    <ResultContainer>
      <Heading4>{numOfOpportunities}</Heading4>
      <Paragraph>{t("opportunityPage.resultsFound")}</Paragraph>
    </ResultContainer>
  );
}
