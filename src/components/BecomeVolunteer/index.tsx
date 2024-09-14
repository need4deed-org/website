import { FieldApi, useForm } from "@tanstack/react-form";
import { validate as validateEmail } from "email-validator";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import useList from "../../hooks/api/useList";
import { Subpages } from "../../types";
import UploadIcon from "../svg/Upload";
import {
  Activity,
  Availability,
  District,
  FieldApiCustom,
  Language,
  Lead,
  Selected,
  Skill,
  TimeSlot,
  VolunteerData,
  VolunteerDataKeysArrays,
  Weekday,
} from "./dataStructure";
import FieldInfo from "./FieldInfo";
import HeaderWithHelp from "./HeaderWithHelp";
import "./index.css";
import MultipleInputsWithMore from "./MultipleInputsWithMore";
import SimpleInputField from "./SimpleInputField";
import { formData, isValidPLZ, parseFormStateDTO } from "./utils";

const timeSlots: Selected<TimeSlot>[] = Object.values(TimeSlot).map(
  timeSlot => ({
    title: timeSlot,
    selected: false,
  }),
);
const availability: Availability = Object.values(Weekday).map(weekday => ({
  weekday,
  timeSlots,
}));
availability.push({
  weekday: "onetime",
  timeSlots: [
    { title: "Weekdays", selected: false },
    { title: "Weekends", selected: false },
  ],
});

function getTickMark(isTicked: boolean) {
  return isTicked ? "☑" : "◻️";
}

export default function BecomeVolunteer() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { lng } = useParams();
  const [opportunityParams] = useSearchParams();

  const opportunity = {
    id: opportunityParams.get("id"),
    title: opportunityParams.get("title"),
  };

  const refLocations = useRef<HTMLDivElement>(null);
  const refLanguagesFluent = useRef<HTMLDivElement>(null);
  const refLanguagesIntermediate = useRef<HTMLDivElement>(null);
  const refActivities = useRef<HTMLDivElement>(null);
  const refSkills = useRef<HTMLDivElement>(null);
  const refLeadFrom = useRef<HTMLDivElement>(null);

  const locations = useList<District>(VolunteerDataKeysArrays.LOCATIONS).map(
    title => ({
      title,
      selected: false,
    }),
  );
  const activities = useList<Activity>(VolunteerDataKeysArrays.ACTIVITIES).map(
    title => ({
      title,
      selected: false,
    }),
  );
  const skills = useList<Skill>(VolunteerDataKeysArrays.SKILLS).map(title => ({
    title,
    selected: false,
  }));
  const languages = useList<Language>(
    VolunteerDataKeysArrays.LANGUAGESFLUENT,
  ).map(title => ({
    title,
    selected: false,
  }));
  const leadFrom = useList<Lead>(VolunteerDataKeysArrays.LEADFROM).map(
    title => ({
      title,
      selected: false,
    }),
  );

  const formVolunteer = useForm<VolunteerData>({
    defaultValues: {
      opportunityId: opportunity.id ?? "",
      name: "",
      email: "",
      phone: "",
      postcode: "",
      locations,
      availability,
      languagesFluent: languages,
      languagesIntermediate: languages,
      activities,
      skills,
      certOfGoodConduct: undefined,
      certMeaslesVaccination: undefined,
      leadFrom,
      comments: "",
      consent: undefined,
    },
    validators: {},
    onSubmit: ({ value }) => {
      console.log("DEBUG:formVolunteer:onSubmit:check:", formVolunteer.state);
      formData.data = parseFormStateDTO(value);
      console.log(
        "DEBUG:BecomeVolunteer:onSubmit:formData.data:",
        formData.data,
      );
    },
  });

  useEffect(() => {
    if (formVolunteer.state.isSubmitted) navigate(`/${Subpages.THANK_YOU}/en`);
  }, [formVolunteer.state.isSubmitted, navigate]);

  return (
    <div className="n4d-container volunteer-container">
      <div className="volunteer-container-header">
        <h1>
          {t("becomeVolunteer.header").toLocaleUpperCase()}
          <img src="/images/N4D-logo-purple-on-transparent-h.png" />
        </h1>
        {opportunity.title ? (
          <h6>
            {t("becomeVolunteer.thanks")}: <i>{opportunity.title}</i>
          </h6>
        ) : null}
      </div>
      <form
        className="volunteer-form-container"
        onSubmit={e => {
          e.preventDefault();
          e.stopPropagation();
          formVolunteer.handleSubmit();
        }}
      >
        <SimpleInputField
          name="name"
          FieldTag={formVolunteer.Field}
          label={t("becomeVolunteer.fields.name.label")}
          onChangeValidator={({ value }) =>
            !value ? t("becomeVolunteer.fields.required") : undefined
          }
        />
        <SimpleInputField
          name="email"
          FieldTag={formVolunteer.Field}
          label={t("becomeVolunteer.fields.email.label")}
          onChangeValidator={({ value }) =>
            !value
              ? t("becomeVolunteer.fields.required")
              : !validateEmail(value as string)
                ? t("becomeVolunteer.fields.email.error")
                : undefined
          }
        />
        <SimpleInputField
          name="phone"
          FieldTag={formVolunteer.Field}
          label={t("becomeVolunteer.fields.phone.label")}
          onChangeValidator={({ value }) =>
            !value ? t("becomeVolunteer.fields.required") : undefined
          }
        />
        <SimpleInputField
          name="postcode"
          FieldTag={formVolunteer.Field}
          label={t("becomeVolunteer.fields.postcode.label")}
          onChangeValidator={({ value }) =>
            !value
              ? t("becomeVolunteer.fields.required")
              : !(
                    (value as string).match(
                      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
                    ) && isValidPLZ(value as string)
                  )
                ? t("becomeVolunteer.fields.postcode.error")
                : undefined
          }
        />
        <formVolunteer.Field
          name="locations"
          validators={{
            onBlur: ({ value }) => {
              const isSelected = !!value.filter(({ selected }) => selected)
                .length;
              return isSelected
                ? undefined
                : t("becomeVolunteer.fields.locations.error");
            },
          }}
        >
          {fieldLocations => {
            return (
              <fieldset>
                <HeaderWithHelp
                  textHelp={t("becomeVolunteer.fields.locations.helpText")}
                  titleHelp={t("becomeVolunteer.fields.locations.helpTitle")}
                  classNamePopup="voluteer-help"
                >
                  {t("becomeVolunteer.fields.locations.header")}
                </HeaderWithHelp>
                <h6>{t("becomeVolunteer.fields.locations.para")}</h6>
                <div
                  ref={refLocations}
                  onClick={() => setTimeout(fieldLocations.handleBlur, 0)}
                  className="volunteer-chip-list volunteer-pick"
                >
                  <MultipleInputsWithMore
                    refParent={refLocations}
                    FieldTag={formVolunteer.Field}
                    field={
                      fieldLocations as FieldApi<
                        VolunteerData,
                        VolunteerDataKeysArrays
                      >
                    }
                    name={VolunteerDataKeysArrays.LOCATIONS}
                  />
                  <FieldInfo field={fieldLocations as FieldApiCustom} />
                </div>
              </fieldset>
            );
          }}
        </formVolunteer.Field>
        <formVolunteer.Field
          name="availability"
          validators={{
            onBlur: ({ value }) => {
              const isSelected = !!value.filter(
                ({ timeSlots }) =>
                  !!timeSlots.filter(({ selected }) => selected).length,
              ).length;
              return isSelected
                ? undefined
                : t("becomeVolunteer.fields.availability.error");
            },
          }}
        >
          {fieldAvailability => {
            return (
              <fieldset>
                <HeaderWithHelp
                  textHelp={t("becomeVolunteer.fields.availability.helpText")}
                  titleHelp={t("becomeVolunteer.fields.availability.helpTitle")}
                  classNamePopup="voluteer-help"
                >
                  {t("becomeVolunteer.fields.availability.header")}
                </HeaderWithHelp>
                <h6>{t("becomeVolunteer.fields.availability.para")}</h6>
                <div
                  className="volunteer-table"
                  onClick={() => {
                    setTimeout(fieldAvailability.handleBlur, 0);
                  }}
                >
                  {fieldAvailability.state.value &&
                    fieldAvailability.state.value.map((availability, idx) => {
                      return (
                        <div
                          className="volunteer-table-row"
                          key={`availability${idx}`}
                        >
                          <label htmlFor="">
                            {t(
                              `weekdays.${availability.weekday}`,
                            ).toLocaleUpperCase()}
                          </label>

                          <formVolunteer.Field
                            name={`availability[${idx}].timeSlots`}
                          >
                            {weekday => {
                              return (
                                weekday.state.value &&
                                weekday.state.value.map(
                                  ({ title }, idxInner) => (
                                    <formVolunteer.Field
                                      key={`${availability}${idxInner}`}
                                      name={`availability[${idx}].timeSlots[${idxInner}].selected`}
                                      children={field => (
                                        <span className="volunteer-pick">
                                          <input
                                            tabIndex={0}
                                            id={`${availability.weekday}${weekday.state.value[idxInner].title}`}
                                            type="checkbox"
                                            onChange={e =>
                                              field.handleChange(
                                                e.target.checked,
                                              )
                                            }
                                          />
                                          <label
                                            htmlFor={`${availability.weekday}${weekday.state.value[idxInner].title}`}
                                          >
                                            <span key={`${title}`}>
                                              {title}
                                            </span>
                                          </label>
                                        </span>
                                      )}
                                    />
                                  ),
                                )
                              );
                            }}
                          </formVolunteer.Field>
                        </div>
                      );
                    })}
                  <FieldInfo field={fieldAvailability as FieldApiCustom} />
                </div>
              </fieldset>
            );
          }}
        </formVolunteer.Field>
        <fieldset>
          <HeaderWithHelp
            textHelp={t("becomeVolunteer.fields.languages.helpText")}
            titleHelp={t("becomeVolunteer.fields.languages.helpTitle")}
            classNamePopup="voluteer-help"
          >
            {t("becomeVolunteer.fields.languages.header")}
          </HeaderWithHelp>
          <formVolunteer.Field
            name="languagesFluent"
            validators={{
              onBlur: ({ value }) => {
                const isSelected = !!value.filter(({ selected }) => selected)
                  .length;
                return isSelected
                  ? undefined
                  : t("becomeVolunteer.fields.languages.languagesFluent.error");
              },
            }}
          >
            {fieldLanguagesFluent => {
              return (
                <>
                  <h6>
                    {t(
                      "becomeVolunteer.fields.languages.languagesFluent.header",
                    )}
                  </h6>
                  <div
                    ref={refLanguagesFluent}
                    onClick={() => {
                      setTimeout(fieldLanguagesFluent.handleBlur, 0);
                    }}
                    className="volunteer-chip-list volunteer-pick"
                  >
                    <MultipleInputsWithMore
                      refParent={refLanguagesFluent}
                      FieldTag={formVolunteer.Field}
                      field={
                        fieldLanguagesFluent as FieldApi<
                          VolunteerData,
                          VolunteerDataKeysArrays
                        >
                      }
                      name={VolunteerDataKeysArrays.LANGUAGESFLUENT}
                    />
                    <FieldInfo field={fieldLanguagesFluent as FieldApiCustom} />
                  </div>
                </>
              );
            }}
          </formVolunteer.Field>
          <formVolunteer.Field name="languagesIntermediate">
            {fieldLanguagesBasic => {
              return (
                <>
                  <h6>
                    {t(
                      "becomeVolunteer.fields.languages.languagesIntermediate.header",
                    )}
                  </h6>
                  <div
                    ref={refLanguagesIntermediate}
                    className="volunteer-chip-list volunteer-pick"
                  >
                    <MultipleInputsWithMore
                      refParent={refLanguagesIntermediate}
                      FieldTag={formVolunteer.Field}
                      field={
                        fieldLanguagesBasic as FieldApi<
                          VolunteerData,
                          VolunteerDataKeysArrays
                        >
                      }
                      name={VolunteerDataKeysArrays.LANGUAGESINTERMEDIATE}
                    />
                    <FieldInfo field={fieldLanguagesBasic as FieldApiCustom} />
                  </div>
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
                : t("becomeVolunteer.fields.activities.error");
            },
          }}
        >
          {fieldActivities => {
            return (
              <fieldset>
                <HeaderWithHelp
                  textHelp={t("becomeVolunteer.fields.activities.helpText")}
                  titleHelp={t("becomeVolunteer.fields.activities.helpTitle")}
                  classNamePopup="voluteer-help"
                >
                  {t("becomeVolunteer.fields.activities.header")}
                </HeaderWithHelp>
                <div
                  ref={refActivities}
                  onClick={() => {
                    setTimeout(fieldActivities.handleBlur, 0);
                  }}
                  className="volunteer-chip-list volunteer-pick"
                >
                  <MultipleInputsWithMore
                    refParent={refActivities}
                    FieldTag={formVolunteer.Field}
                    field={
                      fieldActivities as FieldApi<
                        VolunteerData,
                        VolunteerDataKeysArrays
                      >
                    }
                    name={VolunteerDataKeysArrays.ACTIVITIES}
                  />
                  <FieldInfo field={fieldActivities as FieldApiCustom} />
                </div>
              </fieldset>
            );
          }}
        </formVolunteer.Field>
        <formVolunteer.Field name="skills">
          {fieldSkills => {
            return (
              <fieldset>
                <HeaderWithHelp
                  textHelp={t("becomeVolunteer.fields.skills.helpText")}
                  titleHelp={t("becomeVolunteer.fields.skills.helpTitle")}
                  classNamePopup="voluteer-help"
                >
                  {t("becomeVolunteer.fields.skills.header")}
                </HeaderWithHelp>
                <div
                  ref={refSkills}
                  className="volunteer-chip-list volunteer-pick"
                >
                  <MultipleInputsWithMore
                    refParent={refSkills}
                    FieldTag={formVolunteer.Field}
                    field={
                      fieldSkills as FieldApi<
                        VolunteerData,
                        VolunteerDataKeysArrays
                      >
                    }
                    name={VolunteerDataKeysArrays.SKILLS}
                  />
                  <FieldInfo field={fieldSkills as FieldApiCustom} />
                </div>
              </fieldset>
            );
          }}
        </formVolunteer.Field>
        <formVolunteer.Field
          name="certOfGoodConduct"
          validators={{
            onBlur: ({ value }) =>
              value === undefined
                ? t("becomeVolunteer.fields.required")
                : undefined,
          }}
        >
          {field => (
            <fieldset>
              <div
                className="volunteer-pick"
                onFocus={() => {
                  setTimeout(field.handleBlur, 0);
                }}
              >
                <HeaderWithHelp
                  textHelp={t(
                    "becomeVolunteer.fields.certOfGoodConduct.helpText",
                  )}
                  titleHelp={t(
                    "becomeVolunteer.fields.certOfGoodConduct.helpTitle",
                  )}
                  classNamePopup="voluteer-help"
                >
                  {t("becomeVolunteer.fields.certOfGoodConduct.header")}
                </HeaderWithHelp>
                <input
                  id="certOfGoodConduct.yes"
                  name="certOfGoodConduct"
                  type="radio"
                  onChange={() => {
                    field.handleChange(true);
                    field.handleBlur();
                  }}
                />
                <label htmlFor="certOfGoodConduct.yes">
                  {t("becomeVolunteer.fields.certOfGoodConduct.yes")}
                </label>
                <input
                  id="certOfGoodConduct.no"
                  name="certOfGoodConduct"
                  type="radio"
                  onChange={() => {
                    field.handleChange(false);
                    field.handleBlur();
                  }}
                />
                <label htmlFor="certOfGoodConduct.no">
                  {t("becomeVolunteer.fields.certOfGoodConduct.no")}
                </label>
                <FieldInfo field={field as FieldApiCustom} />
              </div>
              <h6>
                <a
                  href="https://www.berlin.de/laf/engagement/fuehrungszeugnis/"
                  target="_blanc"
                >
                  {t("becomeVolunteer.fields.certOfGoodConduct.why")}
                </a>
              </h6>
            </fieldset>
          )}
        </formVolunteer.Field>
        <formVolunteer.Field
          name="certMeaslesVaccination"
          validators={{
            onBlur: ({ value }) =>
              value === undefined
                ? t("becomeVolunteer.fields.required")
                : undefined,
          }}
        >
          {field => (
            <fieldset
              className="volunteer-pick"
              onFocus={() => {
                setTimeout(field.handleBlur, 0);
              }}
            >
              <HeaderWithHelp
                textHelp={t(
                  "becomeVolunteer.fields.certMeaslesVaccination.helpText",
                )}
                titleHelp={t(
                  "becomeVolunteer.fields.certMeaslesVaccination.helpTitle",
                )}
                classNamePopup="voluteer-help"
              >
                {t("becomeVolunteer.fields.certMeaslesVaccination.header")}
              </HeaderWithHelp>
              <input
                id="certMeaslesVaccination.yes"
                name="certMeaslesVaccination"
                type="radio"
                onChange={() => field.handleChange(true)}
              />
              <label htmlFor="certMeaslesVaccination.yes">
                {t("becomeVolunteer.fields.certMeaslesVaccination.yes")}
              </label>
              <input
                id="certMeaslesVaccination.no"
                name="certMeaslesVaccination"
                type="radio"
                onChange={() => field.handleChange(false)}
              />
              <label htmlFor="certMeaslesVaccination.no">
                {t("becomeVolunteer.fields.certMeaslesVaccination.no")}
              </label>
              <FieldInfo field={field as FieldApiCustom} />
            </fieldset>
          )}
        </formVolunteer.Field>
        <formVolunteer.Field name="leadFrom">
          {fieldLeadFrom => {
            return (
              <fieldset>
                <HeaderWithHelp
                  textHelp={t("becomeVolunteer.fields.leadFrom.helpText")}
                  titleHelp={t("becomeVolunteer.fields.leadFrom.helpTitle")}
                  classNamePopup="voluteer-help"
                >
                  {t("becomeVolunteer.fields.leadFrom.header")}
                </HeaderWithHelp>
                <div
                  ref={refLeadFrom}
                  className="volunteer-chip-list volunteer-pick"
                >
                  <MultipleInputsWithMore
                    refParent={refLeadFrom}
                    FieldTag={formVolunteer.Field}
                    field={
                      fieldLeadFrom as FieldApi<
                        VolunteerData,
                        VolunteerDataKeysArrays
                      >
                    }
                    name={VolunteerDataKeysArrays.LEADFROM}
                  />
                  <FieldInfo field={fieldLeadFrom as FieldApiCustom} />
                </div>
              </fieldset>
            );
          }}
        </formVolunteer.Field>
        <SimpleInputField
          name="comments"
          FieldTag={formVolunteer.Field}
          label={t("becomeVolunteer.fields.comments.label")}
        />
        <formVolunteer.Field
          name="consent"
          validators={{
            onChange: ({ value }) =>
              value ? undefined : t("becomeVolunteer.fields.required"),
          }}
        >
          {fieldConsent => {
            return (
              <div>
                <div className="volunteer-chip-list volunteer-pick">
                  <input
                    id="consent"
                    type="checkbox"
                    name="consent"
                    onChange={e => {
                      fieldConsent.handleChange(e.target.checked);
                      fieldConsent.validate("change");
                    }}
                  />
                  <label htmlFor="consent">
                    {getTickMark(!!fieldConsent.state.value)}
                  </label>
                  <span>
                    {t("becomeVolunteer.fields.consent.header")}{" "}
                    <a href={`/${Subpages.DATA_PROTECTION}/${lng}`}>
                      {t("footer.legal.dataPrivacy")}
                    </a>{" "}
                    {t("becomeVolunteer.fields.consent.and")}{" "}
                    <a href={`/${Subpages.AGREEMENT}/${lng}`}>
                      {t("footer.legal.agreement")}
                    </a>
                  </span>
                </div>
                <FieldInfo field={fieldConsent as FieldApiCustom} />
              </div>
            );
          }}
        </formVolunteer.Field>
        <formVolunteer.Subscribe
          selector={state => state}
          children={state => {
            const errors = Array.from(
              new Set(
                Object.keys(formVolunteer.state.fieldMeta)
                  .reduce((errorList: string[], key) => {
                    const errors =
                      formVolunteer.state.fieldMeta[
                        key as keyof typeof formVolunteer.state.fieldMeta
                      ].errors.join(", ");
                    errorList.push(errors);
                    return errorList;
                  }, [])
                  .filter(Boolean),
              ),
            ).join(", ");
            return (
              <div className="volunteer-submit">
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
                      {t("becomeVolunteer.submit").toUpperCase()}
                    </>
                  )}
                </button>
                {errors ? (
                  <em>
                    {t("becomeVolunteer.errors")}: {errors}
                  </em>
                ) : null}
              </div>
            );
          }}
        />
      </form>
    </div>
  );
}
