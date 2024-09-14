import { RefObject, useEffect } from "react";

interface Props {
  ref?: RefObject<HTMLElement>;
  handler: (event?: Event) => void;
}

const msTimeout = 400;

export default function useOutsideClick({ ref, handler }: Props) {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref?.current || ref.current.contains(event.target as Node)) return;
      setTimeout(() => handler(event), msTimeout);
    };

    if (ref) {
      document.addEventListener("mousedown", listener);
      document.addEventListener("focusin", listener);
    }

    return () => {
      if (ref) {
        document.addEventListener("mousedown", listener);
        document.addEventListener("focusin", listener);
      }
    };
  }, [ref, handler]);
  return null;
}
