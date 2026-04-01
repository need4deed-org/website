import { Lang } from "need4deed-sdk";
import { useTranslation } from "react-i18next";
import { getExternalUrl } from "../../utils";
import { FormType } from "./types";

interface Props {
  form: FormType;
}

export default function Form({ form }: Props) {
  const { i18n } = useTranslation();

  const to = getExternalUrl(i18n.language as Lang, form);
  window.location.replace(to);
  return null;
}
