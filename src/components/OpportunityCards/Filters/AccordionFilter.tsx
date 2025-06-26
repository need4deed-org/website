import { useState } from "react";
import styled from "styled-components";
import { Heading4 } from "../../styled/text";
import CircleArrow from "../../svg/CircleArrow";
import { Checkbox, Props as CheckboxProps } from "../../core/button";

interface Props {
  header: string;
  items: FilterItem[];
}

interface FilterItem extends Pick<CheckboxProps, "onChange"> {
  label: string;
  checked: boolean;
}

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FilterHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 8px;
`;

export default function AccordionFilter({ header, items }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <FilterContainer>
      <FilterHeaderContainer>
        <Heading4 color="var(--color-midnight)">{header}</Heading4>
        <CircleArrow
          direction={isOpen ? "up" : "down"}
          color="orchid"
          isFilled
          onClick={() => setIsOpen(!isOpen)}
        />
      </FilterHeaderContainer>

      {isOpen && (
        <OptionsContainer>
          {items.map((item) => (
            <Checkbox
              key={item.label}
              width="18px"
              height="18px"
              onChange={item.onChange}
              label={item.label}
              checked={item.checked}
            />
          ))}
        </OptionsContainer>
      )}
    </FilterContainer>
  );
}
