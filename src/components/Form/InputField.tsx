import {
  DeepKeys,
  DeepValue,
  Field,
  FieldValidators,
  FormApi,
} from "@tanstack/react-form";

import { IncludeClassName } from "../../config/types";

interface Props<T> extends IncludeClassName {
  form: FormApi<T>;
  label: string;
  name: DeepKeys<T>;
  validators?: FieldValidators<T, DeepKeys<T>>;
  inputType?: string;
  beforeLabel?: string;
  classBefore?: string;
  afterErrors?: string;
  classAfter?: string;
  classLabel?: string;
  classError?: string;
  classInput?: string;
  showErrors?: boolean;
}

export default function InputField<T>({
  form,
  label,
  name,
  validators,
  className,
  classLabel,
  classInput,
  classError,
  beforeLabel,
  classBefore,
  afterErrors,
  classAfter,
  inputType = "text",
  showErrors = true,
}: Props<T>) {
  return (
    <Field form={form} name={name} validators={validators}>
      {(field) => (
        <div className={className}>
          <div className={classBefore}>{beforeLabel && `${beforeLabel}`}</div>
          <label className={classLabel} htmlFor={`${name}`}>
            <span>{label}</span>
            <input
              className={classInput}
              name={`${field.name}`}
              id={`${name}`}
              type={inputType}
              onBlur={field.handleBlur}
              onChange={(e) =>
                field.handleChange(e.target.value as DeepValue<T, DeepKeys<T>>)
              }
            />
          </label>
          {showErrors && (
            <span className={classError}>
              {field.state.meta.errors.length > 0 && (
                <em>{field.state.meta.errors.join(", ")}</em>
              )}
            </span>
          )}
          <div className={classAfter}>{afterErrors && `${afterErrors}`}</div>
        </div>
      )}
    </Field>
  );
}
