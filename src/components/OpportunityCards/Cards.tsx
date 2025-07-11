import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { OpportunityParams, ScreenTypes } from "../../config/types";
import useOpportunities from "../../hooks/api/useOpportunities";
import useOpportunitiesFromFile from "../../hooks/api/useOpportunitiesFromFile";
import Announcement from "../Announcement";
import OpportunityCardPopup from "../VolunteeringOpportunities/OpportunityCardPopup";
import {
  CategoryTitle,
  getIconName,
  getMappedOpportunities,
} from "../VolunteeringOpportunities/utils";
import {
  Opportunity,
  OpportunityApi,
} from "../VolunteeringOpportunities/types";
import OpportunityCard from "../VolunteeringOpportunities/OpportunityCard";
import {
  extractCardsFilter,
  filterOpportunity,
  isObjectEmpty,
  reduceFilter,
} from "./helpers";
import { CardsFilter, SetFilter } from "./types";
import PaginatedGrid from "../core/paginatedGrid/PaginatedGrid";
import useScreenType from "../../hooks/useScreenType";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  url: string;
  opportunityParams?: OpportunityParams;
  popup?: boolean;
  setNumOfOpportunities: (numOfOpportunities: number) => void;
  cardsFilter: CardsFilter;
  setCardsFilter: SetFilter;
  isFiltersOpen: boolean;
}

const regexHttpSchema = /^(http|https):\/\/.*/;

const CardsContainer = styled.div`
  display: flex;
  justify-content: var(--opportunities-cards-container-justify-content);
`;

const screenColumnRowsMap: Record<
  ScreenTypes,
  { columns: number; rows: number }
> = {
  [ScreenTypes.MOBILE]: { columns: 1, rows: 10 },
  [ScreenTypes.TABLET]: { columns: 2, rows: 6 },
  [ScreenTypes.DESKTOP]: { columns: 4, rows: 3 },
};

export default function Cards({
  url,
  opportunityParams = {},
  popup = false,
  setNumOfOpportunities,
  cardsFilter,
  setCardsFilter,
  isFiltersOpen,
}: Props) {
  const isUrl = url.toLowerCase().match(regexHttpSchema);
  const useOpp = isUrl ? useOpportunities : useOpportunitiesFromFile;
  const { opportunities, loading } = useOpp(url, opportunityParams);
  const [modalOpportunity, setModalOpportunity] = useState<
    Opportunity | undefined
  >();
  const { t, i18n } = useTranslation();
  const screenSize = useScreenType();
  const isDesktop = screenSize === ScreenTypes.DESKTOP;
  const [selectedLan, setSelectedLan] = useState(i18n.language);

  const opportunitiesRaw = (opportunities || []) as unknown as OpportunityApi[];

  const mappedOpportunities = getMappedOpportunities(opportunitiesRaw, t);

  useEffect(() => {
    if (
      mappedOpportunities.length &&
      (isObjectEmpty(cardsFilter.activityType) || selectedLan !== i18n.language)
    ) {
      const dynamicFilters = extractCardsFilter(mappedOpportunities);

      setCardsFilter((prevFilter: CardsFilter) => ({
        ...prevFilter,
        ...dynamicFilters,
      }));

      setSelectedLan(i18n.language);
    }
  }, [
    mappedOpportunities,
    cardsFilter,
    setCardsFilter,
    selectedLan,
    i18n.language,
  ]);

  const reducedFilter = reduceFilter(cardsFilter);

  const filteredOpportunities = mappedOpportunities.filter((opp) =>
    filterOpportunity(opp, reducedFilter),
  );

  filteredOpportunities.sort(
    (a, b) =>
      b.lastEditedTimeNotion.getTime() - a.lastEditedTimeNotion.getTime(),
  );

  const { columns, rows } = screenColumnRowsMap[screenSize];

  useEffect(() => {
    setNumOfOpportunities(filteredOpportunities.length);
  }, [filteredOpportunities, setNumOfOpportunities]);

  return opportunities?.length ? (
    <CardsContainer>
      {popup && modalOpportunity && (
        <OpportunityCardPopup
          close={() => setModalOpportunity(undefined)}
          opportunity={modalOpportunity}
        />
      )}

      <PaginatedGrid
        items={filteredOpportunities.map((opp) => (
          <OpportunityCard
            key={opp.id}
            iconName={getIconName(opp.categoryId as CategoryTitle)}
            opportunity={opp}
            onClickHandler={() => setModalOpportunity(opp)}
            width="var(--page-opportunity-card-width)"
            height="var(--page-opportunity-card-height)"
            backgroundColor="var(--color-white)"
            enableHoverEffect={!modalOpportunity}
          />
        ))}
        columns={columns - (isDesktop && isFiltersOpen ? 1 : 0)}
        rows={rows}
      />
    </CardsContainer>
  ) : (
    <Announcement copies={loading ? "spinner" : "emptyList"} />
  );
}
