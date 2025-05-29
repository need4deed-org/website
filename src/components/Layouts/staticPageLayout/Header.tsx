import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { ListIcon } from "@phosphor-icons/react";
import { useState } from "react";
import N4DLogo from "../svg/N4DLogo";
import BurgerMenuItems from "./BurgerMenuItems";
import MenuItems from "./MenuItems";
import { ScreenTypes } from "../../config/types";
import useScreenType from "../../hooks/useScreenType";

const HeaderContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  height: var(--homepage-hero-section-header-height);
  position: relative; /* Needed for absolute positioning of MenuItemsDiv */
`;

export function HeaderWait() {
  const { t } = useTranslation();
  const screenType = useScreenType();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);

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
      <N4DBurgerLogo height={logoHeight} width={logoWidth} />

      {screenType === ScreenTypes.MOBILE ? (
        <>
          <ListIcon
            size={32}
            color="var(--color-white)"
            onClick={() => setIsBurgerMenuOpen(true)}
          />
          {isBurgerMenuOpen && (
            <BurgerMenuItems
              isOpen={isBurgerMenuOpen}
              setIsOpen={setIsBurgerMenuOpen}
              items={menuItems}
            />
          )}
        </>
      ) : (
        <MenuItems items={menuItems} />
      )}
    </HeaderContainer>
  );
}

export default HeaderWait;
