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
        <Close width="2rem" fill="gray" />
      </button>
      <h1>{t("form.becomeVolunteer.modal.header")}</h1>
      <p>
        {t("form.becomeVolunteer.modal.already")} <b>volunteer@need4deed.org</b>{" "}
      </p>
      <p className="modal-copy-text">
        {`${[opportunity.title, opportunity.title, opportunity.title, opportunity.title].join(", ")}`}{" "}
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
            <span> {t("form.becomeVolunteer.modal.copied")}</span>
          ) : (
            <Copy className="" width="1rem" fill="gray" />
          )}
        </button>
      </p>
      <button className="btn n4d-cta" type="button" onClick={close}>
        {t("form.becomeVolunteer.modal.continue").toUpperCase()}
      </button>
    </div>
  );
}
