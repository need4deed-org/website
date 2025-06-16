import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Heading3 } from "../styled/text";

const MapViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--opportunities-map-view-container-height);
`;

export default function MapView() {
  const { t } = useTranslation();

  return (
    <MapViewContainer>
      <Heading3>{t("opportunityPage.mapViewMessage")}...</Heading3>
    </MapViewContainer>
  );
}
