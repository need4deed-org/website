import styled from "styled-components";

const StyledButton = styled.button`
  height: 72px;
  width: fit-content;
  width: 405;
  padding-top: 16px;
  padding-right: 36px;
  padding-bottom: 16px;
  padding-left: 36px;
  gap: 10px;
  border-radius: 125px;
  background-color: var(--color-aubergine);
`;

const StyledButtonText = styled.text`
  font-weight: var(--text-button-font-weight);
  font-size: var(--text-button-font-size);
  line-height: var(--text-button-line-height);
  letter-spacing: var(--text-button-letter-spacing);
  letter-spacing: var(--text-button-text-align);
  color: var(--color-magnolia);
`;

interface Props {
  text: string;
  onClick: () => void;
}

export function Button({ text, onClick }: Props) {
  return (
    <StyledButton onClick={onClick}>
      <StyledButtonText>{text}</StyledButtonText>
    </StyledButton>
  );
}

export default Button;
