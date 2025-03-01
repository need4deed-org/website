import React from "react";

// eslint-disable-next-line react/function-component-definition
const EllipsePapaya: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
      <circle cx="4" cy="4" r="4" fill="#FF7D68" />
    </svg>
  );
};

export default EllipsePapaya;
