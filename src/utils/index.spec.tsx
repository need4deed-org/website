import { render } from "@testing-library/react";
import { RefObject, createRef } from "react";
import { act } from "react-dom/test-utils";

import { Lang } from "../types";
import { getBaseUrl, isEnumValue, setLangDirection } from "./index";

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
});
