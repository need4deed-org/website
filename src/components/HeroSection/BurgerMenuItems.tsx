import styled, { css, keyframes } from "styled-components";
import { X } from "@phosphor-icons/react";

import { MenuItemsContainer } from "./MenuItems";
import N4DBurgerLogo from "../svg/N4DBurgerLogo";
import MenuItem from "./MenuItem";
import LanguageSwitcher from "./LanguageSwitcher";

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
  background: linear-gradient(180deg, #f6eee7 -5.53%, #f7cdff 100%);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 1);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;

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
  items: string[];
  setIsOpen: (isOpen: boolean) => void;
}

export default function BurgerMenuItems({ isOpen, items, setIsOpen }: Props) {
  return (
    <BurgerMenuItemsContainer isOpen={isOpen}>
      <BurgerMenuHeader>
        <N4DBurgerLogo />
        <X size={32} onClick={() => setIsOpen(false)} />
      </BurgerMenuHeader>

      {items.map((text) => (
        <MenuItem text={text} key={text} />
      ))}

      <LanguageSwitcher />
    </BurgerMenuItemsContainer>
  );
}
