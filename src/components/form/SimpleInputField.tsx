import {
  DeepKeys,
  DeepValue,
  FieldComponent,
  FieldValidateFn,
} from "@tanstack/react-form";

import FieldInfo from "./FieldInfo";

interface Props<T> {
  FieldTag: FieldComponent<T, undefined>;
  name: DeepKeys<T>;
  label: string;
  onChangeValidator?: FieldValidateFn<T, DeepKeys<T>>;
  onBlurValidator?: FieldValidateFn<T, DeepKeys<T>>;
}

export default function SimpleInputField<T>({
  FieldTag,
  name,
  label,
  onChangeValidator,
  onBlurValidator,
}: Props<T>) {
  return (
    <FieldTag
      name={name}
      validators={{
        ...(onChangeValidator
          ? {
              onChange: onChangeValidator,
            }
          : {}),
        ...(onBlurValidator
          ? {
              onBlur: onBlurValidator,
            }
          : {}),
      }}
    >
      {(field) => {
        return (
          <label htmlFor={`${field.name}`} className="form-form-field">
            <span>{label}</span>
            <input
              id={`${field.name}`}
              name={`${field.name}`}
              type="text"
              value={
                field.state.value as
                  | string
                  | number
                  | readonly string[]
                  | undefined
              }
              onBlur={field.handleBlur}
              onChange={(e) =>
                field.handleChange(e.target.value as DeepValue<T, DeepKeys<T>>)
              }
            />
            <FieldInfo className="simple-input-form-error" field={field} />
          </label>
        );
      }}
    </FieldTag>
  );
}
