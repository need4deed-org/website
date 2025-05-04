import styled from "styled-components";
import MenuItem from "./MenuItem";
import LanguageSwitcher from "./LanguageSwitcher";

export const MenuItemsContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: var(--homepage-hero-section-header-menu-items-flex-direction);
  width: var(--homepage-hero-section-header-menu-items-width);
  gap: var(--homepage-hero-section-header-menu-items-gap);
  height: fit-content;
`;

interface Props {
  items: string[];
}

export default function MenuItems({ items }: Props) {
  return (
    <MenuItemsContainer>
      {items.map((text) => (
        <MenuItem text={text} key={text} />
      ))}

      <LanguageSwitcher />
    </MenuItemsContainer>
  );
}
