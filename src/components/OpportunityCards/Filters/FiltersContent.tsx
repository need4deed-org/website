import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Heading4, Paragraph } from "../../styled/text";
import { SwitchButton } from "../../core/button";

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

const AccompanyingFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AccompanyingFilterHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default function FiltersContent() {
  const { t } = useTranslation();
  const [isAccompanyingChecked, setIsAccompanyingChecked] = useState(false);

  return (
    <FiltersContentContainer>
      <AccompanyingFilterContainer>
        <AccompanyingFilterHeaderContainer>
          <Heading4 margin={0} color="var(--color-midnight)">
            {t("opportunityPage.accompanying")}
          </Heading4>
          <SwitchButton
            isChecked={isAccompanyingChecked}
            onToggle={() => setIsAccompanyingChecked(!isAccompanyingChecked)}
          />
        </AccompanyingFilterHeaderContainer>

        <Paragraph
          fontWeight={400}
          fontSize="14px"
          color="var(--color-midnight)"
          lineheight="14px"
        >
          {t("opportunityPage.accompanyingDesc")}
        </Paragraph>
      </AccompanyingFilterContainer>
    </FiltersContentContainer>
  );
}
