import styled from "styled-components";
import CloseFilters from "./CloseFilters";
import FiltersContent from "./FiltersContent";
import ClearAllFilters from "./ClearAllFilters";
import { CardsFilter } from "../types";

const FiltersContainer = styled.div`
  position: absolute;
  right: 0;
  width: 340px;
  z-index: 1;
  background: var(--color-orchid-subtle);
`;

interface Props {
  isFiltersOpen: boolean;
  setIsFiltersOpen: (isOpen: boolean) => void;
  filter: CardsFilter;
  setCardsFilter: (filter: CardsFilter) => void;
}

export default function Filters({
  isFiltersOpen,
  setIsFiltersOpen,
  filter,
  setCardsFilter,
}: Props) {
  return isFiltersOpen ? (
    <FiltersContainer>
      <CloseFilters setIsFiltersOpen={setIsFiltersOpen} />
      <FiltersContent setCardsFilter={setCardsFilter} filter={filter} />
      <ClearAllFilters />
    </FiltersContainer>
  ) : null;
}
