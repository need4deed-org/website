import { useTranslation } from "react-i18next";

export default function EmptyList() {
  const { t } = useTranslation();
  return (
    <div className="n4d-container">
      <h1>{t("emptyList.header")}</h1>
      <p>{t("emptyList.para")}</p>
    </div>
  );
}
