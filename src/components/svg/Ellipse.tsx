import React, { FC } from "react";
import { colorMap } from "./utils";

interface EllipseProps extends React.SVGProps<SVGSVGElement> {
  color: keyof typeof colorMap;
}

// eslint-disable-next-line react/function-component-definition
const Ellipse: FC<EllipseProps> = ({ color, ...props }) => {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <circle cx="4" cy="4" r="4" fill={colorMap[color]} />
    </svg>
  );
};

export default Ellipse;
