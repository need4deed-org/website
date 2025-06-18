import styled from "styled-components";

import { MenuItemType } from "../../config/types";
import LanguageSwitcher from "./LanguageSwitcher";
import MenuitemList from "./MenuitemList";

export const MenuItemsContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: var(--homepage-hero-section-header-menu-items-flex-direction);
  width: var(--homepage-hero-section-header-menu-items-width);
  gap: var(--homepage-hero-section-header-menu-items-gap);
  height: fit-content;
  a {
    text-decoration: none;
  }
`;

interface Props {
  items: MenuItemType[];
  menuItemColor: string;
}

export default function MenuItems({ items, menuItemColor }: Props) {
  return (
    <MenuItemsContainer>
      <MenuitemList items={items} menuItemColor={menuItemColor} />

      <LanguageSwitcher textColor={menuItemColor} />
    </MenuItemsContainer>
  );
}
