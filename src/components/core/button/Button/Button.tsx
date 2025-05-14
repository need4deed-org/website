import styled from "styled-components";
import { ButtonSpan } from "../../../styled/text";

interface StyledButtonProps {
  backgroundcolor?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--button-width);
  height: var(--button-height);
  padding: var(--button-padding);
  border-radius: var(--button-border-radius);
  background-color: ${(props) =>
    props.backgroundcolor || "var(--color-aubergine)"};
  border: none;
`;

interface Props {
  text: string;
  onClick: () => void;
  backgroundcolor?: string;
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
