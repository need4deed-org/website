import {
  DeepKeys,
  DeepValue,
  FieldComponent,
  FieldValidateAsyncFn,
  FieldValidateFn,
} from "@tanstack/react-form";

import { InputType } from "../../config/types";
import FieldInfo from "./FieldInfo";

interface Props<T> {
  FieldTag: FieldComponent<T, undefined>;
  name: DeepKeys<T>;
  label: string;
  infoMsg?: string;
  inputType?: InputType;
  onChangeValidator?: FieldValidateFn<T, DeepKeys<T>>;
  onBlurValidator?: FieldValidateFn<T, DeepKeys<T>>;
  onChangeAsyncValidator?: FieldValidateAsyncFn<T, DeepKeys<T>>;
  onAsyncDebounceMs?: number;
}

export default function SimpleInputField<T>({
  FieldTag,
  name,
  label,
  infoMsg,
  inputType = "text",
  onChangeValidator,
  onBlurValidator,
  onChangeAsyncValidator,
  onAsyncDebounceMs = 500,
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
        ...(onChangeAsyncValidator
          ? {
              onChangeAsync: onChangeAsyncValidator,
              onChangeAsyncDebounceMs: onAsyncDebounceMs,
            }
          : {}),
      }}
    >
      {(field) => {
        return (
          <>
            {infoMsg && <i className="simple-input-form-info">{infoMsg}</i>}
            <label htmlFor={`${field.name}`} className="form-form-field">
              <span>{label}</span>
              <input
                id={`${field.name}`}
                name={`${field.name}`}
                type={inputType}
                onBlur={field.handleBlur}
                onChange={(e) =>
                  field.handleChange(
                    e.target.value as DeepValue<T, DeepKeys<T>>,
                  )
                }
                value={field.state.value as string | number | undefined}
              />
              <FieldInfo className="simple-input-form-error" field={field} />
            </label>
          </>
        );
      }}
    </FieldTag>
  );
}
