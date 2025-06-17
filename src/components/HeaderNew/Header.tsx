import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { ListIcon } from "@phosphor-icons/react";
import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuItemType, Subpages } from "../../config/types";
import BurgerMenuItems from "./BurgerMenuItems";
import MenuItems from "./MenuItems";

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
  const navigate = useNavigate();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);

  const menuItems: MenuItemType[] = [
    [
      t("homepage.heroSection.menuItems.about"),
      () => {
        navigate(`/${Subpages.ABOUT}`);
      },
    ],
    [
      t("homepage.heroSection.menuItems.volunteeringOpportunities"),
      () => {
        navigate(`/${Subpages.OPPORTUNITY_CARDS}`);
      },
    ],
    [t("homepage.heroSection.menuItems.events"), "/#events-section-container"],
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
