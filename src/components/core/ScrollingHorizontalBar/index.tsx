import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import AutoScrollTag from "../common/AutoScrollTag";
import "./index.css";

interface Props<T> {
  items: Array<T>;
  handleListItemClick: (idx: number) => void;
}

export default function ScrollingHorizontalBar<
  T extends { title: string; active?: boolean },
>({ items, handleListItemClick }: Props<T>) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const ref = useRef<HTMLUListElement>(null);
  const { t } = useTranslation();

  return (
    <div>
      <ul className="horizontal-list-container" ref={ref}>
        {items.map((item, idx) => (
          <AutoScrollTag
            // eslint-disable-next-line react/no-array-index-key
            key={`${item.title}${idx}`}
            data-active={selectedIndex === idx ? "true" : "false"}
            data-current={item.active ? "true" : "false"}
          >
            <button
              type="button"
              onClick={() => {
                handleListItemClick(idx);
                setSelectedIndex(idx);
              }}
            >
              {item.title?.includes(".") ? t(item.title) : item.title}
            </button>
          </AutoScrollTag>
        ))}
      </ul>
    </div>
  );
}
