import styled from "styled-components";
import { CustomHeading } from "../styled/text";

interface Props {
  text: string;
  color?: string;
  onClickHandler?: () => void;
}

const MenuItemDiv = styled.div`
  cursor: pointer;
  width: fit-content;
`;

export default function MenuItem({ text, color, onClickHandler }: Props) {
  return (
    <MenuItemDiv>
      <CustomHeading
        color={color || "var(--color-white)"}
        fontSize="var(--homepage-hero-section-header-menu-item-fontSize)"
        fontWeight="var(--homepage-hero-section-header-menu-item-fontWeight)"
        letterSpacing="var(--homepage-hero-section-header-menu-item-letterSpacing)"
        lineheight="var(--homepage-hero-section-header-menu-item-lineheight)"
        onClick={onClickHandler}
        margin={0}
      >
        {text}
      </CustomHeading>
    </MenuItemDiv>
  );
}
