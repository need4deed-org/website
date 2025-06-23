import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Heading4 } from "../../styled/text";

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

export default function FiltersContent() {
  const { t } = useTranslation();

  return (
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
  );
}
