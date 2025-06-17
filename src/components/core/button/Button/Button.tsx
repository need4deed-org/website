import styled from "styled-components";
import { ButtonSpan } from "../../../styled/text";

const defaultBGColor = "var(--color-aubergine)";

const hoverBGColorMap = {
  "var(--color-orchid)": "var(--color-orchid-light)",
  [defaultBGColor]: "var(--color-aubergine-light)",
};

type BackgroundColorKeys = keyof typeof hoverBGColorMap;

interface StyledButtonProps {
  backgroundcolor?: BackgroundColorKeys;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--button-width);
  height: var(--button-height);
  padding: var(--button-padding);
  border-radius: var(--button-border-radius);
  background-color: ${(props) => props.backgroundcolor || defaultBGColor};
  border: none;
  white-space: pre-wrap;

  &:hover {
    background-color: ${(props) =>
      hoverBGColorMap[props.backgroundcolor || defaultBGColor]};
  }
`;

interface Props {
  text: string;
  onClick: () => void;
  backgroundcolor?: BackgroundColorKeys;
  textColor?: string;
}

export function Button({ text, onClick, backgroundcolor, textColor }: Props) {
  return (
    <StyledButton onClick={onClick} backgroundcolor={backgroundcolor}>
      <ButtonSpan color={textColor}>{text}</ButtonSpan>
    </StyledButton>
  );
}

export default Button;
