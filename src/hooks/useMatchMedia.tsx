import { useEffect, useRef, useState } from "react";

export default function useMatchMedia(selector: string) {
  const [responseMatchMedia, setResponseMatchMedia] = useState(
    window.matchMedia(selector).matches,
  );
  const listeners = useRef<Array<(ev: MediaQueryListEvent) => void>>([]);

  useEffect(() => {
    const listener = (ev: MediaQueryListEvent) => {
      setResponseMatchMedia(ev.matches);
    };

    const idx = listeners.current.length;
    listeners.current.push(listener);

    window.matchMedia(selector).addEventListener("change", listener);

    return () => {
      window.removeEventListener(
        "change",
        listener as (this: Window, ev: Event) => void,
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
      listeners.current.splice(idx, 1);
    };
  }, [selector]);

  return responseMatchMedia;
}
