import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Heading2, Heading4 } from "../styled/text";
import { Button } from "../core/button";
import { Search } from "../core/common";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TitleTabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const TabsSearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const TabsResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 980px;
`;

const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

interface Props {
  numOfOpportunities: number;
  onSearchInputChange: (input: string) => void;
}

export default function OpportunityCardsHeader({
  numOfOpportunities,
  onSearchInputChange,
}: Props) {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <TitleTabsContainer>
        <Heading2>{t("opportunityPage.header")}</Heading2>
        <TabsSearchBarContainer>
          <TabsResultContainer>
            <Tabs>
              <Heading4>TABLE VIEW</Heading4>
              <Heading4>MAP VIEW</Heading4>
            </Tabs>

            <Heading4>{numOfOpportunities} results found</Heading4>
          </TabsResultContainer>
          <Search
            placeHolder="Enter search item"
            onInputChange={onSearchInputChange}
          />
        </TabsSearchBarContainer>
      </TitleTabsContainer>

      {/* Todo: onClick to be implemented later  */}
      <Button text="FILTERS" onClick={() => {}} />
    </HeaderContainer>
  );
}
