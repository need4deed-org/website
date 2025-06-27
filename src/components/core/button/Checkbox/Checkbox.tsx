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
  gap: 8px;
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
          fontWeight={checked ? 400 : 300}
          fontSize={labelFontSize || "18px"}
          lineheight="32px"
        >
          {label}
        </Paragraph>
      )}
    </CheckboxContainer>
  );
}

export default Checkbox;
