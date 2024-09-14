import { ReactNode, useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import Popup from "../Popup";
import Help from "../svg/Help";

interface Props {
  children: ReactNode;
  titleHelp?: string;
  textHelp?: string;
  classNamePopup?: string;
}

export default function HeaderWithHelp({
  children,
  textHelp,
  titleHelp,
  classNamePopup,
}: Props) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  useOutsideClick({ ref, handler: () => setShow(false) });

  return (
    <div className="n4d-information-tooltip-parent volunteer-section-header">
      <h2>
        {children}
        {textHelp ? (
          <button
            tabIndex={0}
            ref={ref}
            type="button"
            onClick={() => setShow(true)}
          >
            <Help />
          </button>
        ) : null}
      </h2>
      {show ? (
        <Popup
          className={classNamePopup}
          close={() => setShow(false)}
          title={titleHelp}
        >
          {textHelp}
        </Popup>
      ) : null}
    </div>
  );
}
