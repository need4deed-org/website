import styled from "styled-components";
import { ScreenTypes } from "../../../config/types";
import useScreenType from "../../../hooks/useScreenType";
import { LogoN4D } from "../logos";
import ContactSocials from "./ContactSocials";
import FooterLinks from "./FooterLinks";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: var(
    --homepage-footer-partners-section-footer-container-flex-direction
  );
  justify-content: var(
    --homepage-footer-partners-section-footer-container-justify-content
  );
  height: var(--homepage-footer-partners-section-footer-container-height);
  gap: var(--homepage-footer-partners-section-footer-container-gap);
`;

const FooterLinksN4DLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface FooterLinksContainerProps {
  "flex-direction"?: string;
}

const FooterLinksContainer = styled.div<FooterLinksContainerProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => props["flex-direction"] || "row"};
  width: var(--homepage-footer-partners-section-footer-links-container-width);
`;

const links1 = [
  "homepage.footer.about",
  "homepage.footer.resources",
  "homepage.footer.faq",
];

const links2 = [
  "homepage.footer.legalNotice",
  "homepage.footer.privacy",
  "homepage.footer.vpa",
];

const desktopFooter = (
  <FooterContainer>
    <LogoN4D />
    <FooterLinksContainer>
      <FooterLinks links={links1} />
      <FooterLinks links={links2} />
      <ContactSocials />
    </FooterLinksContainer>
  </FooterContainer>
);

const tabletFooter = (
  <FooterContainer>
    <LogoN4D />
    <FooterLinksContainer flex-direction="column">
      <FooterLinksContainer>
        <FooterLinks links={links1} />
        <FooterLinks links={links2} />
      </FooterLinksContainer>
      <ContactSocials />
    </FooterLinksContainer>
  </FooterContainer>
);

const mobileFooter = (
  <FooterContainer>
    <FooterLinksN4DLogoContainer>
      <FooterLinks links={links1} />
      <LogoN4D />
    </FooterLinksN4DLogoContainer>
    <FooterLinks links={links2} />
    <ContactSocials />
  </FooterContainer>
);

const footers = {
  [ScreenTypes.DESKTOP]: desktopFooter,
  [ScreenTypes.TABLET]: tabletFooter,
  [ScreenTypes.MOBILE]: mobileFooter,
};

export function Footer() {
  const screenType = useScreenType();

  return footers[screenType];
}
export default Footer;
