interface Props {
  color?: string;
}

export default function BulletDash({ color = "var(--color-midnight)" }: Props) {
  return (
    <svg
      width="16"
      height="3"
      viewBox="0 0 16 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="1.60039"
        x2="16"
        y2="1.60039"
        stroke={color}
        strokeWidth="1.6"
      />
    </svg>
  );
}
