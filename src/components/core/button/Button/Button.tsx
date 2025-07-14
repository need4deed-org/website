import styled from "styled-components";
import { ButtonSpan } from "../../../styled/text";
import { IconDiv } from "../../../styled/containers";
import { IconName, iconNameMap } from "./icon";

const defaultBGColor = "var(--color-aubergine)";

const hoverBGColorMap = {
  "var(--color-orchid)": "var(--color-orchid-light)",
  [defaultBGColor]: "var(--color-aubergine-light)",
  "var(--color-midnight)": "var(--color-midnight-light)",
  "var(--color-white)": "var(--color-orchid-light)",
};

type BackgroundColorKeys = keyof typeof hoverBGColorMap;

interface StyledButtonProps extends React.HTMLProps<HTMLButtonElement> {
  backgroundcolor?: BackgroundColorKeys;
  gap?: string;
  padding?: string;
  iconPosition?: "left" | "right";
}

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height || "var(--button-height)"};
  width: ${(props) => props.width || "var(--button-width)"};
  border-radius: var(--button-border-radius);
  background-color: ${(props) => props.backgroundcolor || defaultBGColor};
  border: none;
  white-space: pre-wrap;
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  flex-direction: ${(props) =>
    props.iconPosition === "right" ? "row-reverse" : "row"};

  &:hover {
    background-color: ${(props) =>
      hoverBGColorMap[props.backgroundcolor || defaultBGColor]};
  }
`;

interface Props {
  text?: string;
  textFontSize?: string;
  onClick: () => void;
  backgroundcolor?: BackgroundColorKeys;
  textColor?: string;
  height?: string;
  width?: string;
  iconName?: IconName;
  iconSize?: string;
  iconColor?: string;
  iconPosition?: "left" | "right";
}

export function Button({
  text,
  textFontSize,
  onClick,
  backgroundcolor,
  textColor,
  height,
  width,
  iconName,
  iconSize,
  iconColor = "var(--color-white)",
  iconPosition = "left",
}: Props) {
  return (
    <StyledButton
      onClick={onClick}
      backgroundcolor={backgroundcolor}
      height={height}
      width={width}
      gap={text ? "var(--button-gap)" : "0px"}
      padding={text ? "var(--button-padding)" : "0px"}
      iconPosition={iconPosition}
    >
      {iconName && (
        <IconDiv color={iconColor} size={iconSize}>
          {iconNameMap[iconName]}
        </IconDiv>
      )}

      {text && (
        <ButtonSpan fontSize={textFontSize} color={textColor}>
          {text}
        </ButtonSpan>
      )}
    </StyledButton>
  );
}

export default Button;
