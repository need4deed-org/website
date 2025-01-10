import { DeepKeys, DeepValue, FieldApi } from "@tanstack/react-form";
import { MouseEvent, RefObject, useState } from "react";
import { useTranslation } from "react-i18next";

import useOutsideClick from "../../hooks/useOutsideClick";

interface Props<T, K extends DeepKeys<T>> {
  items: DeepValue<T, K>[];
  copyPath?: string;
  showFirst?: number;
  refParent?: RefObject<HTMLElement>;
  field: FieldApi<T, K>;
}

export default function MultipleRadioInputsWithMore<T, K extends DeepKeys<T>>({
  items,
  copyPath = "",
  showFirst = 5,
  refParent,
  field,
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
        `${items[showFirst - 1]}`,
      );
      firstHiddenInput?.focus();
    }
  }

  return (
    <>
      {items.map((item) => {
        const id = `${field.name}${item}`;
        return (
          <div key={id} className="form-radio-chips">
            <input
              id={id}
              name={`${field.name}`}
              type="radio"
              onChange={() => {
                field.handleChange(item);
                field.handleBlur();
              }}
            />
            <label htmlFor={id}>{t(`${copyPath}${item}`)}</label>
          </div>
        );
      })}
      {items.length > showFirst && (numItems || !refParent) ? (
        <button type="button" tabIndex={0} onClick={handleClick}>
          {numItems ? t("form.button.more") : t("form.button.less")}
        </button>
      ) : null}
    </>
  );
}
