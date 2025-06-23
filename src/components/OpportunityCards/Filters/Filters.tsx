import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Heading4 } from "../../styled/text";
import { Button } from "../../core/button";
import { IconName } from "../../core/button/Button/icon";
import CloseFilters from "./CloseFilters";

const FiltersContainer = styled.div`
  position: absolute;
  right: 0;
  width: 340px;
  z-index: 1;
  background: var(--color-orchid-subtle);
`;

const FiltersContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350;
  height: 2155;
  gap: 16px;
  padding-top: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  padding-left: 32px;
`;

const ClearAllFiltersDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 24px;
`;

interface Props {
  isFiltersOpen: boolean;
  setIsFiltersOpen: (isOpen: boolean) => void;
}

export default function Filters({ isFiltersOpen, setIsFiltersOpen }: Props) {
  const { t } = useTranslation();

  return isFiltersOpen ? (
    <FiltersContainer>
      <CloseFilters setIsFiltersOpen={setIsFiltersOpen} />

      <FiltersContentContainer>
        <Heading4 margin={0} color="var(--color-midnight)">
          {t("opportunityPage.closeFilters")}
        </Heading4>

        <Heading4 margin={0} color="var(--color-midnight)">
          {t("opportunityPage.closeFilters")}
        </Heading4>

        <Heading4 margin={0} color="var(--color-midnight)">
          {t("opportunityPage.closeFilters")}
        </Heading4>
      </FiltersContentContainer>

      <ClearAllFiltersDiv>
        <Button
          text={t("opportunityPage.clearAllFilters")}
          iconName={IconName.X}
          iconColor="var(--color-midnight)"
          iconSize="24px"
          iconPosition="right"
          onClick={() => {}}
          backgroundcolor="var(--color-white)"
          textColor="var(--color-midnight)"
          height="48px"
        />
      </ClearAllFiltersDiv>
    </FiltersContainer>
  ) : null;
}
