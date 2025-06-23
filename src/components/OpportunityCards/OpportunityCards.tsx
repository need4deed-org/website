import styled from "styled-components";
import { Lang, OpportunityType } from "need4deed-sdk";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Cards from "./Cards";
import { urlApiOpportunity } from "../../config/constants";
import OpportunityCardsHeader from "./OpportunityCardsHeader";
import { CardsFilter } from "./types";
import MapView from "./MapView";
import Filters from "./Filters/Filters";

const OpportunitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--opportunities-container-gap);
  width: var(--opportunities-container-width);
  margin-inline: auto;
  position: relative;
`;

const defaultFilter: CardsFilter = { searchInput: "" };

export function OpportunityCards() {
  const { i18n, t } = useTranslation();
  const [numOfOpportunities, setNumOfOpportunities] = useState(0);
  const [cardsFilter, setCardsFilter] = useState(defaultFilter);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const onSearchInputChange = (searchInput: string) => {
    setCardsFilter({ ...cardsFilter, searchInput });
  };

  const tabs = [t("opportunityPage.tabs.tab1"), t("opportunityPage.tabs.tab2")];

  return (
    <OpportunitiesContainer>
      <Filters
        isFiltersOpen={isFiltersOpen}
        setIsFiltersOpen={setIsFiltersOpen}
      />
      <OpportunityCardsHeader
        // Todo: temporarily just show numOfOpportunities as 0. when map view is available refactor below line.
        numOfOpportunities={selectedTabIndex === 0 ? numOfOpportunities : 0}
        onSearchInputChange={onSearchInputChange}
        tabs={tabs}
        selectedTabIndex={selectedTabIndex}
        setSelectedTabIndex={setSelectedTabIndex}
        setIsFiltersOpen={setIsFiltersOpen}
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
          isFiltersOpen={isFiltersOpen}
        />
      ) : (
        <MapView />
      )}
    </OpportunitiesContainer>
  );
}

export default OpportunityCards;
