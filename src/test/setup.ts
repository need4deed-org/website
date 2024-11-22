import "@testing-library/jest-dom";

import { getMockMatchMedia } from "./utils";

// init i18next
import "../config/i18next";

// this mock is needed cos jsdom doesn't support window.matchMedia method
const { fireEventListenerCB, mockMatchMedia, setMockSelector } =
  getMockMatchMedia();
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: mockMatchMedia,
});
export { fireEventListenerCB, setMockSelector };
