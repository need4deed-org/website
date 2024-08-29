import { ReactNode } from "react";
import "./index.css";

interface Props {
  title?: string;
  children?: ReactNode;
  className?: string;
  close: () => void;
}

export default function Popup({ className, children, title, close }: Props) {
  return (
    <>
      <div className="backdrop" onClick={() => close()}></div>
      <div className={className}>
        <h1>{title}</h1>
        {children}
        <button onClick={() => close()}>X</button>
      </div>
    </>
  );
}
