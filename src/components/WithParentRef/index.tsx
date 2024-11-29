import {
  Children,
  cloneElement,
  PropsWithChildren,
  ReactElement,
  useRef,
} from "react";
import { IncludeClassName } from "../../config/types";

type Props = { onFocus?: () => void } & IncludeClassName & PropsWithChildren;

export default function WithParentRef({ children, className, onFocus }: Props) {
  const refParent = useRef<HTMLDivElement>(null);
  return (
    <div className={className} ref={refParent} onFocus={onFocus}>
      {Children.map(children, (child) =>
        cloneElement(child as ReactElement, { refParent }),
      )}
    </div>
  );
}
