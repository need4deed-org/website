export const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export function getMockMatchMedia() {
  let selector = "(max-width: 768px)";
  let eventListenerCB: (ev: { matches: boolean }) => void;

  function setSelector(newSelector: string = "(max-width: 768px)") {
    selector = newSelector;
  }

  function fireEventListenerCB(matches: boolean) {
    if (eventListenerCB && typeof eventListenerCB === "function")
      eventListenerCB({ matches });
  }

  return {
    setMockSelector: setSelector,
    fireEventListenerCB,
    mockMatchMedia: vi.fn((query) => {
      return {
        matches: query === selector,
        addEventListener(
          eventType: string,
          eventHandler: (event: unknown) => void,
        ) {
          if (eventType === "change") {
            eventListenerCB = eventHandler;
          }
        },
      };
    }),
  };
}
