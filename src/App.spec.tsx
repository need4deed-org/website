import { render, screen } from "@testing-library/react";

import App from "./App";

describe("sanity", () => {
  it("should NEED 4 DEED be visible", () => {
    render(<App />);
    const textN4D = screen.queryByText(
      /Need based voluntary support for refugees in Berlin/,
    );
    expect(textN4D).toBeVisible();
  });
});
