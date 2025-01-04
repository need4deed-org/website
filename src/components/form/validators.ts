import { ValidationError } from "@tanstack/react-form";

export function validateRACEmail(email: string, errorMsg = "Bad email.") {
  return new Promise<ValidationError>((resolve) => {
    setTimeout(
      () =>
        resolve(
          ["cjd.de", "stk118.de"].reduce(
            (flag, pattern) => flag || email.includes(pattern),
            false,
          )
            ? undefined
            : errorMsg,
        ),
      1000,
    );
  });
}

export const DUMMY = null;
