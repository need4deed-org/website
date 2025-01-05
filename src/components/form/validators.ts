import { ValidationError } from "@tanstack/react-form";

export function validateRACEmail(email: string, errorMsg = "Bad email.") {
  return new Promise<ValidationError>((resolve) => {
    setTimeout(() => resolve(undefined), 500);
    // eslint-disable-next-line no-console
    console.log("RAC email:", email, !email && errorMsg);
  });
}

export const DUMMY = null;
