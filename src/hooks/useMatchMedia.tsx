import { useEffect, useState } from "react";

export default function useMatchMedia(selector: string = "(max-width: 768px)") {
  const [responseMatchMedia, setResponseMatchMedia] = useState(
    window.matchMedia(selector).matches,
  );

  useEffect(() => {
    function listener(ev: MediaQueryListEvent) {
      setResponseMatchMedia(ev.matches);
    }

    window.matchMedia(selector).addEventListener("change", listener);

    return () =>
      window.removeEventListener(
        "change",
        listener.bind(window) as (this: Window, ev: Event) => undefined,
      );
  }, [selector]);

  return responseMatchMedia;
}
