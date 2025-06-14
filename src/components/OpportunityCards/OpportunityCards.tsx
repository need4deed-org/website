import styled from "styled-components";
import { Lang, OpportunityType } from "need4deed-sdk";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Cards from "./Cards";
import { urlApiOpportunity } from "../../config/constants";
import OpportunityCardsHeader from "./OpportunityCardsHeader";
import { CardsFilter } from "./types";

const OpportunitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--opportunities-container-gap);
  width: fit-content;
  margin-inline: auto;
  padding-inline: var(--opportunities-container-padding-inline);
`;

const defaultFilter: CardsFilter = { searchInput: "" };

export function OpportunityCards() {
  const { i18n } = useTranslation();
  const [numOfOpportunities, setNumOfOpportunities] = useState(0);
  const [cardsFilter, setCardsFilter] = useState(defaultFilter);

  const onSearchInputChange = (searchInput: string) => {
    setCardsFilter({ ...cardsFilter, searchInput });
  };

  return (
    <OpportunitiesContainer>
      <OpportunityCardsHeader
        numOfOpportunities={numOfOpportunities}
        onSearchInputChange={onSearchInputChange}
      />
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
        setNumOfOpportunities={setNumOfOpportunities}
        cardsFilter={cardsFilter}
      />
    </OpportunitiesContainer>
  );
}

export default OpportunityCards;
