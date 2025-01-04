import { ValidationError } from "@tanstack/react-form";

export function validateRACEmail(email: string, errorMsg = "Bad email.") {
  const AUTHORIZED_DOMAINS: string[] = [];
  return new Promise<ValidationError>((resolve) => {
    const [, domain] = email.split("@");
    setTimeout(
      () => resolve(AUTHORIZED_DOMAINS.includes(domain) ? errorMsg : undefined),
      500,
    );
  });
}

export const DUMMY = null;
