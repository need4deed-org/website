import { render } from "@testing-library/react";
import { Lang } from "need4deed-sdk";
import { RefObject, act, createRef } from "react";

import { OpportunityParams } from "../config/types";
import {
  getBaseUrl,
  getFirstThursdayOfMonth,
  getOpportunityImg,
  getReadableLocalTime,
  getUrlWithEncodedParams,
  haveCommonElements,
  isEnumValue,
  isoCodesToNames,
  parseYesNo,
  pivotArrayToObj,
  range,
  setLangDirection,
} from "./index";

describe("utils", () => {
  describe("isEnumValue()", () => {
    enum Test {
      TEST1 = "test1",
      TEST2 = "test2",
    }

    it("should return true if value is presented", () => {
      expect(isEnumValue(Test, "test1")).toBeTruthy();
    });

    [
      [undefined, "test1", "enumObj is not an object"],
      [Test, NaN, "value is not a string"],
      [Test, "test3", "value is not presented in enum"],
    ].forEach(([enumObj, value, reason]) => {
      test(`should return false if ${reason}`, () => {
        expect(isEnumValue(enumObj as object, value)).toBeFalsy();
      });
    });
  });

  describe("getBaseUrl()", () => {
    [
      ["empty string url given root url", "http://need4deed.org/en", ""],
      [
        "proper base url given subpage url",
        "http://need4deed.org/impressum/en",
        "/impressum",
      ],
      [
        "irrelevant base url given url without prefix",
        "/need4deed.org/impressum/en",
        "",
      ],
    ].forEach(([returnWhat, url, baseUrl]) => {
      test(`should return ${returnWhat}`, () => {
        expect(getBaseUrl(url)).toBe(baseUrl);
      });
    });
  });

  describe("setLangDirection()", () => {
    let containerRef: RefObject<HTMLDivElement>;
    const [ltr] = ["ltr"];

    beforeEach(() => {
      containerRef = createRef<HTMLDivElement>();
      render(<div ref={containerRef} />);
    });

    it('should set the value of the prop direction to ltr if "en" is provided', () => {
      act(() => {
        setLangDirection(containerRef, Lang.EN);
      });

      expect(
        containerRef.current?.style.getPropertyValue("--n4d-lang-direction"),
      ).toBe(ltr);
    });

    it("should do nothing if non language is provided", () => {
      act(() => {
        setLangDirection(containerRef, "gibberish" as Lang);
      });

      expect(
        containerRef.current?.style.getPropertyValue("--n4d-lang-direction"),
      ).toBe("");
    });
  });

  describe("getOpportunityImg()", () => {
    it("should return the correct image for a valid type", () => {
      expect(getOpportunityImg("Accompanying")).toContain(
        "/images/type-accompanying.webp",
      );
      expect(getOpportunityImg("Arts, Music")).toContain(
        "/images/type-arts.webp",
      );
      expect(getOpportunityImg("language")).toContain(
        "/images/type-language.webp",
      ); // Case-insensitive
    });

    it("should return the default image for an empty string", () => {
      expect(getOpportunityImg("")).toContain("/images/type-assistance.webp");
    });

    it("should return the default image for a non-string input", () => {
      expect(getOpportunityImg(123 as unknown as string)).toContain(
        "/images/type-assistance.webp",
      );
    });

    it("should return the default image for an unknown type", () => {
      expect(getOpportunityImg("foobar")).toContain(
        "/images/type-assistance.webp",
      );
    });
  });

  describe("isoCodesToNames()", () => {
    it("should return the correct language names for valid codes", () => {
      expect(isoCodesToNames("en")).toBe("English");
      expect(isoCodesToNames("en, de, uk")).toBe("English, German, Ukrainian");
      expect(isoCodesToNames("unknownCode")).toBe("unknownCode");
    });

    it("should return an empty string for an empty input", () => {
      expect(isoCodesToNames("")).toBe("");
    });

    it("should return an empty string for a non-string input", () => {
      expect(isoCodesToNames(123 as unknown as string)).toBe("");
    });
  });

  describe("pivotArrayToObj()", () => {
    it("should return an empty array for an empty array", () => {
      expect(pivotArrayToObj([])).toEqual([]);
    });

    it("should return an object with keys and values from a single object", () => {
      expect(pivotArrayToObj([{ key1: "value1", key2: "value2" }])).toEqual({
        key1: ["value1"],
        key2: ["value2"],
      });
    });

    it("should return an object with keys and arrays of values from multiple objects", () => {
      expect(
        pivotArrayToObj([
          { key1: "value1", key2: "value2" },
          { key1: "value3", key2: "value4" },
        ]),
      ).toEqual({ key1: ["value1", "value3"], key2: ["value2", "value4"] });
    });

    it("should handle arrays with mixed types", () => {
      expect(
        pivotArrayToObj([
          { key1: "value1", key2: 123 },
          { key1: "value2", key2: "otherValue" },
        ]),
      ).toEqual({ key1: ["value1", "value2"], key2: [123, "otherValue"] });
    });

    it("should return the original arg for an array of non objects", () => {
      expect(
        pivotArrayToObj(["not an object"] as unknown as Record<
          string,
          unknown[]
        >[]),
      ).toEqual(["not an object"]);
    });

    it("should return the original arg for a non-array input", () => {
      expect(
        pivotArrayToObj(
          "not an array" as unknown as Record<string, unknown[]>[],
        ),
      ).toBe("not an array");
    });
  });

  describe("getUrlWithEncodedParams", () => {
    const baseUrl = "https://example.com/api";

    it("should return the original URL for empty params", () => {
      expect(getUrlWithEncodedParams(baseUrl, {})).toBe(baseUrl);
    });

    it("should encode and add search params to the URL", () => {
      const search = { key1: ["value1"], key2: ["value2"] };
      const expectedUrl = `${baseUrl}?search=${encodeURIComponent(JSON.stringify(search))}`;
      expect(getUrlWithEncodedParams(baseUrl, { search })).toBe(expectedUrl);
    });

    it("should encode and add primary keys to the URL", () => {
      const primaryKeys = ["key1", "key2"];
      const expectedUrl = `${baseUrl}?primary_keys=${encodeURIComponent(JSON.stringify(primaryKeys))}`;
      expect(getUrlWithEncodedParams(baseUrl, { primaryKeys })).toBe(
        expectedUrl,
      );
    });

    it("should combine and encode both search, primary keys and language", () => {
      const search = { key1: ["value1"] };
      const primaryKeys = ["key2"];
      const language = Lang.DE;
      const expectedUrl = `${baseUrl}?primary_keys=${encodeURIComponent(JSON.stringify(primaryKeys))}&search=${encodeURIComponent(JSON.stringify(search))}&language=${language}`;

      const encodedURL = getUrlWithEncodedParams(baseUrl, {
        primaryKeys,
        search,
        language,
      });

      expect(encodedURL).toBe(expectedUrl);
    });

    it("should return the original URL for a non-string URL", () => {
      expect(getUrlWithEncodedParams(123 as unknown as string, {})).toBe(123);
    });

    it("should return the original URL for non-object params", () => {
      expect(
        getUrlWithEncodedParams(
          baseUrl,
          "not an object" as unknown as OpportunityParams,
        ),
      ).toBe(baseUrl);
    });
  });

  describe("getReadableLocalTime", () => {
    it("should return the original timestamp for invalid dates", () => {
      const invalidTimestamp = "Monday";
      const result = getReadableLocalTime(invalidTimestamp);
      expect(result).toBe(invalidTimestamp);
    });

    it("should return a formatted date for valid timestamps", () => {
      const validTimestamp = "2024-11-05T10:00:00.000+00";
      const expectedResult = "5 November 2024 at 11:00";
      const result = getReadableLocalTime(validTimestamp);
      expect(result).toBe(expectedResult);
    });

    it("should handle different locale", () => {
      const timestampWithTimeZone = "2024-12-05T10:00:00.000+00";
      const expectedResult = "5. Dezember 2024 um 11:00";
      const result = getReadableLocalTime(timestampWithTimeZone, "de-DE");
      expect(result).toBe(expectedResult);
    });

    it("should handle null", () => {
      const timestampWithTimeZone = null;
      const expectedResult = null;
      const result = getReadableLocalTime(
        timestampWithTimeZone as unknown as string,
      );
      expect(result).toBe(expectedResult);
    });
  });

  describe("parseYesNo", () => {
    it("should return 'Yes' given truthy value", () => {
      expect(parseYesNo(true)).toBe("Yes");
      expect(parseYesNo("1" as unknown as boolean)).toBe("Yes");
    });

    it("should return 'No' given falsy value", () => {
      expect(parseYesNo(false)).toBe("No");
      expect(parseYesNo(undefined)).toBe("No");
      expect(parseYesNo(0 as unknown as boolean)).toBe("No");
    });
  });

  describe("getFirstThursdayOfMonth", () => {
    it("should return 02.01 given today is 15.12", () => {
      const today = new Date("2024-12-15");
      const firstThursday = new Date("2025-01-02");

      const result = getFirstThursdayOfMonth(today);

      expect(result).toEqual(firstThursday);
    });

    it("should return 06.02 given today is 16.01", () => {
      const today = new Date("2025-01-16");
      const firstThursday = new Date("2025-02-06");

      const result = getFirstThursdayOfMonth(today);

      expect(result).toEqual(firstThursday);
    });

    it("should return 06.03 given today is 15.02", () => {
      const today = new Date("2025-02-15");
      const firstThursday = new Date("2025-03-06");

      const result = getFirstThursdayOfMonth(today);

      expect(result).toEqual(firstThursday);
    });

    it("should return 2026.01.01 given today is 12.06", () => {
      const today = new Date("2025-12-06");
      const firstThursday = new Date("2026-01-01");

      const result = getFirstThursdayOfMonth(today);

      expect(result).toEqual(firstThursday);
    });

    it("should return undefined given today is 10.12.2026", () => {
      const today = new Date("2026-12-10");
      const firstThursday = undefined;

      const result = getFirstThursdayOfMonth(today);

      expect(result).toEqual(firstThursday);
    });
  });

  describe("haveCommonElements", () => {
    it("returns false when arrays have no common elements", () => {
      expect(haveCommonElements([1, 2, 3], [4, 5, 6])).toBe(false);
      expect(haveCommonElements(["a", "b"], ["c", "d"], ["e", "f"])).toBe(
        false,
      );
    });

    it("returns true when arrays share at least one common element", () => {
      expect(haveCommonElements([1, 2, 3], [3, 4, 5])).toBe(true);
      expect(
        haveCommonElements(["apple", "banana"], ["banana", "cherry"]),
      ).toBe(true);
    });

    it("returns false when given only one array", () => {
      expect(haveCommonElements([1, 2, 3])).toBe(false);
    });

    it("returns false when all arrays are empty", () => {
      expect(haveCommonElements([], [], [])).toBe(false);
    });

    it("returns true when arrays contain duplicate elements within themselves", () => {
      expect(haveCommonElements([1, 1, 2], [2, 3, 4])).toBe(true);
    });

    it("works with mixed data types", () => {
      expect(haveCommonElements([1, "hello"], ["hello", true])).toBe(true);
      expect(haveCommonElements([null, undefined], [false, 0])).toBe(false);
    });
  });

  describe("range", () => {
    it("should generate numbers within the specified range with default step", () => {
      const result = Array.from(range(0, 5));
      expect(result).toEqual([0, 1, 2, 3, 4]);
    });

    it("should generate numbers within the specified range with a custom step", () => {
      const result = Array.from(range(1, 10, 2));
      expect(result).toEqual([1, 3, 5, 7, 9]);
    });

    it("should handle negative start and end values", () => {
      const result = Array.from(range(-5, 0));
      expect(result).toEqual([-5, -4, -3, -2, -1]);
    });

    it("should handle negative step", () => {
      const result = Array.from(range(5, 0, -1));
      expect(result).toEqual([5, 4, 3, 2, 1]);
    });

    it("should handle start equal to end", () => {
      const result = Array.from(range(5, 5));
      expect(result).toEqual([]);
    });

    it("should throw TypeError if start is not a number", () => {
      expect(() => Array.from(range("a" as unknown as number, 5))).toThrow(
        TypeError,
      );
    });

    it("should throw TypeError if end is not a number", () => {
      expect(() => Array.from(range(0, "b" as unknown as number))).toThrow(
        TypeError,
      );
    });

    it("should throw TypeError if step is not a number", () => {
      expect(() => Array.from(range(0, 5, "c" as unknown as number))).toThrow(
        TypeError,
      );
    });

    it("should throw RangeError if step is zero", () => {
      expect(() => Array.from(range(0, 5, 0.4))).toThrow(RangeError);
      expect(() => Array.from(range(0, 5, 0))).toThrow(RangeError);
    });
  });
});
