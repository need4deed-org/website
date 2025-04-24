import styled from "styled-components";
import { CustomHeading } from "../styled/text";

interface Props {
  text: string;
}

const MenuItemDiv = styled.div`
  cursor: pointer;
  width: fit-content;
`;

export default function MenuItem({ text }: Props) {
  return (
    <MenuItemDiv>
      <CustomHeading
        color="var(--homepage-hero-section-header-menu-item-color)"
        fontSize="var(--homepage-hero-section-header-menu-item-fontSize)"
        fontWeight="var(--homepage-hero-section-header-menu-item-fontWeight)"
        letterSpacing="var(--homepage-hero-section-header-menu-item-letterSpacing)"
        lineheight="var(--homepage-hero-section-header-menu-item-lineheight)"
        onClick={() => {}}
        margin={0}
      >
        {text}
      </CustomHeading>
    </MenuItemDiv>
  );
}
