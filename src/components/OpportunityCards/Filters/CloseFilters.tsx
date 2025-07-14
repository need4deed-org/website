import styled from "styled-components";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { Heading4 } from "../../styled/text";

const CloseFiltersDiv = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-orchid-light);
  justify-content: left;
  height: var(--opportunities-filters-close-filter-height);
  gap: var(--opportunities-filters-close-filter-gap);
  padding: var(--opportunities-filters-close-filter-padding);
  cursor: pointer;

  svg {
    color: var(--color-midnight);
  }

  &:hover svg {
    color: var(--color-midnight-light);
  }

  &:hover {
    ${Heading4} {
      color: var(--color-midnight-bright);
    }
  }
`;

interface Props {
  setIsFiltersOpen: (isOpen: boolean) => void;
}
export default function CloseFilters({ setIsFiltersOpen }: Props) {
  const { t } = useTranslation();

  return (
    <CloseFiltersDiv onClick={() => setIsFiltersOpen(false)}>
      <ArrowLeftIcon size={32} />
      <Heading4 margin={0} color="var(--color-midnight)">
        {t("opportunityPage.filters.closeFilters")}
      </Heading4>
    </CloseFiltersDiv>
  );
}
