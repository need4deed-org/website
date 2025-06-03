import { ReactNode } from "react";
import styled from "styled-components";

import { ScreenTypes } from "../../../config/types";
import useScreenType from "../../../hooks/useScreenType";
import { FooterPartnersSection } from "../../FooterPartners";
import { Header } from "../../HeaderNew";
import { N4DLogo } from "./logos/N4DLogo";
import PageWrapper from "./PageWrapper";

interface Props {
  children: ReactNode;
  background?: string;
}

interface PageContentHeaderContainerProps {
  background?: string;
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageContentHeaderContainer = styled.div<PageContentHeaderContainerProps>`
  display: flex;
  flex-direction: column;
  background: ${(props) =>
    props.background || "var(--layout-static-page-background-default)"};
`;

export function StaticPageLayout({ children, background }: Props) {
  const screenType = useScreenType();
  const isBurgerMenu = screenType !== ScreenTypes.DESKTOP;

  return (
    <PageWrapper>
      <PageContainer>
        <PageContentHeaderContainer background={background}>
          <Header
            logo={<N4DLogo />}
            isBurgerMenu={isBurgerMenu}
            height="var(--layout-static-page-header-height)"
            padding="var(--layout-static-page-header-padding)"
            menuItemColor="var(--color-midnight)"
          />
          {children}
        </PageContentHeaderContainer>

        <FooterPartnersSection />
      </PageContainer>
    </PageWrapper>
  );
}

export default StaticPageLayout;
