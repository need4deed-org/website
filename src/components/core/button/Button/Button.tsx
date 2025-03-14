import styled from "styled-components";
import { ButtonSpan } from "../../../styled/text";

const StyledButton = styled.button`
  width: fit-content;
  height: var(--button-height);
  padding: var(--button-padding);
  border-radius: var(--button-border-radius);
  background-color: var(--color-aubergine);
`;

interface Props {
  text: string;
  onClick: () => void;
}

export function Button({ text, onClick }: Props) {
  return (
    <StyledButton onClick={onClick}>
      <ButtonSpan>{text}</ButtonSpan>
    </StyledButton>
  );
}

export default Button;
