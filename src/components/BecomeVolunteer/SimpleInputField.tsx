import { FieldComponent, FieldValidateFn } from "@tanstack/react-form";
import { VolunteerData, VolunteerDataKeys } from "./dataStructure";
import FieldInfo from "./FieldInfo";

interface Props {
  FieldTag: FieldComponent<VolunteerData, undefined>;
  name: string;
  label: string;
  onChangeValidator?: FieldValidateFn<VolunteerData, VolunteerDataKeys>;
  onBlurValidator?: FieldValidateFn<VolunteerData, VolunteerDataKeys>;
}

export default function SimpleInputField({
  FieldTag,
  name,
  label,
  onChangeValidator,
  onBlurValidator,
}: Props) {
  return (
    <FieldTag
      name={name as VolunteerDataKeys}
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
      children={field => {
        return (
          <label className="volunteer-form-field">
            <span>{label}</span>
            <input
              id={field.name}
              name={field.name}
              type="text"
              value={
                field.state.value as
                  | string
                  | number
                  | readonly string[]
                  | undefined
              }
              onBlur={field.handleBlur}
              onChange={e => field.handleChange(e.target.value)}
            />
            <FieldInfo className="simple-input-volunteer-error" field={field} />
          </label>
        );
      }}
    />
  );
}
