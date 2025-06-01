import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { ListIcon } from "@phosphor-icons/react";
import { ReactNode, useState } from "react";
import MenuItems from "./MenuItems";
import BurgerMenuItems from "./BurgerMenuItems";

interface HeaderContainerProps {
  height?: string;
  padding?: string;
}

const HeaderContainer = styled.div<HeaderContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding};
`;

interface Props {
  logo: ReactNode;
  isBurgerMenu?: boolean;
  height?: string;
  padding?: string;
  menuItemColor: string;
  burgerMenuItemColor?: string;
}

export function Header({
  logo,
  isBurgerMenu,
  height,
  padding,
  menuItemColor,
  burgerMenuItemColor = "var(--color-midnight)",
}: Props) {
  const { t } = useTranslation();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);

  const menuItems = [
    t("homepage.heroSection.menuItems.about"),
    t("homepage.heroSection.menuItems.volunteeringOpportunities"),
    t("homepage.heroSection.menuItems.events"),
  ];

  return (
    <HeaderContainer id="header-container" height={height} padding={padding}>
      {logo}

      {isBurgerMenu ? (
        <>
          <ListIcon
            size={32}
            color={menuItemColor}
            onClick={() => setIsBurgerMenuOpen(true)}
          />
          {isBurgerMenuOpen && (
            <BurgerMenuItems
              isOpen={isBurgerMenuOpen}
              setIsOpen={setIsBurgerMenuOpen}
              items={menuItems}
              menuItemColor={burgerMenuItemColor}
            />
          )}
        </>
      ) : (
        <MenuItems items={menuItems} menuItemColor={menuItemColor} />
      )}
    </HeaderContainer>
  );
}

export default Header;
