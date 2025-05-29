import { ReactNode } from "react";
import styled from "styled-components";
import { FooterPartnersSection } from "../../FooterPartners";
import { Header } from "../../HeaderNew";
import { N4DLogo } from "./logos/N4DLogo";
import useScreenType from "../../../hooks/useScreenType";
import { ScreenTypes } from "../../../config/types";

interface Props {
  children: ReactNode;
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageContentHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    var(--color-magnolia)-5.53%,
    var(--color-orchid-dark) 100%
  );
`;

export function StaticPageLayout({ children }: Props) {
  const screenType = useScreenType();
  const isBurgerMenu = screenType !== ScreenTypes.DESKTOP;

  return (
    <PageContainer>
      <PageContentHeaderContainer>
        <Header logo={<N4DLogo />} isBurgerMenu={isBurgerMenu} />
        {children}
      </PageContentHeaderContainer>

      <FooterPartnersSection />
    </PageContainer>
  );
}

export default StaticPageLayout;
