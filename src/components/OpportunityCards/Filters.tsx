import styled from "styled-components";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { Heading4 } from "../styled/text";
import { Button } from "../core/button";
import { IconName } from "../core/button/Button/icon";

const FiltersContainer = styled.div`
  position: absolute;
  right: 0;
  width: 340px;
  z-index: 1;
  background: var(--color-orchid-subtle);
`;

const CloseFiltersDiv = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-orchid-light);
  justify-content: left;
  height: 64px;
  gap: 12px;
  padding: 16px 0px 16px 32px;
  cursor: pointer;
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
  /* background: var(--color-white); */
  justify-content: center;
  /* height: 48px; */
  /* width: fit-content; */
  /* gap: 8px; */
  /* padding: 10px 20px 10px 24px; */
  padding-bottom: 24px;
  /* cursor: pointer; */
  /* border-radius: 100px; */
`;

interface Props {
  isFiltersOpen: boolean;
  setIsFiltersOpen: (isOpen: boolean) => void;
}

export default function Filters({ isFiltersOpen, setIsFiltersOpen }: Props) {
  const { t } = useTranslation();

  return isFiltersOpen ? (
    <FiltersContainer>
      <CloseFiltersDiv onClick={() => setIsFiltersOpen(false)}>
        <ArrowLeftIcon color="var(--color-midnight)" size={32} />
        <Heading4 margin={0} color="var(--color-midnight)">
          {t("opportunityPage.closeFilters")}
        </Heading4>
      </CloseFiltersDiv>

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
