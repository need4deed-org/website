import { ValidationError } from "@tanstack/react-form";

export function checkDomain(domain: string) {
  const AUTHORIZED_DOMAINS = [
    "bGZnLWIuZGU=",
    "YmVybGluZXItc3RhZHRtaXNzaW9uLmRl",
    "YXdvLW1pdHRlLmRl",
    "cHJpc29kLXdvaG5lbi5kZQ==",
    "YWxiYXRyb3NnZ21iaC5kZQ==",
    "Z3Utb2JlcmhhZmVuLmRl",
    "aGVyb2V1cm9wZS5jb20=",
    "dGFtYWphLWd1LmRl",
    "dm9sa3Nzb2xpZGFyaXRhZXQuZGU=",
    "dW5pb25oaWxmc3dlcmsuZGU=",
    "Y2pkLmRl",
    "Y2VudHJvLWhvdGVscy5kZQ==",
    "c3RlcGhhbnVzLm9yZw==",
    "Y2l0eTU0LmRl",
    "bWlsYWEtYmVybGluLmRl",
    "c3RrMTE4LmRl",
    "ZHJrLW11ZWdnZWxzcHJlZS5kZQ==",
    "bGFmLmJlcmxpbi5kZQ==",
    "ZWpmLmRl",
    "ZGlha29uaWUtc3RhZHRtaXR0ZS5kZQ==",
    "dGFtYWphLmRl",
    "cGdzc296aWFsZXMuZGU=",
    "Y2FyaXRhcy1iZXJsaW4uZGU=",
    "bmVlZDRkZWVkLm9yZw==",
  ];

  return AUTHORIZED_DOMAINS.includes(btoa(domain));
}

export function validateRACEmail(email: string, errorMsg = "Bad email.") {
  const [, domain] = email.split("@");
  return new Promise<ValidationError>((resolve) => {
    setTimeout(() => resolve(checkDomain(domain) ? undefined : errorMsg), 500);
  });
}
