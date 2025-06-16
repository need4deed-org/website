import { XIcon } from "@phosphor-icons/react";
import { HashLink } from "react-router-hash-link";
import styled, { css, keyframes } from "styled-components";

import { MenuItemType } from "../../config/types";
import N4DLogoFlat from "../svg/N4DLogoFlat";
import LanguageSwitcher from "./LanguageSwitcher";
import MenuItem from "./MenuItem";
import { MenuItemsContainer } from "./MenuItems";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;
interface BurgerMenuProps {
  isOpen: boolean;
}

const BurgerMenuItemsContainer = styled(MenuItemsContainer)<BurgerMenuProps>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100; /* Ensure burger menu stays above everything */
  padding-top: var(--homepage-hero-section-header-menu-items-padding-top);
  padding-bottom: var(--homepage-hero-section-header-menu-items-padding-bottom);
  padding-left: var(--homepage-hero-section-header-menu-items-padding-left);
  padding-right: var(--homepage-hero-section-header-menu-items-padding-right);
  border-bottom-right-radius: var(
    --homepage-hero-section-header-menu-items-border-bottom-right-radius
  );
  border-bottom-left-radius: var(
    --homepage-hero-section-header-menu-items-border-bottom-left-radius
  );
  background: linear-gradient(
    180deg,
    var(--color-magnolia)-5.53%,
    var(--color-orchid-dark) 100%
  );
  box-shadow: 0px 4px 25px 0px var(--color-black);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;

  a {
    text-decoration: none;
  }

  /* Apply animation based on isOpen prop */
  ${(props) =>
    props.isOpen &&
    css`
      transform: translateX(0);
      animation: ${slideIn} 0.3s ease-in-out forwards;
    `}

  ${(props) =>
    !props.isOpen &&
    css`
      animation: ${slideOut} 0.3s ease-in-out forwards;
    `}
`;

const BurgerMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface Props {
  isOpen: boolean;
  items: MenuItemType[];
  setIsOpen: (isOpen: boolean) => void;
  menuItemColor?: string;
}

export default function BurgerMenuItems({
  isOpen,
  items,
  setIsOpen,
  menuItemColor,
}: Props) {
  return (
    <BurgerMenuItemsContainer isOpen={isOpen}>
      <BurgerMenuHeader>
        <N4DLogoFlat width="146" height="38" />
        <XIcon size={32} onClick={() => setIsOpen(false)} />
      </BurgerMenuHeader>

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
    </BurgerMenuItemsContainer>
  );
}
