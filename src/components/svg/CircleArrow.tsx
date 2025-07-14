import React, { FC } from "react";
import { colorMap } from "./utils";

interface Props extends React.SVGProps<SVGSVGElement> {
  color: keyof typeof colorMap;
  direction: "left" | "right" | "up" | "down";
  isFilled?: boolean;
}

const arrowColorMap: Partial<Record<keyof typeof colorMap, string>> = {
  orchid: "var(--color-aubergine-light)",
  "orchid-dark": "var(--color-aubergine-light)",
  papaya: "var(--color-white)",
};

const arrowDirectionMap: Record<Props["direction"], string> = {
  left: "M16.2148 8.75L10.9648 14L16.2148 19.25",
  right: "M12.25 19.25L17.5 14L12.25 8.75",
  up: "M19.25 16.2166L14 10.9666L8.75 16.2166",
  down: "M8.75 12.25L14 17.5L19.25 12.25",
};

// eslint-disable-next-line react/function-component-definition
const CircleArrow: FC<Props> = ({ color, direction, isFilled, ...props }) => {
  const circleFill = isFilled ? colorMap[color] : undefined;
  const arrowColor = isFilled ? arrowColorMap[color] : colorMap[color];

  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <circle
        cx="14"
        cy="14"
        r="13.5"
        transform="rotate(-90 14 14)"
        fill={circleFill}
        stroke={colorMap[color]}
      />
      <path
        d={arrowDirectionMap[direction]}
        stroke={arrowColor}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CircleArrow;
