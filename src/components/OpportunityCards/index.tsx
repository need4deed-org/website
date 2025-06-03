import { OpportunityType } from "need4deed-sdk";

import { useState } from "react";
import { OpportunityParams } from "../../config/types";
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

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  url: string;
  opportunityParams?: OpportunityParams;
  popup?: boolean;
}

const regexHttpSchema = /^(http|https):\/\/.*/;

export default function OpportunityCards({
  className,
  url,
  opportunityParams = {},
  popup = false,
}: Props) {
  const isUrl = url.toLowerCase().match(regexHttpSchema);
  const useOpp = isUrl ? useOpportunities : useOpportunitiesFromFile;
  const { opportunities, loading } = useOpp(url, opportunityParams);
  const [modalOpportunity, setModalOpportunity] = useState<
    Opportunity | undefined
  >();

  // Hard coded sorting for 'ACCOMPANYING' page
  if (
    opportunities?.length &&
    opportunityParams.search?.opportunity_type.includes(
      OpportunityType.ACCOMPANYING,
    )
  ) {
    opportunities.sort(
      (a, b) =>
        new Date(a.accomp_datetime).getTime() -
        new Date(b.accomp_datetime).getTime(),
    );
  }

  const opportunitiesRaw = (opportunities || []) as unknown as OpportunityApi[];

  const mappedOpportunities = getMappedOpportunities(opportunitiesRaw);

  return opportunities?.length ? (
    <div className={className || "n4d-container opportunity-container"}>
      {popup && modalOpportunity && (
        <OpportunityCardPopup
          close={() => setModalOpportunity(undefined)}
          opportunity={modalOpportunity}
        />
      )}

      {mappedOpportunities.map((opp) => (
        <OpportunityCard
          key={opp.id}
          iconName={getIconName(opp.categoryId as CategoryTitle)}
          opportunity={opp}
          onClickHandler={() => setModalOpportunity(opp)}
          width="var(--page-opportunity-card-width)"
          height="var(--page-opportunity-card-height)"
          backgroundColor="var(--color-white)"
        />
      ))}
    </div>
  ) : (
    <Announcement copies={loading ? "spinner" : "emptyList"} />
  );
}
