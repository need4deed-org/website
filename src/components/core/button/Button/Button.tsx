import styled from "styled-components";

interface Props {
  text: string;
  onClick: () => void;
}

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

const StyledText = styled.text`
  font-weight: 500;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: 0.13px;
  text-align: center;
  color: var(--color-magnolia);
`;

export function Button({ text, onClick }: Props) {
  return (
    <StyledButton onClick={onClick}>
      <StyledText>{text}</StyledText>
    </StyledButton>
  );
}

export default Button;
