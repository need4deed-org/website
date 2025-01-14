import { ValidationError } from "@tanstack/react-form";
import { TFunction } from "i18next";

export type ValidatorsObject = Record<string, (arg: object) => ValidationError>;
export function translateError(
  validators: ValidatorsObject,
  t: TFunction<"translation", undefined>,
) {
  return validators
    ? Object.entries(validators).reduce(
        (
          result: ValidatorsObject,
          validator: [string, (arg: object) => ValidationError],
        ) => {
          const [name, fn] = validator;
          // eslint-disable-next-line no-param-reassign
          result[name] = (arg) => {
            const error = fn(arg);
            return error ? t(error) : error;
          };
          return result;
        },
        {},
      )
    : {};
}

export default {};
