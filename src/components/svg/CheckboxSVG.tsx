/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  width: string;
  height: string;
  checked?: boolean;
  color?: string;
}

export default function CheckboxSVG({
  width,
  height,
  color = "var(--color-midnight)",
  checked = false,
  ...props
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {checked ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.3619 0.818237H2.63459C1.63459 0.818237 0.816406 1.63642 0.816406 2.63642V15.3637C0.816406 16.3637 1.63459 17.1819 2.63459 17.1819H15.3619C16.3619 17.1819 17.18 16.3637 17.18 15.3637V2.63642C17.18 1.63642 16.3619 0.818237 15.3619 0.818237ZM7.1804 13.5455L2.63494 9.00006L3.90767 7.72733L7.1804 11.0001L14.0895 4.09096L15.3622 5.36369L7.1804 13.5455Z"
          fill={color}
        />
      ) : (
        <rect
          x="1.31641"
          y="1.31824"
          width="15.3636"
          height="15.3636"
          rx="1.13636"
          stroke={color}
          strokeWidth="1"
        />
      )}
    </svg>
  );
}
