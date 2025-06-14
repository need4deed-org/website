import styled from "styled-components";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { ChangeEvent, useState } from "react";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--color-white);
  border-radius: 160px;
  height: 60px;
  align-items: center;
  padding: 0 32px;
`;

const StyledInput = styled.input`
  font-size: 16px;
  border: none;

  &:focus {
    outline: none;
  }
`;

interface Props {
  placeHolder?: string;
  onInputChange: (input: string) => void;
}

export function Search({ placeHolder = "Search", onInputChange }: Props) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onInputChange(newValue);
  };

  return (
    <SearchContainer>
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
