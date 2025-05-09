import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Close from "../../svg/Close";
import Copy from "../../svg/Copy";
import SimpleInputField from "../SimpleInputField";
import { OpportunityInfo } from "../types";
import { VolunteerContact } from "./dataStructure";

const copiedTimeout = 2000;

interface Props {
  close: () => void;
  opportunity: OpportunityInfo;
  setVolunteerContact: (contact: VolunteerContact) => void;
}

export default function FillOrNotify({
  close,
  setVolunteerContact,
  opportunity,
}: Props) {
  const { t } = useTranslation();
  const [isCopied, setIsCopied] = useState(false);

  const formVolunteerContact = useForm<VolunteerContact>({
    defaultValues: {
      email: "",
      phone: "",
    },
  });

  return (
    <form className="modal-form-container">
      <button
        className="btn upper-right-corner"
        type="button"
        onClick={window.close}
      >
        <Close width="2rem" fill="gray" />
      </button>
      <h1>{t("form.becomeVolunteer.modal.header")}</h1>
      <SimpleInputField<VolunteerContact>
        name="email"
        FieldTag={formVolunteerContact.Field}
        label={t("form.becomeVolunteer.fields.email.label")}
      />
      <SimpleInputField<VolunteerContact>
        name="phone"
        FieldTag={formVolunteerContact.Field}
        label={t("form.becomeVolunteer.fields.phone.label")}
      />
      <formVolunteerContact.Subscribe selector={(state) => state}>
        {(state) => {
          return (
            <>
              <button
                className="btn n4d-cta"
                type="button"
                onClick={() => {
                  setVolunteerContact(state.values);
                  close();
                }}
              >
                {t("form.becomeVolunteer.modal.continue").toUpperCase()}
              </button>
              <p>
                {t("form.becomeVolunteer.modal.already")}{" "}
                <b>info@need4deed.org</b>{" "}
              </p>
              <p className="modal-copy-text">
                {`${opportunity.title}\n${state.values.email}\n${state.values.phone}`}{" "}
                <button
                  className="btn upper-right-corner"
                  type="button"
                  onClick={async () => {
                    setIsCopied(true);
                    setTimeout(() => {
                      setIsCopied(false);
                    }, copiedTimeout);
                    await window.navigator.clipboard.writeText(
                      `${opportunity.title} ${state.values.email} ${state.values.phone}`,
                    );
                  }}
                >
                  {isCopied ? (
                    <span> {t("form.becomeVolunteer.modal.copied")}</span>
                  ) : (
                    <Copy className="" width="1rem" fill="gray" />
                  )}
                </button>
              </p>
            </>
          );
        }}
      </formVolunteerContact.Subscribe>
    </form>
  );
}
