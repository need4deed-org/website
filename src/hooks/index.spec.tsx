import { act, renderHook } from "@testing-library/react";

import { fireEventListenerCB, setMockSelector } from "../test/setup";
import useMatchMedia from "./useMatchMedia";

describe("hooks", () => {
  describe("useMatchMedia", () => {
    beforeEach(() => {
      setMockSelector();
    });

    it("should return initial state using default selector", () => {
      const { result } = renderHook(() => useMatchMedia("(max-width: 768px)"));

      expect(result.current).toBe(true);
    });

    it("should return initial state implicitlly setting selector with default value", () => {
      const { result } = renderHook(() => useMatchMedia("(max-width: 768px)"));

      expect(result.current).toBe(true);
    });

    it("should return initial state using another selector", () => {
      setMockSelector("(max-width: 1024px)");
      const { result } = renderHook(() => useMatchMedia("(max-width: 1024px)"));

      expect(result.current).toBe(true);
    });

    it("should update the state when the media change", () => {
      const { result } = renderHook(() => useMatchMedia("(max-width: 768px)"));

      expect(result.current).toBe(true);

      // event listener cb hasn't been fired
      // using window.dispatchEvent(new Event("change"));
      // so I mocked that as well
      act(() => {
        fireEventListenerCB(false);
      });

      expect(result.current).toBe(false);
    });
  });
});
