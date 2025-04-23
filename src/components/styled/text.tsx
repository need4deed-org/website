import styled from "styled-components";

interface TextProps {
  color?: string;
  fontWeight?: number;
  fontSize?: string;
  lineheight?: string;
  letterSpacing?: string;
  margin?: number | string;
}

export const CustomHeading = styled.h1<TextProps>`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineheight};
  letter-spacing: ${(props) => props.letterSpacing};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
`;

export const Heading1 = styled.h1<TextProps>`
  font-weight: var(--text-h1-font-weight);
  font-size: var(--text-h1-font-size);
  line-height: var(--text-h1-line-height);
  letter-spacing: var(--text-h1-letter-spacing);
  color: ${(props) => props.color || "var(--color-midnight)"};
`;

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

export const Heading4 = styled.h4<TextProps>`
  font-weight: var(--text-h4-font-weight);
  font-size: var(--text-h4-font-size);
  line-height: var(--text-h4-line-height);
  letter-spacing: var(--text-h4-letter-spacing);
  color: ${(props) => props.color || "var(--color-midnight)"};
`;

export const Paragraph = styled.p<TextProps>`
  font-weight: ${(props) => props.fontWeight || "var(--text-p-font-weight)"};
  font-size: ${(props) => props.fontSize || "var(--text-p-font-size)"};
  line-height: ${(props) => props.lineheight || "var(--text-p-line-height)"};
  letter-spacing: var(--text-p-letter-spacing);
  color: ${(props) => props.color || "var(--color-midnight)"};
  margin: 0;
`;

export const ButtonSpan = styled.span<TextProps>`
  font-weight: var(--button-text-font-weight);
  font-size: var(--button-text-font-size);
  line-height: var(--button-text-line-height);
  letter-spacing: var(--button-text-letter-spacing);
  text-align: var(--button-text-text-align);
  color: ${(props) => props.color || "var(--color-magnolia)"};
`;

export const ActivitySpan = styled.span<TextProps>`
  font-weight: var(--text-activity-tag-font-weight);
  font-size: var(--text-activity-tag-font-size);
  line-height: var(--text-activity-tag-line-height);
  letter-spacing: var(--text-activity-tag-letter-spacing);
  text-align: var(--text-activity-tag-text-align);
  color: ${(props) => props.color || "white"};
`;
