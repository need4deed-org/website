interface Props {
  onClick: () => void;
}

export default function Epsilon({ onClick }: Props) {
  return (
    <button type="button" className="opportunity-epsilon" onClick={onClick}>
      ...
    </button>
  );
}
