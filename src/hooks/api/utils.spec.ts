import { fetchFn } from "./utils";

describe("API utils", () => {
  describe("fetchFn", () => {
    const url = "https://example.com";
    const method = "GET";
    const args = {
      url,
      options: { method },
      fnDTO: undefined,
    };
    it("should fetch data successfully and return the original data type", async () => {
      const mockResponse = { data: "test" };
      globalThis.fetch = vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse),
        } as Response),
      );

      const result = await fetchFn(args);
      expect(result).toEqual(mockResponse);
    });

    it("should fetch data successfully and apply the fnDTO transformation", async () => {
      const mockResponse = { data: "test" };
      const fnDTO = (data: object) => ({ transformed: data });
      globalThis.fetch = vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse),
        } as Response),
      );

      args.fnDTO = fnDTO as unknown as undefined;
      const result = await fetchFn(args);
      expect(result).toEqual({ transformed: mockResponse });
    });

    it("should throw an error if the fetch request fails", async () => {
      globalThis.fetch = vi.fn(() =>
        Promise.reject(new Error("Network error")),
      );

      await expect(fetchFn(args)).rejects.toThrow("Network error");
    });

    it("should throw an error if the response is not OK", async () => {
      globalThis.fetch = vi.fn(() =>
        Promise.resolve({
          ok: false,
          statusText: "Not Found",
        } as Response),
      );

      await expect(fetchFn(args)).rejects.toThrow("Not Found");
    });
  });
});
