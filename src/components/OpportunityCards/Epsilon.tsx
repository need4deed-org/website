interface Props {
  onClick: () => void;
}
export default function Epsilon({ onClick }: Props) {
  return (
    <span className="opportunity-epsilon" onClick={onClick}>
      ...
    </span>
  );
}
