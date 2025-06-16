import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Heading2, Heading4 } from "../styled/text";
import { Search } from "../core/common";
import FiltersButton from "./FiltersButton";
import useScreenType from "../../hooks/useScreenType";
import { ScreenTypes } from "../../config/types";
import ResultsFound from "./ResultsFound";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--opportunities-header-title-tabs-gap);
`;

const TabsSearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--opportunities-header-tabs-searchbar-gap);
`;

const TabsSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: var(--opportunities-header-tabs-section-width);
`;

const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--opportunities-header-tabs-gap);
`;

const SearchBarSectionContainer = styled.div`
  display: flex;
  flex-direction: var(--opportunities-header-searchbar-flex-direction);
  justify-content: space-between;
  gap: 12px;
`;
interface TabHeadingProps {
  isSelected: boolean;
}

const TabHeading = styled(Heading4)<TabHeadingProps>`
  cursor: pointer;
  border-bottom: ${(props) =>
    props.isSelected
      ? "var(--opportunities-header-tabs-border-bottom) solid currentColor"
      : "none"};
  padding-bottom: ${(props) =>
    props.isSelected ? "var(--opportunities-header-tabs-padding-bottom)" : "0"};
`;

interface Props {
  numOfOpportunities: number;
  onSearchInputChange: (input: string) => void;
  tabs: string[];
  selectedTabIndex: number;
  setSelectedTabIndex: (index: number) => void;
}

export default function OpportunityCardsHeader({
  numOfOpportunities,
  onSearchInputChange,
  selectedTabIndex,
  setSelectedTabIndex,
  tabs,
}: Props) {
  const { t } = useTranslation();
  const screenSize = useScreenType();
  const isMobile = screenSize === ScreenTypes.MOBILE;

  return (
    <HeaderContainer>
      <Heading2>{t("opportunityPage.header")}</Heading2>

      <TabsSearchBarContainer>
        <TabsSectionContainer>
          <Tabs>
            {tabs.map((tab, index) => (
              <TabHeading
                onClick={() => setSelectedTabIndex(index)}
                isSelected={selectedTabIndex === index}
              >
                {tab}
              </TabHeading>
            ))}
          </Tabs>

          {isMobile ? (
            <FiltersButton />
          ) : (
            <ResultsFound numOfOpportunities={numOfOpportunities} />
          )}
        </TabsSectionContainer>

        <SearchBarSectionContainer>
          <Search
            placeHolder={`${t("opportunityPage.searchPlaceHolder")} ...`}
            onInputChange={onSearchInputChange}
            width="var(--opportunities-header-searchbar-width)"
          />
          {isMobile ? (
            <ResultsFound numOfOpportunities={numOfOpportunities} />
          ) : (
            <FiltersButton />
          )}
        </SearchBarSectionContainer>
      </TabsSearchBarContainer>
    </HeaderContainer>
  );
}
