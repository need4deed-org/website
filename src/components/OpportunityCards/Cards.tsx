/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { OpportunityParams, ScreenTypes } from "../../config/types";
import useOpportunities from "../../hooks/api/useOpportunities";
import useOpportunitiesFromFile from "../../hooks/api/useOpportunitiesFromFile";
import Announcement from "../Announcement";
import OpportunityCardPopup from "../VolunteeringOpportunities/OpportunityCardPopup";
import "./index.css";
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
import { filterOpportunity } from "./helpers";
import { CardsFilter } from "./types";
import PaginatedGrid from "../core/paginatedGrid/PaginatedGrid";
import useScreenType from "../../hooks/useScreenType";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  url: string;
  opportunityParams?: OpportunityParams;
  popup?: boolean;
  setNumOfOpportunities: (numOfOpportunities: number) => void;
  cardsFilter: CardsFilter;
}

const regexHttpSchema = /^(http|https):\/\/.*/;

const CardsContainer = styled.div``;

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
}: Props) {
  const isUrl = url.toLowerCase().match(regexHttpSchema);
  const useOpp = isUrl ? useOpportunities : useOpportunitiesFromFile;
  const { opportunities, loading } = useOpp(url, opportunityParams);
  const [modalOpportunity, setModalOpportunity] = useState<
    Opportunity | undefined
  >();
  const { t } = useTranslation();
  const screenSize = useScreenType();

  const opportunitiesRaw = (opportunities || []) as unknown as OpportunityApi[];

  const mappedOpportunities = getMappedOpportunities(opportunitiesRaw, t);

  const filteredOpportunities = mappedOpportunities.filter((opp) =>
    filterOpportunity(opp, cardsFilter),
  );

  filteredOpportunities.sort(
    (a, b) =>
      b.lastEditedTimeNotion.getTime() - a.lastEditedTimeNotion.getTime(),
  );

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
        {...screenColumnRowsMap[screenSize]}
      />
    </CardsContainer>
  ) : (
    <Announcement copies={loading ? "spinner" : "emptyList"} />
  );
}
