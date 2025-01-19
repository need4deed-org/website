import {
  DeepKeys,
  DeepValue,
  FieldApi,
  FieldComponent,
} from "@tanstack/react-form";
import { MouseEvent, RefObject, useState } from "react";
import { useTranslation } from "react-i18next";

import useOutsideClick from "../../hooks/useOutsideClick";
import { Selected } from "./types";

interface Props<T, K extends DeepKeys<T>> {
  showFirst?: number;
  refParent?: RefObject<HTMLElement>;
  FieldTag: FieldComponent<T, undefined>;
  field: FieldApi<T, K>;
  hiddenChips?: string[];
}

export default function MultipleCheckBoxInputsWithMore<
  T,
  K extends DeepKeys<T>,
>({
  showFirst = 8,
  refParent,
  FieldTag,
  field,
  hiddenChips = [],
}: Props<T, K>) {
  const { t } = useTranslation();
  const [numItems, setNumItems] = useState(showFirst);
  useOutsideClick({
    ref: refParent,
    handler: () => {
      setNumItems(showFirst);
    },
  });

  function handleClick(e: MouseEvent) {
    setNumItems((prev) => (prev ? 0 : showFirst));

    if (e.screenX === 0 && e.screenY === 0) {
      const firstHiddenInput = document.getElementById(
        `${field.name}${showFirst - 1}`,
      );
      firstHiddenInput?.focus();
    }
  }
  return (
    <>
      {field.state.value &&
        (field.state.value as []).map((item: Selected, idx) => {
          return (
            <FieldTag
              key={`${item.title}`}
              name={`${field.name}[${idx}].selected` as DeepKeys<T>}
            >
              {(innerField) => (
                <div
                  data-main-item={
                    numItems === 0 || idx < numItems || item.selected
                  }
                  data-chip-hidden={hiddenChips.some(
                    (chip) => chip === item.title,
                  )}
                >
                  <input
                    tabIndex={0}
                    id={`${field.name}${idx}`}
                    type="checkbox"
                    onBlur={innerField.handleBlur}
                    onChange={(e) => {
                      innerField.handleChange(
                        e.target.checked as DeepValue<T, DeepKeys<T>>,
                      );
                    }}
                  />
                  <label htmlFor={`${field.name}${idx}`}>{item.title}</label>
                </div>
              )}
            </FieldTag>
          );
        })}
      {field.state.value &&
      (field.state.value as []).length > showFirst &&
      (numItems || !refParent) ? (
        <button type="button" tabIndex={0} onClick={handleClick}>
          {numItems ? t("form.button.more") : t("form.button.less")}
        </button>
      ) : null}
    </>
  );
}
