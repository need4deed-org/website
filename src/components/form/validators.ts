import { ValidationError } from "@tanstack/react-form";

export function validateRACEmail(email: string, errorMsg = "Bad email.") {
  const AUTHORIZED_DOMAINS = [
    "lfg-b.de",
    "berliner-stadtmission.de",
    "awo-mitte.de",
    "prisod-wohnen.de",
    "albatrosggmbh.de",
    "gu-oberhafen.de",
    "heroeurope.com",
    "tamaja-gu.de",
    "volkssolidaritaet.de",
    "unionhilfswerk.de",
    "cjd.de",
    "centro-hotels.de",
    "stephanus.org",
    "city54.de",
    "milaa-berlin.de",
    "stk118.de",
    "drk-mueggelspree.de",
    "laf.berlin.de",
    "ejf.de",
    "diakonie-stadtmitte.de",
    "tamaja.de",
    "pgssoziales.de",
    "caritas-berlin.de",
    "need4deed.org",
  ];
  return new Promise<ValidationError>((resolve) => {
    const [, domain] = email.split("@");
    setTimeout(
      () => resolve(AUTHORIZED_DOMAINS.includes(domain) ? undefined : errorMsg),
      500,
    );
  });
}

export const DUMMY = null;
