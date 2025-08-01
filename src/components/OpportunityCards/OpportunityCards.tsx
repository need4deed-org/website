import { useLocation, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Lang, OpportunityType } from "need4deed-sdk";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Cards from "./Cards";
import { urlApiOpportunity } from "../../config/constants";
import OpportunityCardsHeader from "./OpportunityCardsHeader";
import MapView from "./MapView";
import Filters from "./Filters/Filters";
import { defaultFilter, FILTER_KEY_LIST } from "./Filters/constants";
import { CardsFilter } from "./types";
import { deserializeFilters, openFilters, serializeFilters } from "./helpers";

const OpportunitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--opportunities-container-gap);
  width: var(--opportunities-container-width);
  min-height: var(--opportunities-container-min-height);
  margin-inline: auto;
  position: relative;
  padding: var(--opportunities-container-padding);
`;

export function OpportunityCards() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = new URLSearchParams(location.search);
  const { i18n, t } = useTranslation();
  const language = i18n.language as Lang;
  const [numOfOpportunities, setNumOfOpportunities] = useState(0);
  const [cardsFilter, setCardsFilter] = useState(defaultFilter);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const handleFilterUpdate = (
    newFilter: CardsFilter | ((prev: CardsFilter) => CardsFilter),
  ) => {
    const updatedFilter =
      typeof newFilter === "function" ? newFilter(cardsFilter) : newFilter;

    setCardsFilter(updatedFilter);

    setSearchParams(serializeFilters(updatedFilter, language));
  };

  const initializeFilter = (
    incomingFilter: CardsFilter | ((prev: CardsFilter) => CardsFilter),
  ) => {
    const baseFilter =
      typeof incomingFilter === "function"
        ? incomingFilter(cardsFilter)
        : incomingFilter;

    const hasFilterParams = FILTER_KEY_LIST.some((key) => query.has(key));

    const finalFilter = hasFilterParams
      ? deserializeFilters(query, baseFilter)
      : baseFilter;

    setCardsFilter(finalFilter);
    setIsFiltersOpen(openFilters(searchParams));
  };

  const onSearchInputChange = (searchInput: string) => {
    handleFilterUpdate((prev) => ({ ...prev, searchInput }));
  };

  const tabs = [t("opportunityPage.tabs.tab1"), t("opportunityPage.tabs.tab2")];

  return (
    <OpportunitiesContainer>
      <Filters
        isFiltersOpen={isFiltersOpen}
        setFilter={handleFilterUpdate}
        filter={cardsFilter}
        setIsFiltersOpen={setIsFiltersOpen}
      />
      <OpportunityCardsHeader
        // Todo: temporarily just show numOfOpportunities as 0. when map view is available refactor below line.
        numOfOpportunities={selectedTabIndex === 0 ? numOfOpportunities : 0}
        onSearchInputChange={onSearchInputChange}
        cardsFilter={cardsFilter}
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
            language,
          }}
          popup
          setNumOfOpportunities={setNumOfOpportunities}
          cardsFilter={cardsFilter}
          setCardsFilter={initializeFilter}
          isFiltersOpen={isFiltersOpen}
        />
      ) : (
        <MapView />
      )}
    </OpportunitiesContainer>
  );
}

export default OpportunityCards;
