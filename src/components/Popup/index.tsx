import { ReactNode } from "react";
import Close from "../svg/Close";
import "./index.css";

interface Props {
  title?: string;
  children?: ReactNode;
  className?: string;
  close: () => void;
}

export default function Popup({ className, children, title, close }: Props) {
  return (
    <div className={`popup-information-tooltip ${className}`}>
      {title ? <h1>{title}</h1> : null}
      <p>{children}</p>
      <button tabIndex={0} type="button" onClick={() => close()}>
        <Close />
      </button>
    </div>
  );
}
