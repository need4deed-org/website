import styled from "styled-components";
import CloseFilters from "./CloseFilters";
import FiltersContent from "./FiltersContent";
import ClearAllFilters from "./ClearAllFilters";
import { CardsFilter } from "../types";

const FiltersContainer = styled.div`
  position: absolute;
  right: 0;
  width: var(--opportunities-filters-container-width);
  z-index: 1;
  background: var(--color-orchid-subtle);
  border-bottom-left-radius: var(
    --opportunities-filters-container-border-bottom-radius
  );
  border-bottom-right-radius: var(
    --opportunities-filters-container-border-bottom-radius
  );
`;

interface Props {
  isFiltersOpen: boolean;
  setIsFiltersOpen: (isOpen: boolean) => void;
  filter: CardsFilter;
  setFilter: (filter: CardsFilter) => void;
}

export default function Filters({
  isFiltersOpen,
  setIsFiltersOpen,
  filter,
  setFilter,
}: Props) {
  return isFiltersOpen ? (
    <FiltersContainer>
      <CloseFilters setIsFiltersOpen={setIsFiltersOpen} />
      <FiltersContent setFilter={setFilter} filter={filter} />
      <ClearAllFilters filter={filter} setFilter={setFilter} />
    </FiltersContainer>
  ) : null;
}
