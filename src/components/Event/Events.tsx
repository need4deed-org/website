import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { EventComponentInfo, EventDataType } from "../../config/types";
import useEventComponents from "../../hooks/useEventComponents";
import ScrollingHorizontalBar from "../core/ScrollingHorizontalBar";

export default function EventList() {
  const [selectedComponentIdx, setSelectedComponentIdx] = useState<number>();
  const {
    eventComponents: eventStripItems,
    isLoading,
    isError,
  } = useEventComponents();
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

  if (isLoading) {
    return <h4>{t("event.loading")}</h4>;
  }
  if (isError) {
    return <h4>{t("event.error")}</h4>;
  }
  if (!eventStripItems || eventStripItems.length === 0) {
    return <h4>{t("event.empty")}</h4>;
  }

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
