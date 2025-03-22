import { urlApiAuthEmailDomain } from "../../config/constants";

export async function validateRACEmail(email: string, errorMsg = "Bad email.") {
  const [, domain] = email.split("@");
  const url = `${urlApiAuthEmailDomain}?domain=${domain}`;

  const isAuth = await fetch(url).then((response) => response.json());

  return isAuth ? undefined : errorMsg;
}

export default {};
