import { ReactNode } from "react";
import Close from "../svg/Close";
import "./index.css";

interface Props {
  title?: string;
  children?: ReactNode;
  className?: string;
  closeButton?: ReactNode;
  close: () => void;
}

export default function Popup({
  className,
  children,
  title,
  close,
  closeButton,
}: Props) {
  return (
    <div className={className || "popup-information-tooltip"}>
      {title ? <h1>{title}</h1> : null}
      <p>{children}</p>
      {closeButton || (
        <button tabIndex={0} type="button" onClick={() => close()}>
          <Close />
        </button>
      )}
    </div>
  );
}
