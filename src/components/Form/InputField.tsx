import {
  DeepKeys,
  DeepValue,
  Field,
  FieldValidators,
  FormApi,
} from "@tanstack/react-form";

interface Props<T> {
  form: FormApi<T>;
  label: string;
  name: DeepKeys<T>;
  validators?: FieldValidators<T, DeepKeys<T>>;
  inputType?: string;
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
  classLabel,
  classInput,
  classError,
  inputType = "text",
  showErrors = true,
}: Props<T>) {
  return (
    <Field form={form} name={name} validators={validators}>
      {(field) => (
        <>
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
              {field.state.meta.isDirty && (
                <em>{field.state.meta.errors.join(", ")}</em>
              )}
            </span>
          )}
        </>
      )}
    </Field>
  );
}
