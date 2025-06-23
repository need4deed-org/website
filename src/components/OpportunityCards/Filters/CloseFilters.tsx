import styled from "styled-components";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { Heading4 } from "../../styled/text";

const CloseFiltersDiv = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-orchid-light);
  justify-content: left;
  height: 64px;
  gap: 12px;
  padding: 16px 0px 16px 32px;
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
        {t("opportunityPage.closeFilters")}
      </Heading4>
    </CloseFiltersDiv>
  );
}
