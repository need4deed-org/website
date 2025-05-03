import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { EventComponentInfo, EventDataType } from "../../config/types";
import useEventComponents from "../../hooks/useEventComponents";
import ScrollingHorizontalBar from "../core/ScrollingHorizontalBar";

export default function EventList() {
  const [selectedComponentIdx, setSelectedComponentIdx] = useState<number>();
  const eventStripItems = useEventComponents();
  const { t } = useTranslation();

  const handleListItemClick = (eventIdx: number) => {
    setSelectedComponentIdx(eventIdx);
  };

  const renderSelectedComponent = () => {
    if (!(selectedComponentIdx === undefined)) {
      return React.createElement(
        eventStripItems[selectedComponentIdx].component,
        {
          eventData: eventStripItems[selectedComponentIdx]
            .eventData as EventDataType,
        },
      );
    }
    return <h5>{t("event.click")}</h5>;
  };

  return (
    <div className="n4d-container event-list-container">
      <ScrollingHorizontalBar<EventComponentInfo>
        items={eventStripItems}
        handleListItemClick={handleListItemClick}
      />
      {renderSelectedComponent()}
    </div>
  );
}
