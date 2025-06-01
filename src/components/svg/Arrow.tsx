/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  direction: "up" | "down";
  isFilled?: boolean;
  color: string;
}

const Arrow: FC<Props> = ({ direction, color, ...props }: Props) => {
  const d =
    direction === "up" ? "M8 4L14 12L2 12L8 4Z" : "M8 12L2 4L14 4L8 12Z";

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d={d} fill={color} />
    </svg>
  );
};

export default Arrow;
