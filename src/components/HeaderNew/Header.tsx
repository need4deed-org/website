import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { ListIcon } from "@phosphor-icons/react";
import { ReactNode, useState } from "react";
import BurgerMenuItems from "../HeroSection/BurgerMenuItems";
import MenuItems from "../HeroSection/MenuItems";

const HeaderContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  height: var(--homepage-hero-section-header-height);
  position: relative; /* Needed for absolute positioning of MenuItemsDiv */
`;

interface Props {
  logo: ReactNode;
  isBurgerMenu: boolean;
}

export function Header({ logo, isBurgerMenu }: Props) {
  const { t } = useTranslation();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);

  const menuItems = [
    t("homepage.heroSection.menuItems.about"),
    t("homepage.heroSection.menuItems.volunteeringOpportunities"),
    t("homepage.heroSection.menuItems.events"),
  ];

  return (
    <HeaderContainer id="header-container">
      {logo}

      {isBurgerMenu ? (
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

export default Header;
