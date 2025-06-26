import React from "react";
import styled from "styled-components";
import { CustomHeading } from "../styled/text";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  color?: string;
}

const MenuItemDiv = styled.div`
  cursor: pointer;
  width: fit-content;
`;

export default function MenuItem({ text, color, onClick }: Props) {
  return (
    <MenuItemDiv>
      <CustomHeading
        color={color || "var(--color-white)"}
        fontSize="var(--homepage-hero-section-header-menu-item-fontSize)"
        fontWeight="var(--homepage-hero-section-header-menu-item-fontWeight)"
        letterSpacing="var(--homepage-hero-section-header-menu-item-letterSpacing)"
        lineheight="var(--homepage-hero-section-header-menu-item-lineheight)"
        onClick={onClick}
        margin={0}
      >
        {text}
      </CustomHeading>
    </MenuItemDiv>
  );
}
