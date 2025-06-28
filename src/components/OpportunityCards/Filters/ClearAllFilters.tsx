import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { IconName } from "../../core/button/Button/icon";
import { Button } from "../../core/button";
import { CardsFilter } from "../types";
import { getClearFilter } from "../helpers";

const ClearAllFiltersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 24px;
`;

interface Props {
  setFilter: (filter: CardsFilter) => void;
  filter: CardsFilter;
}

export default function ClearAllFilters({ setFilter, filter }: Props) {
  const { t } = useTranslation();

  return (
    <ClearAllFiltersContainer>
      <Button
        text={t("opportunityPage.filters.clearAllFilters")}
        iconName={IconName.X}
        iconColor="var(--color-midnight)"
        iconSize="24px"
        iconPosition="right"
        onClick={() =>
          setFilter(getClearFilter(filter) as unknown as CardsFilter)
        }
        backgroundcolor="var(--color-white)"
        textColor="var(--color-midnight)"
        height="48px"
      />
    </ClearAllFiltersContainer>
  );
}
