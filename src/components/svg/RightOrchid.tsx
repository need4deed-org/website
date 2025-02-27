import React from "react";

// eslint-disable-next-line react/function-component-definition
const RightOrchid: React.FC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="14"
        cy="14"
        r="13.5"
        transform="rotate(-90 14 14)"
        stroke="#F2B1FF"
      />
      <path
        d="M12.25 19.25L17.5 14L12.25 8.75"
        stroke="#F2B1FF"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightOrchid;
