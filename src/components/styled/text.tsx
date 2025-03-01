import styled from "styled-components";

interface TextProps {
  color?: string;
}

export const Heading2 = styled.h2<TextProps>`
  font-weight: var(--text-h2-font-weight);
  font-size: var(--text-h2-font-size);
  line-height: var(--text-h2-line-height);
  letter-spacing: var(--text-h2-letter-spacing);
  color: ${(props) => props.color || "var(--color-midnight)"};
`;

export const Heading3 = styled.h3<TextProps>`
  font-weight: var(--text-h3-font-weight);
  font-size: var(--text-h3-font-size);
  line-height: var(--text-h3-line-height);
  letter-spacing: var(--text-h3-letter-spacing);
  color: ${(props) => props.color || "var(--color-midnight)"};
`;

export const Paragraph = styled.p<TextProps>`
  font-weight: var(--text-p-font-weight);
  font-size: var(--text-p-font-size);
  line-height: var(--text-p-line-height);
  letter-spacing: var(--text-p-letter-spacing);
  color: ${(props) => props.color || "var(--color-midnight)"};
`;

export const ButtonSpan = styled.span<TextProps>`
  font-weight: var(--text-button-font-weight);
  font-size: var(--text-button-font-size);
  line-height: var(--text-button-line-height);
  letter-spacing: var(--text-button-letter-spacing);
  text-align: var(--text-button-text-align);
  color: ${(props) => props.color || "var(--color-magnolia)"};
`;
