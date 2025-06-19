import { useForm } from "@tanstack/react-form";
import { validate as validateEmail } from "email-validator";
import { Lang } from "need4deed-sdk";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import { urlApi } from "../../../config/constants";
import { Subpages } from "../../../config/types";
import useList from "../../../hooks/api/useList";
import usePostRequest from "../../../hooks/api/usePostRequest";
import { getImageUrl } from "../../../utils/index";
import Announcement from "../../Announcement";
import ModalWindow from "../../core/Modal";
import UploadIcon from "../../svg/Upload";
import WithParentRef from "../../WithParentRef";
import FieldInfo from "../FieldInfo";
import HeaderWithHelp from "../HeaderWithHelp";
import "../index.css";
import MultipleCheckBoxInputsWithMore from "../MultipleCheckBoxInputsWithMore";
import MultipleRadioInputsWithMore from "../MultipleRadioInputsWithMore";
import SimpleInputField from "../SimpleInputField";
import { ListsOfOptions, OpportunityInfo } from "../types";
import {
  areLanguagesRepeated,
  getAllSelectedFalse,
  getScheduleState,
  getTickMark,
  getTimeslotTitle,
  isTimeSlotSelected,
  isValidPLZ,
  parseFormStateDTOVolunteer,
} from "../utils";
import { VolunteerData, VolunteerParsedData } from "./dataStructure";
import FillOrNotify from "./FillOrNotify";

const thankYou = "?pointer=form.becomeVolunteer.thankYou";
const somethingWrong = "form.becomeVolunteer.somethingWrong";

export default function BecomeVolunteer() {
  const [showErrorAnnouncement, setShowErrorAnnouncement] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { lng } = useParams();
  const [opportunityParams] = useSearchParams();
  const language = i18n.language as Lang;

  const { postRequest } = usePostRequest<
    VolunteerParsedData,
    Record<string, string | string[]>
  >({ url: `${urlApi}/volunteer/` });

  const opportunity: OpportunityInfo = {
    id: opportunityParams.get("id") || "",
    title: opportunityParams.get("title") || "",
  };

  const [showModal, setShowModal] = useState(false);

  const languages = getAllSelectedFalse(useList(ListsOfOptions.LANGUAGES));

  const formVolunteer = useForm<VolunteerData>({
    defaultValues: {
      opportunityId: opportunity.id,
      name: "",
      email: "",
      phone: "",
      postcode: "",
      locations: getAllSelectedFalse(useList(ListsOfOptions.LOCATIONS)),
      availability: getScheduleState(),
      languagesNative: languages,
      languagesFluent: languages,
      languagesIntermediate: languages,
      activities: getAllSelectedFalse([
        ...useList(ListsOfOptions.ACTIVITIES),
        ...useList(ListsOfOptions.ACTIVITIES_ACCOMPANYING),
      ]),
      skills: getAllSelectedFalse(useList(ListsOfOptions.SKILLS)),
      certOfGoodConduct: undefined,
      certMeaslesVaccination: undefined,
      leadFrom: getAllSelectedFalse(useList(ListsOfOptions.LEADS)),
      comments: "",
      consent: undefined,
      language,
    },
    validators: {
      onSubmit: ({ value }) => {
        if (areLanguagesRepeated(value)) {
          return t("form.becomeVolunteer.fields.languages.singleLevelError");
        }

        return undefined;
      },
    },
    onSubmit: async ({ value }) => {
      const data = parseFormStateDTOVolunteer(value);

      const { success } = await postRequest(data);
      if (success) {
        navigate(`/${Subpages.ANNOUNCEMENT}/${lng}${thankYou}`);
      } else {
        setShowErrorAnnouncement(true);
      }
    },
  });

  if (showModal) {
    return (
      <ModalWindow>
        <FillOrNotify
          close={() => setShowModal(false)}
          opportunity={opportunity}
        />
      </ModalWindow>
    );
  }

  if (showErrorAnnouncement) {
    return <Announcement copies={somethingWrong} />;
  }

  return (
    <div className="n4d-container form-container">
      <div className="form-container-header">
        <h1>
          {t("form.becomeVolunteer.header").toLocaleUpperCase()}
          <img
            src={getImageUrl("N4D-logo-purple-on-transparent-h.webp")}
            alt=""
          />
        </h1>
        {opportunity.title ? (
          <h6>
            {t("form.becomeVolunteer.thanks")}: <i>{opportunity.title}</i>
          </h6>
        ) : null}
      </div>
      <form
        className="form-form-container"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          formVolunteer.handleSubmit();
        }}
      >
        <SimpleInputField<VolunteerData>
          name="name"
          FieldTag={formVolunteer.Field}
          label={t("form.becomeVolunteer.fields.name.label")}
          onChangeValidator={({ value }) =>
            !value ? t("form.error.required") : undefined
          }
        />
        <SimpleInputField<VolunteerData>
          name="email"
          FieldTag={formVolunteer.Field}
          label={t("form.becomeVolunteer.fields.email.label")}
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
        <SimpleInputField<VolunteerData>
          name="phone"
          FieldTag={formVolunteer.Field}
          label={t("form.becomeVolunteer.fields.phone.label")}
          onChangeValidator={({ value }) =>
            !value ? t("form.error.required") : undefined
          }
        />
        <SimpleInputField<VolunteerData>
          name="postcode"
          FieldTag={formVolunteer.Field}
          label={t("form.becomeVolunteer.fields.postcode.label")}
          onChangeValidator={({ value }) => {
            if (!value) {
              return t("form.error.required");
            }
            if (!isValidPLZ(value as string)) {
              return t("form.error.postcode");
            }
            return undefined;
          }}
        />
        <formVolunteer.Field
          name="locations"
          validators={{
            onBlur: ({ value }) => {
              const isSelected = !!value.filter(({ selected }) => selected)
                .length;
              return isSelected ? undefined : t("form.error.location");
            },
          }}
        >
          {(fieldLocations) => {
            return (
              <fieldset>
                <HeaderWithHelp
                  textHelp={t("form.becomeVolunteer.fields.locations.helpText")}
                  titleHelp={t(
                    "form.becomeVolunteer.fields.locations.helpTitle",
                  )}
                  classNamePopup="form-help"
                >
                  {t("form.becomeVolunteer.fields.locations.header")}
                </HeaderWithHelp>
                <h6>{t("form.becomeVolunteer.fields.locations.para")}</h6>
                <WithParentRef
                  onFocus={() => setTimeout(fieldLocations.handleBlur, 0)}
                  className="form-chip-list form-pick"
                >
                  <MultipleCheckBoxInputsWithMore<VolunteerData, "locations">
                    FieldTag={formVolunteer.Field}
                    field={fieldLocations}
                  />
                  <FieldInfo field={fieldLocations} />
                </WithParentRef>
              </fieldset>
            );
          }}
        </formVolunteer.Field>
        <formVolunteer.Field
          name="availability"
          validators={{
            onBlur: ({ value }) => {
              return isTimeSlotSelected(value)
                ? undefined
                : t("form.error.availability");
            },
          }}
        >
          {(fieldAvailability) => {
            return (
              <fieldset>
                <HeaderWithHelp
                  textHelp={t(
                    "form.becomeVolunteer.fields.availability.helpText",
                  )}
                  titleHelp={t(
                    "form.becomeVolunteer.fields.availability.helpTitle",
                  )}
                  classNamePopup="form-help"
                >
                  {t("form.becomeVolunteer.fields.availability.header")}
                </HeaderWithHelp>
                <h6>{t("form.becomeVolunteer.fields.availability.para")}</h6>
                <div
                  className="form-table"
                  onFocus={() => {
                    setTimeout(fieldAvailability.handleBlur, 0);
                  }}
                >
                  {fieldAvailability.state.value &&
                    fieldAvailability.state.value.map(
                      (availabilityObj, idx) => {
                        return (
                          <div
                            className="form-table-row"
                            key={`availability-${availabilityObj.weekday}`}
                          >
                            <span className="form-availability-weekday">
                              {t(
                                `form.schedule.${availabilityObj.weekday}`,
                              ).toLocaleUpperCase()}
                            </span>
                            <formVolunteer.Field
                              name={`availability[${idx}].timeSlots`}
                            >
                              {(fieldWeekday) => {
                                return (
                                  fieldWeekday.state.value &&
                                  fieldWeekday.state.value.map(
                                    ({ title, id }, idxTimeframes) => (
                                      <formVolunteer.Field
                                        key={`${availabilityObj.weekday}-${id}`}
                                        name={`availability[${idx}].timeSlots[${idxTimeframes}].selected`}
                                      >
                                        {(field) => (
                                          <span className="form-pick">
                                            <input
                                              tabIndex={0}
                                              id={`${availabilityObj.weekday}${id}`}
                                              type="checkbox"
                                              onChange={(e) =>
                                                field.handleChange(
                                                  e.target.checked,
                                                )
                                              }
                                            />
                                            <label
                                              htmlFor={`${availabilityObj.weekday}${id}`}
                                            >
                                              {getTimeslotTitle(
                                                t,
                                                title[
                                                  i18n.language as Lang
                                                ] as string,
                                              )}
                                            </label>
                                          </span>
                                        )}
                                      </formVolunteer.Field>
                                    ),
                                  )
                                );
                              }}
                            </formVolunteer.Field>
                          </div>
                        );
                      },
                    )}
                  <FieldInfo field={fieldAvailability} />
                </div>
              </fieldset>
            );
          }}
        </formVolunteer.Field>
        <fieldset>
          <HeaderWithHelp
            textHelp={t("form.becomeVolunteer.fields.languages.helpText")}
            titleHelp={t("form.becomeVolunteer.fields.languages.helpTitle")}
            classNamePopup="form-help"
          >
            {t("form.becomeVolunteer.fields.languages.header")}
          </HeaderWithHelp>
          <h6>{t("form.becomeVolunteer.fields.languages.para")}</h6>
          <formVolunteer.Field
            name="languagesNative"
            validators={{
              onBlur: ({ value }) => {
                const isSelected = !!value.filter(({ selected }) => selected)
                  .length;
                return isSelected ? undefined : t("form.error.language");
              },
            }}
          >
            {(fieldLanguagesNative) => {
              return (
                <>
                  <h6>
                    {t(
                      "form.becomeVolunteer.fields.languages.languagesNative.header",
                    )}
                  </h6>
                  <WithParentRef
                    onFocus={() => {
                      setTimeout(fieldLanguagesNative.handleBlur, 0);
                    }}
                    className="form-chip-list form-pick"
                  >
                    <MultipleCheckBoxInputsWithMore<
                      VolunteerData,
                      "languagesNative"
                    >
                      FieldTag={formVolunteer.Field}
                      field={fieldLanguagesNative}
                    />
                    <FieldInfo field={fieldLanguagesNative} />
                  </WithParentRef>
                </>
              );
            }}
          </formVolunteer.Field>
          <formVolunteer.Field name="languagesFluent">
            {(fieldLanguagesFluent) => {
              return (
                <>
                  <h6>
                    {t(
                      "form.becomeVolunteer.fields.languages.languagesFluent.header",
                    )}
                  </h6>
                  <WithParentRef
                    onFocus={() => {
                      setTimeout(fieldLanguagesFluent.handleBlur, 0);
                    }}
                    className="form-chip-list form-pick"
                  >
                    <MultipleCheckBoxInputsWithMore<
                      VolunteerData,
                      "languagesFluent"
                    >
                      FieldTag={formVolunteer.Field}
                      field={fieldLanguagesFluent}
                    />
                    <FieldInfo field={fieldLanguagesFluent} />
                  </WithParentRef>
                </>
              );
            }}
          </formVolunteer.Field>
          <formVolunteer.Field name="languagesIntermediate">
            {(fieldLanguagesIntermediate) => {
              return (
                <>
                  <h6>
                    {t(
                      "form.becomeVolunteer.fields.languages.languagesIntermediate.header",
                    )}
                  </h6>
                  <WithParentRef className="form-chip-list form-pick">
                    <MultipleCheckBoxInputsWithMore<
                      VolunteerData,
                      "languagesIntermediate"
                    >
                      FieldTag={formVolunteer.Field}
                      field={fieldLanguagesIntermediate}
                    />
                    <FieldInfo field={fieldLanguagesIntermediate} />
                  </WithParentRef>
                </>
              );
            }}
          </formVolunteer.Field>
        </fieldset>
        <formVolunteer.Field
          name="activities"
          validators={{
            onBlur: ({ value }) => {
              const isSelected = !!value.filter(({ selected }) => selected)
                .length;
              return isSelected
                ? undefined
                : t("form.becomeVolunteer.fields.activities.error");
            },
          }}
        >
          {(fieldActivities) => {
            return (
              <fieldset>
                <HeaderWithHelp
                  textHelp={t(
                    "form.becomeVolunteer.fields.activities.helpText",
                  )}
                  titleHelp={t(
                    "form.becomeVolunteer.fields.activities.helpTitle",
                  )}
                  classNamePopup="form-help"
                >
                  {t("form.becomeVolunteer.fields.activities.header")}
                </HeaderWithHelp>
                <WithParentRef
                  onFocus={() => {
                    setTimeout(fieldActivities.handleBlur, 0);
                  }}
                  className="form-chip-list form-pick"
                >
                  <MultipleCheckBoxInputsWithMore<VolunteerData, "activities">
                    FieldTag={formVolunteer.Field}
                    field={fieldActivities}
                  />
                  <FieldInfo field={fieldActivities} />
                </WithParentRef>
              </fieldset>
            );
          }}
        </formVolunteer.Field>
        <formVolunteer.Field name="skills">
          {(fieldSkills) => {
            return (
              <fieldset>
                <HeaderWithHelp
                  textHelp={t("form.becomeVolunteer.fields.skills.helpText")}
                  titleHelp={t("form.becomeVolunteer.fields.skills.helpTitle")}
                  classNamePopup="form-help"
                >
                  {t("form.becomeVolunteer.fields.skills.header")}
                </HeaderWithHelp>
                <WithParentRef className="form-chip-list form-pick">
                  <MultipleCheckBoxInputsWithMore<VolunteerData, "skills">
                    FieldTag={formVolunteer.Field}
                    field={fieldSkills}
                  />
                  <FieldInfo field={fieldSkills} />
                </WithParentRef>
              </fieldset>
            );
          }}
        </formVolunteer.Field>
        <formVolunteer.Field
          name="certOfGoodConduct"
          validators={{
            onBlur: ({ value }) =>
              value === undefined ? t("form.error.required") : undefined,
          }}
        >
          {(field) => (
            <fieldset>
              <div
                className="form-pick"
                onFocus={() => {
                  setTimeout(field.handleBlur, 0);
                }}
              >
                <HeaderWithHelp
                  textHelp={t(
                    "form.becomeVolunteer.fields.certOfGoodConduct.helpText",
                  )}
                  titleHelp={t(
                    "form.becomeVolunteer.fields.certOfGoodConduct.helpTitle",
                  )}
                  classNamePopup="form-help"
                >
                  {t("form.becomeVolunteer.fields.certOfGoodConduct.header")}
                </HeaderWithHelp>
                <div className="form-chip-list">
                  <MultipleRadioInputsWithMore
                    items={[true, false]}
                    copyPath="form.becomeVolunteer.fields.certOfGoodConduct."
                    field={field}
                  />
                </div>
                <FieldInfo field={field} />
              </div>
              <h6>
                <a
                  href="https://www.berlin.de/laf/engagement/fuehrungszeugnis/"
                  target="_blanc"
                >
                  {t("form.becomeVolunteer.fields.certOfGoodConduct.why")}
                </a>
              </h6>
            </fieldset>
          )}
        </formVolunteer.Field>
        <formVolunteer.Field
          name="certMeaslesVaccination"
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
                  "form.becomeVolunteer.fields.certMeaslesVaccination.helpText",
                )}
                titleHelp={t(
                  "form.becomeVolunteer.fields.certMeaslesVaccination.helpTitle",
                )}
                classNamePopup="form-help"
              >
                {t("form.becomeVolunteer.fields.certMeaslesVaccination.header")}
              </HeaderWithHelp>
              <div className="form-chip-list">
                <MultipleRadioInputsWithMore
                  items={[true, false]}
                  copyPath="form.becomeVolunteer.fields.certMeaslesVaccination."
                  field={field}
                />
              </div>
              <FieldInfo field={field} />
            </fieldset>
          )}
        </formVolunteer.Field>
        <formVolunteer.Field name="leadFrom">
          {(fieldLeadFrom) => {
            return (
              <fieldset>
                <HeaderWithHelp
                  textHelp={t("form.becomeVolunteer.fields.leadFrom.helpText")}
                  titleHelp={t(
                    "form.becomeVolunteer.fields.leadFrom.helpTitle",
                  )}
                  classNamePopup="form-help"
                >
                  {t("form.becomeVolunteer.fields.leadFrom.header")}
                </HeaderWithHelp>
                <WithParentRef className="form-chip-list form-pick">
                  <MultipleCheckBoxInputsWithMore<VolunteerData, "leadFrom">
                    FieldTag={formVolunteer.Field}
                    field={fieldLeadFrom}
                  />
                  <FieldInfo field={fieldLeadFrom} />
                </WithParentRef>
              </fieldset>
            );
          }}
        </formVolunteer.Field>
        <SimpleInputField
          name="comments"
          FieldTag={formVolunteer.Field}
          label={t("form.becomeVolunteer.fields.comments.label")}
        />
        <formVolunteer.Field
          name="consent"
          validators={{
            onChange: ({ value }) =>
              value ? undefined : t("form.error.required"),
          }}
        >
          {(fieldConsent) => {
            return (
              <div>
                <div className="form-chip-list form-pick">
                  <input
                    id="consent"
                    type="checkbox"
                    name="consent"
                    onChange={(e) => {
                      fieldConsent.handleChange(e.target.checked);
                      fieldConsent.validate("change");
                    }}
                  />
                  <label htmlFor="consent">
                    {getTickMark(!!fieldConsent.state.value)}
                  </label>
                  <span>
                    {t("form.becomeVolunteer.fields.consent.header")}{" "}
                    <a href={`/${Subpages.DATA_PROTECTION}/${lng}`}>
                      {t("footer.legal.dataPrivacy")}
                    </a>{" "}
                    {t("form.becomeVolunteer.fields.consent.and")}{" "}
                    <a href={`/${Subpages.AGREEMENT}/${lng}`}>
                      {t("footer.legal.agreement")}
                    </a>
                  </span>
                </div>
                <FieldInfo field={fieldConsent} />
              </div>
            );
          }}
        </formVolunteer.Field>
        <formVolunteer.Subscribe selector={(state) => state}>
          {(state) => {
            const errorMessages = Array.from(
              new Set(
                Object.keys(state.fieldMeta)
                  .reduce((errorList: string[], key) => {
                    const fieldErrors =
                      state.fieldMeta[
                        key as keyof typeof state.fieldMeta
                      ].errors.join(", ");
                    errorList.push(fieldErrors);
                    return errorList;
                  }, [])
                  .filter(Boolean),
              ),
            )
              .concat(state.errors as string[])
              .join(", ");
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
                {errorMessages ? (
                  <em>
                    {t("form.error.labelErrors")}: {errorMessages}
                  </em>
                ) : null}
              </div>
            );
          }}
        </formVolunteer.Subscribe>
      </form>
    </div>
  );
}
