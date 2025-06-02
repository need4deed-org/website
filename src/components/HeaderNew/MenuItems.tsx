import styled from "styled-components";
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
  items: [string, () => void][];
  menuItemColor: string;
}

export default function MenuItems({ items, menuItemColor }: Props) {
  return (
    <MenuItemsContainer>
      {items.map(([text, onClickHandler]) => (
        <MenuItem
          text={text}
          key={text}
          color={menuItemColor}
          onClickHandler={onClickHandler}
        />
      ))}

      <LanguageSwitcher textColor={menuItemColor} />
    </MenuItemsContainer>
  );
}
