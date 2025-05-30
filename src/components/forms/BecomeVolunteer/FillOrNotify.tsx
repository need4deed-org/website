import { useState } from "react";
import { useTranslation } from "react-i18next";

import Close from "../../svg/Close";
import Copy from "../../svg/Copy";
import { OpportunityInfo } from "../types";

const copiedTimeout = 2000;

interface Props {
  close: () => void;
  opportunity: OpportunityInfo;
}

export default function FillOrNotify({ close, opportunity }: Props) {
  const { t } = useTranslation();
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="modal-container">
      <button
        className="btn upper-right-corner"
        type="button"
        onClick={window.close}
      >
        <Close className="modal-close" />
      </button>
      <button className="btn n4d-cta" type="button" onClick={close}>
        {t("form.becomeVolunteer.modal.continue")}
      </button>
      <p>{t("form.becomeVolunteer.modal.already")}</p>
      <div className="modal-copy-text">
        <p>{`${opportunity.title}`} </p>
        <button
          className="btn upper-right-corner"
          type="button"
          onClick={async () => {
            setIsCopied(true);
            setTimeout(() => {
              setIsCopied(false);
            }, copiedTimeout);
            await window.navigator.clipboard.writeText(opportunity.title);
          }}
        >
          {isCopied ? (
            <span className="modal-copied">
              {" "}
              {t("form.becomeVolunteer.modal.copied")}
            </span>
          ) : (
            <Copy className="modal-copy" />
          )}
        </button>
      </div>
      <p>
        {t("form.becomeVolunteer.modal.email")} <b>volunteer@need4deed.org</b>
      </p>
      <p>
        {t("form.becomeVolunteer.modal.number")} <b>015168183784</b>
      </p>
    </div>
  );
}
