import { fetchFn, snakeToCamelCase } from "./utils";

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

  describe("snakeToCamelCase", () => {
    // Test case 1: Basic object with snake_case keys
    it("should convert basic snake_case keys to camelCase", () => {
      const snakeCaseObject = {
        first_name: "John",
        last_name: "Doe",
        age: 30,
        is_student: false,
      };
      const expectedCamelCase = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        isStudent: false,
      };
      expect(snakeToCamelCase(snakeCaseObject)).toEqual(expectedCamelCase);
    });

    // Test case 2: Nested objects with snake_case keys
    it("should handle nested objects and convert their keys", () => {
      const snakeCaseObject = {
        user_profile: {
          address_details: {
            street_name: "Main St",
            zip_code: "12345",
          },
          contact_info: {
            email_address: "john.doe@example.com",
          },
        },
      };
      const expectedCamelCase = {
        userProfile: {
          addressDetails: {
            streetName: "Main St",
            zipCode: "12345",
          },
          contactInfo: {
            emailAddress: "john.doe@example.com",
          },
        },
      };
      expect(snakeToCamelCase(snakeCaseObject)).toEqual(expectedCamelCase);
    });

    // Test case 3: Arrays containing objects with snake_case keys
    it("should handle arrays of objects and convert keys within objects", () => {
      const snakeCaseObject = [
        { item_id: 1, item_name: "Apple" },
        { item_id: 2, item_name: "Banana" },
      ];
      const expectedCamelCase = [
        { itemId: 1, itemName: "Apple" },
        { itemId: 2, itemName: "Banana" },
      ];
      expect(snakeToCamelCase(snakeCaseObject)).toEqual(expectedCamelCase);
    });

    // Test case 4: Arrays containing primitive values
    it("should handle arrays of primitive values without modification", () => {
      const snakeCaseObject = [1, "two", true, null];
      const expectedCamelCase = [1, "two", true, null];
      expect(snakeToCamelCase(snakeCaseObject)).toEqual(expectedCamelCase);
    });

    // Test case 5: Mixed object with nested arrays and objects
    it("should handle complex structures with nested arrays and objects", () => {
      const snakeCaseObject = {
        primary_info: {
          user_id: 101,
          user_roles: ["admin", "editor"],
        },
        order_history: [
          {
            order_id: "A123",
            product_details: {
              product_name: "Laptop",
              product_price: 1200,
            },
          },
          {
            order_id: "B456",
            product_details: {
              product_name: "Mouse",
              product_price: 25,
            },
          },
        ],
      };
      const expectedCamelCase = {
        primaryInfo: {
          userId: 101,
          userRoles: ["admin", "editor"],
        },
        orderHistory: [
          {
            orderId: "A123",
            productDetails: {
              productName: "Laptop",
              productPrice: 1200,
            },
          },
          {
            orderId: "B456",
            productDetails: {
              productName: "Mouse",
              productPrice: 25,
            },
          },
        ],
      };
      expect(snakeToCamelCase(snakeCaseObject)).toEqual(expectedCamelCase);
    });

    // Test case 6: Input that is not an object or array (primitives)
    it("should return non-object/array inputs as is", () => {
      expect(snakeToCamelCase("hello_world")).toBe("hello_world");
      expect(snakeToCamelCase(123)).toBe(123);
      expect(snakeToCamelCase(true)).toBe(true);
      expect(snakeToCamelCase(null)).toBe(null);
      expect(snakeToCamelCase(undefined)).toBe(undefined); // Note: typeof undefined is 'undefined', which is handled.
    });

    // Test case 7: Empty object and empty array inputs
    it("should handle empty objects and arrays", () => {
      expect(snakeToCamelCase({})).toEqual({});
      expect(snakeToCamelCase([])).toEqual([]);
    });

    // Test case 8: Keys that already contain uppercase letters or are already in camelCase
    it("should handle keys that are already in camelCase or have uppercase letters", () => {
      const snakeCaseObject = {
        camelCaseKey: "value1",
        AlreadyCamelCase: "value2",
        UPPER_CASE_KEY: "value3",
        mixED_case_key: "value4",
      };
      const expectedCamelCase = {
        camelCaseKey: "value1",
        AlreadyCamelCase: "value2", // Current implementation preserves existing case
        UPPERCASEKEY: "value3", // Converts based on underscores
        mixEDCaseKey: "value4", // Converts based on underscores
      };
      // The behavior for keys not strictly snake_case is dependent on the implementation.
      // The current implementation splits by '_' and capitalizes after.
      // Adjust expected output if the desired behavior is different.
      expect(snakeToCamelCase(snakeCaseObject)).toEqual(expectedCamelCase);
    });

    // Test case 9: Keys with multiple consecutive underscores or leading/trailing underscores
    it("should handle keys with multiple or leading/trailing underscores", () => {
      const snakeCaseObject = {
        key__with__multiple__underscores: "value1",
        _leading_underscore: "value2",
        trailing_underscore_: "value3",
        __double_leading: "value4",
        double_trailing__: "value5",
        _key_with_both_: "value6",
      };
      const expectedCamelCase = {
        keyWithMultipleUnderscores: "value1",
        LeadingUnderscore: "value2", // Splits by _, first part empty, rest capitalized
        trailingUnderscore: "value3", // Splits by _, last part empty, ignored
        DoubleLeading: "value4", // Splits by _, first two parts empty
        doubleTrailing: "value5", // Splits by _, last two parts empty
        KeyWithBoth: "value6", // Splits by _, handles leading/trailing empty parts
      };
      // Again, the expected output here matches the current implementation's logic.
      expect(snakeToCamelCase(snakeCaseObject)).toEqual(expectedCamelCase);
    });
  });
});
