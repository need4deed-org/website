import { validate as validateEmail } from "email-validator";
import { useState } from "react";

import { useForm } from "@tanstack/react-form";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { eightDays, phoneRegEx, urlApi } from "../../../config/constants";
import {
  Lang,
  OpportunityType,
  Subpages,
  TranslatedIntoType,
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
import { ListsOfOptions, TypePLZ } from "../types";
import {
  getAllSelectedFalse,
  getDate,
  getScheduleState,
  getTickMark,
  getTimeslotTitle,
  isTimeSlotSelected,
  isValidPLZ,
  parseFormStateDTOOpportunity,
} from "../utils";
import { validateRACEmail } from "../validators";
import { OpportunityData, OpportunityParsedData } from "./dataStructure";
import ErrorAnnouncement from "./ErrorAnnouncement";

const thankYou = "form.addOpportunity.thankYou";
const queryParamsMap: Record<string, keyof ParsedOpportunity> = {
  name: "fullName",
  email: "email",
  phone: "racPhone",
  address: "racAddress",
  postcode: "racPostcode",
};

type ParsedOpportunity = Pick<
  OpportunityData,
  "fullName" | "email" | "racPhone" | "racAddress" | "racPostcode"
>;

export default function AddOpportunity() {
  const navigate = useNavigate();
  const { lng } = useParams();
  const { i18n, t } = useTranslation();
  const [queryParams] = useSearchParams();
  const { language } = i18n;
  const [showErrorAnnouncement, setShowErrorAnnouncement] = useState(false);

  const parsedOpportunity: Partial<ParsedOpportunity> = {};
  Object.entries(queryParamsMap).forEach(([queryParam, mappedParam]) => {
    parsedOpportunity[mappedParam] = queryParams.get(queryParam) || "";
  });

  const { postRequest } = usePostRequest<
    OpportunityParsedData,
    Record<string, string | string[]>
  >({ url: `${urlApi}/opportunity/` });

  const formOpportunity = useForm<OpportunityData>({
    defaultValues: {
      ...(parsedOpportunity as ParsedOpportunity),
      racName: [],
      title: "",
      opportunityType: undefined,
      locations: getAllSelectedFalse(useList(ListsOfOptions.LOCATIONS)),
      activities: getAllSelectedFalse(useList(ListsOfOptions.ACTIVITIES)),
      activitiesAccompanying: getAllSelectedFalse(
        useList(ListsOfOptions.ACTIVITIES_ACCOMPANYING),
      ),
      languages: getAllSelectedFalse(useList(ListsOfOptions.LANGUAGES)),
      skills: getAllSelectedFalse(useList(ListsOfOptions.SKILLS)),
      aaAddress: "",
      aaPostcode: "",
      schedule: getScheduleState(),
      dateTime: undefined,
      numberVolunteers: "1",
      translatedInto: undefined,
      voInformation: "",
      refugeeName: "",
      refugeeNumber: "",
      aaInformation: "",
      consent: undefined,
    },
    onSubmit: async ({ value }) => {
      const data = parseFormStateDTOOpportunity(value);

      const { success } = await postRequest(data);
      if (success) {
        navigate(`/${Subpages.ANNOUNCEMENT}/${lng}?pointer=${thankYou}`);
      } else {
        setShowErrorAnnouncement(true);
      }
    },
  });

  if (showErrorAnnouncement) {
    return <ErrorAnnouncement />;
  }

  return (
    <div key={language} className="n4d-container form-container">
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
        <div className="d-flex flex-column">
          <SimpleInputField<OpportunityData>
            name="title"
            FieldTag={formOpportunity.Field}
            label={t("form.addOpportunity.fields.title.label")}
            onChangeValidator={({ value }) => {
              if (!value) return t("form.error.required");

              if ((value as string).length > 128) {
                return t("form.addOpportunity.fields.title.errorTooLong");
              }

              return undefined;
            }}
          />
          <i className="m-1">{t("form.addOpportunity.fields.title.example")}</i>
        </div>
        <fieldset className="form-field-group">
          <b>{t("form.addOpportunity.fields.contactGroup.label")}</b>
          <span>
            <i>{t("form.addOpportunity.fields.contactGroup.info")}</i>
          </span>
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
            onChangeAsyncValidator={({ value }) =>
              validateRACEmail(value as string, t("form.error.badEmail"))
            }
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
                  <formOpportunity.Field
                    name="activitiesAccompanying"
                    validators={{
                      onBlur: ({ value }) =>
                        value.some(({ selected }) => selected)
                          ? undefined
                          : t("form.error.required"),
                    }}
                  >
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
                          <WithParentRef
                            className="form-chip-list form-pick"
                            onFocus={() => setTimeout(field.handleBlur, 0)}
                          >
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
                            return value.some(({ selected }) => selected)
                              ? undefined
                              : t("form.error.language");
                          },
                        }}
                      >
                        {(field) => {
                          return (
                            <fieldset
                              onFocus={() => {
                                setTimeout(field.handleBlur, 0);
                              }}
                            >
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
                    onChangeValidator={({ value }) => {
                      if (!value) return t("form.error.required");

                      if (!(value as string).match(phoneRegEx))
                        return t("form.error.number");

                      return undefined;
                    }}
                  />
                  <SimpleInputField<OpportunityData>
                    name="aaInformation"
                    FieldTag={formOpportunity.Field}
                    label={t(
                      "form.addOpportunity.fields.aaGroup.information.label",
                    )}
                    onChangeValidator={({ value }) =>
                      !value ? t("form.error.required") : undefined
                    }
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
                  <formOpportunity.Field
                    name="locations"
                    validators={{
                      onBlur: ({ value }) =>
                        value.some(({ selected }) => selected)
                          ? undefined
                          : t("form.error.location"),
                    }}
                  >
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
                          <WithParentRef
                            className="form-chip-list form-pick"
                            onFocus={() => setTimeout(field.handleBlur, 0)}
                          >
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
                  <formOpportunity.Field
                    name="activities"
                    validators={{
                      onBlur: ({ value }) =>
                        value.some(({ selected }) => selected)
                          ? undefined
                          : t("form.error.activity"),
                    }}
                  >
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
                          <WithParentRef
                            className="form-chip-list form-pick"
                            onFocus={() => setTimeout(field.handleBlur, 0)}
                          >
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
                    name="languages"
                    validators={{
                      onBlur: ({ value }) =>
                        value.some(({ selected }) => selected)
                          ? undefined
                          : t("form.error.language"),
                    }}
                  >
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
                          <WithParentRef
                            className="form-chip-list form-pick"
                            onFocus={() => setTimeout(field.handleBlur, 0)}
                          >
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
                        return isTimeSlotSelected(value)
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
                              field.state.value.map(({ weekday }, idx) => {
                                return (
                                  <div
                                    className="form-table-row"
                                    key={`weekday${weekday}`}
                                  >
                                    <span className="form-availability-weekday">
                                      {t(
                                        `form.schedule.${weekday}`,
                                      ).toLocaleUpperCase()}
                                    </span>

                                    <formOpportunity.Field
                                      name={`schedule[${idx}].timeSlots`}
                                    >
                                      {(fieldWeekday) => {
                                        return (
                                          fieldWeekday.state.value &&
                                          fieldWeekday.state.value.map(
                                            ({ title, id }, idxInner) => {
                                              return (
                                                <formOpportunity.Field
                                                  key={`${weekday}${id}`}
                                                  name={`schedule[${idx}].timeSlots[${idxInner}].selected`}
                                                >
                                                  {(fieldTimeslot) => {
                                                    return (
                                                      <span className="form-pick">
                                                        <input
                                                          tabIndex={0}
                                                          id={`${weekday}${idxInner}${fieldWeekday.state.value[idxInner].id}`}
                                                          type="checkbox"
                                                          onChange={(e) => {
                                                            fieldTimeslot.handleChange(
                                                              e.target.checked,
                                                            );
                                                          }}
                                                        />
                                                        <label
                                                          htmlFor={`${weekday}${idxInner}${fieldWeekday.state.value[idxInner].id}`}
                                                        >
                                                          <span>
                                                            {getTimeslotTitle(
                                                              t,
                                                              title[
                                                                i18n.language as Lang
                                                              ] as string,
                                                            )}
                                                          </span>
                                                        </label>
                                                      </span>
                                                    );
                                                  }}
                                                </formOpportunity.Field>
                                              );
                                            },
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
                      if (Number.isNaN(parseInt(value as string, 10))) {
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
                      ].errors?.join(", ");
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
      <p>{t("form.addOpportunity.bottomMsg")}</p>
    </div>
  );
}
