import styled from "styled-components";
import { ButtonSpan } from "../../../styled/text";

const StyledButton = styled.button`
  width: fit-content;
  width: 405;
  height: 72px;
  padding: 16px 36px;
  border-radius: 125px;
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
