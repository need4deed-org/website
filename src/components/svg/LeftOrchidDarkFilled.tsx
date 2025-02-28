import React from "react";

// eslint-disable-next-line react/function-component-definition
const LeftOrchidDarkFilled: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
) => {
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
        r="14"
        transform="rotate(-90 14 14)"
        fill="#F2B1FF"
      />
      <path
        d="M16.2148 8.75L10.9648 14L16.2148 19.25"
        stroke="#853F6E"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LeftOrchidDarkFilled;
