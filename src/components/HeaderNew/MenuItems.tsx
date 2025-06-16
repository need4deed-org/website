import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

import { MenuItemType } from "../../config/types";
import LanguageSwitcher from "./LanguageSwitcher";
import MenuItem from "./MenuItem";

export const MenuItemsContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: var(--homepage-hero-section-header-menu-items-flex-direction);
  width: var(--homepage-hero-section-header-menu-items-width);
  gap: var(--homepage-hero-section-header-menu-items-gap);
  height: fit-content;
`;

interface Props {
  items: MenuItemType[];
  menuItemColor: string;
}

export default function MenuItems({ items, menuItemColor }: Props) {
  return (
    <MenuItemsContainer>
      {items.map(([text, whatsOnClick]) =>
        typeof whatsOnClick === "function" ? (
          <MenuItem
            text={text}
            key={text}
            color={menuItemColor}
            onClickHandler={whatsOnClick}
          />
        ) : (
          // @ts-expect-error TS2786
          <HashLink smooth to={whatsOnClick}>
            <MenuItem text={text} key={text} color={menuItemColor} />
          </HashLink>
        ),
      )}

      <LanguageSwitcher textColor={menuItemColor} />
    </MenuItemsContainer>
  );
}
