import { render } from "@testing-library/react";
import { RefObject, createRef } from "react";
import { act } from "react-dom/test-utils";

import { Lang, OpportunityParams } from "../config/types";
import {
  getBaseUrl,
  getFilter,
  getOpportunityImg,
  getReadableTime,
  getUrlWithEncodedParams,
  isEnumValue,
  isoCodesToNames,
  mapToOpportunity,
  pivotArrayToObj,
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
    const [ltr, rtl] = ["ltr", "rtl"];
    const rtlLangs = [Lang.AR, Lang.FA];

    beforeEach(() => {
      containerRef = createRef<HTMLDivElement>();
      render(<div ref={containerRef}></div>);
    });

    rtlLangs.forEach(rtlLang => {
      test(`should set the value prop direction to rtl if "${rtlLang}" is provided`, () => {
        act(() => {
          setLangDirection(containerRef, rtlLang);
        });

        expect(
          containerRef.current?.style.getPropertyValue("--n4d-lang-direction"),
        ).toBe(rtl);
      });
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

  describe("getFilter()", () => {
    it("should return a function that always returns true when search is empty", () => {
      const filter = getFilter({});
      expect(filter({})).toBe(true);
      expect(filter({ key: "value" })).toBe(true);
    });

    it("should return a function that filters based on a single search criterion", () => {
      const filter = getFilter({ key: ["value"] });
      expect(filter({ key: "value" })).toBe(true);
      expect(filter({ key: "otherValue" })).toBe(false);
    });

    it("should return a function that filters based on multiple search criteria", () => {
      const filter = getFilter({ key1: ["value1"], key2: ["value2"] });
      expect(filter({ key1: "value1", key2: "value2" })).toBe(true);
      expect(filter({ key1: "value1", key2: "otherValue" })).toBe(false);
      expect(filter({ key1: "otherValue", key2: "value2" })).toBe(false);
    });

    it("should return a function that always returns true for invalid search input", () => {
      const filter = getFilter(123 as unknown as OpportunityParams["search"]);
      expect(filter({ key: "value" })).toBe(true);
      expect(filter(undefined as unknown as Record<string, string>)).toBe(true);
    });
  });

  describe("mapToOpportunity()", () => {
    it("should return an empty object for an empty opportunity", () => {
      expect(mapToOpportunity({})).toEqual({});
    });

    it("should convert the first word of keys to lowercase", () => {
      expect(mapToOpportunity({ UppercaseKey: "value" })).toEqual({
        uppercasekey: "value",
      });
      expect(mapToOpportunity({ lowercaseKey: "value" })).toEqual({
        lowercasekey: "value",
      });
    });

    it("should handle multiple key-value pairs", () => {
      expect(
        mapToOpportunity({ MixedCaseKey: "value1", anotherKey: "value2" }),
      ).toEqual({ mixedcasekey: "value1", anotherkey: "value2" });
    });

    it("should return an empty object for a non-object input", () => {
      expect(
        mapToOpportunity(123 as unknown as Record<string, string>),
      ).toEqual({});
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

    it("should combine and encode both search and primary keys", () => {
      const searchParams = { key1: ["value1"] };
      const primaryKeys = ["key2"];
      const expectedUrl = `${baseUrl}?primary_keys=${encodeURIComponent(JSON.stringify(primaryKeys))}&search=${encodeURIComponent(JSON.stringify(searchParams))}`;
      expect(
        getUrlWithEncodedParams(baseUrl, { search: searchParams, primaryKeys }),
      ).toBe(expectedUrl);
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

  describe("getReadableTime", () => {
    it("should return the original timestamp for invalid dates", () => {
      const invalidTimestamp = "Monday";
      const result = getReadableTime(invalidTimestamp);
      expect(result).toBe(invalidTimestamp);
    });

    it("should return a formatted date for valid timestamps", () => {
      const validTimestamp = "2024-11-05T10:00:00.000+01:00";
      const expectedResult = "November 5, 2024";
      const result = getReadableTime(validTimestamp);
      expect(result).toBe(expectedResult);
    });

    it("should handle different time zones", () => {
      const timestampWithTimeZone = "2024-12-05T10:00:00.000+02:00";
      const expectedResult = "December 5, 2024"; // Result should be the same regardless of time zone
      const result = getReadableTime(timestampWithTimeZone);
      expect(result).toBe(expectedResult);
    });

    it("should handle different locale", () => {
      const timestampWithTimeZone = "2024-12-05T10:00:00.000+02:00";
      const expectedResult = "5. Dezember 2024";
      const result = getReadableTime(timestampWithTimeZone, "de-DE");
      expect(result).toBe(expectedResult);
    });
  });
});
