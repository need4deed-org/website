import { useForm } from "@tanstack/react-form";
import { validate as validateEmail } from "email-validator";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { eightDays, phoneRegEx, urlApi } from "../../../config/constants";
import {
  Lang,
  ListsOfOptions,
  OpportunityType,
  Subpages,
  TranslatedIntoType,
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
import {
  getAllSelectedFalse,
  getDate,
  getSchedule,
  getTickMark,
  getTimeslotTitle,
  isValidPLZ,
  parseFormStateDTOOpportunity,
} from "../utils";
import { OpportunityData, OpportunityParsedData } from "./dataStructure";

const thankYou = "?pointer=form.addOpportunity.thankYou";

export default function AddOpportunity() {
  const navigate = useNavigate();
  const { lng } = useParams();
  const { i18n, t } = useTranslation();

  const { postRequest } = usePostRequest<
    OpportunityParsedData,
    Record<string, string | string[]>
  >({ url: `${urlApi}/opportunity/` });

  const formOpportunity = useForm<OpportunityData>({
    defaultValues: {
      email: "",
      fullName: "",
      racName: [],
      title: "",
      racPhone: "",
      racAddress: "",
      racPostcode: "",
      opportunityType: undefined,
      locations: getAllSelectedFalse(useList(ListsOfOptions.LOCATIONS)),
      activities: getAllSelectedFalse(
        useList(ListsOfOptions.ACTIVITIES, Lang.DE),
      ),
      activitiesAccompanying: getAllSelectedFalse(
        useList(ListsOfOptions.ACTIVITIES_ACCOMPANYING),
      ),
      languages: getAllSelectedFalse(
        useList(ListsOfOptions.LANGUAGES, Lang.DE),
      ),
      skills: getAllSelectedFalse(useList(ListsOfOptions.SKILLS, Lang.DE)),
      aaAddress: "",
      aaPostcode: "",
      schedule: getSchedule(),
      dateTime: undefined,
      numberVolunteers: 1,
      translatedInto: undefined,
      voInformation: "",
      refugeeName: "",
      refugeeNumber: "",
      aaInformation: "",
      consent: undefined,
    },
    onSubmit: ({ value }) => {
      const data = parseFormStateDTOOpportunity(value);
      // eslint-disable-next-line no-console
      console.log(
        "DEBUG:BecomeVolunteer:onSubmit:data:",
        data,
        "\nstate:",
        value,
      );
      const result = postRequest(data);
      // eslint-disable-next-line no-console
      console.log("DEBUG:BecomeVolunteer:onSubmit:result:", result);
    },
  });

  useEffect(() => {
    if (formOpportunity.state.isSubmitted)
      navigate(`/${Subpages.ANNOUNCEMENT}/${lng}${thankYou}`);
  }, [formOpportunity.state.isSubmitted, lng, navigate]);

  return (
    <div key={i18n.language} className="n4d-container form-container">
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
            label={t("form.addOpportunity.fields.contactGroup.email.label")}
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
            label={t("form.addOpportunity.fields.contactGroup.fullName.label")}
            onChangeValidator={({ value }) =>
              !value ? t("form.error.required") : undefined
            }
          />
          <SimpleInputField<OpportunityData>
            name="racAddress"
            FieldTag={formOpportunity.Field}
            label={t("form.addOpportunity.fields.contactGroup.address.label")}
            onChangeValidator={({ value }) =>
              !value ? t("form.error.required") : undefined
            }
          />
          <SimpleInputField<OpportunityData>
            name="racPostcode"
            FieldTag={formOpportunity.Field}
            label={t("form.addOpportunity.fields.contactGroup.postcode.label")}
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
            name="racPhone"
            FieldTag={formOpportunity.Field}
            label={t("form.addOpportunity.fields.contactGroup.phone.label")}
            onChangeValidator={({ value }) => {
              if (!value) return t("form.error.required");

              if (!(value as string).match(phoneRegEx))
                return t("form.error.number");

              return undefined;
            }}
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
                  items={Object.values(OpportunityType)}
                  copyPath="form.addOpportunity.fields.opportunityType."
                  field={field}
                />
              </div>
              <FieldInfo field={field} />
            </fieldset>
          )}
        </formOpportunity.Field>
        <formOpportunity.Subscribe selector={(state) => state}>
          {(state) => {
            if (state.values.opportunityType === OpportunityType.ACCOMPANYING)
              return (
                <fieldset className="form-field-group">
                  <b>{t("form.addOpportunity.fields.aaGroup.label")}</b>
                  <formOpportunity.Field name="activitiesAccompanying">
                    {(field) => {
                      return (
                        <fieldset>
                          <HeaderWithHelp
                            className="form-chiplist-header-within-group"
                            classNamePopup="form-help"
                          >
                            {t(
                              "form.addOpportunity.fields.aaGroup.activities.header",
                            )}
                          </HeaderWithHelp>
                          <WithParentRef className="form-chip-list form-pick">
                            <MultipleCheckBoxInputsWithMore<
                              OpportunityData,
                              "activitiesAccompanying"
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
                    name="translatedInto"
                    validators={{
                      onBlur: ({ value }) =>
                        value === undefined
                          ? t("form.error.required")
                          : undefined,
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
                            "form.addOpportunity.fields.aaGroup.translatedInto.helpText",
                          )}
                          className="form-chiplist-header-within-group"
                          classNamePopup="form-help"
                        >
                          {t(
                            "form.addOpportunity.fields.aaGroup.translatedInto.header",
                          )}
                        </HeaderWithHelp>
                        <div className="form-chip-list">
                          <MultipleRadioInputsWithMore
                            items={Object.values(TranslatedIntoType)}
                            copyPath="form.addOpportunity.fields.aaGroup.translatedInto."
                            field={field}
                          />
                        </div>
                        <FieldInfo field={field} />
                      </fieldset>
                    )}
                  </formOpportunity.Field>
                  {state.values.translatedInto &&
                    state.values.translatedInto !==
                      TranslatedIntoType.NO_TRANSLATION && (
                      <formOpportunity.Field
                        name="languages"
                        validators={{
                          onBlur: ({ value }) => {
                            const isSelected = !!value.filter(
                              ({ selected }) => selected,
                            ).length;
                            return isSelected
                              ? undefined
                              : t("form.error.language");
                          },
                        }}
                      >
                        {(field) => {
                          return (
                            <fieldset>
                              <HeaderWithHelp
                                textHelp={t(
                                  "form.addOpportunity.fields.aaGroup.languagesTranslation.helpText",
                                )}
                                className="form-chiplist-header-within-group"
                                classNamePopup="form-help"
                              >
                                {t(
                                  "form.addOpportunity.fields.aaGroup.languagesTranslation.header",
                                )}
                              </HeaderWithHelp>
                              <WithParentRef className="form-chip-list form-pick">
                                <MultipleCheckBoxInputsWithMore<
                                  OpportunityData,
                                  "languages"
                                >
                                  FieldTag={formOpportunity.Field}
                                  field={field}
                                  hiddenChips={
                                    state.values.translatedInto ===
                                    TranslatedIntoType.ENGLISH_OK
                                      ? [
                                          "German",
                                          "Deutsch",
                                          "English",
                                          "Englisch",
                                        ]
                                      : ["German", "Deutsch"]
                                  }
                                />
                                <FieldInfo field={field} />
                              </WithParentRef>
                            </fieldset>
                          );
                        }}
                      </formOpportunity.Field>
                    )}
                  <SimpleInputField<OpportunityData>
                    name="aaAddress"
                    FieldTag={formOpportunity.Field}
                    label={t(
                      "form.addOpportunity.fields.aaGroup.address.label",
                    )}
                    onChangeValidator={({ value }) =>
                      !value ? t("form.error.required") : undefined
                    }
                  />
                  <SimpleInputField<OpportunityData>
                    name="aaPostcode"
                    FieldTag={formOpportunity.Field}
                    label={t(
                      "form.addOpportunity.fields.aaGroup.postcode.label",
                    )}
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
                    name="dateTime"
                    FieldTag={formOpportunity.Field}
                    label={t(
                      "form.addOpportunity.fields.aaGroup.dateTime.label",
                    )}
                    inputType="datetime-local"
                    onChangeValidator={({ value }) => {
                      if (!value) {
                        return t("form.error.required");
                      }
                      if (Number.isNaN(getDate(value as string).getTime())) {
                        return t(
                          "form.addOpportunity.fields.aaGroup.dateTime.error",
                        );
                      }
                      const difference =
                        getDate(value as string).valueOf() - Date.now();
                      if (difference < eightDays) {
                        return t(
                          "form.addOpportunity.fields.aaGroup.dateTime.tooClose",
                        );
                      }
                      return undefined;
                    }}
                  />
                  <SimpleInputField<OpportunityData>
                    name="refugeeName"
                    FieldTag={formOpportunity.Field}
                    label={t(
                      "form.addOpportunity.fields.aaGroup.refugeeName.label",
                    )}
                    onChangeValidator={({ value }) =>
                      !value ? t("form.error.required") : undefined
                    }
                  />
                  <SimpleInputField<OpportunityData>
                    name="refugeeNumber"
                    FieldTag={formOpportunity.Field}
                    label={t(
                      "form.addOpportunity.fields.aaGroup.refugeeNumber.label",
                    )}
                    onChangeValidator={({ value }) =>
                      !value ? t("form.error.required") : undefined
                    }
                  />
                  <SimpleInputField<OpportunityData>
                    name="aaInformation"
                    FieldTag={formOpportunity.Field}
                    label={t(
                      "form.addOpportunity.fields.aaGroup.information.label",
                    )}
                  />
                </fieldset>
              );
            return null;
          }}
        </formOpportunity.Subscribe>
        <formOpportunity.Subscribe selector={(state) => state}>
          {(state) => {
            if (state.values.opportunityType === OpportunityType.GENERAL)
              return (
                <fieldset className="form-field-group">
                  <b>{t("form.addOpportunity.fields.voGroup.label")}</b>
                  <formOpportunity.Field name="locations">
                    {(field) => {
                      return (
                        <fieldset>
                          <HeaderWithHelp
                            className="form-chiplist-header-within-group"
                            classNamePopup="form-help"
                          >
                            {t(
                              "form.addOpportunity.fields.voGroup.locations.header",
                            )}
                          </HeaderWithHelp>
                          <WithParentRef className="form-chip-list form-pick">
                            <MultipleCheckBoxInputsWithMore<
                              OpportunityData,
                              "locations"
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
                  <formOpportunity.Field name="activities">
                    {(field) => {
                      return (
                        <fieldset>
                          <HeaderWithHelp
                            className="form-chiplist-header-within-group"
                            classNamePopup="form-help"
                          >
                            {t(
                              "form.addOpportunity.fields.voGroup.activities.header",
                            )}
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
                  <formOpportunity.Field name="languages">
                    {(field) => {
                      return (
                        <fieldset>
                          <HeaderWithHelp
                            textHelp={t(
                              "form.addOpportunity.fields.voGroup.languagesRefugee.helpText",
                            )}
                            className="form-chiplist-header-within-group"
                            classNamePopup="form-help"
                          >
                            {t(
                              "form.addOpportunity.fields.voGroup.languagesRefugee.header",
                            )}
                          </HeaderWithHelp>
                          <WithParentRef className="form-chip-list form-pick">
                            <MultipleCheckBoxInputsWithMore<
                              OpportunityData,
                              "languages"
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
                            textHelp={t(
                              "form.addOpportunity.fields.voGroup.skills.helpText",
                            )}
                            className="form-chiplist-header-within-group"
                            classNamePopup="form-help"
                          >
                            {t(
                              "form.addOpportunity.fields.voGroup.skills.header",
                            )}
                          </HeaderWithHelp>
                          <WithParentRef className="form-chip-list form-pick">
                            <MultipleCheckBoxInputsWithMore<
                              OpportunityData,
                              "skills"
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
                    name="schedule"
                    validators={{
                      onBlur: ({ value }) => {
                        const isSelected = !!value.filter(
                          ({ timeSlots: timeFrames }) =>
                            !!timeFrames.filter(({ selected }) => selected)
                              .length,
                        ).length;
                        return isSelected
                          ? undefined
                          : t("form.error.availability");
                      },
                    }}
                  >
                    {(field) => {
                      return (
                        <fieldset>
                          <HeaderWithHelp
                            textHelp={t(
                              "form.addOpportunity.fields.voGroup.schedule.helpText",
                            )}
                            className="form-chiplist-header-within-group"
                            classNamePopup="form-help"
                          >
                            {t(
                              "form.addOpportunity.fields.voGroup.schedule.header",
                            )}
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
                                    key={`${scheduleActivity.weekday}`}
                                  >
                                    <span className="form-availability-weekday">
                                      {t(
                                        `form.schedule.${scheduleActivity.weekday}`,
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
                                                key={`${title}${scheduleActivity.weekday}`}
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
                                                        {getTimeslotTitle(
                                                          t,
                                                          title,
                                                        )}
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
                    label={t(
                      "form.addOpportunity.fields.voGroup.numberVolunteers.label",
                    )}
                    onChangeValidator={({ value }) => {
                      if (!value) {
                        return t("form.error.required");
                      }
                      if (Number.isNaN(value as number)) {
                        return t(
                          "form.addOpportunity.fields.voGroup.numberVolunteers.error",
                        );
                      }
                      return undefined;
                    }}
                  />
                  <SimpleInputField<OpportunityData>
                    name="voInformation"
                    FieldTag={formOpportunity.Field}
                    label={t(
                      "form.addOpportunity.fields.voGroup.information.label",
                    )}
                  />
                </fieldset>
              );
            return null;
          }}
        </formOpportunity.Subscribe>
        <formOpportunity.Field
          name="consent"
          validators={{
            onChange: ({ value }) =>
              value ? undefined : t("form.error.required"),
          }}
        >
          {(field) => {
            return (
              <div>
                <div className="form-chip-list form-pick">
                  <input
                    id="consent"
                    type="checkbox"
                    name="consent"
                    onChange={(e) => {
                      field.handleChange(e.target.checked);
                      field.validate("change");
                    }}
                  />
                  <label htmlFor="consent">
                    {getTickMark(!!field.state.value)}
                  </label>
                  <span>
                    {t("form.addOpportunity.fields.consent.header")}{" "}
                    {t("form.addOpportunity.fields.consent.agree")}{" "}
                    <a href={`/${Subpages.GUIDELINES}/${lng}`}>
                      {t("footer.legal.guidelines")}
                    </a>{" "}
                    {t("form.addOpportunity.fields.consent.and")}{" "}
                    <a href={`/${Subpages.DATA_PROTECTION}/${lng}`}>
                      {t("footer.legal.dataPrivacy")}
                    </a>
                  </span>
                </div>
                <FieldInfo field={field} />
              </div>
            );
          }}
        </formOpportunity.Field>
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
