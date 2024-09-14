import { useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import Popup from "../Popup";
import Epsilon from "./Epsilon";

interface Props {
  title: string;
  maxLength?: number;
}

export default function VOInformation({ title, maxLength = 100 }: Props) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const isTruncated = title.length > maxLength;
  const trunkateAt = isTruncated
    ? title.slice(0, maxLength + 1).lastIndexOf(" ")
    : maxLength;
  const truncated = title.slice(0, trunkateAt);

  useOutsideClick({
    ref,
    handler: () => setShow(false),
  });

  return (
    <>
      <span ref={ref} className="opportunity-vo-information">
        <span className="opportunity-vo-information-hover">
          <i>{truncated} </i>
          {isTruncated ? <i role="tooltip">{title}</i> : ""}
        </span>
        {isTruncated ? <Epsilon onClick={() => setShow(prev => !prev)} /> : ""}
        {show ? (
          <Popup
            className="opportunity-vo-information-tooltip"
            close={() => setShow(false)}
          >
            <p>{title}</p>
          </Popup>
        ) : null}
      </span>
    </>
  );
}
