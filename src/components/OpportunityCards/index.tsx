import { Opportunity, OpportunityType } from "need4deed-sdk";

import { useState } from "react";
import { KeyMap, OpportunityParams } from "../../config/types";
import useOpportunities from "../../hooks/api/useOpportunities";
import useOpportunitiesFromFile from "../../hooks/api/useOpportunitiesFromFile";
import { mapOpportunity } from "../../utils";
import Announcement from "../Announcement";
import OpportunityCardPopup from "../VolunteeringOpportunities/OpportunityCardPopup";
import OpportunityCard from "./OpportunityCard";
import "./index.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  url: string;
  opportunityParams?: OpportunityParams;
  keyMap?: KeyMap;
  CardComponent?: ({
    opportunity,
    onClickHandler,
  }: {
    opportunity: Record<string, string>;
    onClickHandler: () => void;
  }) => JSX.Element;
  popup?: boolean;
}

const regexHttpSchema = /^(http|https):\/\/.*/;

export default function OpportunityCards({
  className,
  url,
  opportunityParams = {},
  keyMap = {} as KeyMap,
  CardComponent = OpportunityCard,
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

  return opportunities?.length ? (
    <div className={className || "n4d-container opportunity-container"}>
      {popup && modalOpportunity && (
        <OpportunityCardPopup
          close={() => setModalOpportunity(undefined)}
          opportunity={modalOpportunity}
        />
      )}
      {opportunities.map((opportunity) => {
        const mappedOpportunity = mapOpportunity(opportunity, keyMap);
        return (
          <CardComponent
            // eslint-disable-next-line no-underscore-dangle
            key={opportunity.id || opportunity._id || crypto.randomUUID()}
            opportunity={mappedOpportunity}
            onClickHandler={() => {
              if (opportunity)
                setModalOpportunity(opportunity as unknown as Opportunity);
            }}
          />
        );
      })}
    </div>
  ) : (
    <Announcement copies={loading ? "spinner" : "emptyList"} />
  );
}
