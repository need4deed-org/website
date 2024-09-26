import { FieldApi, FieldComponent } from "@tanstack/react-form";
import { MouseEvent, RefObject, useState } from "react";

import { PrefixObjectAccessor } from "../../config/types";
import useOutsideClick from "../../hooks/useOutsideClick";
import { VolunteerData, VolunteerDataKeysArrays } from "./dataStructure";

interface Props {
  showFirst?: number;
  refParent?: RefObject<HTMLElement>;
  FieldTag: FieldComponent<VolunteerData, undefined>;
  field: FieldApi<VolunteerData, VolunteerDataKeysArrays>;
  name: VolunteerDataKeysArrays;
}
export default function MultipleInputsWithMore({
  showFirst = 8,
  refParent,
  FieldTag,
  field,
  name,
}: Props) {
  const [numItems, setNumItems] = useState(showFirst);
  useOutsideClick({
    ref: refParent,
    handler: () => {
      setNumItems(showFirst);
    },
  });

  function handleClick(e: MouseEvent) {
    setNumItems(prev => (prev ? 0 : showFirst));

    if (e.screenX === 0 && e.screenY === 0) {
      const firstHiddenInput = document.getElementById(
        `${name}${showFirst - 1}`,
      );
      firstHiddenInput?.focus();
    }
  }

  return (
    <>
      {field.state.value.map((item, idx) => (
        <FieldTag
          key={idx}
          name={
            `${name}[${idx}].selected` as PrefixObjectAccessor<
              VolunteerData,
              []
            >
          }
        >
          {innerField => (
            <div
              data-main-item={numItems === 0 || idx < numItems || item.selected}
            >
              <input
                tabIndex={0}
                id={`${name}${idx}`}
                type="checkbox"
                onChange={e => {
                  innerField.handleChange(e.target.checked);
                }}
              />
              <label htmlFor={`${name}${idx}`}>{item.title}</label>
            </div>
          )}
        </FieldTag>
      ))}
      {field.state.value.length > showFirst && (numItems || !refParent) ? (
        <button tabIndex={0} onClick={handleClick}>
          {numItems ? "more..." : "...less"}
        </button>
      ) : null}
    </>
  );
}
