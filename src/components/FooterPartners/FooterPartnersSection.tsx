import styled from "styled-components";
import { FullWidthContainer, SectionContainer } from "../styled/containers";
import { Partners } from "./Partners";
import { Footer } from "./footer/Footer";

const FooterPartnersSectionContainer = styled(SectionContainer)`
  height: var(--homepage-footer-partners-section-container-height);
  padding: var(--homepage-footer-partners-section-container-padding);
  gap: var(--homepage-footer-partners-section-container-gap);
`;

export function FooterPartnersSection() {
  return (
    <FullWidthContainer
      id="FooterPartnersSection-FWContainer"
      background-color="var(--color-midnight)"
    >
      <FooterPartnersSectionContainer id="footerPartners-section-container">
        <Partners />
        <Footer />
      </FooterPartnersSectionContainer>
    </FullWidthContainer>
  );
}
export default FooterPartnersSection;
