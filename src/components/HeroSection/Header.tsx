import styled from "styled-components";
import { useTranslation } from "react-i18next";

import N4DLogo from "../svg/N4DLogo";
import LanguageSwitcher from "./LanguageSwitcher";
import MenuItem from "./MenuItem";

const HeaderContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  height: var(--homepage-hero-section-header-height);
`;

const MenuItemsDiv = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  width: var(--homepage-hero-section-header-menu-items-width);
  gap: var(--homepage-hero-section-header-menu-items-gap);
  height: fit-content;
`;

function Header() {
  const { t } = useTranslation();

  const logoHeight = getComputedStyle(
    document.documentElement,
  ).getPropertyValue("--homepage-hero-section-logo-height");

  const logoWidth = getComputedStyle(document.documentElement).getPropertyValue(
    "--homepage-hero-section-logo-width",
  );

  const menuItems = [
    t("homepage.heroSection.menuItems.about"),
    t("homepage.heroSection.menuItems.volunteeringOpportunities"),
    t("homepage.heroSection.menuItems.events"),
  ];

  return (
    <HeaderContainer id="header-container">
      <N4DLogo height={logoHeight} width={logoWidth} />

      <MenuItemsDiv>
        {menuItems.map((text) => (
          <MenuItem text={text} key={text} />
        ))}

        <LanguageSwitcher />
      </MenuItemsDiv>
    </HeaderContainer>
  );
}

export default Header;
