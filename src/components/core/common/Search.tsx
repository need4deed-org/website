import styled from "styled-components";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { ChangeEvent, useEffect, useState } from "react";
import { CardsFilter } from "../../OpportunityCards/types";

interface SearchContainerProps {
  width?: string;
}

const SearchContainer = styled.div<SearchContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: var(--search-container-height);
  width: ${(props) => props.width || "-webkit-fill-available"};
  background-color: var(--color-white);
  border-radius: var(--search-container-border-radius);
  align-items: center;
  padding: var(--search-container-padding);
`;

const StyledInput = styled.input`
  font-size: var(--search-input-font-size);
  border: none;
  flex: 1;
  &:focus {
    outline: none;
  }
`;

interface Props {
  placeHolder?: string;
  onInputChange: (input: string) => void;
  width?: string;
  cardsFilter?: CardsFilter;
}

export function Search({
  placeHolder = "Search",
  onInputChange,
  width,
  cardsFilter,
}: Props) {
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    if (cardsFilter) {
      setInputValue(cardsFilter.searchInput);
    }
  }, [cardsFilter]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onInputChange(newValue);
  };

  return (
    <SearchContainer width={width}>
      <StyledInput
        placeholder={placeHolder}
        value={inputValue}
        onChange={handleInputChange}
      />
      <MagnifyingGlassIcon size={32} />
    </SearchContainer>
  );
}

export default Search;
