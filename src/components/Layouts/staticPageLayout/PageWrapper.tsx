import { Lang } from "need4deed-sdk";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useSearchParams } from "react-router-dom";
import { setStoredLang } from "../../../utils";

interface Props extends React.PropsWithChildren {}

export default function PageWrapper({ children }: Props): React.ReactElement {
  const { i18n } = useTranslation();
  const [queryParams] = useSearchParams();
  const language = queryParams.get("language");
  const location = useLocation();

  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);
      setStoredLang(language as Lang);
    }
  }, [i18n, language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
