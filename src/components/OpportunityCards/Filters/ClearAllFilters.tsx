import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { IconName } from "../../core/button/Button/icon";
import { Button } from "../../core/button";
import { CardsFilter, SetFilter } from "../types";
import { getClearFilter } from "../helpers";

const ClearAllFiltersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: var(--opportunities-filters-clear-all-button-padding-bottom);
`;

interface Props {
  setFilter: SetFilter;
  filter: CardsFilter;
}

export default function ClearAllFilters({ setFilter, filter }: Props) {
  const { t } = useTranslation();

  const handleClick = () => {
    const { searchInput } = filter;
    const clearFilter = getClearFilter(filter) as unknown as CardsFilter;

    /* Exclude 'search bar' input from cleaning process */
    clearFilter.searchInput = searchInput;

    setFilter(clearFilter);
  };

  return (
    <ClearAllFiltersContainer>
      <Button
        text={t("opportunityPage.filters.clearAllFilters")}
        iconName={IconName.X}
        iconColor="var(--color-midnight)"
        iconSize="var(--opportunities-filters-clear-all-button-icon-size)"
        iconPosition="right"
        onClick={handleClick}
        backgroundcolor="var(--color-white)"
        textColor="var(--color-midnight)"
        height="var(--opportunities-filters-clear-all-button-height)"
        textFontSize="var(--opportunities-filters-clear-all-button-text-font-size)"
      />
    </ClearAllFiltersContainer>
  );
}
