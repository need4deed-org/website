import styled from "styled-components";
import { Lang, OpportunityType } from "need4deed-sdk";
import { useTranslation } from "react-i18next";
import { Heading2 } from "../styled/text";
import Cards from "./Cards";
import { urlApiOpportunity } from "../../config/constants";

const OpportunitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--opportunities-container-gap);
  width: fit-content;
  margin-inline: auto;
  padding-inline: var(--opportunities-container-padding-inline);
`;

export function OpportunityCards() {
  const { i18n, t } = useTranslation();

  return (
    <OpportunitiesContainer>
      <Heading2>{t("opportunityPage.header")}</Heading2>
      <Cards
        className="temp-opportunities-container"
        url={urlApiOpportunity}
        opportunityParams={{
          search: {
            status: ["Volunteers Needed", "Search in process"],
            opportunity_type: [
              OpportunityType.GENERAL,
              OpportunityType.ACCOMPANYING,
            ],
          },
          primaryKeys: ["title", "name"],
          language: i18n.language as Lang,
        }}
        popup
      />
    </OpportunitiesContainer>
  );
}

export default OpportunityCards;
