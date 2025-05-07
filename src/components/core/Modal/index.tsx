import "./index.css";

interface Props extends React.HTMLProps<HTMLDivElement> {}

export default function ModalWindow({ children }: Props) {
  return <div className="modal-background">{children}</div>;
}
