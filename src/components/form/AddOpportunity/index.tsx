import { FormState, useForm } from "@tanstack/react-form";
import { validate as validateEmail } from "email-validator";
import { t } from "i18next";

import { useState } from "react";
import { sevenDays, urlApi } from "../../../config/constants";
import {
  ListsOfOptions,
  OpportunityType,
  TypePLZ,
} from "../../../config/types";
import useList from "../../../hooks/api/useList";
import usePostRequest from "../../../hooks/api/usePostRequest";
import { getImageUrl } from "../../../utils";
import UploadIcon from "../../svg/Upload";
import WithParentRef from "../../WithParentRef";
import FieldInfo from "../FieldInfo";
import HeaderWithHelp from "../HeaderWithHelp";
import MultipleCheckBoxInputsWithMore from "../MultipleCheckBoxInputsWithMore";
import MultipleRadioInputsWithMore from "../MultipleRadioInputsWithMore";
import SimpleInputField from "../SimpleInputField";
import { Availability, Selected, TimeSlot, Weekday } from "../types";
import {
  getDate,
  getTickMark,
  isValidPLZ,
  parseFormStateDTOOpportunity,
} from "../utils";
import { OpportunityData, OpportunityParsedData } from "./dataStructure";

const timeSlots: Selected[] = Object.values(TimeSlot).map((timeSlot) => ({
  title: timeSlot,
  selected: false,
}));
const schedule: Availability = Object.values(Weekday).map((weekday) => ({
  weekday,
  timeSlots,
}));
schedule.push({
  weekday: "onetime",
  timeSlots: [
    { title: "Weekdays", selected: false },
    { title: "Weekends", selected: false },
  ],
});

export default function AddOpportunity() {
  const { postRequest } = usePostRequest<
    OpportunityParsedData,
    Record<string, string | string[]>
  >({ url: `${urlApi}/opportunity/` });

  const [opportunityType, setOpportunityType] = useState<OpportunityType>();

  const locations = useList(ListsOfOptions.LOCATIONS).map((title) => ({
    title,
    selected: false,
  }));
  const activities = useList(ListsOfOptions.ACTIVITIES).map((title) => ({
    title,
    selected: false,
  }));
  const skills = useList(ListsOfOptions.SKILLS).map((title) => ({
    title,
    selected: false,
  }));
  const languages = useList(ListsOfOptions.LANGUAGES).map((title) => ({
    title,
    selected: false,
  }));

  const formOpportunity = useForm<OpportunityData>({
    defaultValues: {
      email: "",
      fullName: "",
      racName: [],
      title: "",
      phone: "",
      postcode: "",
      opportunityType: undefined,
      locations,
      activities,
      appointmentType: [],
      languagesRefugee: languages,
      languagesTranslation: languages,
      skills,
      address: "",
      schedule,
      dateTime: undefined,
      numberVolunteers: 1,
      ifTranslationToEnOkay: undefined,
      voInformation: "",
      refugeeName: "",
      refugeeNumber: "",
      aaInformation: "",
    },
    onSubmit: ({ value }) => {
      // eslint-disable-next-line no-console
      console.log("DEBUG:formVolunteer:onSubmit:check:", formOpportunity.state);
      const data = parseFormStateDTOOpportunity(value);
      postRequest(data);
      // eslint-disable-next-line no-console
      console.log("DEBUG:BecomeVolunteer:onSubmit:data:", data);
    },
  });

  return (
    <div className="n4d-container form-container">
      <div className="form-container-header">
        <h1>
          {t("form.addOpportunity.header").toLocaleUpperCase()}
          <img
            src={getImageUrl("N4D-logo-purple-on-transparent-h.webp")}
            alt="N4D logo"
          />
        </h1>
      </div>
      <form
        className="form-form-container"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          formOpportunity.handleSubmit();
        }}
      >
        <SimpleInputField<OpportunityData>
          name="title"
          FieldTag={formOpportunity.Field}
          label={t("form.addOpportunity.fields.title.label")}
          onChangeValidator={({ value }) =>
            !value ? t("form.error.required") : undefined
          }
        />
        <fieldset className="form-field-group">
          <b>{t("form.addOpportunity.fields.contactGroup.label")}</b>
          <SimpleInputField<OpportunityData>
            name="email"
            FieldTag={formOpportunity.Field}
            label={t("form.addOpportunity.fields.email.label")}
            onChangeValidator={({ value }) => {
              if (!value) {
                return t("form.error.required");
              }
              if (!validateEmail(value as string)) {
                return t("form.error.email");
              }
              return undefined;
            }}
          />
          <SimpleInputField<OpportunityData>
            name="fullName"
            FieldTag={formOpportunity.Field}
            label={t("form.addOpportunity.fields.fullName.label")}
            onChangeValidator={({ value }) =>
              !value ? t("form.error.required") : undefined
            }
          />
          <SimpleInputField<OpportunityData>
            name="postcode"
            FieldTag={formOpportunity.Field}
            label={t("form.addOpportunity.fields.postcode.label")}
            onChangeValidator={({ value }) => {
              if (!value) {
                return t("form.error.required");
              }

              if (!isValidPLZ(value as string, TypePLZ.GERMANY)) {
                return t("form.error.postcode");
              }

              return undefined;
            }}
          />
          <SimpleInputField<OpportunityData>
            name="phone"
            FieldTag={formOpportunity.Field}
            label={t("form.addOpportunity.fields.phone.label")}
            onChangeValidator={({ value }) =>
              !value ? t("form.error.required") : undefined
            }
          />
        </fieldset>
        <formOpportunity.Field
          name="opportunityType"
          validators={{
            onBlur: ({ value }) =>
              value === undefined ? t("form.error.required") : undefined,
          }}
        >
          {(field) => (
            <fieldset
              className="form-pick"
              onFocus={() => {
                setTimeout(field.handleBlur, 0);
              }}
            >
              <HeaderWithHelp
                textHelp={t(
                  "form.addOpportunity.fields.opportunityType.helpText",
                )}
                titleHelp={t(
                  "form.addOpportunity.fields.opportunityType.helpTitle",
                )}
                classNamePopup="form-help"
              >
                {t("form.addOpportunity.fields.opportunityType.header")}
              </HeaderWithHelp>
              <div className="form-chip-list">
                <MultipleRadioInputsWithMore
                  items={[
                    OpportunityType.GENERAL,
                    OpportunityType.ACCOMPANYING,
                  ]}
                  copyPath="form.addOpportunity.fields.opportunityType."
                  field={field}
                />
              </div>
              <FieldInfo field={field} />
            </fieldset>
          )}
        </formOpportunity.Field>
        <formOpportunity.Subscribe selector={(state) => state}>
          {(state: FormState<OpportunityData>) => {
            setOpportunityType(state.values.opportunityType);
            return null;
          }}
        </formOpportunity.Subscribe>
        {opportunityType === OpportunityType.ACCOMPANYING && (
          <fieldset className="form-field-group">
            <b>{t("form.addOpportunity.fields.aaGroup.label")}</b>
            <formOpportunity.Field name="activities">
              {(field) => {
                return (
                  <fieldset>
                    <HeaderWithHelp
                      className="form-chiplist-header-within-group"
                      classNamePopup="form-help"
                    >
                      {t("form.addOpportunity.fields.activities.header")}
                    </HeaderWithHelp>
                    <WithParentRef className="form-chip-list form-pick">
                      <MultipleCheckBoxInputsWithMore<
                        OpportunityData,
                        "activities"
                      >
                        FieldTag={formOpportunity.Field}
                        field={field}
                      />
                      <FieldInfo field={field} />
                    </WithParentRef>
                  </fieldset>
                );
              }}
            </formOpportunity.Field>
            <formOpportunity.Field
              name="languagesTranslation"
              validators={{
                onBlur: ({ value }) => {
                  const isSelected = !!value.filter(({ selected }) => selected)
                    .length;
                  return isSelected ? undefined : t("form.error.language");
                },
              }}
            >
              {(field) => {
                return (
                  <fieldset>
                    <HeaderWithHelp
                      textHelp={t(
                        "form.addOpportunity.fields.languagesTranslation.helpText",
                      )}
                      className="form-chiplist-header-within-group"
                      classNamePopup="form-help"
                    >
                      {t(
                        "form.addOpportunity.fields.languagesTranslation.header",
                      )}
                    </HeaderWithHelp>
                    <WithParentRef className="form-chip-list form-pick">
                      <MultipleCheckBoxInputsWithMore<
                        OpportunityData,
                        "languagesTranslation"
                      >
                        FieldTag={formOpportunity.Field}
                        field={field}
                      />
                      <FieldInfo field={field} />
                    </WithParentRef>
                  </fieldset>
                );
              }}
            </formOpportunity.Field>
            <formOpportunity.Field name="ifTranslationToEnOkay">
              {(field) => {
                return (
                  <div>
                    <div className="form-chip-list form-pick">
                      <p>
                        {t(
                          "form.addOpportunity.fields.ifTranslationToEnOkay.label",
                        )}
                      </p>
                      <input
                        id="consent"
                        type="checkbox"
                        name="ifTranslationToEnOkay"
                        onChange={(e) => {
                          field.handleChange(e.target.checked);
                          field.validate("change");
                        }}
                      />
                      <label htmlFor="consent">
                        {getTickMark(!!field.state.value)}
                      </label>
                    </div>
                    <FieldInfo field={field} />
                  </div>
                );
              }}
            </formOpportunity.Field>
            <SimpleInputField<OpportunityData>
              name="address"
              FieldTag={formOpportunity.Field}
              label={t("form.addOpportunity.fields.address.label")}
              onChangeValidator={({ value }) =>
                !value ? t("form.error.required") : undefined
              }
            />
            <SimpleInputField<OpportunityData>
              name="dateTime"
              FieldTag={formOpportunity.Field}
              label={t("form.addOpportunity.fields.dateTime.label")}
              onChangeValidator={({ value }) => {
                if (!value) {
                  return t("form.error.required");
                }
                if (Number.isNaN(getDate(value as string).getTime())) {
                  return t("form.addOpportunity.fields.dateTime.error");
                }
                if (
                  getDate(value as string).valueOf() - Date.now() <
                  sevenDays
                ) {
                  return t("form.addOpportunity.fields.dateTime.tooClose");
                }
                return undefined;
              }}
            />
            <SimpleInputField<OpportunityData>
              name="refugeeName"
              FieldTag={formOpportunity.Field}
              label={t("form.addOpportunity.fields.refugeeName.label")}
              onChangeValidator={({ value }) =>
                !value ? t("form.error.required") : undefined
              }
            />
            <SimpleInputField<OpportunityData>
              name="refugeeNumber"
              FieldTag={formOpportunity.Field}
              label={t("form.addOpportunity.fields.refugeeNumber.label")}
              onChangeValidator={({ value }) =>
                !value ? t("form.error.required") : undefined
              }
            />
            <SimpleInputField<OpportunityData>
              name="aaInformation"
              FieldTag={formOpportunity.Field}
              label={t("form.addOpportunity.fields.aaInformation.label")}
            />
          </fieldset>
        )}
        {opportunityType === OpportunityType.GENERAL && (
          <fieldset className="form-field-group">
            <b>{t("form.addOpportunity.fields.voGroup.label")}</b>
            <formOpportunity.Field name="activities">
              {(field) => {
                return (
                  <fieldset>
                    <HeaderWithHelp
                      className="form-chiplist-header-within-group"
                      classNamePopup="form-help"
                    >
                      {t("form.addOpportunity.fields.activities.header")}
                    </HeaderWithHelp>
                    <WithParentRef className="form-chip-list form-pick">
                      <MultipleCheckBoxInputsWithMore<
                        OpportunityData,
                        "activities"
                      >
                        FieldTag={formOpportunity.Field}
                        field={field}
                      />
                      <FieldInfo field={field} />
                    </WithParentRef>
                  </fieldset>
                );
              }}
            </formOpportunity.Field>
            <formOpportunity.Field name="languagesRefugee">
              {(field) => {
                return (
                  <fieldset>
                    <HeaderWithHelp
                      textHelp={t(
                        "form.addOpportunity.fields.languagesRefugee.helpText",
                      )}
                      className="form-chiplist-header-within-group"
                      classNamePopup="form-help"
                    >
                      {t("form.addOpportunity.fields.languagesRefugee.header")}
                    </HeaderWithHelp>
                    <WithParentRef className="form-chip-list form-pick">
                      <MultipleCheckBoxInputsWithMore<
                        OpportunityData,
                        "languagesRefugee"
                      >
                        FieldTag={formOpportunity.Field}
                        field={field}
                      />
                      <FieldInfo field={field} />
                    </WithParentRef>
                  </fieldset>
                );
              }}
            </formOpportunity.Field>
            <formOpportunity.Field name="skills">
              {(field) => {
                return (
                  <fieldset>
                    <HeaderWithHelp
                      textHelp={t("form.addOpportunity.fields.skills.helpText")}
                      className="form-chiplist-header-within-group"
                      classNamePopup="form-help"
                    >
                      {t("form.addOpportunity.fields.skills.header")}
                    </HeaderWithHelp>
                    <WithParentRef className="form-chip-list form-pick">
                      <MultipleCheckBoxInputsWithMore<OpportunityData, "skills">
                        FieldTag={formOpportunity.Field}
                        field={field}
                      />
                      <FieldInfo field={field} />
                    </WithParentRef>
                  </fieldset>
                );
              }}
            </formOpportunity.Field>
            <formOpportunity.Field
              name="schedule"
              validators={{
                onBlur: ({ value }) => {
                  const isSelected = !!value.filter(
                    ({ timeSlots: timeFrames }) =>
                      !!timeFrames.filter(({ selected }) => selected).length,
                  ).length;
                  return isSelected ? undefined : t("form.error.availability");
                },
              }}
            >
              {(field) => {
                return (
                  <fieldset>
                    <HeaderWithHelp
                      textHelp={t(
                        "form.addOpportunity.fields.schedule.helpText",
                      )}
                      className="form-chiplist-header-within-group"
                      classNamePopup="form-help"
                    >
                      {t("form.addOpportunity.fields.schedule.header")}
                    </HeaderWithHelp>
                    <div
                      className="form-table"
                      onFocus={() => {
                        setTimeout(field.handleBlur, 0);
                      }}
                    >
                      {field.state.value &&
                        field.state.value.map((scheduleActivity, idx) => {
                          return (
                            <div
                              className="form-table-row"
                              key={`schedule${scheduleActivity}`}
                            >
                              <span className="form-availability-weekday">
                                {t(
                                  `weekdays.${scheduleActivity.weekday}`,
                                ).toLocaleUpperCase()}
                              </span>

                              <formOpportunity.Field
                                name={`schedule[${idx}].timeSlots`}
                              >
                                {(weekday) => {
                                  return (
                                    weekday.state.value &&
                                    weekday.state.value.map(
                                      ({ title }, idxInner) => (
                                        <formOpportunity.Field
                                          key={`${title}`}
                                          name={`schedule[${idx}].timeSlots[${idxInner}].selected`}
                                        >
                                          {(fieldTimeslot) => (
                                            <span className="form-pick">
                                              <input
                                                tabIndex={0}
                                                id={`${scheduleActivity.weekday}${weekday.state.value[idxInner].title}`}
                                                type="checkbox"
                                                onChange={(e) =>
                                                  fieldTimeslot.handleChange(
                                                    e.target.checked,
                                                  )
                                                }
                                              />
                                              <label
                                                htmlFor={`${scheduleActivity.weekday}${weekday.state.value[idxInner].title}`}
                                              >
                                                <span key={`${title}`}>
                                                  {title}
                                                </span>
                                              </label>
                                            </span>
                                          )}
                                        </formOpportunity.Field>
                                      ),
                                    )
                                  );
                                }}
                              </formOpportunity.Field>
                            </div>
                          );
                        })}
                      <FieldInfo field={field} />
                    </div>
                  </fieldset>
                );
              }}
            </formOpportunity.Field>
            <SimpleInputField<OpportunityData>
              name="numberVolunteers"
              FieldTag={formOpportunity.Field}
              label={t("form.addOpportunity.fields.numberVolunteers.label")}
              onChangeValidator={({ value }) => {
                if (!value) {
                  return t("form.error.required");
                }
                if (Number.isNaN(value as number)) {
                  return t("form.addOpportunity.fields.numberVolunteers.error");
                }
                return undefined;
              }}
            />
            <SimpleInputField<OpportunityData>
              name="voInformation"
              FieldTag={formOpportunity.Field}
              label={t("form.addOpportunity.fields.voInformation.label")}
            />
          </fieldset>
        )}
        <formOpportunity.Subscribe selector={(state) => state}>
          {(state) => {
            const errors = Array.from(
              new Set(
                Object.keys(formOpportunity.state.fieldMeta)
                  .reduce((errorList: string[], key) => {
                    const errorsMsgs =
                      formOpportunity.state.fieldMeta[
                        key as keyof typeof formOpportunity.state.fieldMeta
                      ].errors.join(", ");
                    errorList.push(errorsMsgs);
                    return errorList;
                  }, [])
                  .filter(Boolean),
              ),
            ).join(", ");
            return (
              <div className="form-submit">
                <button
                  className="n4d-cta"
                  type="submit"
                  disabled={!state.canSubmit}
                >
                  {state.isSubmitting ? (
                    "..."
                  ) : (
                    <>
                      <UploadIcon />
                      {t("form.button.submit").toUpperCase()}
                    </>
                  )}
                </button>
                {errors ? (
                  <em>
                    {t("form.error.labelErrors")}: {errors}
                  </em>
                ) : null}
              </div>
            );
          }}
        </formOpportunity.Subscribe>
      </form>
    </div>
  );
}
