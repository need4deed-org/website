import styled from "styled-components";
import { Lang, OpportunityType } from "need4deed-sdk";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Cards from "./Cards";
import { urlApiOpportunity } from "../../config/constants";
import OpportunityCardsHeader from "./OpportunityCardsHeader";
import { CardsFilter } from "./types";
import MapView from "./MapView";

const OpportunitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--opportunities-container-gap);
  width: var(--opportunities-container-width);
  margin-inline: auto;
  padding-inline: var(--opportunities-container-padding-inline);
`;

const defaultFilter: CardsFilter = { searchInput: "" };

export function OpportunityCards() {
  const { i18n, t } = useTranslation();
  const [numOfOpportunities, setNumOfOpportunities] = useState(0);
  const [cardsFilter, setCardsFilter] = useState(defaultFilter);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const onSearchInputChange = (searchInput: string) => {
    setCardsFilter({ ...cardsFilter, searchInput });
  };

  const tabs = [t("opportunityPage.tabs.tab1"), t("opportunityPage.tabs.tab2")];

  return (
    <OpportunitiesContainer>
      <OpportunityCardsHeader
        // Todo: temporarily just show numOfOpportunities as 0. when map view is available refactor below line.
        numOfOpportunities={selectedTabIndex === 0 ? numOfOpportunities : 0}
        onSearchInputChange={onSearchInputChange}
        tabs={tabs}
        selectedTabIndex={selectedTabIndex}
        setSelectedTabIndex={setSelectedTabIndex}
      />

      {selectedTabIndex === 0 ? (
        <Cards
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
      ) : (
        <MapView />
      )}
    </OpportunitiesContainer>
  );
}

export default OpportunityCards;
