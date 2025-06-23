import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { IconName } from "../../core/button/Button/icon";
import { Button } from "../../core/button";

const ClearAllFiltersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 24px;
`;

export default function ClearAllFilters() {
  const { t } = useTranslation();

  return (
    <ClearAllFiltersContainer>
      <Button
        text={t("opportunityPage.clearAllFilters")}
        iconName={IconName.X}
        iconColor="var(--color-midnight)"
        iconSize="24px"
        iconPosition="right"
        onClick={() => {}}
        backgroundcolor="var(--color-white)"
        textColor="var(--color-midnight)"
        height="48px"
      />
    </ClearAllFiltersContainer>
  );
}
