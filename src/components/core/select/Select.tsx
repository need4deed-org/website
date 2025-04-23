import { ChangeEvent } from "react";
import { CustomHeading } from "../../styled/text";

interface Props {
  value: Option["value"];
  options: Option[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

interface Option {
  value: string | number;
  label: string;
}

export function Select({ value, options, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={onChange}
      style={{
        height: "20px",
        background: "transparent",
        color: "white",
        border: "transparent",
      }}
    >
      {options.map((o) => (
        <option
          value={o.value}
          style={{
            background: "var(--color-sand)",
            color: "var(--color-aubergine-light)",
          }}
        >
          {/* {o.label} */}
          <CustomHeading
            color="white"
            fontSize="16px"
            fontWeight={600}
            letterSpacing="0px"
            lineheight="16px"
          >
            {o.label}
          </CustomHeading>
        </option>
      ))}
    </select>
  );
}

export default Select;
