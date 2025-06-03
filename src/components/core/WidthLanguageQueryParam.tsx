import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

interface Props extends React.PropsWithChildren {}

export default function WidthLanguageQueryParam({
  children,
}: Props): React.ReactElement {
  const { i18n } = useTranslation();
  const [queryParams] = useSearchParams();
  const language = queryParams.get("language");

  useEffect(() => {
    i18n.changeLanguage(language || "en");
  }, [i18n, language]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
