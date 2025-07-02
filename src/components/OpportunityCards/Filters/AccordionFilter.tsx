import { useState } from "react";
import styled from "styled-components";
import { Heading4, Paragraph } from "../../styled/text";
import CircleArrow from "../../svg/CircleArrow";
import { Checkbox, Props as CheckboxProps } from "../../core/button";

interface Props {
  header: string;
  items?: FilterItem[];
  groupedItems?: GroupedFilterItem[];
}

interface GroupedFilterItem {
  label: string;
  items: FilterItem[];
}

interface FilterItem extends Pick<CheckboxProps, "onChange"> {
  label: string;
  checked: boolean;
}

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--opportunities-filters-content-filter-container-gap);
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
  gap: var(--opportunities-filters-content-accordion-options-gap);
`;

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--opportunities-filters-content-accordion-options-gap);
`;

const GroupOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function AccordionFilter({
  header,
  items,
  groupedItems,
}: Props) {
  const [isOpen, setIsOpen] = useState(true);

  const checkboxHeight = getComputedStyle(
    document.documentElement,
  ).getPropertyValue(
    "--opportunities-filters-content-accordion-options-checkbox-height",
  );

  const groupCheckboxHeight = getComputedStyle(
    document.documentElement,
  ).getPropertyValue(
    "--opportunities-filters-content-accordion-group-options-checkbox-height",
  );

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

      {isOpen && items && (
        <OptionsContainer>
          {items.map((item) => (
            <Checkbox
              key={item.label}
              width={checkboxHeight}
              height={checkboxHeight}
              onChange={item.onChange}
              label={item.label}
              checked={item.checked}
            />
          ))}
        </OptionsContainer>
      )}

      {isOpen && groupedItems && (
        <OptionsContainer>
          {groupedItems.map((groupeItem) => (
            <GroupContainer key={groupeItem.label}>
              <Paragraph>{groupeItem.label}</Paragraph>

              <GroupOptionsContainer>
                {groupeItem.items.map((item) => (
                  <Checkbox
                    key={item.label}
                    width={groupCheckboxHeight}
                    height={groupCheckboxHeight}
                    onChange={item.onChange}
                    label={item.label}
                    labelFontSize="var(--opportunities-filters-content-accordion-group-options-checkbox-labelFontSize)"
                    checked={item.checked}
                  />
                ))}
              </GroupOptionsContainer>
            </GroupContainer>
          ))}
        </OptionsContainer>
      )}
    </FilterContainer>
  );
}
