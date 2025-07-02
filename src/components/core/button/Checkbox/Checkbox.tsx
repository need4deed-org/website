import styled from "styled-components";
import CheckboxSVG from "../../../svg/CheckboxSVG";
import { Paragraph } from "../../../styled/text";

export interface Props {
  width: string;
  height: string;
  color?: string;
  label?: string;
  labelFontSize?: string;
  onChange: (checked: boolean) => void;
  checked: boolean;
}

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--checkbox-container-gap);
`;

export function Checkbox({
  height,
  width,
  color = "var(--color-midnight)",
  label,
  labelFontSize,
  onChange,
  checked,
}: Props) {
  return (
    <CheckboxContainer>
      <CheckboxSVG
        width={width}
        height={height}
        checked={checked}
        onClick={() => onChange(!checked)}
        color={color}
      />

      {label && (
        <Paragraph
          fontWeight={
            checked
              ? "var(--checkbox-label-font-weight-selected)"
              : "var(--checkbox-label-font-weight-not-selected)"
          }
          fontSize={labelFontSize || "var(--checkbox-label-font-size)"}
          lineheight="var(--checkbox-label-line-height)"
        >
          {label}
        </Paragraph>
      )}
    </CheckboxContainer>
  );
}

export default Checkbox;
